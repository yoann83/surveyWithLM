import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";

import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

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
    setValue(e.target.getAttribute("value"));
    onChange(value);
  };

  return (
    /* construct (overloard) all components (ex : material ui) */
    <div className="imagepicker-question">
      <p>{description}</p>
      <div className="imagepicker">
        <FormControl>
          <FormControlLabel onChange={onChange} control={<Radio />} />
        </FormControl>
        <ImageList>
          {props.choices.map((item, index) => (
            <ImageListItem key={item.imageLink}>
              <img
                src={item.imageLink}
                srcSet={item.imageLink}
                onClick={onSelectChange}
                value={item.value}
                alt={props.state[index].title}
                loading={props.state[index].loading}
              />
              <ImageListItemBar
                className={
                  props.state[index].position !== "below"
                    ? "labelin"
                    : "labelbelow"
                }
                title={props.state[index].title}
                subtitle={<span>by: {props.state[index].author}</span>}
                position={props.state[index].position}
                actionIcon={
                  <div className="icons">
                    {props.state[index].icon ? (
                      <i
                        className={props.state[index].icon}
                        aria-hidden="true"
                      ></i>
                    ) : null}
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
                              <span className="text">{helptext}</span>
                            </Typography>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  </div>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
        <h3>{value}</h3>
      </div>
    </div>
  );
}