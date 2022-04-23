import './App.css';
import {useState} from 'react';
import Medical_report_insert from './components/Medical_report_insert'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



export default function App() {
  interface State {
    date: Date;             // 日付
    thermometer: number;    // 体温
    weight: number;         // 体重
    calorie: number;        // 摂取カロリー
    heart_rate: number;     // 脈拍
    breathing_rate: number; // 呼吸数
    oxygen_rate: number;    // 血中酸素飽和度
    min_pressure: number;   // 最低血圧
    max_pressure: number;   // 最高血圧
    memo: string;           // 備考 
    // 
    // 
  }
  const [report, setReport] = useState<State>({
      date: new Date(),
      thermometer: 0.0,
      weight: 0.0,
      calorie: 0,
      heart_rate: 0,
      breathing_rate: 0.00,
      oxygen_rate: 0.00,
      min_pressure: 0,
      max_pressure: 0,
      memo: "",
    });
  const putReport=(e:any)=>{
      e.preventDefault();
      fetch("http://XXXXXXXXXXXXX?" + report)
      .then(res => console.log("OK"))
  }
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setReport({ ...report, [prop]: event.target.value });
  };
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }),
  );
  return (
    <div className="App">
      <div className={classes.root}>
        <Grid item xs={12}>
        </Grid>
      </div>
      <Medical_report_insert putReport={putReport} handleChange={handleChange} />
    </div>
  );
}


