import * as React from "react";
import {
  Paper,
  withStyles,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { MailOutline } from "@material-ui/icons";
import axios from "axios";

const styles = () => ({
  container: {
    padding: "1em",
    display: "flex",
    flexDirection: "column",
    minWidth: "400px",
    minHeight: "300px",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "30px",
    width: "100px",
  },
  doneIcon: {
    width: "2em",
    height: "2em",
    marginBottom: "20px",
  },
  errorText: {
    color: "red",
  },
});

function SendEmail({ classes }) {
  const [email, setEmail] = React.useState("");
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    const emailRegexp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(emailRegexp)) setError(true);
    else {
      setDone(true);
      // send email via post method
      const myData = {
        email,
      };
      axios.post("http://localhost:5000/users/forgot-password", myData);
    }
  };

  return (
    <Paper className={classes.container}>
      {done ? (
        <>
          <MailOutline className={classes.doneIcon} />
          <Typography variant="h5" gutterBottom>
            Check your inbox to proceed
          </Typography>
        </>
      ) : (
        <form
          id="emailForm"
          className={classes.container}
          onSubmit={handleSubmit}
          autoComplete
        >
          <Typography variant="h5" gutterBottom>
            Password Reset
          </Typography>
          <TextField
            id="email"
            label="Email"
            required
            error={error}
            className={classes.textField}
            value={email}
            onChange={handleChange}
            margin="normal"
          />
          {error ? (
            <Typography className={classes.errorText} variant="subtitle2">
              Invalid address!
            </Typography>
          ) : (
            <React.Fragment />
          )}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            form="emailForm"
            // className={classes.button}
            onClick={handleSubmit}
          >
            Reset
          </Button>
        </form>
      )}
    </Paper>
  );
}

export default withStyles(styles)(SendEmail);