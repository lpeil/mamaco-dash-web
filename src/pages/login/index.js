import React from 'react';
import { Grid, Button, Card } from '@material-ui/core';
import useStyles from './styles';

const LoginPage = () => {
  const classes = useStyles();
  const discordLogin = () => {
    window.location.href = process.env.DISCORD_LOGIN;
  };

  return (
    <Grid className={classes.gridContainer} container>
      <Grid item xs={3} className={classes.gridCardImage} />
      <Grid item xs={9} className={classes.gridCardLogin}>
        <Grid container justify="center">
          <Card>
            <Button onClick={discordLogin} color="primary">
              Login with Discord
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
