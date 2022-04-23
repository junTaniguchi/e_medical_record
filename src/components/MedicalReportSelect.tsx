// MedicalReportSelect.tsx
import { SearchMedicalReport } from '../interface/SearchMedicalReport'

type MedicalReportSelectInterface = {
    setSelectReport: React.Dispatch<React.SetStateAction<SearchMedicalReport>>;
    changeMinDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeMaxDate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeThermometer: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeWeight: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeCalorie: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeHeartRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeBreathingRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeOxygenRate: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeMinPressure: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeMaxPressure: (e: React.ChangeEvent<HTMLInputElement>) => void;
    searchReport: (e: any) => void;
}

const MedicalReportSelect = (props:MedicalReportSelectInterface) =>{
    return(
        <form>
            <input type="date" name="date" onChange={props.changeMinDate}/>
            <input type="date" name="date" onChange={props.changeMaxDate}/>
            <input type="number" name="thermometer" onChange={props.changeThermometer}/>
            <input type="number" name="weight" onChange={props.changeWeight}/>
            <input type="number" name="calorie" onChange={props.changeCalorie}/>
            <input type="number" name="heartRate" onChange={props.changeHeartRate}/>
            <input type="number" name="breathingRate" onChange={props.changeBreathingRate}/>
            <input type="number" name="oxygenRate" onChange={props.changeOxygenRate}/>
            <input type="number" name="minPressure" onChange={props.changeMinPressure}/>
            <input type="number" name="maxPressure" onChange={props.changeMaxPressure}/>
            <button type='submit' onClick={props.searchReport} >検索</button>
        </form>
    );
}

export default MedicalReportSelect;