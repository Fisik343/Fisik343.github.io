import Typography, {
  type TypographyProps,
  type TypographyOwnProps,
} from "@mui/material/Typography";
import Container, { type ContainerProps } from "@mui/material/Container";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import ConstructionIcon from "@mui/icons-material/Construction";
import { default as MUILink, type LinkProps } from "@mui/material/Link";
import React from "react";

export const Page = (props: ContainerProps) => (
  <Container
    maxWidth="xxl"
    sx={{
      padding: 2,
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
  <Typography variant="h5" align="center" color="primary" {...props} />
);

export const SubSubHeader = (props: TypographyProps) => (
  <Typography variant="h6" fontWeight="bold" color="secondary" {...props} />
);

export const Body = (props: TypographyProps) => (
  <Typography variant="body1" {...props} />
);

interface TextBlockProps extends TypographyProps {
  caption?: string;
  captionAlign?: TypographyOwnProps["align"];
}

export const TextBlock = ({
  caption,
  captionAlign = "right",
  ...rest
}: TextBlockProps) => (
  <Box sx={{ display: "flex", flexDirection: "column", gap: 0.25 }}>
    <Box
      sx={{
        borderRadius: 2,
        backgroundColor: "grey.900",
        padding: 2,
      }}
    >
      <Typography variant="body2" fontFamily="monospace" {...rest} />
    </Box>
    {caption && (
      <Typography variant="caption" align={captionAlign}>
        {caption}
      </Typography>
    )}
  </Box>
);

export const Link = (props: LinkProps) => (
  <MUILink
    target="_blank"
    rel="noopener noreferrer"
    color="secondary"
    {...props}
  />
);

export const Line = () => <Divider sx={{ marginTop: 1, marginBottom: 1 }} />;

export const UnderConstruction = () => (
  <>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <ConstructionIcon
        sx={{ flexGrow: 1, height: "auto", maxWidth: "240px" }}
      />
    </Box>
    <Typography variant="h5" align="center">
      Under Construction
    </Typography>
  </>
);

export const CardBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 2,
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
                // Only commenting for now because I'm an idiot and will forget that I had this at
                // one point for some reason or another. Going to wait until I run into the reason.
                // It's a personal site so I'm allowed to do that without "adding bugs to a critical service" :3
                // boxSizing: "border-box",
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
  bodyContent?: React.ReactNode;
}

export const LinkCard: React.FC<LinkCardProps> = ({
  link,
  title,
  body,
  bodyContent,
}) => (
  <Card sx={{ height: "100%", maxWidth: "300px", borderRadius: 2 }}>
    <CardActionArea href={link} sx={{ height: "100%" }}>
      <CardContent>
        <Typography variant="h5" align="center" color="primary">
          {title}
        </Typography>
        <Line />
        {bodyContent}
        {body && !bodyContent && (
          <Typography variant="body1">{body}</Typography>
        )}
      </CardContent>
    </CardActionArea>
  </Card>
);

type imgBoxSize = "md" | "sm" | "xs";

interface ImageBoxProps {
  imgPaths: Array<string>;
  caption?: string;
  size?: imgBoxSize;
}

const imgBoxSizes: Record<imgBoxSize, string> = {
  md: "800px",
  sm: "640px",
  xs: "480px",
};

export const ImageBox: React.FC<ImageBoxProps> = ({
  imgPaths,
  caption,
  size = "md",
}) => {
  const imgMaxWidth = imgBoxSizes[imgPaths.length === 1 ? size : "md"];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          width: "100%",
        }}
      >
        {imgPaths.map((img) => (
          <Box
            component="img"
            src={img}
            sx={{
              flex: 1,
              minWidth: "320px",
              maxWidth: imgMaxWidth,
              height: "auto",
              objectFit: "contain",
              borderRadius: 2,
            }}
          />
        ))}
      </Box>
      {caption && (
        <Typography variant="subtitle1" align="center">
          {caption}
        </Typography>
      )}
    </Box>
  );
};
