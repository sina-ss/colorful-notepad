import { Stack, Typography } from "@mui/material";

const Term = (firstTerm: Boolean, Header: String, Content: String) => {
  return (
    <>
      <Typography
        variant="h6"
        fontSize="1.5rem"
        sx={{ mb: firstTerm ? 3 : 0 }}
        gutterBottom
      >
        {Header}
      </Typography>
      <Typography
        variant="body1"
        fontSize="1.5rem"
        lineHeight="3.3125rem"
        sx={{ mt: 2 }}
      >
        {Content}
      </Typography>
    </>
  );
};

const Terms = () => {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="body1" fontSize="1.5rem" sx={{ mt: 2, mb: 10 }}>
        Terms and Conditions of use
      </Typography>
      {/* <Term
        firstTerm={true}
        Header="1. Introduction"
        Content="Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website."
      /> */}
    </Stack>
  );
};

export default Terms;
