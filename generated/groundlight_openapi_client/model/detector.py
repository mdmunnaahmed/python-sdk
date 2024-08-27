"""
    Groundlight API

    Groundlight makes it simple to understand images. You can easily create computer vision detectors just by describing what you want to know using natural language.  # noqa: E501

    The version of the OpenAPI document: 0.15.3
    Contact: support@groundlight.ai
    Generated by: https://openapi-generator.tech
"""

import re  # noqa: F401
import sys  # noqa: F401

from groundlight_openapi_client.model_utils import (  # noqa: F401
    ApiTypeError,
    ModelComposed,
    ModelNormal,
    ModelSimple,
    cached_property,
    change_keys_js_to_python,
    convert_js_args_to_python_args,
    date,
    datetime,
    file_type,
    none_type,
    validate_get_composed_info,
    OpenApiModel,
)
from groundlight_openapi_client.exceptions import ApiAttributeError


def lazy_import():
    from groundlight_openapi_client.model.blank_enum import BlankEnum
    from groundlight_openapi_client.model.detector_type_enum import DetectorTypeEnum
    from groundlight_openapi_client.model.escalation_type_enum import EscalationTypeEnum
    from groundlight_openapi_client.model.mode_enum import ModeEnum
    from groundlight_openapi_client.model.status_enum import StatusEnum

    globals()["BlankEnum"] = BlankEnum
    globals()["DetectorTypeEnum"] = DetectorTypeEnum
    globals()["EscalationTypeEnum"] = EscalationTypeEnum
    globals()["ModeEnum"] = ModeEnum
    globals()["StatusEnum"] = StatusEnum


class Detector(ModelNormal):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.

    Attributes:
      allowed_values (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          with a capitalized key describing the allowed value and an allowed
          value. These dicts store the allowed enum values.
      attribute_map (dict): The key is attribute name
          and the value is json key in definition.
      discriminator_value_class_map (dict): A dict to go from the discriminator
          variable value to the discriminator class name.
      validations (dict): The key is the tuple path to the attribute
          and the for var_name this is (var_name,). The value is a dict
          that stores validations for max_length, min_length, max_items,
          min_items, exclusive_maximum, inclusive_maximum, exclusive_minimum,
          inclusive_minimum, and regex.
      additional_properties_type (tuple): A tuple of classes accepted
          as additional properties values.
    """

    allowed_values = {}

    validations = {
        ("name",): {
            "max_length": 200,
        },
        ("confidence_threshold",): {
            "inclusive_maximum": 1.0,
            "inclusive_minimum": 0.0,
        },
        ("patience_time",): {
            "inclusive_maximum": 3600,
            "inclusive_minimum": 0,
        },
    }

    @cached_property
    def additional_properties_type():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded
        """
        lazy_import()
        return (
            bool,
            date,
            datetime,
            dict,
            float,
            int,
            list,
            str,
            none_type,
        )  # noqa: E501

    _nullable = False

    @cached_property
    def openapi_types():
        """
        This must be a method because a model may have properties that are
        of type self, this must run after the class is loaded

        Returns
            openapi_types (dict): The key is attribute name
                and the value is attribute type.
        """
        lazy_import()
        return {
            "id": (str,),  # noqa: E501
            "type": (
                bool,
                date,
                datetime,
                dict,
                float,
                int,
                list,
                str,
                none_type,
            ),  # noqa: E501
            "created_at": (datetime,),  # noqa: E501
            "name": (str,),  # noqa: E501
            "query": (str,),  # noqa: E501
            "group_name": (str,),  # noqa: E501
            "metadata": (
                {str: (bool, date, datetime, dict, float, int, list, str, none_type)},
                none_type,
            ),  # noqa: E501
            "mode": (
                bool,
                date,
                datetime,
                dict,
                float,
                int,
                list,
                str,
                none_type,
            ),  # noqa: E501
            "mode_configuration": (
                {str: (bool, date, datetime, dict, float, int, list, str, none_type)},
                none_type,
            ),  # noqa: E501
            "confidence_threshold": (float,),  # noqa: E501
            "patience_time": (float,),  # noqa: E501
            "status": (
                bool,
                date,
                datetime,
                dict,
                float,
                int,
                list,
                str,
                none_type,
            ),  # noqa: E501
            "escalation_type": (
                bool,
                date,
                datetime,
                dict,
                float,
                int,
                list,
                str,
                none_type,
            ),  # noqa: E501
        }

    @cached_property
    def discriminator():
        return None

    attribute_map = {
        "id": "id",  # noqa: E501
        "type": "type",  # noqa: E501
        "created_at": "created_at",  # noqa: E501
        "name": "name",  # noqa: E501
        "query": "query",  # noqa: E501
        "group_name": "group_name",  # noqa: E501
        "metadata": "metadata",  # noqa: E501
        "mode": "mode",  # noqa: E501
        "mode_configuration": "mode_configuration",  # noqa: E501
        "confidence_threshold": "confidence_threshold",  # noqa: E501
        "patience_time": "patience_time",  # noqa: E501
        "status": "status",  # noqa: E501
        "escalation_type": "escalation_type",  # noqa: E501
    }

    read_only_vars = {
        "id",  # noqa: E501
        "type",  # noqa: E501
        "created_at",  # noqa: E501
        "query",  # noqa: E501
        "group_name",  # noqa: E501
        "metadata",  # noqa: E501
        "mode",  # noqa: E501
        "mode_configuration",  # noqa: E501
    }

    _composed_schemas = {}

    @classmethod
    @convert_js_args_to_python_args
    def _from_openapi_data(
        cls, id, type, created_at, name, query, group_name, metadata, mode, mode_configuration, *args, **kwargs
    ):  # noqa: E501
        """Detector - a model defined in OpenAPI

        Args:
            id (str): A unique ID for this object.
            type (bool, date, datetime, dict, float, int, list, str, none_type): The type of this object.
            created_at (datetime): When this detector was created.
            name (str): A short, descriptive name for the detector.
            query (str): A question about the image.
            group_name (str): Which group should this detector be part of?
            metadata ({str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type): Metadata about the detector.
            mode (bool, date, datetime, dict, float, int, list, str, none_type):
            mode_configuration ({str: (bool, date, datetime, dict, float, int, list, str, none_type)}, none_type):

        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            confidence_threshold (float): If the detector's prediction is below this confidence threshold, send the image query for human review.. [optional] if omitted the server will use the default value of 0.9  # noqa: E501
            patience_time (float): How long Groundlight will attempt to generate a confident prediction. [optional] if omitted the server will use the default value of 30.0  # noqa: E501
            status (bool, date, datetime, dict, float, int, list, str, none_type): [optional]  # noqa: E501
            escalation_type (bool, date, datetime, dict, float, int, list, str, none_type): Category that define internal proccess for labeling image queries  * `STANDARD` - STANDARD * `NO_HUMAN_LABELING` - NO_HUMAN_LABELING. [optional]  # noqa: E501
        """

        _check_type = kwargs.pop("_check_type", True)
        _spec_property_naming = kwargs.pop("_spec_property_naming", False)
        _path_to_item = kwargs.pop("_path_to_item", ())
        _configuration = kwargs.pop("_configuration", None)
        _visited_composed_classes = kwargs.pop("_visited_composed_classes", ())

        self = super(OpenApiModel, cls).__new__(cls)

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments."
                % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        self.id = id
        self.type = type
        self.created_at = created_at
        self.name = name
        self.query = query
        self.group_name = group_name
        self.metadata = metadata
        self.mode = mode
        self.mode_configuration = mode_configuration
        for var_name, var_value in kwargs.items():
            if (
                var_name not in self.attribute_map
                and self._configuration is not None
                and self._configuration.discard_unknown_keys
                and self.additional_properties_type is None
            ):
                # discard variable.
                continue
            setattr(self, var_name, var_value)
        return self

    required_properties = set([
        "_data_store",
        "_check_type",
        "_spec_property_naming",
        "_path_to_item",
        "_configuration",
        "_visited_composed_classes",
    ])

    @convert_js_args_to_python_args
    def __init__(self, name, *args, **kwargs):  # noqa: E501
        """Detector - a model defined in OpenAPI

            name (str): A short, descriptive name for the detector.
        Keyword Args:
            _check_type (bool): if True, values for parameters in openapi_types
                                will be type checked and a TypeError will be
                                raised if the wrong type is input.
                                Defaults to True
            _path_to_item (tuple/list): This is a list of keys or values to
                                drill down to the model in received_data
                                when deserializing a response
            _spec_property_naming (bool): True if the variable names in the input data
                                are serialized names, as specified in the OpenAPI document.
                                False if the variable names in the input data
                                are pythonic names, e.g. snake case (default)
            _configuration (Configuration): the instance to use when
                                deserializing a file_type parameter.
                                If passed, type conversion is attempted
                                If omitted no type conversion is done.
            _visited_composed_classes (tuple): This stores a tuple of
                                classes that we have traveled through so that
                                if we see that class again we will not use its
                                discriminator again.
                                When traveling through a discriminator, the
                                composed schema that is
                                is traveled through is added to this set.
                                For example if Animal has a discriminator
                                petType and we pass in "Dog", and the class Dog
                                allOf includes Animal, we move through Animal
                                once using the discriminator, and pick Dog.
                                Then in Dog, we will make an instance of the
                                Animal class but this time we won't travel
                                through its discriminator because we passed in
                                _visited_composed_classes = (Animal,)
            confidence_threshold (float): If the detector's prediction is below this confidence threshold, send the image query for human review.. [optional] if omitted the server will use the default value of 0.9  # noqa: E501
            patience_time (float): How long Groundlight will attempt to generate a confident prediction. [optional] if omitted the server will use the default value of 30.0  # noqa: E501
            status (bool, date, datetime, dict, float, int, list, str, none_type): [optional]  # noqa: E501
            escalation_type (bool, date, datetime, dict, float, int, list, str, none_type): Category that define internal proccess for labeling image queries  * `STANDARD` - STANDARD * `NO_HUMAN_LABELING` - NO_HUMAN_LABELING. [optional]  # noqa: E501
        """

        _check_type = kwargs.pop("_check_type", True)
        _spec_property_naming = kwargs.pop("_spec_property_naming", False)
        _path_to_item = kwargs.pop("_path_to_item", ())
        _configuration = kwargs.pop("_configuration", None)
        _visited_composed_classes = kwargs.pop("_visited_composed_classes", ())

        if args:
            raise ApiTypeError(
                "Invalid positional arguments=%s passed to %s. Remove those invalid positional arguments."
                % (
                    args,
                    self.__class__.__name__,
                ),
                path_to_item=_path_to_item,
                valid_classes=(self.__class__,),
            )

        self._data_store = {}
        self._check_type = _check_type
        self._spec_property_naming = _spec_property_naming
        self._path_to_item = _path_to_item
        self._configuration = _configuration
        self._visited_composed_classes = _visited_composed_classes + (self.__class__,)

        self.name = name
        for var_name, var_value in kwargs.items():
            if (
                var_name not in self.attribute_map
                and self._configuration is not None
                and self._configuration.discard_unknown_keys
                and self.additional_properties_type is None
            ):
                # discard variable.
                continue
            setattr(self, var_name, var_value)
            if var_name in self.read_only_vars:
                raise ApiAttributeError(
                    f"`{var_name}` is a read-only attribute. Use `from_openapi_data` to instantiate "
                    "class with read only attributes."
                )
