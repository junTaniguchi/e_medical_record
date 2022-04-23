import './App.css';
import { useState } from 'react';
import { MedicalReport } from './interface/MedicalReport'
import { SearchMedicalReport } from './interface/SearchMedicalReport'
import MedicalReportInsert from './components/MedicalReportInsert'
import MedicalReportSelect from './components/MedicalReportSelect'

export default function App() {
  const [report, setReport] = useState<MedicalReport>({
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
    setReport({ ...report, date: e.target.value });
  }
  const changeThermometer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, thermometer: Number(e.target.value) });
  }
  const changeWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, weight: Number(e.target.value) });
  }
  const changeCalorie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, calorie: Number(e.target.value) });
  }
  const changeHeartRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, heartRate: Number(e.target.value) });
  }
  const changeBreathingRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, breathingRate: Number(e.target.value) });
  }
  const changeOxygenRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, oxygenRate: Number(e.target.value) });
  }
  const changeMinPressure = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, minPressure: Number(e.target.value) });
  }
  const changeMaxPressure = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, maxPressure: Number(e.target.value) });
  }
  const putReport = (e: any) => {
    e.preventDefault();
    fetch("http://XXXXXXXXXXXXX?" + report)
      .then(res => alert("登録完了"))
  }

  const [selectReport, setSelectReport] = useState<SearchMedicalReport>({
    minDate: "",
    maxDate: "",
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
  const searchReport = (e: any) => {
    e.preventDefault();
    fetch("http://XXXXXXXXXXXXX?" + selectReport)
      .then(res => alert("登録完了"))
  }
  const changeMinDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, date: e.target.value });
  }
  const changeMaxDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, date: e.target.value });
  }
  return (
    <div className="App">
      <MedicalReportInsert
        setReport={setReport}
        changeDate={changeDate}
        changeThermometer={changeThermometer}
        changeWeight={changeWeight}
        changeCalorie={changeCalorie}
        changeHeartRate={changeHeartRate}
        changeBreathingRate={changeBreathingRate}
        changeOxygenRate={changeOxygenRate}
        changeMinPressure={changeMinPressure}
        changeMaxPressure={changeMaxPressure}
        putReport={putReport}
      />
      <MedicalReportSelect
        setSelectReport={setSelectReport}
        changeMinDate={changeMinDate}
        changeMaxDate={changeMaxDate}
        changeThermometer={changeThermometer}
        changeWeight={changeWeight}
        changeCalorie={changeCalorie}
        changeHeartRate={changeHeartRate}
        changeBreathingRate={changeBreathingRate}
        changeOxygenRate={changeOxygenRate}
        changeMinPressure={changeMinPressure}
        changeMaxPressure={changeMaxPressure}
        searchReport={searchReport}
      />
    </div>
  );
}


