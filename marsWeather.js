
const getWeather=()=>{
    fetch('https://api.nasa.gov/insight_weather/?api_key=YOUR_API_KEY&feedtype=json&ver=1.0')
    .then(response => response.json())
    .then(data => {
      const firstSolKey = data.sol_keys[0]; // Get the key of the first Sol
      const atmosphericTemperature = data[firstSolKey].AT.av; // Get the atmospheric temperature
      console.log(`Atmospheric Temperature for Sol ${firstSolKey}: ${atmosphericTemperature}°C`);
    })
    .catch(error => console.error('Error fetching data:', error));
  }
  getWeather()