# generated by datamodel-codegen:
#   filename:  public-api.yaml
#   timestamp: 2024-02-19T20:01:08+00:00

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
        0.9,
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


class ImageQueryTypeEnum(Enum):
    image_query = "image_query"


class ResultTypeEnum(Enum):
    binary_classification = "binary_classification"


class Bongo(BaseModel):
    detail: str = Field(..., description="A human-readable explanation specific to this occurrence of the problem.")


class Detector(BaseModel):
    id: str = Field(..., description="A unique ID for this object.")
    type: DetectorTypeEnum = Field(..., description="The type of this object.")
    created_at: datetime = Field(..., description="When this detector was created.")
    name: constr(max_length=200) = Field(..., description="A short, descriptive name for the detector.")
    query: str = Field(..., description="A question about the image.")
    group_name: str = Field(..., description="Which group should this detector be part of?")
    confidence_threshold: Optional[confloat(ge=0.0, le=1.0)] = Field(
        0.9,
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
