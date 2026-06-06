"use client";

import { Facebook, Instagram, LinkedIn, WhatsApp } from "@mui/icons-material";
import { Box, Container, IconButton, Stack, useTheme } from "@mui/material";
import { socialLinks } from "../data/homeData";

const iconMap = {
  WhatsApp: WhatsApp,
  Facebook: Facebook,
  Instagram: Instagram,
  LinkedIn: LinkedIn,
};

export default function SocialMediaBar() {
  const theme = useTheme();

  const getIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return <IconComponent />;
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        py: 3,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="xl">
        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              sx={{
                bgcolor: `${social.color}15`,
                color: social.color,
                "&:hover": {
                  bgcolor: social.color,
                  color: "white",
                  transform: "translateY(-3px)",
                },
                transition: "all 0.3s",
              }}
            >
              {getIcon(social.icon)}
            </IconButton>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
