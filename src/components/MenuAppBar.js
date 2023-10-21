import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import logo_priv from '../imagens/logo_priv_gif.gif'

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const MenuAppBar = (props) => {
  return (
    <HideOnScroll {...props}>
      <AppBar
        position="fixed"
        color="default"
        style={{ zIndex: 1000 }}
      >
        <Toolbar>
          <IconButton color="inherit" edge="start">
            <a
              href="https://www.instagram.com/eog_xx/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <InstagramIcon />
            </a>
          </IconButton>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="h6">
              <img src={logo_priv} alt="Logo" style={{ height: '69px' }} />
            </Typography>
          </div>
          <IconButton color="inherit" edge="end">
            <a
              href="https://github.com/guio11221"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: 'inherit', textDecoration: 'none' }}
            >
              <GitHubIcon />
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default MenuAppBar;
