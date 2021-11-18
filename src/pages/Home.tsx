import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';

import logo from '../image/Marca.jpg';
import whatsapp from '../image/icons8-whatsapp-48.png';
import instagram from '../image/instagram_ig_logo_icon_181651.png';

import './Home.scss';

function Home() {
  return (
    <Container>
      <Row>
        <Card className="text-center" >
          <Card.Img variant="top" src={logo} />
          {/* <Image src={logo} roundedCircle /> */}
          <Card.Body>
            <Card.Title><h1>Pegada Baby</h1></Card.Title>
            <Card.Text>
              <h3>Aqui calçamos sua criança com amor e estilo á um preço justo!</h3>
            </Card.Text>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg" href="https://www.pegadababy.com.br/">
                Site
              </Button>
              <Button variant="primary" size="lg" href="https://shopee.com.br/pegada_baby">
                Shopee
              </Button>
              <Button variant="primary" size="lg" href="https://pegadababy.mercadoshops.com.br/">
                Mercado Livre
              </Button>
              <Button variant="primary" size="lg" href="https://www.americanas.com.br/lojista/pegada-baby">
                Lojas Americanas
              </Button>
              <Button variant="primary" size="lg" href="https://www.magazineluiza.com.br/lojista/pegadababyme/">
                Magazine Luiza
              </Button>
              <Button variant="primary" size="lg" href="https://www.pontofrio.com.br/c/pegada-baby/?filtro=m159472">
                Pontofrio
              </Button>
              <Button variant="primary" size="lg" href="https://www.shoptime.com.br/lojista/pegada-baby">
                Shoptime
              </Button>
              <Button variant="primary" size="lg" href="https://www.casasbahia.com.br/c/pegada-baby/?filtro=m159472">
                Casas Bahia
              </Button>
            </div>
          </Card.Body>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://api.whatsapp.com/send?phone=5531971720713">
              <img src={whatsapp} alt='whatsapp' />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/pegada_baby/">
              <img src={instagram} alt='instagram' />
            </a>
          </div>
        </Card>
      </Row>
    </Container>
  );
}

export default Home;