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
  discordLogo: {
    marginBottom: 20,
    height: '80px',
    backgroundImage:
      'url(https://upload.wikimedia.org/wikipedia/pt/thumb/b/b7/Discord_logo_svg.svg/1280px-Discord_logo_svg.svg.png)',
    backgroundSize: '18%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
}));

export default useStyles;
