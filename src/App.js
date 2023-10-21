import React, { Component } from 'react';
import './App.css'
import {
  AppBar,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
} from '@mui/material';
import { cardTitleStyle, cardStyle } from './styles/App.style';
import { requestAxios, formatarDataComHora } from './lib/request';


class App extends Component {
  state = {
    posts: [],
    openModal: false,
    selectedPost: null,
    loading: true,
  };

  async componentDidMount() {
    await this.fetchData();
  }

  fetchData = async () => {
    try {
      const data = await requestAxios();
      this.setState({ posts: data, loading: false }); // mudar o loading para false quando os dados tiver carregados
    } catch (error) {
      console.error("Erro ao carregar os posts: ", error);
      this.setState({ loading: false }); // caso de error mudar o loading para false 
    }
  };

  // abrir o modal passando os dados da api para ele
  handleCardClick = (post) => {
    this.setState({ openModal: true, selectedPost: post });
  };

  // fechar o modal 
  handleCloseModal = () => {
    this.setState({ openModal: false, selectedPost: null });
  };

  render() {
    const { posts, openModal, selectedPost, loading } = this.state;

    return (
      <div>
        <AppBar position="static" >
        <br /> <br /> <br /> 
          <Typography variant="h5" padding={2} fontSize={40} align='center'>@eog_news</Typography>
        </AppBar>
        <Container>
          {/* Se o loading tiver true significa que os dados não foi carregado, e fica o loading na tela. */}
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
              <CircularProgress />
            </div>
          ) : (
            <div style={{ marginTop: '20px' }}>
              {posts.map((post) => (
                <Card key={post.id_noticia} style={cardStyle} onClick={() => this.handleCardClick(post)}>
                  <CardContent>
                    <Typography variant="h6" style={cardTitleStyle}>{post.titulo}</Typography>
                    <Typography variant="body2">{post.resumo}</Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </Container>
        {/* Parte do modal */}
        <Dialog open={openModal} onClose={this.handleCloseModal}>
          <DialogTitle>
            {selectedPost ? selectedPost.titulo : ''}
          </DialogTitle>
          <DialogContent>
            <List>
              <ListItem>
                <ListItemText>
                  {selectedPost ? selectedPost.noticia : ''}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <strong>Autor:</strong> {selectedPost ? selectedPost.autor : ''}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <strong>Data de Criação:</strong> {selectedPost ? formatarDataComHora(selectedPost.data_criacao) : ''}
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <strong>Data da Notícia:</strong> {selectedPost ? formatarDataComHora(selectedPost.data_noticia) : ''}
                </ListItemText>
              </ListItem>
            </List>
            <Button onClick={this.handleCloseModal} color="primary" id='botao_fecharModal_app' >
              Fechar
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default App;
