import React from 'react'
import Container from 'react-bootstrap/Container';
import { Card } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ActorCard(props) {
    console.log (props.actorSet)
    return (
        <Container>
            <Row>  
                {props.actorSet.map((actor, idx)=> (              
                    <Col xl={2} lg={3} md={3} s={4} >
                        <Card bg="black" text="white" key="actor{idx}" >
                            <Card.Img src={"movie.posterPath"} style={{borderRadius:0}} />
                            <Card.Body >
                                <Card.Title style={{ fontSize : "12px" }}>{actor[idx]}</Card.Title>                           
                            </Card.Body>
                        </Card>
                    </Col>        
                ))}
        </Row>
    </Container>
    )
}

export default ActorCard