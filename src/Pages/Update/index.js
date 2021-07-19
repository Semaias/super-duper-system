import { useEffect, useState } from "react";

import {Spinner, Container, Row, Col } from "react-bootstrap";

import {useParams} from "react-router-dom";

import api from "../Services/api";

import { Form } from "./styles";

export default function Update() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [isLoading, setLoading] = useState(false);
  const {id} = useParams()

  useEffect(() => {
    api.get(`article/${id}`).then((response) => {
      setTitle(response.data.title);
      setText(response.data.paragraph);
    })

  }, [id])

  async function handleUpdate(id){
    setLoading(true);
    try{
      await api.put(`article/${id}/`, {
        title: title,
        paragraph: text,
      });

      setTitle('');
      setText('');

      setLoading(false); 
    }
    catch(err){
      console.log(err);
      setLoading(false);
    }
  }

  return (
    <Container>
      <Row>
        <Col sm={12} lg={12}>
          <Form action="/">
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button type="submit" onClick={() => handleUpdate(id)}>
              { 
                isLoading 
                ?
                <Spinner animation="border" size="sm" />
                :
                <>
                  Atualizar
                </>
              }
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
