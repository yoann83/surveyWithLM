import React, { useState } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

export default function ({
  helptitle,
  helptext,
  description,
  icon,
  onChange,
  ...props
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };
  const [value, setValue] = useState();
  const onSelectChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  return (
    /* construct (overloard) all components (ex : material ui) */
    <div className="textarea-question">
      <p>{description}</p>
      <div className="textarea">
        <div className="icons">
          {icon.left ? <i className={icon.left} aria-hidden="true"></i> : null}
        </div>
        <TextareaAutosize
          minRows={2}
          maxRows={8}
          type={props.type}
          name={props.name}
          label={props.label}
          id={props.id}
          style={{ width: props.width }}
          helpertext={props.helpertext}
          required={props.required}
          variant="outlined"
          placeholder={value ? value : props.defaultValue}
          onChange={onSelectChange}
        />
        <div className="icons">
          {icon.right ? (
            <i className={icon.right} aria-hidden="true"></i>
          ) : null}
        </div>
        <i
          onClick={handleClick("top-start")}
          className="fa fa-question-circle"
          aria-hidden="true"
        ></i>
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement={placement}
          transition
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={1000}>
              <Paper>
                <Typography className="popper" sx={{ p: 2 }}>
                  <span className="h5">
                    <dfn>{helptitle}</dfn>
                  </span>
                  <span className="textarea">{helptext}</span>
                </Typography>
              </Paper>
            </Fade>
          )}
        </Popper>
      </div>
    </div>
  );
}
