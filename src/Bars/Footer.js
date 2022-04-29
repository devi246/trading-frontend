import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

class Footer extends React.Component {

render() {
    
    const style = {
        color: "grey",
        backgroundColor: "#e9ecef",
        padding: "10px",
        fontFamily: "Arial",
        marginTop: "300px",
        fontSize: "80%",

      };

    const hrStyle = {
        borderTop: "1px solid grey",
        marginTop: "8px"
    }

    return (

        <>

        <footer style={style}>
        <hr style={hrStyle}></hr>

        <Container>
        <Row style={{height: "90px"}}>
            <Col style={{borderLeft: "1px solid lightgrey"}}>
                <p>&copy; Author: dev.fin</p>
                <a href="mailto:dev.fin@example.com">dev.fin@example.com</a>
                
            </Col>
            <Col style={{borderLeft: "1px solid lightgrey"}}>
                This is an example e-commerce website, made for demonstration purposes.
            </Col>
            <Col style={{borderLeft: "1px solid lightgrey"}}>
                Privacy rules: This website does not collect any personal information. It uses cookies.
            </Col>
        </Row>
        </Container>


        </footer>

        </>

    );
}

}
export default Footer;