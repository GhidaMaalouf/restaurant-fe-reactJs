import React from 'react';
import {useDispatch} from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import { requestAllRestaurants } from '../actions/callRestaurantsAction';
import { requestSearch } from '../actions/searchAction';
import {SHOW_ALL_RESTAURANTS,SHOW_SEARCHED_RESTAURANTS} from '../constantTypes';

const SearchBar = () => {
  const dispatch=useDispatch();
  const useStyles=makeStyles(theme=>({
    button:{
      padding: theme.spacing(1.5, 3)
    }
  }))
  const classes =useStyles();

  const submit=()=>{
    let name = document.getElementById("nameId");
    let type = document.getElementById("typeId");
    console.log(name.value)
    console.log(type.value)
    let data = {name: name.value , type: type.value};
    
    if (name.value === "" && (type.value === "" || type.value=== "all")){
      dispatch({type: SHOW_ALL_RESTAURANTS});
      dispatch(requestAllRestaurants());
      
    }
    else{
      dispatch({type: SHOW_SEARCHED_RESTAURANTS});
      dispatch(requestSearch(data));
    }

  }
	return (
    <div >
      <AppBar position="static" color="primary">
        	<Toolbar>
      			<Grid container >
        			<Grid item xs={12} sm={4}>
          				<Grid container>
            				<TextField label="Search" id = "nameId" fullWidth variant="outlined" style={{backgroundColor:"white"}} color="primary" size="medium"/>
          				</Grid>
        			</Grid>
            
        				<Grid item xs={12} sm={4}>
          					<Grid container justify="center">
            					<FormControl style={{backgroundColor:"white"}} variant="outlined" >
              							<InputLabel >Types</InputLabel>
                							<Select native label="Type" id = "typeId">
                  								<option aria-label="None" />
                  								<option value={'all'}>All Types</option>
                  								<option value={'lebanese'}>Lebanese</option>
                  								<option value={'italian'}>Italian</option>
                  								<option value={'fusion'}>Fusion</option>
                							</Select>
      							  </FormControl>
                    </Grid>
        				</Grid>
            
        				<Grid item xs={12} sm={4}>
          					<Grid container justify="center">
            					<Button onClick={submit} variant="contained" color="secondary" position="center" size="large" className={classes.button}>
            						<SearchIcon></SearchIcon>
            						Search
            					</Button>
          					</Grid>
        				</Grid>
      			</Grid>
          </Toolbar>
      </AppBar>
    </div>
  );
}

export default SearchBar;