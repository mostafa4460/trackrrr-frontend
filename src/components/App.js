import { Switch, Route, Redirect } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import HomePage from "./HomePage";
import SummonerProfile from "./SummonerProfile";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#0e95eb',
      contrastText: '#ffffff'
    }
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/summoners/:region/:name">
            <SummonerProfile />
          </Route>
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
