import React from "react";
import Typewriter from "typewriter-effect";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
    root: {
    color:"black",
    padding: "10px",
    fontSize: "50px",
    textAlign: "center",
    },
    img: {
      height: "20%",
      width: "20%",
      padding: "20px"
    }
});


function Home() {
    const classes = useStyles();

    return (
      <div>
        <Container className={classes.root}>
          <img className={classes.img}
            src={require("../assets/images/avatar.JPG")}
            alt="senior pics"
          ></img>
          <Typewriter
            options={{
              strings: [
                "Hi, My name is John Thomas!",
                "I am and up an comimg computer engineer",
                "I am an engineering managment grad student at MTSU",
                "This is my personal page",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Container>
      </div>
    );
}

export default Home;