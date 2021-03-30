import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  gridContainer: {
    height: '100vh',
  },
  gridCardImage: {
    backgroundColor: '#4e9fca',
    backgroundImage: 'url(https://i.imgur.com/PpFenW5.png)',
    backgroundSize: 'cover',
  },
  gridCardLogin: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export default useStyles;
