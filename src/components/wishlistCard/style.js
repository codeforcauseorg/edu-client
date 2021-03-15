import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      color: "#fff",
      margin: 0,
      // marginTop: '8px',
      borderRadius: "8px",
    },
    cardHeader: {
      backgroundColor: "#A60000",
      color: "#fff",
    },
    icon: {
      color: "#fff",
      padding: "4px",
      fontSize: "14px",
    },
    title: {
      fontWeight: 700,
      fontSize: "12px",
    },
    subheader: {
      fontStyle: "italic",
      fontSize: "10px",
      color: "rgb(255, 255, 255, 0.8)",
      marginTop: "8px",
      marginBottom: "-8px",
    },
  }));

  export default useStyles;