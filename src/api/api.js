
class apiWeather {
    gettingWeather = async (city) => {
        const api_url = await
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0e5cf76b37987bdc1a3e3ea6b7e28816&units=metric`);
        const data = await api_url.json()
        return data
    }
    gettingWeatherFive = async (city) => {
        const api_url = await
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0e5cf76b37987bdc1a3e3ea6b7e28816&units=metric`);
        const data = await api_url.json()
        return data
    }
}

let apiWeatherFunction = new apiWeather()
export {apiWeatherFunction}
