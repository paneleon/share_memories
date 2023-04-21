import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  searchInput: {
    width: '60%',
    padding: '5px 20px',
    fontSize: '14px',
    border: 'none',
  },
  searchBar: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    height: '40px',
    marginBottom: '40px',
  },
  searchButton: {
    width: '120px',
    fontSize: '14px',
    textTransform: 'uppercase',
    background: '#917FB3',
    color: 'white',
    border: 'none',
    '&:hover': {
      background: '#6a5b86',
    },
  },
}));
