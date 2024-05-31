install:  ## Install the package from source
	poetry install

install-extras: install  ## Install the package from source with extra dependencies
	poetry run pip install numpy

install-lint:  ## Only install the linter dependencies
	poetry install --only lint

install-dev: ## Only install the dev dependencies
	poetry install --only dev

install-pre-commit: install  ## Install pre-commit hooks
	poetry run pre-commit install

install-generator: install ## Install dependencies for SDK code generator
	npm install --save remark-math@6 rehype-katex@7

generate: install-generator  ## Generate the SDK from our public openapi spec
	node_modules/.bin/openapi-generator-cli generate -i spec/public-api.yaml \
		-g python \
		-o ./generated \
		--additional-properties=packageName=groundlight_openapi_client
	poetry run datamodel-codegen  --input spec/public-api.yaml --output generated/model.py --strict-nullable
	poetry run black .

PYTEST=poetry run pytest -v

# You can pass extra arguments to pytest by setting the TEST_ARGS environment variable.
# For example:
# 	`make test TEST_ARGS="-k some_filter"`
TEST_ARGS=

CLOUD_FILTERS = -m "not run_only_for_edge_endpoint"
EDGE_FILTERS = -m "not skip_for_edge_endpoint"

test: install  ## Run tests against the prod API (needs GROUNDLIGHT_API_TOKEN)
	${PYTEST} ${TEST_ARGS} ${CLOUD_FILTERS} test

test-4edge: install  ## Run tests against the prod API via the edge-endpoint (needs GROUNDLIGHT_API_TOKEN)
	${PYTEST} ${TEST_ARGS} ${EDGE_FILTERS} test

test-local: install  ## Run tests against a localhost API (needs GROUNDLIGHT_API_TOKEN and a local API server)
	GROUNDLIGHT_ENDPOINT="http://localhost:8000/" ${PYTEST} ${TEST_ARGS} ${CLOUD_FILTERS} test

test-integ: install  ## Run tests against the integ API server (needs GROUNDLIGHT_API_TOKEN)
	GROUNDLIGHT_ENDPOINT="https://api.integ.groundlight.ai/" ${PYTEST} ${TEST_ARGS} ${CLOUD_FILTERS} test

test-docs: install  ## Run the example code and tests in our docs against the prod API (needs GROUNDLIGHT_API_TOKEN)
	${PYTEST} --markdown-docs ${TEST_ARGS} docs README.md

test-docs-integ: install  ## Run the example code and tests in our docs against the integ API (needs GROUNDLIGHT_API_TOKEN)
	GROUNDLIGHT_ENDPOINT="https://api.integ.groundlight.ai/" ${PYTEST} --markdown-docs ${TEST_ARGS} docs README.md

# Adjust which paths we lint
LINT_PATHS="src test bin samples"

lint: install-lint  ## Run linter to check formatting and style
	./code-quality/lint ${LINT_PATHS}

format: install-lint  ## Run standard python formatting
	./code-quality/format ${LINT_PATHS}


# Targets for sphinx documentation

install-sphinx-deps: ## Only install the sphinx dependencies
	poetry install --no-root --only sphinx-deps

# The following is auto-generated by sphinx-quickstart:
# To test out doc changes locally, run
# poetry run make html && open build/html/index.html
SPHINXOPTS    ?=
SPHINXBUILD   ?= sphinx-build
SOURCEDIR     = sphinx_docs
BUILDDIR      = build

sphinx-help:
	@$(SPHINXBUILD) -M help "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(O)


# The .PHONY directive tells make that `apidocs` and `html` are labels for
# commands. `apidocs: html` allows us to generate docs by running
# `make apidocs` instead.
.PHONY: docs-comprehensive apidocs html

# Start an interactive server to test docs locally.
# Before running this, make sure that you have installed the node modules
# by running `node install` in the docs directory.
develop-docs-comprehensive: docs-comprehensive
	cd docs && npm start

## Builds docs comprehensively (integrating API reference docs built
## with sphinx into the docusaurus docs).
docs-comprehensive: apidocs
	rm -rf docs/static/api-reference-docs
	rm -rf docs/build/api-reference-docs
	mkdir docs/static/api-reference-docs
	mv build/html/* docs/static/api-reference-docs/

	cd docs && npm run build

apidocs:
	cd docs && npm install --save remark-math@6 rehype-katex@7
	poetry run make html

html:
	@$(SPHINXBUILD) -M $@ "$(SOURCEDIR)" "$(BUILDDIR)" $(SPHINXOPTS) $(0)
	@echo "Build finished. The HTML pages are in $(BUILDDIR)/html."
