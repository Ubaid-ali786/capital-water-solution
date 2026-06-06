"use client";

import { Box, Container, Divider, Typography, useTheme } from "@mui/material";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  const theme = useTheme();
  
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 800,
            textAlign: "center",
            color: theme.palette.primary.main,
            fontSize: { xs: "2rem", md: "2.5rem" },
          }}
        >
          {title}
        </Typography>
        <Divider
          sx={{
            width: 100,
            mx: "auto",
            mb: 4,
            borderColor: theme.palette.primary.main,
            borderWidth: 3,
            borderRadius: 2,
          }}
        />
        {children}
      </Container>
    </Box>
  );
}