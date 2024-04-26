import { TextField, styled } from "@mui/material";

const SearchTextField = styled(TextField)({
  "& .MuiFilledInput-input": {
    color: "#AFB1B6",
    padding: '16px 12px'
  },
  "& .MuiFilledInput-root": {
    backgroundColor: "#EFEFF0",
    borderRadius: '16px',
    "&:hover": {
      backgroundColor: "#EFEFF0",
    },
    "&.Mui-focused": {
      backgroundColor: "#EFEFF0",
    },
    border: "none",
    "&:before": {
      borderBottom: "none",
    },
    "&:after": {
      borderBottom: "none",
    },
  },
});

export default SearchTextField;