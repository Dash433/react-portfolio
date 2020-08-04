import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '25px',
    background: "orange"
  },
  media: {
    height: 225,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require(`../../assets/works/${props.image}`)}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={props.repository}
          target="_blank"
        >
          View Code
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          href={props.liveLink}
          target="_blank"
        >
          Live Link
        </Button>
      </CardActions>
    </Card>
  );
}
