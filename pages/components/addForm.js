import Form from 'react-bootstrap/Form'
import handelSubmit from './todo'
import Button from 'react-bootstrap/Button'


export default function AddForm(){
    return(
        <Form onSubmit={handelSubmit}>
        <Form.Group>
            <Form.Label>Device Name</Form.Label>
            <Form.Control type="text" Device Name="Enter Device Name" />

        </Form.Group>

        <Form.Group>
            <Form.Label>Device Price</Form.Label>
            <Form.Control type="text" placeholder="Device Price" />
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Device Descreption</Form.Label>
        <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
            Add Device
        </Button>
    </Form>

    )

}