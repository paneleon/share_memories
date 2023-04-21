
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
    backgroundColor: '#917FB3',
  },
  buttonClear: {
    backgroundColor: '#DAF5FF',
  },
  date: {
    marginLeft: '10px',
    background: '#F0F0F0',
    padding: '15px',
    border: 'none',
    fontFamily: 'Arial',
    // '&::-webkit-calendar-picker-indicator': {
    //   background: '#ffffff',
    //   padding: '5px',
    //   cursor: 'pointer',
    //   borderRadius: '3px',
    // },
  },
}));
