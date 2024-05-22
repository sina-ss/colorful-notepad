import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Input,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Connector from "@/components/Connector";
import LargeLogo from "@/components/LargeLogo";
import SmallNote from "@/components/SmallNote";
import logoIcon from "@/assets/logo.svg";
import { colors } from "@/constants/color";
import { Link } from "react-router-dom";
import InstagramIcon from "@/components/InstagramIcon";
import { createNote } from "@/api/note";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "@/components/ui/CustomInput";

const Submit = () => {
  const [noteData, setNoteData] = useState({
    to: "",
    from: "",
    message: "",
    color: "#A377FB",
  });

  const [errors, setErrors] = useState({
    to: "",
    message: "",
    from: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNoteData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleColorChange = (color: string) => {
    setNoteData((prevState) => ({ ...prevState, color }));
  };

  const validate = () => {
    let isValid = true;
    const newErrors = { to: "", message: "", from: "" };

    if (noteData.to.length < 1 || noteData.to.length > 12) {
      newErrors.to = "Recipient name must be between 1 and 12 characters.";
      isValid = false;
    }

    if (noteData.message.length < 3 || noteData.message.length > 250) {
      newErrors.message = "Message must be between 3 and 250 characters.";
      isValid = false;
    }

    if (noteData.from.length > 12) {
      newErrors.from = "Sender name must be less than 12 characters.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validate()) {
      toast.error("Please correct the errors in the form.");
      return;
    }

    try {
      const response = await createNote(noteData);
      console.log("Note created successfully:", response);
      toast.success("Note created successfully!");
      // Reset form fields
      setNoteData({ to: "", from: "", message: "", color: "#A377FB" });
    } catch (error) {
      console.error("Error submitting note:", error);
      toast.error("Failed to create note.");
    }
  };

  return (
    <Box
      mt="6.19rem"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <ToastContainer />
      <Typography fontWeight={700} variant="h1" textAlign="center" gutterBottom>
        Write a note
      </Typography>
      <Box maxWidth="62.5rem" position="relative" display="flex" gap="1.5rem">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="30.1875rem"
          height="37.5rem"
          borderRadius="3.125rem 0 0 3.125rem"
          bgcolor="#FFF"
          px="5.5rem"
          sx={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60))" }}
        >
          <LargeLogo />
          <Grid container columnSpacing=".63rem" rowSpacing=".5rem">
            {colors.map((color, index) => (
              <Grid item xs={2} key={index}>
                <Box
                  onClick={() => handleColorChange(color)}
                  sx={{ cursor: "pointer" }}
                >
                  <SmallNote color={color} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          position="absolute"
          height="100%"
          display="flex"
          flexDirection="column"
          gap="2rem"
          alignItems="center"
          justifyContent="center"
          left="27.5rem"
          zIndex="2"
        >
          <SvgIcon sx={{ overflow: "visible" }}>
            <Connector />
          </SvgIcon>
          <SvgIcon sx={{ overflow: "visible" }}>
            <Connector />
          </SvgIcon>
          <SvgIcon sx={{ overflow: "visible" }}>
            <Connector />
          </SvgIcon>
        </Box>
        <Box
          width="30.1875rem"
          height="37.5rem"
          borderRadius="0rem 3.125rem 3.125rem 0rem"
          bgcolor={noteData.color} // Set the selected color
          position="relative"
          sx={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60))" }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mt="2.5rem"
            px={4}
          >
            <Typography
              color={noteData.color === "#FFFFFF" ? "#000" : "#FFF"}
              fontSize="1.5rem"
              fontWeight={500}
            >
              To:{" "}
              <CustomInput
                name="to"
                value={noteData.to}
                onChange={handleChange}
                isWhite={noteData.color === "#FFFFFF"}
              />
            </Typography>
            <img src={logoIcon} />
          </Stack>
          {errors.to && (
            <Typography color="error" variant="caption">
              {errors.to}
            </Typography>
          )}
          <Input
            multiline
            fullWidth
            sx={{
              mt: "2.25rem",
              px: "3rem",
              color: "#B4B4B4",
              fontSize: "2rem",
              fontWeight: 600,
            }}
            placeholder="Write your note here..."
            name="message"
            value={noteData.message}
            onChange={handleChange}
            disableUnderline
          />
          {errors.message && (
            <Typography color="error" variant="caption">
              {errors.message}
            </Typography>
          )}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            position="absolute"
            bottom="2.5rem"
            width="100%"
            px={4}
          >
            <Typography
              fontWeight={600}
              fontSize="1.5rem"
              color={noteData.color === "#000000" ? "#FFF" : "#000"}
            >
              IOU
            </Typography>
            <Typography
              color={noteData.color === "#FFFFFF" ? "#000" : "#FFF"}
              fontSize="1.5rem"
              fontWeight={500}
            >
              From:{" "}
              <CustomInput
                name="from"
                value={noteData.from}
                onChange={handleChange}
                isWhite={noteData.color === "#FFFFFF"}
              />
              {errors.from && (
                <Typography color="error" variant="caption">
                  {errors.from}
                </Typography>
              )}
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Button
        fullWidth
        variant="outlined"
        sx={{
          mt: "3.13rem",
          borderRadius: "1.25rem",
          color: "#00000038",
          fontSize: "1.5rem",
          fontWeight: 700,
          maxWidth: "62.5rem",
        }}
        onClick={handleSubmit}
      >
        Submit your note
      </Button>
      <Typography textAlign="center" sx={{ mt: "1.69rem" }}>
        I agree to the
        <Button component={Link} to="/terms" sx={{ color: "#1227FC" }}>
          terms of the submission
        </Button>
      </Typography>
      <Button
        component={Link}
        to="/terms"
        variant="text"
        sx={{ mt: "4.87rem", mb: 2 }}
        endIcon={
          <SvgIcon>
            <InstagramIcon />
          </SvgIcon>
        }
      >
        #IOUPROJECT
      </Button>
    </Box>
  );
};

export default Submit;
