import React from "react";
import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  CardHeader,
  IconButton,
  Chip,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

function NotesCard() {
  const classes = useStyles();

  const actionElements = [
    { icon: EditIcon, onClick: () => console.log("edit") },
    { icon: DeleteIcon, onClick: () => console.log("delete") },
  ];

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        action={actionElements.map((items, index) => (
          <IconButton key={index} onClick={items.onClick}>
            <items.icon className={classes.icons} />
          </IconButton>
        ))}
        title={<Chip label="2.55" size="small" className={classes.chip} onClick={handleClick} />}
        subheader={<Typography className={classes.timeStamp}>September 14, 2016</Typography>}
      />
      <CardContent>
        <Typography className={classes.title} variant="body2" color="textSecondary" gutterBottom>
          Your Thoughts
        </Typography>
        <Typography variant="body1" component="p">
          Java is a high-level programming language originally developed by Sun Microsystems and
          released in 1995.
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  card: {
    marginRight: theme.spacing(2),
    maxWidth: 400,
    flex: "0 0 auto",
    boxShadow: "0px 4px 20px rgba(55, 64, 161, 0.25)",
  },
  chip: {
    border: `1px solid ${theme.palette.primary.main}`,
    background: "#fff",
  },
  timeStamp: {
    marginTop: theme.spacing(1.5),
  },
  icons: {
    height: 20,
    width: 20,
  },
}));

export default NotesCard;
