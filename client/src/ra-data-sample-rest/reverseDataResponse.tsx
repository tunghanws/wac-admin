const reverseDataResponse = (arrJson:any) => {
	//if(!Array.isArray(arrJson)){return []};
	for(let i = 0; i < arrJson.length; i++){
		if(arrJson[i].hasOwnProperty("_id")){
			arrJson[i] = Object.assign({},arrJson[i],{id:arrJson[i]._id});
		}
	}
	console.log("json edit ==== ",arrJson);
	return arrJson;
}

export default reverseDataResponse
