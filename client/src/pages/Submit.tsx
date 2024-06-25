import React, { useState } from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Input,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import Connector from "@/components/Connector";
import LargeLogo from "@/components/icons/LargeLogo";
import SmallNote from "@/components/SmallNote";
import logoIcon from "@/assets/logo.svg";
import { colors } from "@/constants/color";
import { Link } from "react-router-dom";
import { createNote } from "@/api/note";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomInput from "@/components/ui/CustomInput";
import IOULink from "@/components/IOULink";
import { PiWarningCircleFill } from "react-icons/pi";

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

  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNoteData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleColorChange = (color: string) => {
    setNoteData((prevState) => ({ ...prevState, color }));
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAgreed(e.target.checked);
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
    if (!isAgreed) {
      toast.error("You must agree to the terms of the submission.");
      return;
    }
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
      toast.error("Failed to create note.");
    }
  };

  return (
    <Box
      mt={{ xs: "1rem", md: "6.19rem" }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <ToastContainer />
      <Typography
        fontWeight={700}
        display={{ xs: "none", md: "block" }}
        variant="h1"
        textAlign="center"
        gutterBottom
      >
        Write a note
      </Typography>
      <Typography
        fontWeight={700}
        display={{ xs: "block", md: "none" }}
        variant="h3"
        component="h1"
        textAlign="center"
        gutterBottom
      >
        Write a note
      </Typography>
      <Box
        maxWidth="62.5rem"
        position="relative"
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        gap="1.5rem"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width={{ xs: "95%", md: "30.1875rem" }}
          height={{ xs: "30rem", md: "37.5rem" }}
          borderRadius={{ xs: "2rem", md: "3.125rem 0 0 3.125rem" }}
          bgcolor="#FFF"
          px={{ xs: "2rem", md: "5.5rem" }}
          mx={{ xs: "auto", md: 0 }}
          sx={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60))" }}
        >
          <LargeLogo />
          <Grid container columnSpacing=".63rem" rowSpacing=".5rem">
            {colors.map((color, index) => (
              <Grid item xs={2.4} md={2} key={index}>
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
          display={{ xs: "none", md: "flex" }}
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
          width={{ xs: "95%", md: "30.1875rem" }}
          height={{ xs: "30rem", md: "37.5rem" }}
          borderRadius={{ xs: "2rem", md: "0rem 3.125rem 3.125rem 0rem" }}
          bgcolor={noteData.color} // Set the selected color
          position="relative"
          mx={{ xs: "auto", md: 0 }}
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
          <Input
            multiline
            fullWidth
            sx={{
              mt: "2.25rem",
              px: "3rem",
              color: "#B4B4B4",
              fontSize: { xs: "1.25rem", md: "2rem" },
              fontWeight: 600,
            }}
            placeholder="Write your note here..."
            name="message"
            value={noteData.message}
            onChange={handleChange}
            disableUnderline
          />
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
            </Typography>
          </Stack>
        </Box>
      </Box>
      {(errors.to + errors.from + errors.message) && (
        <Box
          borderRadius="0.625rem"
          padding="1.5rem 2.8125rem"
          bgcolor="#FECACA"
          mt={2}
        >
          <Typography color="error">
            <PiWarningCircleFill color="error" /> There were errors with your
            submission
          </Typography>
          {errors.to && (
            <Typography color="error" component="p" variant="caption" sx={{ pl: 3 }}>
              {errors.to}
            </Typography>
          )}
          {errors.from && (
            <Typography color="error" component="p" variant="caption" sx={{ pl: 3 }}>
              {errors.from}
            </Typography>
          )}
          {errors.message && (
            <Typography color="error" component="p" variant="caption" sx={{ pl: 3 }}>
              {errors.message}
            </Typography>
          )}
        </Box>
      )}
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
        disabled={!isAgreed}
      >
        Submit your note
      </Button>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="1.69rem"
      >
        <FormControlLabel
          control={
            <Checkbox checked={isAgreed} onChange={handleAgreementChange} />
          }
          label={
            <Typography textAlign="center">
              I agree to the{" "}
              <Button component={Link} to="/terms" sx={{ color: "#1227FC" }}>
                terms of the submission
              </Button>
            </Typography>
          }
        />
      </Box>
      <IOULink />
    </Box>
  );
};

export default Submit;
