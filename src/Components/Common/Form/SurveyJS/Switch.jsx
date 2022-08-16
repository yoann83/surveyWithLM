import React from "react";
import { ReactQuestionFactory } from "survey-react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import SwitchField from "@mui/material/Switch";

/* style Overload */
import "../../scss/sassForm/_Radio.scss";

export default function Switch(props) {
  const handleChange = (e) => {
    props.question.setValueCore(
      e.target.value ? "true" : props.question.defaultValue
    );
  };
  return (
    <div>
      <div className="switch-question">
        <div className="switch">
          <FormGroup>
            <FormControlLabel
              defaultValue={props.question.defaultValue}
              control={<SwitchField />}
              onChange={handleChange}
              label={props.question.title}
            />
          </FormGroup>
          {/*<pre>{JSON.stringify(props.question, null, 2)}</pre>*/}
        </div>
      </div>
    </div>
  );
}
/* only overload original type ("text", "dropdown" ...) and uncomment scss */
ReactQuestionFactory.Instance.registerQuestion("boolean", (props) => {
  return React.createElement(Switch, props);
});
