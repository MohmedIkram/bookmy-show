import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: "14px",
    verticalAlign: "middle",
    fontFamily: "",
  },
}));

export default function SecondAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#1f2533", height: "40px" }}
      >
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Typography variant="h6" className={classes.title}>
              Movies Stream Events Play Sports Activities Buzz
            </Typography>
          </Box>
          <Typography variant="h6" className={classes.title}>
            ListYourShows Coorprate Offers Gift Cards
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
