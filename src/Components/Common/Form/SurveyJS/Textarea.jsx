import React from "react";
import { ReactQuestionFactory } from "survey-react";
import PropTypes from "prop-types";
import TextareaField from "../../../TextareaField";

/* style Overload */
import "../../scss/sassForm/_Textarea.scss";

export default function Textarea(props) {
  return (
    <div>
      <TextareaField
        minRows={2}
        maxRows={8}
        width="100%"
        type={props.question.getType()}
        id={props.question.name}
        name={props.question.name}
        label={props.question.title}
        variant={props.question.variant}
        required={props.question.isRequired}
        defaultValue={props.question.defaultValue}
        description={props.question.description}
        icon={{
          left: "fa fa-id-card"
          //right: "fab fa-audible"
        }}
        onChange={(value) => {
          props.question.value = value;
        }}
        helptitle={props.question.title}
        helptext={
          "Je suis le text d'aide pour le champ : " +
          props.question.name.toUpperCase()
        }
      />
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("comment", (props) => {
  return React.createElement(Textarea, props);
});

TextareaField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  id: PropTypes.string,
  description: PropTypes.string,
  defaultValue: PropTypes.string,
  icon: PropTypes.object,
  variant: PropTypes.string,
  required: PropTypes.bool,
  helpTitle: PropTypes.string,
  helpText: PropTypes.string
};
