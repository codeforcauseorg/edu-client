import {
  Box,
  Card,
  CardMedia,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { useState, useRef } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuComponent from "../SubComponents/MenuComponent";

function CardSection({ props, index }) {
  const classes = useStyles();
  const { title, banner } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card
      className={classes.card}
      style={{
        marginLeft: index === 2 && matches ? 20 : 0,
        marginRight: index === 0 && matches ? 20 : 0,
      }}
    >
      <CardMedia image={banner} className={classes.cardMedia}>
        <Typography variant="h4" className={classes.title}>
          {title}
        </Typography>
      </CardMedia>
      <Box display="flex">
        <Box flexGrow={1} />
        <IconButton ref={anchorRef} onClick={handleToggle}>
          <MoreVertIcon />
        </IconButton>
        <MenuComponent handleClose={handleClose} open={open} anchorRef={anchorRef} index={index} />
      </Box>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    cursor: "pointer",
  },
  cardMedia: {
    height: 160,
  },
  title: {
    color: "#fff",
    padding: theme.spacing(2),
  },
  card: {
    width: "100%",
    marginTop: theme.spacing(2),
    boxShadow: "0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08)",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
}));

export default CardSection;
