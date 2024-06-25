import React, { useState, useEffect } from "react";
import { Box, Stack, SvgIcon, Typography, keyframes } from "@mui/material";
import LargeLogo from "./icons/LargeLogo";
import Connector from "./Connector";
import logoIcon from "@/assets/logo.svg";
import { BlackColors } from "@/constants/color";

interface OpenedNoteBookProps {
  to: string;
  from?: string;
  message: string;
  color: string;
  createdAt: string;
}

const flipAndMoveLeftPage = keyframes`
  0% {
    transform: rotateY(0deg) translateX(0);
  }
  100% {
    transform: rotateY(-180deg) translateX(-50%);
  }
`;

const returnRightPage = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(50%);
  }
`;

const returnToCenter = keyframes`
  0% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
`;

const OpenedNoteBook: React.FC<OpenedNoteBookProps> = ({
  to,
  from = "",
  message,
  color,
  createdAt,
}) => {
  const [showElements, setShowElements] = useState(false);
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElements(true);
    }, 1500); // duration of the animation in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      maxWidth="62.5rem"
      position="relative"
      display="flex"
      gap="1.5rem"
      sx={{ perspective: "1000px" }}
    >
      <Box
        display={{ xs: "none", md: "flex" }}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="30.1875rem"
        height="37.5rem"
        borderRadius="0rem 3.125rem 3.125rem 0rem"
        bgcolor="#FFF"
        px="5.5rem"
        right=".75rem"
        sx={{
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60))",
          transformOrigin: "left",
          animation: `${flipAndMoveLeftPage} 1.5s ease forwards`,
          position: "absolute",
          zIndex: 10,
        }}
        onAnimationEnd={() => setShowElements(true)}
      >
        {showElements && (
          <>
            <div style={{ transform: "rotateY(-180deg)" }}>
              <LargeLogo />
            </div>
            <Typography
              textAlign="center"
              variant="body1"
              color="#000"
              sx={{
                position: "absolute",
                bottom: "2.5rem",
                transform: "rotateY(-180deg)",
              }}
            >
              Posted on {formattedDate}
            </Typography>
          </>
        )}
      </Box>
      {showElements && (
        <Box
          position="absolute"
          height="100%"
          display={{ xs: "none", md: "flex" }}
          flexDirection="column"
          gap="2rem"
          alignItems="center"
          justifyContent="center"
          left="calc(50% - 3.5rem)"
          zIndex="11"
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
      )}
      <Box
        width={{xs: "22rem", md: "30.1875rem"}}
        height={{xs: "30rem",md: "37.5rem"}}
        borderRadius={{ xs: "2rem", md: "0rem 3.125rem 3.125rem 0rem" }}
        bgcolor={color} // Set the selected color
        position={{ md: "relative" }}
        left=".75rem"
        sx={{
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60))",
          transformOrigin: { xs: "none", md: "right" },
          animation: { xs:`${returnToCenter} 1.5s ease forwards`,md: `${returnRightPage} 1.5s ease forwards`},
          zIndex: 0,
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mt="2.5rem"
          px={4}
        >
          <Typography
            color={color === "#FFFFFF" ? "#000" : "#FFF"}
            fontSize="1.5rem"
            fontWeight={500}
          >
            To: {to}
          </Typography>
          <img src={logoIcon} />
        </Stack>
        <Typography
          color={BlackColors.includes(color) ? "#FFF" : "#000"}
          fontSize="1.5rem"
          fontWeight={500}
          sx={{
            mt: "2.25rem",
            px: "3rem",
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
            color={color === "#000000" ? "#FFF" : "#000"}
          >
            IOU
          </Typography>
          <Typography
            color={color === "#FFFFFF" ? "#000" : "#FFF"}
            fontSize="1.5rem"
            fontWeight={500}
          >
            {from !== "" ? `From: ${from}` : ""}
          </Typography>
        </Stack>
        <Typography
          textAlign="center"
          variant="body1"
          color="#000"
          sx={{
            display: { xs: "block", md: "none" },
            position: "absolute",
            bottom: ".75rem",
            width: "100%",
          }}
        >
          Posted on {formattedDate}
        </Typography>
      </Box>
      {showElements && (
        <Box
          width="30.1875rem"
          height="37.5rem"
          borderRadius="3.125rem 0 0 3.125rem"
          bgcolor="#FFF"
          position="absolute"
          left="0"
          px="5.5rem"
          sx={{
            transform: "rotateY(-180deg)",
            backfaceVisibility: "hidden",
            zIndex: 0,
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.60))",
          }}
        >
          <LargeLogo />
        </Box>
      )}
    </Box>
  );
};

export default OpenedNoteBook;
