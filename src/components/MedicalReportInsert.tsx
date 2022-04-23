// MedicalReportInsert.tsx
import { MedicalReport } from '../interface/MedicalReport'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

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
            <Form>
                <Row>
                    <Col md={4}><input type="date" name="date" onChange={props.changeDate}/></Col>
                </Row>
                <Row>
                    <Col md={3}><input type="number" name="thermometer" onChange={props.changeThermometer}/></Col>
                    <Col md={3}><input type="number" name="weight" onChange={props.changeWeight}/></Col>
                    <Col md={3}><input type="number" name="calorie" onChange={props.changeCalorie}/></Col>
                    <Col md={3}><input type="number" name="heartRate" onChange={props.changeHeartRate}/></Col>
                </Row>
                <Row>
                    <Col md={3}><input type="number" name="breathingRate" onChange={props.changeBreathingRate}/></Col>
                    <Col md={3}><input type="number" name="oxygenRate" onChange={props.changeOxygenRate}/></Col>
                    <Col md={3}><input type="number" name="minPressure" onChange={props.changeMinPressure}/></Col>
                    <Col md={3}><input type="number" name="maxPressure" onChange={props.changeMaxPressure}/></Col>
                </Row>
                <Row>
                </Row>
                <Row>
                    <Col md={{ span: 4, offset: 4 }}><button type='submit' onClick={props.putReport} >送信</button></Col>
                </Row>
            </Form>
        </Container>
    )
}
export default MedicalReportInsert;