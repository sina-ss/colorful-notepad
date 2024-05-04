import Note from "@/components/Note";
import SearchTextField from "@/components/ui/SearchTextField";
import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={4}>
      <Typography variant="h1" fontWeight="Bold" gutterBottom>
        IOU
      </Typography>
      <Typography variant="body1">
        A platform for expressing what’s often left unsaid, share the unspoken
        words of gratitude and affection
      </Typography>
      <Typography variant="body1">
        “I Owe You connects hearts through unsent words
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={3}>
        40,000 posts found
      </Typography>
      <SearchTextField
        variant="filled"
        placeholder="Search for a name..."
        fullWidth
        InputProps={{
          disableUnderline: true,
        }}
        sx={{ mt: 5 }}
      ></SearchTextField>
      <Grid
        container
        justifyContent="space-around"
        alignItems="center"
        width="100%"
        rowSpacing={5}
        mt={5}
      >
        <Grid item xs={12} md={4} xl={3} display="flex" justifyContent="center">
          <Note to="Sina" message="Hiasfasfs" color="#6B6B6B"/>
        </Grid>
        <Grid item xs={12} md={4} xl={3} display="flex" justifyContent="center">
          <Note to="Sina" message="Hiasfasfs" color="#6B6B6B"/>
        </Grid>
        <Grid item xs={12} md={4} xl={3} display="flex" justifyContent="center">
          <Note to="Sina" message="Hiasfasfs" color="#6B6B6B"/>
        </Grid>
        <Grid item xs={12} md={4} xl={3} display="flex" justifyContent="center">
          <Note to="Sina" message="Hiasfasfs" color="#6B6B6B"/>
        </Grid>
        <Grid item xs={12} md={4} xl={3} display="flex" justifyContent="center">
          <Note to="Sina" message="Hiasfasfs" color="#6B6B6B"/>
        </Grid>
        <Grid item xs={12} md={4} xl={3} display="flex" justifyContent="center">
          <Note to="Sina" message="Hiasfasfs" color="#6B6B6B"/>
        </Grid>
        <Grid item xs={12} md={4} xl={3} display="flex" justifyContent="center">
          <Note to="Sina" message="Hiasfasfs" color="#6B6B6B"/>
        </Grid>
        <Grid item xs={12} md={4} xl={3} display="flex" justifyContent="center">
          <Note to="Sina" message="Hiasfasfs" color="#6B6B6B"/>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
