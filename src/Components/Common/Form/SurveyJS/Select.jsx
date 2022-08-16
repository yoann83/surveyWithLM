import React from "react";
import { ReactQuestionFactory } from "survey-react";
import ChoiceField from "../../../ChoiceField";

/* style Overload */
import "../../scss/sassForm/_Select.scss";

export default function Select(props) {
  const handleChange = (e) => {
    props.question.setValueCore(e.target.value);
  };

  return (
    <div>
      <div className="select-question">
        <div className="select">
          <ChoiceField
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
        </div>
      </div>
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("dropdown", (props) => {
  return React.createElement(Select, props);
});
