import logo from '../logo1.png';
import { Container, Row, Col } from 'reactstrap';
import './LogoComponent.css'

function FLogo() {
    return (

        <Container>
            <Row>
                <Col className="col">
                    <img src={logo} className="App-logo" alt="F" />
                </Col>
            </Row>
        </Container>

    )
}
export default FLogo;