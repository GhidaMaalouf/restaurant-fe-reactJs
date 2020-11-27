import Axios from 'axios';


export const getAll= async () => {
	try{
	const response=await Axios.get('http://localhost:8080/v1/restaurants/all-restaurants');
	return response.data;
	
	}
	catch(e){
		console.log("Error to get Restaurants"+e);
	}
}

export const getAllVisits= async () => {
	try{
	const resp=await Axios.get('http://localhost:8080/v1/restaurants/visited-restaurants');
	return resp.data;	
	
	}
	catch(e){
		console.log("Error to get Visited Restaurants"+e);
	}
}