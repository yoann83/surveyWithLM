import React from "react";
import { ReactQuestionFactory } from "survey-react";
import TextField from "../../../TextField";
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
          help: props.question.state.iconHelp,
          left: props.question.state.iconLeft,
          right: props.question.state.iconRight
        }}
        onChange={(value) => {
          props.question.value = value;
        }}
        helptitle={props.question.title}
        helptext={props.question.state.helptext}
      />
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("text", (props) => {
  return React.createElement(Text, props);
});
