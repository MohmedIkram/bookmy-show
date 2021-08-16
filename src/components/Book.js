import React, { useState, useEffect } from "react";

/** import from materail ui */
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import CheckBoxOutlineBlankRoundedIcon from "@material-ui/icons/CheckBoxOutlineBlankRounded";
import WeekendIcon from "@material-ui/icons/Weekend";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

/** defining style  */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cover: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

/** main function  */
const Book = () => {
  const classes = useStyles();
  const [book, setBook] = useState([]);
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [button, setButton] = useState(false);

  useEffect(() => {
    const result = window.localStorage.getItem("book");
    const val = JSON.parse(result);
    const retrieve = window.localStorage.getItem("time");
    const valtime = JSON.parse(retrieve);
    setTime(valtime);
    const dateRet = window.localStorage.getItem("date");
    const date = JSON.parse(dateRet);
    const n = new Date(date);
    const sep = `${n.getDate()}/${n.getMonth() + 1}/${n.getFullYear()}`;
    setDate(sep);

    setBook(val);
  }, []);

  /** useState */
  const [seat, setSeat] = useState([]);
  const [display, setDisplay] = useState([]);
  const [price, setPrice] = useState("price");

  /** setting seat using use Effect */
  useEffect(() => {
    if (seat.length === 0) {
      setDisplay(["No seats selected"]);
    } else {
      setDisplay(seat);
      setButton(true);
    }

    if (seat.length === 0) {
      setPrice("0");
    } else {
      setPrice(seat.length * 120);
    }
  }, [seat]); // dependencies

  /** handling event  */
  const handleChange = (event) => {
    const val = event.target.name;
    if (seat.length < 5) {
      if (seat.includes(val)) {
        let index = seat.indexOf(val);
        seat.splice(index, 1);
        setSeat(seat);
        setDisplay(display);
      } else {
        setSeat([...seat, val]);
      }
    } else {
      alert("max limit reached");
    }
  };

  /** handle data */

  /** handling reset */
  const handleReset = () => {
    setSeat([]);
  };

  /**  */
  const submit = () => {
    window.localStorage.setItem("seat", JSON.stringify(seat));
    window.localStorage.setItem("price", JSON.stringify(price));
  };
  /**  */

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <div>
            <Typography>Quartz ₹120</Typography>
            <FormGroup row>
              <p>S1</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S12"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>S2</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S13"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S14"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S15"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S16"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S17"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S18"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S19"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S20"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S21"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S22"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S23"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S24"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>S3</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S25"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S26"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S27"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S28"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S29"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S30"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S31"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S32"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S33"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S34"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S35"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<WeekendIcon />}
                    name="S36"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>

          <div>
            <FormGroup row>
              <p>A</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A12"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>B</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A12"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>C</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C12"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>D</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D12"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>

          <div>
            <FormGroup row>
              <p>E</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E12"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>F</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="F12"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>

          <div>
            <FormGroup row>
              <p>G</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="G12"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <Paper style={{ backgroundColor: "" }}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Screen this way
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent
              style={{
                backgroundImage: `url("https://m.media-amazon.com/images/M/MV5BZjQzMDkxNWYtOTc5ZS00NGUxLWE0MGEtMzY1Njk5NjA5MzdiXkEyXkFqcGdeQXVyMTI2ODI1Mzc0._V1_UY1200_CR164,0,630,1200_AL_.jpg)`,
                backgroundSize: "150px",
                height: "150px",
                border: "2px solid",
                transparency: "0.5px",
              }}
            ></CardContent>
          </Card>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              MovieName:"Sarpatta"
            </Typography>
            <Typography component="h6" variant="h6">
              Time:{time}
            </Typography>
            <Typography component="h6" variant="h6">
              Date:{date}
            </Typography>
          </CardContent>
          <Card>
            <CardContent>
              <Typography component="h4" variant="h4">
                Seats booked{" "}
              </Typography>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {display.map((x) => (
                  <Typography
                    variant="h5"
                    style={{
                      padding: "5px",
                      border: "5px",
                      borderColor: "green",
                      margin: "5px",
                    }}
                  >
                    {x}
                  </Typography>
                ))}
                <Button
                  variant="outlined"
                  color="primary"
                  width="full"
                  onClick={() => handleReset()}
                >
                  reset
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography component="h5" variant="h5">
                {" "}
                ({seat.length}) Seats booked
              </Typography>
              <Typography variant="h4" color="h4">
                {" "}
                Total:₹ {price}{" "}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="secondary"
              onClick={submit}
              disabled={button === false}
              href="/ticket"
            >
              Book ticket{" "}
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Book;
