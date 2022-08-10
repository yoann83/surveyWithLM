import React from "react";
import { ReactQuestionFactory } from "survey-react";
import PropTypes from "prop-types";
import ImageList from "../../../ImagepickerField";

/* style Overload */
import "../../scss/sassForm/_ImagePicker.scss";

export default function ImagePicker(props) {
  return (
    <div>
      <ImageList
        type={props.question.inputType}
        id={props.question.name}
        name={props.question.name}
        title={props.question.title}
        defaultValue={props.question.defaultValue}
        variant={props.question.variant}
        required={props.question.isRequired}
        description={props.question.description}
        choices={props.question.choices.map((image) => image)}
        onChange={(value) => {
          props.question.value = value;
        }}
        state={props.question.state.attrs}
        helptitle={props.question.title}
        helptext={
          "Je suis le text d'aide pour le champ : " +
          props.question.name.toUpperCase()
        }
      />
      {/*<pre>{JSON.stringify(props.question.value, null, 2)}</pre>*/}
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("imagepicker", (props) => {
  return React.createElement(ImagePicker, props);
});

ImageList.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  choices: PropTypes.array,
  variant: PropTypes.string,
  required: PropTypes.bool,
  helpTitle: PropTypes.string,
  helpText: PropTypes.string
};
