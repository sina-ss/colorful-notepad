import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import InstagramIcon from "./icons/InstagramIcon";

const IOULink = () => {
  return (
    <Button
      component={Link}
      to="https://www.instagram.com/explore/tags/iouproject/top/"
      variant="text"
      sx={{
        mt: "4.87rem",
        mb: 2,
        fontWeight: 600,
        '&:hover': {
          fontWeight: 700,
        }
      }}
      endIcon={<InstagramIcon />}
    >
      #IOUPROJECT
    </Button>
  );
};

export default IOULink;
