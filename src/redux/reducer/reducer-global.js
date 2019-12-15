const initialState = {
    addWeatherOne:{
        city: null,
        country: null,
        id: null,
        temp: null,
    },
    addWeatherFive:{
        id:null,
        city:null,
        country:null,
        temp:{
            data:null,
            dataTemp:null,
        }
    }
};

let reducerGlobal = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_WEATHER_ONE_DAY':
            return {
                ...state,
                addWeatherOne:action.weatherOneDays
            }
        case 'ADD_WEATHER_FIVE_DAY':

            return {
                ...state,
                addWeatherFive:action.weatherFiveDays
            }
    }
    return state
};


export default reducerGlobal;
