import React, {useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
    background: "orange",
  },
  tabs: {
    backgroundColor: "#33c9dc",
    color: "white",
  },
});

function NavTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    props.history.push(
      value === 0 ? "/" : value === 1 ? "/portfolio" : "/about"
    );
  }, [value]);

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="black"
        centered
      >
        <Tab label="Home" />
        <Tab label="Portfolio"  />
        <Tab label="About"  />
      </Tabs>
    </Paper>
  );
}

export default withRouter(NavTabs);