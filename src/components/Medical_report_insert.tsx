// Medical_report_insert.tsx
import React, {useState} from 'react';
import { Medical_report } from './../interface/Medical_report'

const Medical_report_insert = () => {
    const [report, setReport] = useState<Medical_report>({
        date: "",
        thermometer: 0.0,
        weight: 0.0,
        calorie: 0,
        heartRate: 0,
        breathingRate: 0.00,
        oxygenRate: 0.00,
        minPressure: 0,
        maxPressure: 0,
        memo: "",
    });
    const changeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, date: e.target.value});
    }
    const changeThermometer = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, thermometer: Number(e.target.value) });
    }
    const changeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, weight: Number(e.target.value)});
    }
    const changeCalorie = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, calorie: Number(e.target.value)});
    }
    const changeHeartRate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, heartRate: Number(e.target.value)});
    }
    const changeBreathingRate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, breathingRate: Number(e.target.value)});
    }
    const changeOxygenRate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, oxygenRate: Number(e.target.value)});
    }
    const changeMinPressure = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, minPressure: Number(e.target.value)});
    }
    const changeMaxPressure = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReport({...report, maxPressure: Number(e.target.value)});
    }
    const putReport=(e:any)=>{
        e.preventDefault();
        fetch("http://XXXXXXXXXXXXX?" + report)
        .then(res => console.log("OK"))
    }
    return(
        <form>
            <input type="date" name="date" value={report.date.toString()} onChange={changeDate}/>
            <input type="number" name="thermometer" value={report.thermometer} onChange={changeThermometer}/>
            <input type="number" name="weight" value={report.weight} onChange={changeWeight}/>
            <input type="number" name="calorie" value={report.calorie} onChange={changeCalorie}/>
            <input type="number" name="heartRate" value={report.heartRate} onChange={changeHeartRate}/>
            <input type="number" name="breathingRate" value={report.breathingRate} onChange={changeBreathingRate}/>
            <input type="number" name="oxygenRate" value={report.oxygenRate} onChange={changeOxygenRate}/>
            <input type="number" name="minPressure" value={report.minPressure} onChange={changeMinPressure}/>
            <input type="number" name="maxPressure" value={report.maxPressure} onChange={changeMaxPressure}/>
            <button type='submit' onClick={putReport} >送信</button>
        </form>
    )
}
export default Medical_report_insert;