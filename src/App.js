import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import Main from '../src/main/main'
import GlobalTheme from '../src/GlobalStyles'

function App() {
  return (
 <>
 <Router>
            <ThemeProvider theme={GlobalTheme}>
            <Switch>
                <Route exact path='/'>
                  <Main/> 
                </Route>
            </Switch>
            </ThemeProvider>
        </Router>
 </>
  );
}

export default App;
