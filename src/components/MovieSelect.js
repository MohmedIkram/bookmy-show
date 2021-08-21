import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundColor: red[500],
  },
}));

export default function MovieSelect() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://www.thenewsminute.com/sites/default/files/styles/news_detail/public/SarpattaParambarai_Arya_FirstLook_PosterTwitter_021220_1200.jpg?itok=XbjZ9-Au"
        title="SarpattaParambarai"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          SarpattaParambarai
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          When Sarpatta Parambarai is challenged to a do-or-die match, will
          Kabilan, a young labourer, put on the gloves himself and lead his clan
          to victory, or be dissuaded by his disapproving mother and dangerous
          politics?
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Button variant="contained" color="primary" component={Link} to="/Book">
          Book Tickets
        </Button>
      </CardActions>
    </Card>
  );
}
