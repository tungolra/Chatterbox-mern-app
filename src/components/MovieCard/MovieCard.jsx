import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import "../MovieCard/MovieCard.css"
import { Link } from "react-router-dom";


function MovieCard(props) {

  return ( 
        <Container>
           <Row>  
                {props.movies.map((movie, idx)=> (              
                    <Col xl={2} lg={3} md={3} s={4} >
                        <Card bg="black" text="white" key="moviecard{idx}" >
                            <Card.Img src={movie.posterPath} style={{borderRadius:0}} />
                            <Card.Body >
                                <Card.Title style={{ fontSize : "12px" }}>{movie.title}</Card.Title>
                                <Card.Text border="gray-dark" style={{ fontSize : "12px" }}>
                                    Release Date: {movie.releaseDate}                                   
                                </Card.Text>
                            </Card.Body>
                            <Link to={`/movies/${movie.title}`}>Click for info</Link>
                        </Card>
                    </Col>        
                ))}
         </Row>
         </Container>
  )
}

export default MovieCard