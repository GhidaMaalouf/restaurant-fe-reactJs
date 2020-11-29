import Axios from 'axios';

export const getAll= async () => {
	try{
	const resp=await Axios.get('/v1/restaurants/all-restaurants');
	return resp.data;
	
	}
	catch(e){
		console.log("Error to get Restaurants"+e);

	}
}

export const getAllVisits= async () => {
	try{
	const resp=await Axios.get('/v1/restaurants/visited-restaurants');
	
	return resp.data;	
	
	}
	catch(e){
		console.log("Error to get Visited Restaurants"+e);
	}
}

export const postVisited = async (data) => {
    try{
		const resp= await Axios.post("/v1/restaurants/add-visited-restaurant",
            data

        )

    }catch(e){
        console.log("Error to add visited restaurant" +e)
    }
}


