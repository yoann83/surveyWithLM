import { InputLabel, FormLabel } from "@mui/material";

const Label = ({ label, asInputLabel, ...InputLabelProps }) => {
  return asInputLabel ? (
    <InputLabel {...InputLabelProps}>{label}</InputLabel>
  ) : (
    <FormLabel>{label}</FormLabel>
  );
};

export default Label;
