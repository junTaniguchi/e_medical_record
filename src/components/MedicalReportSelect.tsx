// MedicalReportSelect.tsx
import { SearchMedicalReport } from '../interface/SearchMedicalReport'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
type MedicalReportSelectInterface = {
    setSelectReport: React.Dispatch<React.SetStateAction<SearchMedicalReport>>;
    changeSelectMinDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectMaxDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectThermometer: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectWeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectCalorie: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectHeartRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectBreathingRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectOxygenRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectMinPressure: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeSelectMaxPressure: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchReport: (e: any) => void;
}

const MedicalReportSelect = (props:MedicalReportSelectInterface) =>{
    return(
        <Container>
            <h1>電子カルテ</h1>
        <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="date">
                    <Form.Label>診察日</Form.Label>
                    <Form.Control size="lg" type="date" name="date" onChange={props.changeSelectMinDate} />
                </Form.Group>
                <Form.Group as={Col} controlId="date">
                    <Form.Label>診察日</Form.Label>
                    <Form.Control size="lg" type="date" name="date" onChange={props.changeSelectMaxDate} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formPlaintextEmail">
                    <Form.Label>体温</Form.Label>
                    <Form.Control size="lg" type="number" name="thermometer" placeholder="BT" onChange={props.changeSelectThermometer} />
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextEmail">
                    <Form.Label>脈拍</Form.Label>
                    <Form.Control size="lg" type="number" name="heartRate" placeholder="HR" onChange={props.changeSelectHeartRate} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label>呼吸数</Form.Label>
                    <Form.Control size="lg" type="number" name="breathingRate" placeholder="RR" onChange={props.changeSelectBreathingRate} />
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextEmail">
                    <Form.Label>血中酸素濃度</Form.Label>
                    <Form.Control size="lg" type="number" name="oxygenRate" placeholder="SpO2" onChange={props.changeSelectOxygenRate} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} className="mb-3" controlId="formPlaintextEmail">
                    <Form.Label>最低血圧</Form.Label>
                    <Form.Control size="lg" type="number" name="minPressure" placeholder="BP" onChange={props.changeSelectMinPressure} />
                </Form.Group>
                <Form.Group as={Col} controlId="formPlaintextEmail">
                    <Form.Label>最高血圧</Form.Label>
                    <Form.Control size="lg" type="number" name="maxPressure" placeholder="BP" onChange={props.changeSelectMaxPressure} />
                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Col md={{ span: 6, offset: 6 }}>
                    <Button size="lg" variant="primary" type='submit' onClick={props.searchReport} >
                        送信
                    </Button>
                </Col>
            </Row>
        </Form>
    </Container>
    );
}

export default MedicalReportSelect;