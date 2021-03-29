import { Grid, Card, Button } from '@material-ui/core'

const LoginPage = () => (
  <Grid container justify="center" alignItems="center" style={{height: "100vh"}}>
    <Card style={{ padding: "10px" }}>
      <Button color="primary">Login with Discord</Button>
    </Card>  
  </Grid>
)

export default LoginPage;
