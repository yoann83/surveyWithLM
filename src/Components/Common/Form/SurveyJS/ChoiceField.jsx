import React from "react";
import { ReactQuestionFactory } from "survey-react";
import Choice from "../../../ChoiceField";
import { Typography, InputAdornment, Box } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

/* style Overload */
import "../../scss/sassForm/_Select.scss";

library.add(fas);

export default function ChoiceField(props) {
  return (
    <div>
      {props.isDisplayMode ? (
        /* replace original component with theme surveyJs */
        <div
          id={props.question.inputId}
          className={props.question.getControlClass()}
          disabled
        >
          {props.question.displayValue || props.question.optionsCaption}
        </div>
      ) : (
        <div className="select-question">
          <div className="select">
            <Choice
              {...{
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
      )}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("dropdown", (props) => {
  return React.createElement(ChoiceField, props);
});
