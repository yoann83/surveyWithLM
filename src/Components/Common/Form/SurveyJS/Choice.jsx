import React from "react";
import { ReactQuestionFactory } from "survey-react";
import ChoiceField from "../../../ChoiceField";

/* style Overload */
import "../../scss/sassForm/_Select.scss";

export default function Choice(props) {
  return (
    <div>
      <div className="select-question">
        <div className="select">
          <ChoiceField
            {...{
              id: props.question.name,
              name: props.question.name,
              fullWidth: true,
              helpTitle: props.question.title,
              helpText:
                "Je suis le text d'aide pour le champ : " +
                props.question.name.toUpperCase(),
              label: props.question.title,
              required: props.question.isRequired,
              choices: props.question.choices.map((c) => c.value)
            }}
          />
        </div>
      </div>
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("dropdown", (props) => {
  return React.createElement(Choice, props);
});
