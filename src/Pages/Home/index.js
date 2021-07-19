import { useEffect, useState } from "react";

import {Spinner, Container, Row, Col } from "react-bootstrap";

import {Link} from 'react-router-dom';

import api from "../Services/api";

import { Card, Form } from "./styles";

export default function Home() {
  const [card, setCard] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    api.get('article/').then((response) => {
      setCard(response.data); 
    })

  }, [])

  function handleGet(){
    api.get('article/').then((response) => {
      setCard(response.data); 
    })
  }

  async function handleCreate(){
    setLoading(true);
    try{
      await api.post('article/', {
        title: title,
        paragraph: text,
      });

      setTitle('');
      setText('');

      handleGet();
      setLoading(false); 
    }
    catch(err){
      console.log(err);
      setLoading(false);
    }
  }

  async function handleRemove(id) {
    await api.delete(`article/${id}`);
    handleGet();
  }
  

  return (
    <Container>
      <Row>
        <Col sm={12} lg={12}>
          <Form>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button type="button" onClick={handleCreate}>
              { 
                isLoading 
                ?
                <Spinner animation="border" size="sm" />
                :
                <>
                  Criar
                </>
              }
            </button>
          </Form>
        </Col>
        {card.map((card) => (
          <Col sm={12} lg={4} key={card.id}>
            <Card>
              <h2>{card.title}</h2>
              <p>{card.paragraph}</p>
              {/* <img src={img} alt="Imagem" /> */}

              <div className="buttonsContainer">
                <button className="remove" type="button" onClick={() => handleRemove(card.id)}>
                  Remover
                </button>
                <Link to={`/atualizar/${card.id}`}>Atualizar</Link>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
