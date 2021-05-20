import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({

  root: {
    margin: '0',
    flexGrow: 1,
  },
  navBarDiv: {
    // display: 'flex',
    background: 'black',
    color: 'white',
    width: '100%',
    height: 'auto',
    margin: '0',
  },
  navBox: {

  },
  navButton: {
    padding: '2em',
  },
  navLogoBox: {
    color: 'inherit',
    paddingRight: '2em',
    marginLeft: '-4em',
    martgin: '1.5em',
  },
  navLogo: {
    background: 'black',
    height: 'auto',
    width: '20vh',
    alignText: 'center',

  },



  bannerText: {
    color: 'black',
    fontSize: '5em',
  },
  bannerDiv: {
    color: 'black',
    backgroundColor: "#ee1b24"
  },
  bannerDiv2: {
    color: '#ee1b24',
    backgroundColor: "black"
  },
  card: {
    height: '100%',
    flexDirection: 'row',
    background: 'white',
    color: 'black',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    marginBottom: '1em',
  },
  footer: {
    backgroundColor: 'black',
    padding: '2em',
    color: 'white',
    marginTop: '3em'
  },


}));

export default useStyles;