// pages/Home.js
import { ChangeEvent, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api/api";
import Note from "@/components/Note";
import { Note as NoteType } from "@/types/note";
import SearchTextField from "@/components/ui/SearchTextField";
import { Box, Grid, Typography } from "@mui/material";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: notes = [], isLoading } = useQuery({
    queryKey: ["notes"],
    queryFn: () => axiosInstance.get("/notes").then((res) => res.data),
  });

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes: NoteType[] = notes.filter((note: NoteType) =>
    note.to.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderNote = (note: NoteType) => (
    <Grid
      item
      xs={12}
      md={4}
      xl={3}
      display="flex"
      justifyContent="center"
      key={note.id}
    >
      <Note to={note.to} message={note.message} color={note.color} from={note.from || ""} />
    </Grid>
  );

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={4}>
      <Typography variant="h1" fontWeight="Bold" gutterBottom>
        IOU
      </Typography>
      <Typography variant="body1" textAlign="center">
        A platform for expressing what's often left unsaid, share the unspoken
        words of gratitude and affection
      </Typography>
      <Typography variant="body1" textAlign="center">
        "I Owe You connects hearts through unsent words
      </Typography>
      <Typography variant="body1" color="text.secondary" mt={3}>
        {filteredNotes.length} posts found
      </Typography>
      <SearchTextField
        variant="filled"
        placeholder="Search for a name..."
        fullWidth
        InputProps={{
          disableUnderline: true,
        }}
        sx={{ mt: 5 }}
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {isLoading ? (
        <Typography variant="body1" mt={5}>
          Loading notes...
        </Typography>
      ) : (
        <Grid
          container
          justifyContent="space-around"
          alignItems="center"
          width="100%"
          rowSpacing={5}
          mt={5}
        >
          {filteredNotes.map(renderNote)}
        </Grid>
      )}
    </Box>
  );
};

export default Home;