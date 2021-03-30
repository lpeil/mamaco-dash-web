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
          <Grid item xs={10}>
            <Grid container justify="center">
              <Grid item xs={12} className={classes.discordLogo} />
              <Grid item xs={2}>
                <Card className={classes.gridCardLogin}>
                  <Button fullWidth onClick={discordLogin} color="primary">
                    Login with Discord
                  </Button>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
