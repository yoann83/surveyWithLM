import React from "react";
import { ReactQuestionFactory } from "survey-react";
import ChoiceField from "../../../ChoiceField";

/* style Overload */
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
            helptext={
              "Je suis le text d'aide pour le champ : " +
              props.question.name.toUpperCase()
            }
            label={props.question.title}
            required={props.question.isRequired}
            choices={props.question.choices.map((c) => c.value)}
          />
          {/*<pre>{JSON.stringify(props.question, null, 2)}</pre>*/}
        </div>
      </div>
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("checkbox", (props) => {
  return React.createElement(Choice, props);
});
