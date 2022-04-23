import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

type Medical_reportType = {
    putReport: (e: any) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& .MuiTextField-root': {
                margin: theme.spacing(3),
            },
            flexGrow: 1
        },
        margin: {margin: theme.spacing(3)},
        withoutLabel: {marginTop: theme.spacing(3)},
        textField: {
            marginLeft: theme.spacing(3),
            marginRight: theme.spacing(3),
          },
        button: {
            margin: theme.spacing(3),
        },
        paper: {
            padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    },),
);

export default function Medical_report_insert() {
    return(
        <div className={classes.root}>
            <Container maxWidth="md">
                <Grid container spacing={1}>
                    <Paper elevation={3}>
                        <Grid item xs={12}>
                            <TextField
                                id="datetime-local"
                                label="診察日"
                                type="datetime-local"
                                defaultValue={report.thermometer}
                                onChange={handleChange('date')}
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                <Input
                                    id="standard-adornment-thermometer"
                                    value={report.thermometer}
                                    onChange={handleChange('thermometer')}
                                    endAdornment={<InputAdornment position="end">BT</InputAdornment>}
                                    aria-describedby="standard-thermometer-helper-text"
                                    inputProps={{
                                        'aria-label': 'thermometer',
                                    }}
                                />
                                <FormHelperText id="standard-thermometer-helper-text">体温</FormHelperText>
                            </FormControl>
                            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                <Input
                                    id="standard-adornment-heart_rate"
                                    value={report.heart_rate}
                                    onChange={handleChange('heart_rate')}
                                    endAdornment={<InputAdornment position="end">HR</InputAdornment>}
                                    aria-describedby="standard-heart_rate-helper-text"
                                    inputProps={{
                                        'aria-label': 'heart_rate',
                                    }}
                                />
                                <FormHelperText id="standard-heart_rate-helper-text">脈拍</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                <Input
                                    id="standard-adornment-heart_rate"
                                    value={report.breathing_rate}
                                    onChange={handleChange('breathing_rate')}
                                    endAdornment={<InputAdornment position="end">RR</InputAdornment>}
                                    aria-describedby="standard-breathing_rate-helper-text"
                                    inputProps={{
                                        'aria-label': 'breathing_rate',
                                    }}
                                />
                                <FormHelperText id="standard-breathing_rate-helper-text">呼吸数</FormHelperText>
                            </FormControl>
                            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                <Input
                                    id="standard-adornment-heart_rate"
                                    value={report.oxygen_rate}
                                    onChange={handleChange('oxygen_rate')}
                                    endAdornment={<InputAdornment position="end">SpO2</InputAdornment>}
                                    aria-describedby="standard-oxygen_rate-helper-text"
                                    inputProps={{
                                        'aria-label': 'oxygen_rate',
                                    }}
                                />
                                <FormHelperText id="standard-oxygen_rate-helper-text">血中酸素飽和度</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                <Input
                                    id="standard-adornment-heart_rate"
                                    value={report.min_pressure}
                                    onChange={handleChange('min_pressure')}
                                    endAdornment={<InputAdornment position="end">BP_Min</InputAdornment>}
                                    aria-describedby="standard-min_pressure-helper-text"
                                    inputProps={{
                                        'aria-label': 'min_pressure',
                                    }}
                                />
                                <FormHelperText id="standard-min_pressure-helper-text">最低血圧</FormHelperText>
                            </FormControl>
                            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                <Input
                                    id="standard-adornment-heart_rate"
                                    value={report.max_pressure}
                                    onChange={handleChange('max_pressure')}
                                    endAdornment={<InputAdornment position="end">BP_Min</InputAdornment>}
                                    aria-describedby="standard-max_pressure-helper-text"
                                    inputProps={{
                                        'aria-label': 'max_pressure',
                                    }}
                                />
                                <FormHelperText id="standard-max_pressure-helper-text">最高血圧</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                <Input
                                    id="standard-adornment-weight"
                                    value={report.weight}
                                    onChange={handleChange('weight')}
                                    endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
                                    aria-describedby="standard-weight-helper-text"
                                    inputProps={{
                                        'aria-label': 'weight',
                                    }}
                                />
                                <FormHelperText id="standard-weight-helper-text">体重</FormHelperText>
                            </FormControl>
                            <FormControl className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                                <Input
                                    id="standard-adornment-calorie"
                                    value={report.calorie}
                                    onChange={handleChange('calorie')}
                                    endAdornment={<InputAdornment position="end">kcal</InputAdornment>}
                                    aria-describedby="standard-calorie-helper-text"
                                    inputProps={{
                                        'aria-label': 'calorie',
                                    }}
                                />
                                <FormHelperText id="standard-calorie-helper-text">カロリー</FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="standard-full-width"
                                value={report.memo}
                                onChange={handleChange('memo')}
                                label="備考"
                                style={{ margin: 20 }}
                                placeholder="自由に記載"
                                fullWidth
                                multiline
                                margin="normal"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                startIcon={<CloudUploadIcon />}
                                onClick={putReport}
                            >
                                Upload
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>
            </Container>
        </div>
    )
}
