# generated by datamodel-codegen:
#   filename:  public-api.yaml
#   timestamp: 2024-05-28T18:14:08+00:00

from __future__ import annotations

from datetime import datetime
from enum import Enum
from typing import Any, Dict, List, Optional

from pydantic import AnyUrl, BaseModel, Field, confloat, constr


class User(BaseModel):
    username: str = Field(..., description="The user's username.")


class ClassificationResult(BaseModel):
    confidence: Optional[confloat(ge=0.0, le=1.0)] = Field(
        None, description="On a scale of 0 to 1, how confident are we in the predicted label?"
    )
    label: str = Field(..., description="What is the predicted label?")


class DetectorCreationInput(BaseModel):
    name: constr(max_length=200) = Field(..., description="A short, descriptive name for the detector.")
    query: constr(max_length=300) = Field(..., description="A question about the image.")
    group_name: Optional[constr(max_length=100)] = Field(
        None, description="Which group should this detector be part of?"
    )
    confidence_threshold: Optional[confloat(ge=0.0, le=1.0)] = Field(
        0.75,
        description=(
            "If the detector's prediction is below this confidence threshold, send the image query for human review."
        ),
    )
    pipeline_config: Optional[constr(max_length=8192)] = Field(
        None, description="(Advanced usage) Configuration to instantiate a specific prediction pipeline."
    )
    metadata: Optional[str] = Field(
        None,
        description=(
            "A dictionary of custom key/value metadata to associate with the detector (limited to 1KB). This is encoded"
            " as a URL-safe, base64-encoded JSON string."
        ),
    )


class DetectorTypeEnum(Enum):
    detector = "detector"


class SnoozeTimeUnit(Enum):
    SECONDS = "SECONDS"
    MINUTES = "MINUTES"
    HOURS = "HOURS"
    DAYS = "DAYS"


class Channel(Enum):
    EMAIL = "EMAIL"
    TEXT = "TEXT"


class Action(BaseModel):
    channel: Optional[Channel] = Field(None, description="The channel to send the action to.")
    include_image: Optional[bool] = Field(None, description="Should the image be included in the action?")
    recipient: Optional[str] = Field(None, description="The recipient of the action.")


class NoteType(Enum):
    CUSTOMER = "CUSTOMER"
    GL = "GL"


class Note(BaseModel):
    content: Optional[str] = Field(None, description="The text inside the note")
    note_type: Optional[NoteType] = Field(None, description="The type of note")


class NoteCreationInput(BaseModel):
    content: str = Field(..., description="The text inside the note")


class Verb(Enum):
    ANSWERED_CONSECUTIVELY = "ANSWERED_CONSECUTIVELY"
    ANSWERED_WITHIN_TIME = "ANSWERED_WITHIN_TIME"
    CHANGED_TO = "CHANGED_TO"
    NO_CHANGE = "NO_CHANGE"
    NO_QUERIES = "NO_QUERIES"


class Condition(BaseModel):
    verb: Optional[Verb] = Field(None, description="The verb to use in the condition.")
    parameters: Optional[Dict[str, Any]] = Field(None, description="The parameters to use in the condition.")


class ImageQueryTypeEnum(Enum):
    image_query = "image_query"


class ResultTypeEnum(Enum):
    binary_classification = "binary_classification"


class Detector(BaseModel):
    id: str = Field(..., description="A unique ID for this object.")
    type: DetectorTypeEnum = Field(..., description="The type of this object.")
    created_at: datetime = Field(..., description="When this detector was created.")
    name: constr(max_length=200) = Field(..., description="A short, descriptive name for the detector.")
    query: str = Field(..., description="A question about the image.")
    group_name: str = Field(..., description="Which group should this detector be part of?")
    confidence_threshold: Optional[confloat(ge=0.0, le=1.0)] = Field(
        0.75,
        description=(
            "If the detector's prediction is below this confidence threshold, send the image query for human review."
        ),
    )
    metadata: Optional[Dict[str, Any]] = Field(
        None,
        description=(
            "A dictionary of custom key/value metadata to associate with the detector (limited to 1KB). This is encoded"
            " as a URL-safe, base64-encoded JSON string."
        ),
    )


class RuleBase(BaseModel):
    detector_id: Optional[str] = Field(None, description="Which detector should this rule be associated with?")
    name: Optional[constr(max_length=200)] = Field(None, description="A short, descriptive name for the rule.")
    enabled: Optional[bool] = Field(True, description="Is this rule enabled?")
    snooze_time_enabled: Optional[bool] = Field(False, description="Is this rule snooze time enabled?")
    snooze_time_value: Optional[int] = Field(1, description="How long to snooze the rule for (in seconds).")
    snooze_time_unit: Optional[SnoozeTimeUnit] = Field(
        "DAYS", description="What unit of time to use for the snooze time."
    )
    action: Optional[Action] = Field(None, description="What action should be taken when the rule is triggered?")
    condition: Optional[Condition] = Field(None, description="What condition should trigger the rule?")


class RuleCreationInput(RuleBase):
    pass


class Rule(RuleBase):
    id: Optional[int] = Field(None, description="A unique ID for this object.")
    detector_name: Optional[str] = Field(None, description="The name of the detector this rule is associated with.")


class ImageQuery(BaseModel):
    id: str = Field(..., description="A unique ID for this object.")
    type: ImageQueryTypeEnum = Field(..., description="The type of this object.")
    created_at: datetime = Field(..., description="When was this detector created?")
    query: str = Field(..., description="A question about the image.")
    detector_id: str = Field(..., description="Which detector was used on this image query?")
    result_type: ResultTypeEnum = Field(..., description="What type of result are we returning?")
    result: Optional[ClassificationResult] = None
    metadata: Optional[Dict[str, Any]] = Field(
        None,
        description="A dictionary of custom key/value metadata to associate with the image query (limited to 1KB).",
    )


class PaginatedRuleList(BaseModel):
    count: Optional[int] = None
    next: Optional[AnyUrl] = None
    previous: Optional[AnyUrl] = None
    results: Optional[List[Rule]] = None


class PaginatedDetectorList(BaseModel):
    count: Optional[int] = Field(None, example=123)
    next: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=4")
    previous: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=2")
    results: Optional[List[Detector]] = None


class PaginatedImageQueryList(BaseModel):
    count: Optional[int] = Field(None, example=123)
    next: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=4")
    previous: Optional[AnyUrl] = Field(None, example="http://api.example.org/accounts/?page=2")
    results: Optional[List[ImageQuery]] = None
