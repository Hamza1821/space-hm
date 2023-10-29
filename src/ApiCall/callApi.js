export const callApi=async(api )=>{
    
    try {
        const response = await fetch(api);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
       
      } catch (error) {
        console.error('An error occurred:', error.message);
      }
     
}
