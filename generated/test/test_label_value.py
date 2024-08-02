"""
    Groundlight API

    Groundlight makes it simple to understand images. You can easily create computer vision detectors just by describing what you want to know using natural language.  # noqa: E501

    The version of the OpenAPI document: 0.15.3
    Contact: support@groundlight.ai
    Generated by: https://openapi-generator.tech
"""

import sys
import unittest

import groundlight_openapi_client
from groundlight_openapi_client.model.annotations_requested_enum import AnnotationsRequestedEnum
from groundlight_openapi_client.model.blank_enum import BlankEnum
from groundlight_openapi_client.model.null_enum import NullEnum
from groundlight_openapi_client.model.review_reason_enum import ReviewReasonEnum
from groundlight_openapi_client.model.source_enum import SourceEnum

globals()["AnnotationsRequestedEnum"] = AnnotationsRequestedEnum
globals()["BlankEnum"] = BlankEnum
globals()["NullEnum"] = NullEnum
globals()["ReviewReasonEnum"] = ReviewReasonEnum
globals()["SourceEnum"] = SourceEnum
from groundlight_openapi_client.model.label_value import LabelValue


class TestLabelValue(unittest.TestCase):
    """LabelValue unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testLabelValue(self):
        """Test LabelValue"""
        # FIXME: construct object with mandatory attributes with example values
        # model = LabelValue()  # noqa: E501
        pass


if __name__ == "__main__":
    unittest.main()