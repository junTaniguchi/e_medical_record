// MedicalReportInsert.tsx
import { MedicalReport } from '../interface/MedicalReport'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

type MedicalReportInsertInterface = {
    setReport: React.Dispatch<React.SetStateAction<MedicalReport>>;
    changeDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeThermometer: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeWeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeCalorie: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeHeartRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeBreathingRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeOxygenRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeMinPressure: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeMaxPressure: (e: React.ChangeEvent<HTMLInputElement>) => void;
    putReport: (e: any) => void;
}
const MedicalReportInsert = (props:MedicalReportInsertInterface) => {

    return(
        <Container>
            <h1>電子カルテ</h1>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="date">
                        <Form.Label>診察日</Form.Label>
                        <Form.Control size="lg" type="date" name="date" onChange={props.changeDate} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formPlaintextEmail">
                        <Form.Label>体温</Form.Label>
                        <Form.Control size="lg" type="number" name="thermometer" placeholder="BT" onChange={props.changeThermometer} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPlaintextEmail">
                        <Form.Label>脈拍</Form.Label>
                        <Form.Control size="lg" type="number" name="heartRate" placeholder="HR" onChange={props.changeHeartRate} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label>呼吸数</Form.Label>
                        <Form.Control size="lg" type="number" name="breathingRate" placeholder="RR" onChange={props.changeBreathingRate} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPlaintextEmail">
                        <Form.Label>血中酸素濃度</Form.Label>
                        <Form.Control size="lg" type="number" name="oxygenRate" placeholder="SpO2" onChange={props.changeOxygenRate} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label>最低血圧</Form.Label>
                        <Form.Control size="lg" type="number" name="minPressure" placeholder="BP" onChange={props.changeMinPressure} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formPlaintextEmail">
                        <Form.Label>最高血圧</Form.Label>
                        <Form.Control size="lg" type="number" name="maxPressure" placeholder="BP" onChange={props.changeMaxPressure} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Col md={{ span: 6, offset: 6 }}>
                        <Button size="lg" variant="primary" type='submit' onClick={props.putReport} >
                            送信
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}
export default MedicalReportInsert;