import Toast from 'react-bootstrap/Toast'
import Row from 'react-bootstrap/Row'


export default function DeviceList(props){

    return(
        <>
        <Row>
            <Toast>
                <Toast.Header>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </Row>
        </>
    )

}