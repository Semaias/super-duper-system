import { useEffect, useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import api from "../Services/api";

import { Card, Form } from "./styles";

export default function Home() {
  const [card, setCard] = useState([]);
  // const [title, setTitle] = useState("aa");
  // const [text, setText] = useState("aa");
  // const [img, setImg] = useState("aa");

  useEffect(() => {
    api.get('/article').then((response) => {
      setCard(response.data); 
      
      console.log(response)
    })
  }, [])
 

  async function handleRemove(id) {
    await api.delete(`article/${id}`);
  }

  return (
    <Container>
      <Row>
        <Col sm={12} lg={12}>
          <Form>
            <input type="text" />
            <input type="text" />
            <button type="button">Criar</button>
          </Form>
        </Col>
        {card.map((card) => (
          <Col sm={12} lg={4}>
            <Card>
              <h2>a</h2>
              <p>a</p>
              {/* <img src={img} alt="Imagem" /> */}

              <div className="buttonsContainer">
                <button className="remove" type="button">
                  Remover
                </button>
                <button>Atualizar</button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
