import { Button, styled } from "@mui/material";

export const PrimaryButton = styled(Button)({
  color: "black",
  textTransform: "none",
  "&::first-letter": {
    textTransform: "uppercase",
  },
  borderColor: "black",
  border: "1px solid #000",
  borderRadius: "1.25rem",
  width: "6.1875rem",
  height: "2.6875rem",
});
