# generated by datamodel-codegen:
#   filename:  public-api.yaml
#   timestamp: 2024-07-25T18:11:56+00:00

from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, Dict, List, Optional, Union

from pydantic import AnyUrl, BaseModel, Field, confloat, conint, constr


class ChannelEnum(Enum):
    """
    * `EMAIL` - EMAIL
    * `TEXT` - TEXT
    """

    EMAIL = "EMAIL"
    TEXT = "TEXT"


class DetectorGroup(BaseModel):
    id: str
    name: constr(max_length=100)


class DetectorGroupRequest(BaseModel):
    name: constr(min_length=1, max_length=100)


class DetectorTypeEnum(Enum):
    detector = "detector"


class ImageQueryTypeEnum(Enum):
    image_query = "image_query"


class ModeEnum(Enum):
    """
    * `BINARY` - BINARY
    * `COUNT` - COUNT
    """

    BINARY = "BINARY"
    COUNT = "COUNT"


class Note(BaseModel):
    detector_id: str
    content: str = Field(..., description="Text content of the note.")


class NoteRequest(BaseModel):
    content: constr(min_length=1) = Field(..., description="Text content of the note.")


class ResultTypeEnum(Enum):
    binary_classification = "binary_classification"
    counting = "counting"


class SnoozeTimeUnitEnum(Enum):
    """
    * `DAYS` - DAYS
    * `HOURS` - HOURS
    * `MINUTES` - MINUTES
    * `SECONDS` - SECONDS
    """

    DAYS = "DAYS"
    HOURS = "HOURS"
    MINUTES = "MINUTES"
    SECONDS = "SECONDS"


class VerbEnum(Enum):
    """
    * `ANSWERED_CONSECUTIVELY` - ANSWERED_CONSECUTIVELY
    * `ANSWERED_WITHIN_TIME` - ANSWERED_WITHIN_TIME
    * `CHANGED_TO` - CHANGED_TO
    * `NO_CHANGE` - NO_CHANGE
    * `NO_QUERIES` - NO_QUERIES
    """

    ANSWERED_CONSECUTIVELY = "ANSWERED_CONSECUTIVELY"
    ANSWERED_WITHIN_TIME = "ANSWERED_WITHIN_TIME"
    CHANGED_TO = "CHANGED_TO"
    NO_CHANGE = "NO_CHANGE"
    NO_QUERIES = "NO_QUERIES"


class BinaryClassificationResult(BaseModel):
    confidence: Optional[confloat(ge=0.0, le=1.0)] = Field(...)
    label: str


class CountingResult(BaseModel):
    confidence: Optional[confloat(ge=0.0, le=1.0)] = Field(...)
    value: int


class Action(BaseModel):
    channel: ChannelEnum
    recipient: str
    include_image: bool


class ActionRequest(BaseModel):
    channel: ChannelEnum
    recipient: constr(min_length=1)
    include_image: bool


class AllNotes(BaseModel):
    """
    Serializes all notes for a given detector, grouped by type as listed in UserProfile.NoteCategoryChoices
    The fields must match whats in USERPROFILE.NoteCategoryChoices
    """

    CUSTOMER: List[Note]
    GL: List[Note]


class Condition(BaseModel):
    verb: VerbEnum
    parameters: Dict[str, Any]


class ConditionRequest(BaseModel):
    verb: VerbEnum
    parameters: Dict[str, Any]


class Detector(BaseModel):
    """
    Spec for serializing a detector object in the public API.
    """

    id: str = Field(..., description="A unique ID for this object.")
    type: DetectorTypeEnum = Field(..., description="The type of this object.")
    created_at: datetime = Field(..., description="When this detector was created.")
    name: constr(max_length=200) = Field(..., description="A short, descriptive name for the detector.")
    query: str = Field(..., description="A question about the image.")
    group_name: str = Field(..., description="Which group should this detector be part of?")
    confidence_threshold: confloat(ge=0.0, le=1.0) = Field(
        0.9,
        description=(
            "If the detector's prediction is below this confidence threshold, send the image query for human review."
        ),
    )
    patience_time: confloat(ge=0.0, le=3600.0) = Field(
        30.0, description="How long Groundlight will attempt to generate a confident prediction"
    )
    metadata: Optional[Dict[str, Any]] = Field(..., description="Metadata about the detector.")
    mode: str
    mode_configuration: Optional[Dict[str, Any]] = Field(...)


class DetectorCreationInputRequest(BaseModel):
    """
    Helper serializer for validating POST /detectors input.
    """

    name: constr(min_length=1, max_length=200) = Field(..., description="A short, descriptive name for the detector.")
    query: constr(min_length=1, max_length=300) = Field(..., description="A question about the image.")
    group_name: Optional[constr(min_length=1, max_length=100)] = Field(
        None, description="Which group should this detector be part of?"
    )
    confidence_threshold: confloat(ge=0.0, le=1.0) = Field(
        0.9,
        description=(
            "If the detector's prediction is below this confidence threshold, send the image query for human review."
        ),
    )
    patience_time: confloat(ge=0.0, le=3600.0) = Field(
        30.0, description="How long Groundlight will attempt to generate a confident prediction"
    )
    pipeline_config: Optional[constr(max_length=100)] = Field(
        None, description="(Advanced usage) Configuration needed to instantiate a prediction pipeline."
    )
    metadata: Optional[constr(min_length=1, max_length=1362)] = Field(
        None,
        description=(
            "Base64-encoded metadata for the detector. This should be a JSON object with string keys. The size after"
            " encoding should not exceed 1362 bytes, corresponding to 1KiB before encoding."
        ),
    )
    mode: ModeEnum = Field(
        "BINARY", description="Mode in which this detector will work.\n\n* `BINARY` - BINARY\n* `COUNT` - COUNT"
    )
    mode_configuration: Optional[Any] = Field(None, description="Configuration for each detector mode.")


class ImageQuery(BaseModel):
    """
    Spec for serializing a image-query object in the public API.
    """

    metadata: Optional[Dict[str, Any]] = Field(..., description="Metadata about the image query.")
    id: str = Field(..., description="A unique ID for this object.")
    type: ImageQueryTypeEnum = Field(..., description="The type of this object.")
    created_at: datetime = Field(..., description="When was this detector created?")
    query: str = Field(..., description="A question about the image.")
    detector_id: str = Field(..., description="Which detector was used on this image query?")
    result_type: ResultTypeEnum = Field(..., description="What type of result are we returning?")
    result: Optional[Union[BinaryClassificationResult, CountingResult]] = Field(
        ..., description="The result of the image query."
    )
    patience_time: float = Field(..., description="How long to wait for a confident response.")
    confidence_threshold: float = Field(
        ..., description="Min confidence needed to accept the response of the image query."
    )


class PaginatedDetectorList(BaseModel):
    count: int = Field(..., example=123)
    next: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=4")
    previous: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=2")
    results: List[Detector]


class PaginatedImageQueryList(BaseModel):
    count: int = Field(..., example=123)
    next: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=4")
    previous: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=2")
    results: List[ImageQuery]


class Rule(BaseModel):
    id: int
    detector_id: str
    detector_name: str
    name: constr(max_length=44)
    enabled: bool = True
    snooze_time_enabled: bool = False
    snooze_time_value: conint(ge=0) = 0
    snooze_time_unit: SnoozeTimeUnitEnum = "DAYS"
    human_review_required: bool = False
    condition: Condition
    action: Action


class RuleRequest(BaseModel):
    name: constr(min_length=1, max_length=44)
    enabled: bool = True
    snooze_time_enabled: bool = False
    snooze_time_value: conint(ge=0) = 0
    snooze_time_unit: SnoozeTimeUnitEnum = "DAYS"
    human_review_required: bool = False
    condition: ConditionRequest
    action: ActionRequest


class PaginatedRuleList(BaseModel):
    count: int = Field(..., example=123)
    next: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=4")
    previous: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=2")
    results: List[Rule]
