import React from "react";
import { Stack, Typography } from "@mui/material";
import IOULink from "@/components/IOULink";

interface TermProps {
  firstTerm?: boolean;
  Header: string;
  Content: string;
}

const Term: React.FC<TermProps> = ({ firstTerm = false, Header, Content }) => {
  return (
    <>
      <Typography
        variant="h6"
        fontSize="1.5rem"
        sx={{ mb: firstTerm ? 3 : 0 }}
        textAlign="center"
        fontWeight={600}
      >
        {Header}
      </Typography>
      <Typography
        variant="body1"
        fontSize="1.5rem"
        lineHeight="3.3125rem"
        textAlign="center"
        fontWeight={500}
        sx={{ mt: 2, mb: 8 }}
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
      <Term
        firstTerm={true}
        Header="1. Introduction"
        Content="By using IOU, you agree to abide by these terms and conditions."
      />
      <Term
        Header="2. User Conduct: "
        Content="Users are responsible for the content they share, ensuring it aligns with the values of respect and positivity."
      />
      <Term
        Header="3. Privacy: "
        Content="We prfioritize your privacy. Read our Privacy Policy to understand how your information is collected, used, and protected."
      />
      <Term
        Header="4. Intellectual Property: "
        Content=" IOU respects intellectual property rights. Users are not allowed to infringe on copyrights or trademarks."
      />
      <Term
        Header="5. Content Moderation: "
        Content="We reserve the right to moderate and remove content that violates our guidelines."
      />
      <Term
        Header="6. Disclaimer: "
        Content="IOU is not responsible for the content shared by users. Users are solely responsible for their expressions and interactions."
      />
      <Term
        Header="7. Changes to Terms: "
        Content="IOU reserves the right to modify these terms. Users will be notified of any significant changes."
      />
      <Typography fontSize="1.5rem" fontWeight={600}>
        By using IOU, you acknowledge and agree to these terms and conditions.
      </Typography>
      <IOULink />
    </Stack>
  );
};

export default Terms;
