import { Box, Card, CardContent, CardHeader, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "#fff",
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(2),
    padding: 0,
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    },
  },
  cardContent: {
    padding: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardSubHeading: {
    fontStyle: "italic",
    color: "#4C0098",
  },
}));

const WishlistCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card>
        <CardHeader
          style={{
            backgroundImage: "url(/assets/wishlist/1.png)",
            backgroundSize: "cover",
          }}
          title={
            <Typography variant="h6" style={{ color: "white" }}>
              Fullstack Web Development Course <br /> by Code For Cause
            </Typography>
          }
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="subtitle2" className={classes.cardSubHeading}>
            Hurry !! Buy now. Premiering in 2 days
          </Typography>
          <Typography variant="h6" color="secondary">
            ₹ 94
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WishlistCard;
