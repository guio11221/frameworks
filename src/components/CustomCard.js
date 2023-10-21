import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

/**
 * 
 * @param {string} titulo titulo da noticia que deseja por no Card
 * @param {string} descricao descricao da noticia 
 * @param {Date} dataInit data de criação da noticia
 * @param {Date} dataPub data de publicação da noticia
 * @returns 
 */
export default function CustomCard({ titulo, descricao, dataInit, dataPub }) {
  const [mostrarDescricaoCompleta, setMostrarDescricaoCompleta] = useState(false);

  const toggleDescricao = () => {
    setMostrarDescricaoCompleta(!mostrarDescricaoCompleta);
  };

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea onClick={toggleDescricao}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <div style={{ height: '100px', overflow: 'hidden' }}>
            <Typography variant="body2" color="text.secondary">
              {mostrarDescricaoCompleta ? descricao : `${descricao.substring(0, 100)}...`}
            </Typography>
          </div>
          <Typography variant="body2" color="primary">
            {mostrarDescricaoCompleta ? 'Ver menos' : 'Ver mais'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
