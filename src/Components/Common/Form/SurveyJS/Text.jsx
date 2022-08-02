import React from "react";
import { ReactQuestionFactory } from "survey-react";
import PropTypes from "prop-types";
import TextField from "../../../TextField";

/* style Overload */
import "../../scss/sassForm/_Text.scss";

export default function Text(props) {
  return (
    <div>
      <TextField
        fullWidth={true}
        multiline={props.question.inputType === "comment" ? true : false}
        type={props.question.inputType}
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
      {/*<pre>{JSON.stringify(props.question, null, 2)}</pre>*/}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(Text, props);
});

TextField.propTypes = {
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
