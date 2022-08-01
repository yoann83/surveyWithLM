import React, { useState } from "react";
import { FormControl, FormControlLabel } from "@mui/material";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import {
  Checkbox,
  FormGroup,
  RadioGroup,
  Radio,
  Switch,
  Select,
  MenuItem
} from "@mui/material";
import Label from "./LabelField";
import { useMemo, useCallback } from "react";

export default (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const handleClick = (newPlacement) => (event) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  const {
    helpTitle,
    helpText,
    icon = "",
    label = "",
    expanded = false,
    multiple = false,
    choices = props.choices,
    choiceLabelRenderer = useCallback((choice) => choice, []),
    ...other
  } = props;

  const {
    useSwitches = false,
    LabelProps,
    SelectProps = {
      helpTitle: helpTitle,
      helpText: helpText,
      icon: icon,
      label: label
    },
    InputLabelProps,
    FormHelperTextProps,
    ...otherProps
  } = other;

  const doUseSwitches = multiple && expanded && useSwitches;

  const ControlProps = {
    //fullWidth: true,
    //variant: "filled",
    hiddenLabel: true,
    ...(otherProps ?? {})
  };

  const selectProps = {
    ...{
      helpTitle,
      helpText,
      icon,
      label,
      multiple,
      defaultValue: multiple ? [] : ""
    },
    ...SelectProps
  };

  const choiceItems = choices.map((choice) => {
    return expanded ? (
      <FormControlLabel
        {...{
          key: choice,
          value: choice,
          label: choiceLabelRenderer(choice),
          control: doUseSwitches ? (
            <Switch />
          ) : multiple ? (
            <Checkbox />
          ) : (
            <Radio />
          )
        }}
      />
    ) : (
      <MenuItem {...{ key: choice, value: choice }}>
        {choiceLabelRenderer(choice)}
      </MenuItem>
    );
  }); //, [choices, useSwitches, choiceLabelRenderer, expanded, multiple]);

  return (
    <>
      <FormControl {...ControlProps}>
        {label && (
          <Label
            {...{
              label,
              asInputLabel: !expanded && (selectProps.label ?? false)
            }}
          />
        )}
        {expanded ? (
          multiple ? (
            <FormGroup row={true}>{choiceItems}</FormGroup>
          ) : (
            <RadioGroup row={true}>{choiceItems}</RadioGroup>
          )
        ) : (
          <Select {...selectProps}>{choiceItems}</Select>
        )}
      </FormControl>
      <div className="icons">
        {selectProps.icon.right ? (
          <i className={icon.right} aria-hidden="true"></i>
        ) : null}
      </div>
      <i
        onClick={handleClick("top-start")}
        className="fa fa-question-circle"
        aria-hidden="true"
      ></i>
      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={1000}>
            <Paper>
              <Typography className="popper" sx={{ p: 2 }}>
                <span className="h5">
                  <dfn>{helpTitle}</dfn>
                </span>
                <span className="text">{helpText}</span>
              </Typography>
            </Paper>
          </Fade>
        )}
      </Popper>
    </>
  );
};
