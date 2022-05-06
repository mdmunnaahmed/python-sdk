# Groundlight Python SDK

This package holds an SDK for accessing the Groundlight public API. 

### Installation

```Bash
$ poetry install
```

### Basic Usage

To access the API, you need an API token. You can create one at [app.groundlight.ai](https://app.positronix.ai/reef/my-account/api-tokens). Then, add it as an environment variable called `GROUNDLIGHT_API_TOKEN`:

```Bash
$ export GROUNDLIGHT_API_TOKEN=tok_abc123
```

Now you can use the python SDK!

```Python
from groundlight import Groundlight

# Load the API client
gl = Groundlight()

# Call an API method (e.g., retrieve a list of detectors)
# The response will be an API response object
response = gl.list_detectors()

# You can extract the body data using .body - in this case, a paginated list of detectors.
detectors = response.body

# You can access the fields, too! Your IDE should show type hints / autocomplete
# with these objects.
# See more details on the API docs (https://app.positronix.ai/reef/admin/api-docs).
print(f"Found {detectors.count} detectors!")
```

### What API methods are available?

All the auto-generated methods are listed [here](generated/README.md#documentation-for-api-endpoints) - you can access these methods directly through the `Groundlight` API object. This SDK closely follows the methods in our [API Docs](https://app.positronix.ai/reef/admin/api-docs).

### Handling HTTP errors

If there is an HTTP error during an API call, it will raise an `ApiException`. You can access different metadata from that exception:

```Python
from groundlight import ApiException, Groundlight

gl = Groundlight()
try:
    detectors = gl.list_detectors()
except ApiException as e:
    print(e)
    print(e.args)
    print(e.body)
    print(e.headers)
    print(e.reason)
    print(e.status)
```

## Development

To re-generate the client code:

```Bash
$ make generate
```

## TODOs

- Tests
- Publish package (so we can do `pip install groundlight` or `poetry add groundlight` outside this repo)
  - Do it through github actions on tag, for example
- Improve wrappers around API functions (e.g., so you don't have to call `.body` on a response, or add auto-pagination managers, etc.)
- `with` context manager
- Better auto-generated code docs
- Better versioning strategy
- Better way of managing dependency on OpenAPI spec (right now, we just copy the file over manually)
- Update the web links (links to website, link to API endpoint, etc.)
- Add an image query long polling helper method (calls POST, then several GETs)
- ...
