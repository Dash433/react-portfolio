import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import DescriptionIcon from "@material-ui/icons/Description";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
    justifyContent: "center",
    margin: "25px",
    background: "orange",
    [theme.breakpoints.down("sm")]: {
      backgroundColor: theme.palette.secondary.main,
      marginBottom: "55px",
    },
    [theme.breakpoints.down("lg")]: {
      backgroundColor: "orange",
      marginBottom: "55px",
    },
  },
  media: {
    height: "350px",
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
    marginBottom: "20px",
  }
}));

export default function AboutCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings" target="_blank" href={require("../../assets/images/theresume.pdf")}>
            <GetAppIcon/>
            <DescriptionIcon />
          </IconButton>
        }
        title="John Thomas"
        subheader="Bootcamp student"
      />
      <CardMedia
        className={classes.media}
        image={require("../../assets/images/circle.JPG")}
        title="John Thomas"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          I am John Thomas a recent graduate of Fisk University class of 2020 with a major in Fisk.
          I will be attending Graduate school at MTSU this fall for engineering Managment. I am from Murfreesboro TN,
           and have lived here my entire life. This summer I enrolled in Bootcamp at trology hosted 
           by vanderbilt whcih is where i learned to code websites. My talents hobbies include basketball, T.V. and reading
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="email"
          href="mailto:john@thomas-household.com"
          target="_blank"
        >
          <MailOutlineIcon />
        </IconButton>
        <IconButton
          aria-label="github"
          href="https://github.com/Dash433"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
        <IconButton
          aria-label="linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Languages:</Typography>
          <Typography paragraph>
            HTML, CSS, Javascript, JQuery, AJAX,  MySQL,
            MongoDB, Mongoose, Reat
          </Typography>
          <Typography paragraph></Typography>
          <Typography paragraph></Typography>
          <Typography></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
