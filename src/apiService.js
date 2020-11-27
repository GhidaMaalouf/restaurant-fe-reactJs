import Axios from 'axios';


export const getAllRestaurants= async () => {
	try{
	const getter=Axios.get('http://localhost:8080/v1/restaurants/all-restaurants').then(res=>{console.log(res.data)});
	}
	catch(e){
		console.log("Error to get Restaurants"+e);
	}
}