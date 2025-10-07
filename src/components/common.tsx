import Typography, { type TypographyProps } from "@mui/material/Typography";
import Container, { type ContainerProps } from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import React from "react";

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

export const CardBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "16px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flex: {
                  xs: "0 0 100%",
                  md: "0 0 calc((100% - 32px) / 2)",
                  lg: "0 0 calc((100% - 32px) / 3)",
                },
                boxSizing: "border-box",
              }}
            >
              {child}
            </Box>
          );
        }
        return child;
      })}
    </Box>
  );
};

interface LinkCardProps {
  link: string;
  title: string;
  body?: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, title, body }) => (
  <Card sx={{ height: "100%", maxWidth: "300px" }}>
    <CardActionArea href={link} sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h5" align="center" color="secondary">
          {title}
        </Typography>
        <Line />
        {body && <Typography variant="body1">{body}</Typography>}
      </CardContent>
    </CardActionArea>
  </Card>
);
