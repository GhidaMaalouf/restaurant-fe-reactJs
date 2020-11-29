import './App.css';
import MainPage from './components/MainPage';
import SnackbarError from './components/SnackbarError';
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
   		<SnackbarError/>
    	<MainPage> </MainPage>
    </MuiThemeProvider>
  );
}

export default App;
