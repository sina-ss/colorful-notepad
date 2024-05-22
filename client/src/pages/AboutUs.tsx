import IOULink from "@/components/IOULink";
import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="h1" fontWeight={700} gutterBottom mt={4}>
        IOU
      </Typography>
      <Typography variant="body1">
        A platform for expressing what’s often left unsaid
      </Typography>
      <Typography variant="body1" textAlign="center" gutterBottom mt={10}>
        Welcome to IOU, where emotions find a voice in the unsent. We believe in
        the power of unspoken words, the gratitude left unexpressed, and the
        affection waiting to be shared. At IOU, we provide a platform for
        connecting hearts through the art of unspoken messages. Join us in
        creating a tapestry of emotions, where every word unspoken becomes a
        bridge to deeper connections.
      </Typography>
      <Typography variant="body1" textAlign="center">
        Express with IOU by adding a splash of color to your sentiments. Share
        messages with the hues that resonate with your emotions. Whether it's a
        declaration of love, a note to an ex, a reflection on oneself, a message
        for a parent, a tribute to a friend, or even an ode to your favorite
        pets – the canvas is yours. Let the colors speak the unspoken, and let
        your emotions paint a story that goes beyond words. Because at IOU, we
        celebrate the diverse spectrum of feelings that make each submission
        unique. Join us in the colourful journey of expressing what truly
        matters, where every shade tells a story. 💬🎨 #ShareYourUnsent
      </Typography>
      <IOULink />
    </Box>
  );
};

export default AboutUs;
