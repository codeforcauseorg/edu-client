import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    hero: {
      padding: "0 10px",
      textAlign: "start",
    },
  
    navigation: {
      widht: "100%",
      height: "40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "8px 10px",
    },
  
    heroHeading: {
      fontWeight: "700",
      [theme.breakpoints.up("md")]: {
        fontSize: "32px",
      },
    },
  
    heroBody: {
      margin: "1em 0",
      [theme.breakpoints.up("md")]: {
        fontSize: "16px",
      },
    },
  
    details: {
      marginBottom: "16px",
      fontStyle: "italic",
    },
  
    accentText: {
      color: "#3949ab",
    },
  
    language: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      margin: "16px 0",
      fontStyle: "italic",
    },
  
    playerWrapper: {
      position: "relative",
      paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
    },
  
    reactPlayer: {
      position: "absolute",
      top: "0",
      left: "0",
    },
  
    price: {
      margin: "16px 0",
      fontWeight: "700",
    },
  
    button: {
      marginBottom: "16px",
      [theme.breakpoints.up("md")]: {
        marginRight: "16px",
      },
    },
  
    buttonGroup: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      [theme.breakpoints.up("md")]: {
        flexDirection: "row",
      },
    },
  }));

  export default useStyles;