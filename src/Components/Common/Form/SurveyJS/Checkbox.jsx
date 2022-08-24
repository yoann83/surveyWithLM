import React from "react";
import { ReactQuestionFactory } from "survey-react";
import ChoiceField from "../../../ChoiceField";
import "../../scss/sassForm/_Checkbox.scss";

export default function Choice(props) {
  const handleChange = (e) => {
    props.question.setValueCore(
      e.target.value ? e.target.value : props.question.defaultValue
    );
  };
  return (
    <div>
      <div className="checkbox-question">
        <div className="checkbox">
          <ChoiceField
            expanded={!props.question.state.isdropdown}
            multiple={props.question.state.multiple}
            useSwitches={props.question.state.useSwitches}
            onChange={handleChange}
            name={props.question.name}
            fullWidth={true}
            helptitle={props.question.title}
            icon={{
              help: props.question.state.iconHelp,
              left: props.question.state.iconLeft,
              right: props.question.state.iconRight
            }}
            helptext={props.question.state.helptext}
            label={props.question.title}
            required={props.question.isRequired}
            choices={props.question.choices.map((c) => c.value)}
          />
        </div>
      </div>
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("checkbox", (props) => {
  return React.createElement(Choice, props);
});
