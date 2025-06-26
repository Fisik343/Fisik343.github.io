import Typography, { type TypographyProps } from "@mui/material/Typography";
import Container, { type ContainerProps } from "@mui/material/Container";
import Divider from "@mui/material/Divider";

export const Page = (props: ContainerProps) => (
  <Container
    maxWidth="xxl"
    sx={{
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "16px",
    }}
    {...props}
  />
);

export const Header = (props: TypographyProps) => (
  <Typography align="center" variant="h4" {...props} />
);

export const SubHeader = (props: TypographyProps) => (
  <Typography variant="h5" align="center" color="secondary" {...props} />
);

export const Body = (props: TypographyProps) => (
  <Typography variant="body1" {...props} />
);

export const Line = () => <Divider sx={{ marginTop: 1, marginBottom: 1 }} />;
