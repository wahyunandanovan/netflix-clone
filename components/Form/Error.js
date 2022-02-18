import { FormHelperText } from "@mui/material";
import { red } from "@mui/material/colors";

const GetErrorMassage = (type) => {
  switch (type) {
    case "minLength":
      return "Jumlah karakter tidak memenuhi minimum.";
    case "required":
    default:
      return "mohon mengisi filed";
  }
};

const FormError = ({ error }) => {
  if (!error) {
    return <></>;
  }
  const { type } = error;
  const massage = GetErrorMassage(type);

  return (
    <FormHelperText sx={{ color: red[500], m: 0 }}>{massage}</FormHelperText>
  );
};

export default FormError;
