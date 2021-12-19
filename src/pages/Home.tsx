import React from 'react';
import { 
  Button,
  Card,
  Container,
  Row,
  Stack
} from 'react-bootstrap';

import logo from '../image/logo.png';
import whatsapp from '../image/icon-whatsapp.png';
import instagram from '../image/icon-instagram.png';

import ENUM from '../utilities/enum';

import './Home.scss';

function Home() {
  return (
    <Container>
      <Row>
        <Card className="text-center" >
          <Card.Img variant="top" src={logo} />
          <Card.Body>
            <Card.Title><h1>Pegada Baby</h1></Card.Title>
            <Card.Text>
              <h3>Aqui calçamos sua criança com amor e estilo á um preço justo!</h3>
            </Card.Text>
            <Stack gap={3} className="col-md-7 mx-auto">
              <Button variant="primary" size="lg" href={ENUM.url.site}>
                Site
              </Button>
              <Button variant="primary" size="lg" href={ENUM.url.shopee}>
                Shopee
              </Button>
              <Button variant="primary" size="lg" href={ENUM.url.mercadoLivre}>
                Mercado Livre
              </Button>
              <Button variant="primary" size="lg" href={ENUM.url.lojasAmericanas}>
                Lojas Americanas
              </Button>
              <Button variant="primary" size="lg" href={ENUM.url.magazineLuiza}>
                Magazine Luiza
              </Button>
              <Button variant="primary" size="lg" href={ENUM.url.pontoFrio}>
                Ponto Frio
              </Button>
              <Button variant="primary" size="lg" href={ENUM.url.shopTime}>
                Shoptime
              </Button>
              <Button variant="primary" size="lg" href={ENUM.url.casasBahia}>
                Casas Bahia
              </Button>
            </Stack>
          </Card.Body>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ENUM.url.whatsApp}>
              <img src={whatsapp} alt='whatsapp' />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ENUM.url.instagram}>
              <img src={instagram} alt='instagram' />
            </a>
          </div>
        </Card>
      </Row>
    </Container >
  );
}

export default Home;