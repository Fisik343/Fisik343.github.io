import { Button, Container, Typography } from "@mui/material";

function Error() {
  return (
    <Container
      maxWidth="sm"
      sx={{
        paddingTop: "16px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "16px",
      }}
    >
      <Typography align="center" variant="h6">
        Oops! You ended up somewhere you shouldn't be!
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" href="/">
          Go Home!
        </Button>
      </div>
    </Container>
  );
}

export default Error;
