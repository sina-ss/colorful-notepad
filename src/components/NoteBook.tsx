import React, { useRef, useState } from "react";
import { Dialog, styled } from "@mui/material";
import OpenedNoteBook from "./OpenedNoteBook";

interface NoteBookProps {
  text: string;
  color: string;
}

const StyledBackdrop = styled("div")(({}) => ({
  backdropFilter: "blur(10px)", // Apply blur effect
  position: "fixed",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
}));

const NoteBook: React.FC<NoteBookProps> = ({ text, color }) => {
  const textRef = useRef<SVGTextElement>(null);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <svg
        width="328"
        height="388"
        viewBox="0 0 328 388"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleClickOpen}
      >
        <g filter="url(#filter0_d_1_618)">
          <path
            d="M12 0H243C271.003 0 285.004 0 295.7 5.44967C305.108 10.2433 312.757 17.8924 317.55 27.3005C323 37.9961 323 51.9974 323 80V300C323 328.003 323 342.004 317.55 352.7C312.757 362.108 305.108 369.757 295.7 374.55C285.004 380 271.003 380 243 380H12V0Z"
            fill={color}
          />
          <path
            d="M30.4979 149.197C34.7184 149.197 38.0232 145.7 38.0232 141.532C38.0232 137.364 34.7184 133.866 30.4979 133.866C26.2775 133.866 22.9727 137.364 22.9727 141.532C22.9727 145.7 26.2775 149.197 30.4979 149.197Z"
            fill="white"
            stroke="black"
            strokeWidth="5"
          />
          <path
            d="M30.4979 197.546C34.7184 197.546 38.0232 194.049 38.0232 189.88C38.0232 185.712 34.7184 182.215 30.4979 182.215C26.2775 182.215 22.9727 185.712 22.9727 189.88C22.9727 194.049 26.2775 197.546 30.4979 197.546Z"
            fill="white"
            stroke="black"
            strokeWidth="5"
          />
          <path
            d="M30.4979 245.894C34.7184 245.894 38.0232 242.397 38.0232 238.229C38.0232 234.061 34.7184 230.563 30.4979 230.563C26.2775 230.563 22.9727 234.061 22.9727 238.229C22.9727 242.397 26.2775 245.894 30.4979 245.894Z"
            fill="white"
            stroke="black"
            strokeWidth="5"
          />
          <path
            d="M7 141.647L30 141.647"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M7 190.526L30 190.526"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M7 238.406L30 238.406"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
        <g filter="url(#shadow)">
          <rect
            width={text.length > 11 ? "104" : "93"}
            height="42"
            transform={
              text.length > 11 ? "translate(220 63)" : "translate(231 63)"
            }
            fill="white"
          />
          <text
            ref={textRef}
            x={text.length > 11 ? "272" : "277.5"}
            y="84"
            textAnchor="middle"
            dominantBaseline="central"
            fontFamily="sans-serif"
            fontSize="16"
            fontWeight="600"
            fill="black"
          >
            {text}
          </text>
        </g>
        <defs>
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="0"
              dy="4"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity="0.3"
            />
          </filter>
          <filter
            id="filter0_d_1_618"
            x="0.5"
            y="0"
            width="326.5"
            height="388"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_618"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_618"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
          sx: {
            background: "none",
            boxShadow: "none",
          },
        }}
        slots={{
          backdrop: StyledBackdrop,
        }}
      >
        <OpenedNoteBook />
      </Dialog>
    </>
  );
};

export default NoteBook;
