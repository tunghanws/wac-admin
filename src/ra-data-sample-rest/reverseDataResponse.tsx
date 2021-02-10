const reverseDataResponse = (arrJson:any) => {
	console.log("data get one == ",arrJson);
	if(!Array.isArray(arrJson)){
		arrJson.value = Object.assign({},arrJson.value,{id:arrJson.value._id});
		console.log("json value == ",arrJson.value);
		return arrJson.value;
	};	
	for(let i = 0; i < arrJson.length; i++){
		if(arrJson[i] !== undefined && arrJson[i].hasOwnProperty("_id") && !arrJson[i].hasOwnProperty("id")){
			arrJson[i] = Object.assign({},arrJson[i],{id:arrJson[i]._id});
		}
	}
	console.log("json edit ==== ",arrJson);
	return arrJson;
}

export default reverseDataResponse
