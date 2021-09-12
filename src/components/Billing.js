import React, { useEffect, useState } from "react";

/** import from materail ui */
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Billing = () => {
  const [price, setPrice] = useState("");
  const [seat, setSeat] = useState("");
  const [movie, setMovie] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const classes = useStyles();

  useEffect(() => {
    const retrieve = window.localStorage.getItem("seat");
    const val = JSON.parse(retrieve);
    const price = window.localStorage.getItem("price");
    const val1 = JSON.parse(price);
    console.log(val1);
    const movie = window.localStorage.getItem("book");
    var val3 = [];
    val3 = JSON.parse(movie);
    console.log(val3);
    const data = window.localStorage.getItem("date");
    const date = new Date().toISOString().slice(0, 10);
    setDate(date);
    setMovie(val3);
    setSeat(val);
    setPrice(val1);
  }, []);
  return (
    <div>
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            ></Typography>

            <Typography variant="body2" component="p">
              Movie Name--- Sarpatta Prambarai
            </Typography>
            <Typography variant="body2" component="p">
              Number of Seats---{seat.length}
            </Typography>
            <Typography variant="body2" component="p">
              Seats---{seat}
            </Typography>
            <Typography variant="body2" component="p">
              Show Time---3:30pm
            </Typography>
            <Typography variant="body2" component="p">
              Show Date---{date}
            </Typography>
            <Typography variant="body2" component="p">
              ----------------------------------------------------
            </Typography>
            <Typography variant="body2" component="p">
              Total--- ₹{price}
            </Typography>
            <Typography variant="body2" component="p">
              ----------------------------------------------------
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {`T&C`}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {`Tickets purchased online are non-transferable and are only valid on the date and schedule number you selected at the time of purchase. Tickets are valid only in the direction of travel selected. A ticket presented for transportation by anyone other than the person for whom the ticket was originally purchased will be void. The unauthorized resale of tickets is strictly prohibited and will be prosecuted. Trailways.com is not responsible for lost or stolen tickets.`}
            </Typography>
            <Typography variant="body2" component="p">
              ----------------------------------------------------
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Billing;
