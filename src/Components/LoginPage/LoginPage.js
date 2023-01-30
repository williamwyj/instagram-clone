import React, { Component } from "react";
import { Grid } from "@mui/material";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            Hello
          </Grid>
          <Grid item xs={6}>
            From
          </Grid>
          <Grid item xs={3}>
            william
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
