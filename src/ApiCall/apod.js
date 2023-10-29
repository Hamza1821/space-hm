import  {callApi}  from "./callApi.js";


export const dataToday= async()=>{
    const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based.
const day = String(currentDate.getDate()).padStart(2, '0');

const todayDate = `${year}-${month}-${day}`;






const today=`https://api.nasa.gov/planetary/apod?date=${todayDate}&api_key=67Nld4r1qQxQEJKZzDKvO6fIHAib1xg477clFIk8`
 const dataToday=await callApi(today)
 return dataToday;
 
}
export const dataByDate= async(date)=>{
const ApiofDate=`https://api.nasa.gov/planetary/apod?date=${date}&api_key=67Nld4r1qQxQEJKZzDKvO6fIHAib1xg477clFIk8`
 const dataOfDate=await callApi(ApiofDate)
 return dataOfDate;
 
}

