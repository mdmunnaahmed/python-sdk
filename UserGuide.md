# Groundlight Python SDK

Groundlight makes it simple to understand images.  You can easily create computer vision detectors just by describing what you want to know using natural language.

How does it work?  Your images are first analyzed by machine learning (ML) models which are automatically trained on your data.  If those models have high enough confidence, that's your answer.  But if the models are unsure, then the images are progressively escalated to more resource-intensive analysis methods up to real-time human review.  So what you get is a computer vision system that starts working right away without even needing to first gather and label a dataset.  At first it will operate with high latency, because people need to review the image queries.  But over time, the ML systems will learn and improve so queries come back faster with higher confidence.

*Note: The SDK is currently in "beta" phase.  Interfaces are subject to change in future versions.*


## Simple Example

How to build a computer vision system in 5 lines of python code:

```Python
from groundlight import Groundlight
gl = Groundlight()

# Create a new detector: use natural language to describe what you want to understand
detector = gl.create_detector(name="door", query="Is the door open?")

# Send an image to the detector
image_query = gl.submit_image_query(detector=detector, image="path/to/filename.jpeg")

# Show the results
print(f"The answer is {image_query.result}")
```


## Getting Started

1. Install the `groundlight` sdk.

    ```Bash
    $ pip install groundlight
    ```

1. To access the API, you need an API token. You can create one on the
   [groundlight web app](https://app.groundlight.ai/reef/my-account/api-tokens).

The API token should be stored securely.  You can use it directly in your code to initialize the SDK like:

```python
gl = Groundlight(api_token="<YOUR_API_TOKEN>")
```

which is an easy way to get started, but is NOT a best practice.  Please do not commit your API Token to version control!  Instead we recommend setting the `GROUNDLIGHT_API_TOKEN` environment variable outside your code so that the SDK can find it automatically.

```bash
$ export GROUNDLIGHT_API_TOKEN=api_2asdfkjEXAMPLE
$ python glapp.py
```


## Using Groundlight on the edge

Starting your model evaluations at the edge reduces latency, cost, network bandwidth, and energy. Once you have downloaded and installed your Groundlight edge models, you can configure the Groundlight SDK to use your edge environment by configuring the 'endpoint' to point at your local environment as such:

```Python
from groundlight import Groundlight
gl = Groundlight(endpoint="http://localhost:6717")
```

(Edge model download is not yet generally available.)

## Advanced

### Retrieve an existing detector

```Python
detector = gl.get_detector(id="YOUR_DETECTOR_ID")
```

### List your detectors

```Python
# Defaults to 10 results per page
detectors = gl.list_detectors()

# Pagination: 3rd page of 25 results per page
detectors = gl.list_detectors(page=3, page_size=25)
```

### Retrieve an image query

In practice, you may want to check for a new result on your query. For example, after a cloud reviewer labels your query. For example, you can use the `image_query.id` after the above `submit_image_query()` call.

```Python
image_query = gl.get_image_query(id="YOUR_IMAGE_QUERY_ID")
```

### List your previous image queries

```Python
# Defaults to 10 results per page
image_queries = gl.list_image_queries()

# Pagination: 3rd page of 25 results per page
image_queries = gl.list_image_queries(page=3, page_size=25)
```

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
