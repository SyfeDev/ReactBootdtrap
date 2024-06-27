import {  Container, Col, Row } from 'react-bootstrap';


export const RowCol = () => {
  return (
    <Container>
    <Row  xs={2} md={4} lg={6}>
      <Col>1 of 3</Col>
      <Col>2 of 3</Col>
      <Col>3of 3</Col>
    </Row>
    <Row>
      <Col >1 of 3 </Col>
      <Col   >2 of 3</Col>
      <Col >3 of 3</Col>
    </Row>

    <Row>
        <Col xs={8} sm={6} md={4} lg={3}>
          xs=6 md=4
        </Col>
        <Col xs={8} sm={6} md={4} lg={3}>
          xs=6 md=4
        </Col>
        <Col xs={8} sm={6} md={4} lg={3}>
          xs=6 md=4
        </Col>
        <Col xs={8} sm={6} md={4} lg={3}>
          xs=6 md=4
        </Col>
        <Col xs={8} sm={6} md={4} lg={3}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} lg={2}>
          xs=6 md=4
        </Col>
      </Row>
  </Container>
  )
}
