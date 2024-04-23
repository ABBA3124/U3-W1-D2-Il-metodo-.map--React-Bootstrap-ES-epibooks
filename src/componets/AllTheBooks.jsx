import React, { useState, useEffect } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import fantasy from '../books/fantasy.json'
import history from '../books/history.json'
import horror from '../books/horror.json'
import romance from '../books/romance.json'
import scifi from '../books/scifi.json'
import '../CSS/AllTheBooks.css'

function AllTheBooks() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    // tutti i libri in un unico array 
    // vorrei provare ad aggiungere i libri in base alla categoria
    setBooks([...fantasy, ...history, ...horror, ...romance, ...scifi])
  }, [])

  return (
    <Container>
      <Row>
        {books.map((book, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3} className='ciao'>
            <Card className="mb-4 card-container">
              <Card.Img variant="top" src={book.img} /> 
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{`Prezzo: ${book.price}€`}</Card.Text> 
                <Card.Text>{`Categoria: ${book.category}`}</Card.Text> 
                <Button variant="primary">Scopri Di Più 🔍</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllTheBooks
