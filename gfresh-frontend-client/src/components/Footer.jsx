import React from 'react'
import { NavLink } from 'react-router-dom'
import { Box, Container, Grid, Typography, IconButton } from '@mui/material'
import { Facebook, LinkedIn, YouTube, Instagram } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
      <Box sx={{ bgcolor: '#f8f8f8', py: 4 }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                About
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your company description goes here. You can provide a brief overview of your services and mission.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Information
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <NavLink to="/privacypolicy">Privacy Policy</NavLink>
                </li>
                <li>
                  <NavLink to="/termsconditions">Terms & Conditions</NavLink>
                </li>
              </ul>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body2" color="text.secondary">
                JP Nagar, Bengaluru, India - 560078
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: interviewkunal@gmail.com
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Follow Us:</Typography>
                <IconButton href="https://www.facebook.com/kunalsarkar/" target="_blank" aria-label="Facebook">
                  <Facebook />
                </IconButton>
                <IconButton href="https://www.linkedin.com/in/kunal-sarkar/" target="_blank" aria-label="LinkedIn">
                  <LinkedIn />
                </IconButton>
                <IconButton href="https://www.youtube.com/channel/your_channel" target="_blank" aria-label="YouTube">
                  <YouTube />
                </IconButton>
                <IconButton href="https://www.instagram.com/kunal_.sarkar/" target="_blank" aria-label="Instagram">
                  <Instagram />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer