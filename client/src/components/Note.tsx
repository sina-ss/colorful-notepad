import { Box, Dialog, SvgIcon, Typography, styled } from "@mui/material";
import DotsIcon from "./icons/DotsIcon";
import { BlackColors } from "@/constants/color";
import OpenedNoteBook from "./OpenedNoteBook";
import { useState } from "react";

interface NoteProps {
  to: string;
  message: string;
  color: string;
  from?: string;
}

const StyledBackdrop = styled("div")(({}) => ({
  backdropFilter: "blur(10px)",
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
}));

const Note: React.FC<NoteProps> = ({ to, message, from="", color }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        height="23.75rem"
        width="19.4375rem"
        bgcolor={color}
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px="3.31rem"
        onClick={handleClickOpen}
        sx={{
          borderRadius: "0rem 3.125rem 3.125rem 0rem",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60))",
          overflow: "visible",
        }}
      >
        <Box
          width="5.8125rem"
          height="2.625rem"
          bgcolor="#FFF"
          position="absolute"
          top="3.94rem"
          right="-1px"
          boxShadow="0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
        >
          <Typography
            variant="body1"
            color="#000"
            textAlign="center"
            fontWeight={600}
            sx={{ lineHeight: "2.625rem", textDecorationLine: "underline" }}
          >
            {to}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color={BlackColors.includes(color) ? "#FFF" : "#000"}
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            wordBreak: "break-all",
          }}
        >
          {message}
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          gap="1.2rem"
          position="absolute"
          left="-.4rem"
        >
          <SvgIcon sx={{ overflow: "visible" }}>
            <DotsIcon />
          </SvgIcon>
          <SvgIcon sx={{ overflow: "visible" }}>
            <DotsIcon />
          </SvgIcon>
          <SvgIcon sx={{ overflow: "visible" }}>
            <DotsIcon />
          </SvgIcon>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          sx: {
            background: "none",
            boxShadow: "none",
            overflow: "visible",
          },
        }}
        slots={{
          backdrop: StyledBackdrop,
        }}
      >
        <OpenedNoteBook color={color} to={to} message={message} from={from}/>
      </Dialog>
    </>
  );
};

export default Note;
