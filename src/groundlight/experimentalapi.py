"""
unstableapi.py

This module is part of our evolving SDK. While these functions are designed to provide valuable functionality to enhance your projects, it's important to note that they are considered unstable. This means they may undergo significant modifications or potentially be removed in future releases, which could lead to breaking changes in your applications.
"""
import json
from typing import Union
from typing import Optional

from model import (
    Channel,
    Detector,
    Rule,
    RuleCreationInput,
    SnoozeTimeUnit,
    Verb,
)
from openapi_client.model.action import Action
from openapi_client.model.condition import Condition
from openapi_client.model.rule_creation_input import RuleCreationInput

from groundlight import Groundlight


class ExperimentalApi(Groundlight):
    def __init__(self, endpoint: Optional[str] = None, api_token: Optional[str] = None):
        super().__init__(endpoint=endpoint, api_token=api_token)

    def create_action(
        self,
        detector: Union[str, Detector],
        rule_name: str,
        channel: Union[str, Channel],
        recipient: str,
        *,
        alert_on: Union[str, Verb] = "CHANGED_TO",
        enabled: bool = True,
        include_image: bool = False,
        condition_parameters: Union[str, dict] = {"label": "YES"},
        snooze_time_enabled: bool = False,
        snooze_time_value: int = 3600,
        snooze_time_unit: Union[str, SnoozeTimeUnit] = "SECONDS",
    ) -> Rule:
        """
        Adds a notification action to the given detector

        :param detector: the detector to add the action to
        :param rule_name: a name to uniquely identify the rule
        :param channel: what channel to send the notification over. Currently EMAIL or TEXT
        :param recipient: the address or number to send the notification to
        :param alert_on: what to alert on. One of ANSWERED_CONSECUTIVELY, ANSWERED_WITHIN_TIME, CHANGED_TO, NO_CHANGE, NO_QUERIES
        :param enabled: whether the rule is enabled initially
        :param include_image: whether to include the image in the notification
        :param condition_parameters: additional information needed for the condition. i.e. if the condition is ANSWERED_CONSECUTIVELY, we specify num_consecutive_labels and label here
        :param snooze_time_enabled: Whether notifications wil be snoozed, no repeat notification will be delivered until the snooze time has passed
        :param snooze_time_value: The value of the snooze time
        :param snooze_time_unit: The unit of the snooze time

        :return: a Rule object corresponding to the new rule
        """
        if type(alert_on) is str:
            alert_on = Verb(alert_on.upper())
        if type(channel) is str:
            channel = Channel(channel.upper())
        if type(condition_parameters) is str:
            condition_parameters = json.loads(condition_parameters)
        action = Action(channel=channel.value, recipient=recipient, include_image=include_image)
        condition = Condition(verb=alert_on.value, parameters=condition_parameters)
        det_id = detector.id if isinstance(detector, Detector) else detector
        rule_input = RuleCreationInput(
            detector_id=det_id,
            name=rule_name,
            enabled=enabled,
            action=action,
            condition=condition,
            snooze_time_enabled=snooze_time_enabled,
            snooze_time_value=snooze_time_value,
            snooze_time_unit=snooze_time_unit,
        )
        return Rule.model_validate(self.rules_api.create_rule(det_id, rule_input).to_dict())

    def get_action(self, action_id: int) -> Action:
        """
        Gets the action with the given id

        :param action_id: the id of the action to get
        :return: the action with the given id
        """
        return Rule.model_validate(self.rules_api.get_rule(action_id).to_dict())

    def delete_action(self, action_id: int) -> None:
        """
        Deletes the action with the given id

        :param action_id: the id of the action to delete
        """
        self.rules_api.delete_rule(action_id)
