import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = () => {
	return (
    <div >
      <AppBar position="static" color="primary">
        	<Toolbar >
      			<Grid container >
        			<Grid item xs={12} sm={4}>
          				<Grid container>
            				<TextField label="Search" fullWidth variant="outlined" style={{backgroundColor:"white"}} color="primary" size="medium"/>
          				</Grid>
        			</Grid>
            
        				<Grid item xs={12} sm={4}>
          					<Grid container justify="center">
            					<FormControl style={{backgroundColor:"white"}} variant="outlined" >
              							<InputLabel >Types</InputLabel>
                							<Select native label="Type">
                  								<option aria-label="None" />
                  								<option value={'allTypes'}>All Types</option>
                  								<option value={'lebanese'}>Lebanese</option>
                  								<option value={'italian'}>Italian</option>
                  								<option value={'chinese'}>Chinese</option>
                  								<option value={'fusion'}>Fusion</option>
                							</Select>
      							</FormControl>
                    

          					</Grid>
        				</Grid>
            
        				<Grid item xs={12} sm={4}>
          					<Grid container justify="center">
            					<Button variant="contained" color="secondary" position="center" size="large">
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