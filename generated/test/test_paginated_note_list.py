"""
    Groundlight API

    Groundlight makes it simple to understand images. You can easily create computer vision detectors just by describing what you want to know using natural language.  # noqa: E501

    The version of the OpenAPI document: 0.15.1
    Contact: support@groundlight.ai
    Generated by: https://openapi-generator.tech
"""


import sys
import unittest

import groundlight_openapi_client
from groundlight_openapi_client.model.note import Note

globals()["Note"] = Note
from groundlight_openapi_client.model.paginated_note_list import PaginatedNoteList


class TestPaginatedNoteList(unittest.TestCase):
    """PaginatedNoteList unit test stubs"""

    def setUp(self):
        pass

    def tearDown(self):
        pass

    def testPaginatedNoteList(self):
        """Test PaginatedNoteList"""
        # FIXME: construct object with mandatory attributes with example values
        # model = PaginatedNoteList()  # noqa: E501
        pass


if __name__ == "__main__":
    unittest.main()