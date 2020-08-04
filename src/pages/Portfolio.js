import React, {useEffect, useState} from "react";
import MediaCard from "../components/Card"
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Projects from "../projects.json";
import GridList from "@material-ui/core/GridList";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 1000,
    justifyContent: "center"
  },
}));


function Portfolio() {
    const classes = useStyles();
    const [projects, setProjects] = useState({});

    useEffect(() => {
        getProjects();
    }, []);
    
    function getProjects(){
        setProjects(Projects);
    }
    
    return (
      <div>
        <Container>
          <h1 className="text-center">Here are my objects: </h1>
          <h3 className="text-center">
            (Here is my Github <a href="https://github.com/Dash433"></a>)
          </h3>
          <div className={classes.root}>
            <GridList className={classes.gridList} cols={3}>
              {Projects.map((project, i) => (
                  <MediaCard
                    key={i}
                  image={project.image}
                  title={project.title}
                  description={project.description}
                  repository={project.repository}
                  liveLink={project.liveLink}
                />
              ))}
            </GridList>
          </div>
        </Container>
      </div>
    );
}

export default Portfolio;
