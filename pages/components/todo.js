
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


import AddForm from './addForm'
import DeviceList from './deviceList'


function handelSubmit(e){
    e.preventDefault();
    console.log('event')
}


export default function Todo(props){

    return(
    <>
        <header> 
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">Device Hub</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="#features">Add Device</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
        </header>


        <Container fluid>

            <Row>
                <Col>
                Form To Add Device 
                <br></br><br></br>
                <AddForm/>
                
                </Col>
                <Col>Devices List
                <DeviceList/>
                
                </Col>
            </Row>
        </Container>



    </>
    )

}


