import {
  Box,
  makeStyles,
  Button,
  Divider,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import PostDoubt from "./PostDoubt";

const radioList = ["All", "Web Development", "Mobile Development", "DSA", "DevOps", "AI/ML"];

function FilterSection() {
  const classes = useStyles();
  const [value, setValue] = useState("All");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <Button className={classes.button} onClick={() => handleOpen()}>
        Start new Discussion
      </Button>
      <Divider className={classes.divider} />
      <FormControl component="fieldset">
        <FormLabel component="legend">
          <Typography variant="h4" gutterBottom>
            Topics Categories
          </Typography>
        </FormLabel>
        <RadioGroup value={value} onChange={handleChange}>
          {radioList.map((items, index) => (
            <FormControlLabel key={index} value={items} control={<Radio />} label={items} />
          ))}
        </RadioGroup>
      </FormControl>
      <PostDoubt open={open} onClose={handleClose} />
    </Box>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 2,
    borderRadius: "5px",
  },
  button: {
    background: theme.palette.primary.main,
    color: "#fff",
    textTransform: "none",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default FilterSection;
