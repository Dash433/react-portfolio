import React from "react";
import AboutCard from "../components/AboutCard";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import GridList from "@material-ui/core/GridList";


const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: "center",
    },
    gridList: {
    // width: '100%',
    // height: 800,
    justifyContent: "center"
  },
}));

function About() {
    const classes = useStyles();

    return (
        <Container>
            <div>
            <GridList className={classes.gridList} cols={6}>
                <AboutCard />
            </GridList>
            </div>
      </Container>
    );
}

export default About;
