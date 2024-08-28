import time
from datetime import datetime

import pytest
from groundlight import ExperimentalApi
from groundlight_openapi_client.exceptions import NotFoundException


def test_reset_retry(gl_experimental: ExperimentalApi):
    # Reset the detector, retrying in case the reset is still ongoing
    det = gl_experimental.create_detector(f"Test {datetime.utcnow()}", "test_query")
    iq = gl_experimental.submit_image_query(det, "test/assets/cat.jpeg")
    gl_experimental.reset_detector(det.id)
    success = False
    for _ in range(60):
        try:
            gl_experimental.get_image_query(iq.id)
        except NotFoundException:
            with pytest.raises(NotFoundException):
                gl_experimental.get_image_query(iq.id)
            success = True
            break
        time.sleep(10)
    if not success:
        raise Exception("Failed to reset detector")


def test_reset_training(gl_experimental: ExperimentalApi):
    # If we reset a detector, we should have low confidence after the reset
    low_confidence_threshold = 0.6
    det = gl_experimental.get_or_create_detector("Test Detector for Resets", "is this a cat?")
    iq = gl_experimental.submit_image_query(det, "test/assets/cat.jpeg")
    assert iq.result.confidence < low_confidence_threshold
