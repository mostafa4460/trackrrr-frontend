import { Switch, Route, Redirect } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import HomePage from "./HomePage";

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
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
          <Redirect to="/" />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default App;
