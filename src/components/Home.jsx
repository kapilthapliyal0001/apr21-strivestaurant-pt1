import { Carousel, Col, Container, Row } from 'react-bootstrap'
import dishes from '../data/menu.json'

const Home = () => (
    <Container>
        <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
                <Carousel>
                    {/* MAP */}
                    {
                        dishes.map((dish, i) => (
                            <Carousel.Item key={dish.id}>
                                <img
                                    className="d-block w-100"
                                    src={dish.image}
                                    alt={"slide number " + (i + 1)}
                                />
                                <Carousel.Caption>
                                    <h3>{dish.name}</h3>
                                    <p>{dish.description}</p>
                                </Carousel.Caption>
                            </Carousel.Item>)
                        )
                    }
                </Carousel>
            </Col>
        </Row>
    </Container>
)

export default Home