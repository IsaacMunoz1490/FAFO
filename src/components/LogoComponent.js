import logo from '../logo1.png';
import { Container, Row, Col } from 'reactstrap';
import './LogoComponent.css'

function FLogo() {
    return (

        <Container>
            <Row>
                <Col className="col-2 pt-2 m-3">
                    <img src={logo} className="App-logo" alt="F" />
                </Col>
                <Col >
                    <h6 id="text" className="col-6 offset-2 mt-4">
                        <em>ashion</em>
                    </h6>
                    <h3 id="text" className="col-9">
                        <em>orecast</em>
                    </h3>
                </Col>
            </Row>
        </Container>

    )
}
export default FLogo;