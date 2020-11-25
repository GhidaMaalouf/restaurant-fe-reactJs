import './App.css';
import MainPage from './components/MainPage';
import { MuiThemeProvider, createMuiTheme} from '@material-ui/core';


const theme=createMuiTheme({
	palette: {
		primary:{
			main:'#448aff'
		},
		secondary:{
			main:'#f44336'
		}
	}
})
function App() {
  return (
   	<MuiThemeProvider theme={theme}>
    	<MainPage> </MainPage>
    </MuiThemeProvider>
  );
}

export default App;
