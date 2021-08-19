import React, { useState } from "react";
/** importing from material ui */
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

/** slider data */

var slider = [
  {
    label: "99 songs",
    url: "https://img.ticketnew.com/tn/offer_banner/99songs/1920_400.jpg",
  },

  {
    label: "sulthan",
    url: "https://img.ticketnew.com/tn/offer_banner/sulthan/1920_400_2.jpg",
  },
  {
    label: "Karnan",
    url: "https://img.ticketnew.com/tn/offer_banner/karnan/1920_400.jpg",
  },
  {
    label: "offer",
    url: "https://img.ticketnew.com/tn/offer_banner/movie100/1920_400_1.jpg",
  },
];

/** making style */
const useStyles = makeStyles({
  root: {
    maxWidth: "full",
  },
  media: {
    height: 300,
    width: "full",
    alignItems: "center",
  },
});
/** main function  */

const Banners = () => {
  const classes = useStyles();
  const length = slider.length;
  const [index, setIndex] = useState(0);

  /** function  for sliders */
  const next = () => {
    setIndex(index + 1);
  };

  const prev = () => {
    setIndex(index - 1);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={slider[index].url}
          title={slider[index].label}
        />
      </CardActionArea>
      <Button onClick={prev} disabled={index === 0}>
        <ChevronLeftIcon />
      </Button>
      <Button size="small" onClick={next} disabled={index === length - 1}>
        <ChevronRightIcon />
      </Button>
    </Card>
  );
};
export default Banners;
