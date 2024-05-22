import { useState } from "react";
import { InputBase, Box, styled } from "@mui/material";

const StyledInputBase = styled(InputBase)(({}) => ({
  border: "none",
  padding: "8px 0",
  position: "relative",
  fontWeight: 500,
  "& input": {
    padding: 0,
    border: "none",
    outline: "none",
    backgroundColor: "inherit",
  },
}));

interface BlinkingCursorProps {
  isWhite: boolean;
}

const BlinkingCursor = styled("div")<BlinkingCursorProps>(({ isWhite }) => ({
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  width: "2px",
  height: "1em",
  backgroundColor: isWhite ? "#000" : "#FFF",
  animation: "blinking 1.5s infinite",
  pointerEvents: "none",
  "@keyframes blinking": {
    "0%": { opacity: 1 },
    "50%": { opacity: 0 },
    "100%": { opacity: 1 },
  },
}));
interface CustomInputProps {
  name: string;
  value: string;
  isWhite: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  name,
  value,
  onChange,
  isWhite,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        backgroundColor: "transparent",
        width: "8rem",
      }}
    >
      {!isFocused && <BlinkingCursor isWhite={isWhite} />}
      <StyledInputBase
        name={name}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={onChange}
        sx={{ color: isWhite ? "#000" : "#FFF" }}
      />
    </Box>
  );
};

export default CustomInput;
