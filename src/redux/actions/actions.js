export const addWeatherOne = (weatherOneDays) => {
    return (
        {
            type: 'ADD_WEATHER_ONE_DAY',
            weatherOneDays: weatherOneDays
        }
    )
};
export const addWeatherFive = (weatherFiveDays) => {
    return (
        {
            type: 'ADD_WEATHER_FIVE_DAY',
            weatherFiveDays: weatherFiveDays
        }
    )
};
