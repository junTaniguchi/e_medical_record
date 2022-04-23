import './App.css';
import { useState } from 'react';
import { MedicalReport } from './interface/MedicalReport'
import { SearchMedicalReport } from './interface/SearchMedicalReport'
import MedicalReportInsert from './components/MedicalReportInsert'
import MedicalReportSelect from './components/MedicalReportSelect'

export default function App() {
  //登録画面
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
    console.log(report);
    // fetch("http://XXXXXXXXXXXXX?" + report)
    //   .then(res => alert("登録完了"))
    //   .then(res => console.log(report))
  }
  //検索画面
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
  const changeSelectMinDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, minDate: e.target.value });
  }
  const changeSelectMaxDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, maxDate: e.target.value });
  }
  const changeSelectThermometer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, thermometer: Number(e.target.value) });
  }
  const changeSelectWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, weight: Number(e.target.value) });
  }
  const changeSelectCalorie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, calorie: Number(e.target.value) });
  }
  const changeSelectHeartRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, heartRate: Number(e.target.value) });
  }
  const changeSelectBreathingRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, breathingRate: Number(e.target.value) });
  }
  const changeSelectOxygenRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, oxygenRate: Number(e.target.value) });
  }
  const changeSelectMinPressure = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, minPressure: Number(e.target.value) });
  }
  const changeSelectMaxPressure = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectReport({ ...selectReport, maxPressure: Number(e.target.value) });
  }
  const searchReport = (e: any) => {
    e.preventDefault();
    console.log(selectReport);
    // fetch("http://XXXXXXXXXXXXX?" + selectReport)
    //   .then(res => alert("登録完了"))
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
        changeSelectMinDate={changeSelectMinDate}
        changeSelectMaxDate={changeSelectMaxDate}
        changeSelectThermometer={changeSelectThermometer}
        changeSelectWeight={changeSelectWeight}
        changeSelectCalorie={changeSelectCalorie}
        changeSelectHeartRate={changeSelectHeartRate}
        changeSelectBreathingRate={changeSelectBreathingRate}
        changeSelectOxygenRate={changeSelectOxygenRate}
        changeSelectMinPressure={changeSelectMinPressure}
        changeSelectMaxPressure={changeSelectMaxPressure}
        searchReport={searchReport}
      />
    </div>
  );
}


