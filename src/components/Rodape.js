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

function Rodape() {
  return (
    <Box style={rodapeStyle}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
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
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Siga-nos</Typography>
            <Box display="flex" mt={1}>
              <Link href="https://www.instagram.com/eog_xx" color="inherit" target="_blank" style={linkStyle}>
                <IconButton color="inherit">
                  <InstagramIcon fontSize="small" />
                </IconButton>
              </Link>
              <Link href="https://wa.me/5567998725691?text=Opa%2C+vim+pelo+seu+site%21" color="inherit" target="_blank" style={linkStyle}>
                <IconButton color="inherit">
                  <WhatsAppIcon fontSize="small" />
                </IconButton>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Informações Adicionais</Typography>
            <Box display="flex" mt={1}>
              <Link href="#" color="inherit" style={linkStyle}>
                <Typography variant="body2" ml={1}>Política de Privacidade</Typography>
              </Link>
              <Link href="#" color="inherit" style={linkStyle}>
                <Typography variant="body2" ml={1}>Termos de Uso</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <center>
          <Box mt={2}>
            <Typography variant="caption">
              IFMS Dourados – Trabalho de Frameworks2 – Prof. Ricardo
            </Typography>
            <br />
            <Typography variant="caption">
              <Link href="https://www.instagram.com/eog_xx" style={linkStyle}>
                Guilherme Santos de Oliveira
              </Link>
            </Typography>
          </Box>
        </center>
      </Container>
    </Box>
  );
}

export default Rodape;
