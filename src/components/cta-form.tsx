"use client";

import { CheckCircle } from "@mui/icons-material";
import {
    Box,
    Button,
    Container,
    Grid,
    Paper,
    TextField,
    Typography,
    useTheme,
} from "@mui/material";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function EnquiryForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_jl5xz6f", // 🔴 apna SERVICE ID daal
        "template_ugrunty", // 🔴 apna TEMPLATE ID daal
        formData,
        "J8qMe2KDtsUytvk6C", // 🔴 apna PUBLIC KEY daal
      );

      setSubmitted(true);
      setFormData({
        name: "",
        mobile: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.log("Error:", error);
      alert("Failed to send message ❌");
    }

    setLoading(false);
  };

  return (
    <Box
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        py: 8,
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" sx={{ mb: 3 }}>
            Contact Us
          </Typography>

          {submitted ? (
            <Box>
              <CheckCircle sx={{ fontSize: 60, color: "green" }} />
              <Typography sx={{ mt: 2 }}>Message Sent Successfully!</Typography>
            </Box>
          ) : (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Mobile"
                    required
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    type="email"
                    label="Email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Requirement"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Submit"}
                  </Button>
                </Grid>
              </Grid>
            </form>
          )}
        </Paper>
      </Container>
    </Box>
  );
}
