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
import { useHistory } from "react-router";

const radioList = ["All", "Web Development", "Mobile Development", "DSA", "DevOps", "AI/ML"];

function FilterSection() {
  const classes = useStyles();

  const [value, setValue] = useState("All");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const history = useHistory();

  return (
    <Box className={classes.root}>
      <Button className={classes.button} onClick={() => history.push("/question/aks")}>
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
      boxShadow: `0px 4px 10px 1px ${theme.palette.primary.main}`,
    },
  },
  divider: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export default FilterSection;
