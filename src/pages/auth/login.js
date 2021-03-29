import React from 'react'
import { Grid, Card, Button } from '@material-ui/core'

const LoginPage = () => {
  const discordLogin = () => {
    window.location.href = process.env.DISCORD_LOGIN;
  }

  return (
    <Grid container justify="center" alignItems="center" style={{height: "100vh"}}>
      <Card style={{ padding: "10px" }}>
        <Button onClick={discordLogin} color="primary">Login with Discord</Button>
      </Card>  
    </Grid>
  )
}

export default LoginPage;
