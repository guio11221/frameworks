import React from 'react';
import { Container, Typography, Box, Grid, Link, IconButton } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const rodapeStyle = {
  backgroundColor: '#333',
  color: 'white',
  padding: '16px',
  marginTop: '2rem',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
};

const gridItemStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
};

const socialMediaContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
};

function Rodape() {
  return (
    <Box style={rodapeStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} style={gridItemStyle}>
            <Typography variant="h6">Contate-nos</Typography>
            <Box display="flex" alignItems="center" mt={2}>
              <PhoneIcon />
              <Typography variant="body2" ml={1}>Telefone: (xx) xxxx-xxxx</Typography>
            </Box>
            <Box display="flex" alignItems="center" mt={2}>
              <EmailIcon />
              <Typography variant="body2" ml={1}>Email: guilherme.santos@melhor.com.br</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3} style={gridItemStyle}>
            <Typography variant="h6">Siga-nos</Typography>
            <Box display="flex" style={socialMediaContainerStyle}>
              <Link href="https://www.instagram.com/eog_xx" color="inherit" target="_blank" style={linkStyle}>
                <IconButton color="inherit">
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box mt={4}>
              
              <Typography variant="caption">
                IFMS Dourados – Trabalho de Frameworks2 – Prof. Ricardo
              </Typography>
              <br />
              <center>
              <Typography variant="caption">
                Guilherme Santos de Oliveira
              </Typography>
              </center>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Rodape;
