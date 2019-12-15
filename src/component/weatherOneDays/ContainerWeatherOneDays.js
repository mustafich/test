import React from "react"

import {addWeatherOne} from "../../redux/actions/actions";
import {connect} from "react-redux";
import WeatherOneDays from "./WeatherOneDays";
import {apiWeatherFunction} from "./../../api/api"





class ContainerWeatherOneDays extends React.Component {
    state = {
        input:"",
        weatherOneDaysWar:null
    }



    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            ...this.state.input,
            weatherOneDaysWar:{
                city: nextProps.state.city,
                country: nextProps.state.country,
                id: nextProps.state.id,
                temp: nextProps.state.temp,
            }

        })
    }
    weatherGetRedux = (city)=>{
        apiWeatherFunction.gettingWeather(city).then(data=>{
            let {name,main,sys} = data;
            let weatherOneDays = {
                id:sys.id,
                city:name,
                temp:main.temp,
                country:sys.country
            }
            this.props.addWeatherOne(weatherOneDays)
        }).catch(()=>{
            let weatherOneDaysWar = {
                id:"Вы ввели неправильный город",
                city:"Вы ввели неправильный город",
                temp:"Вы ввели неправильный город",
                country:"Вы ввели неправильный город",
            }
            this.props.addWeatherOne(weatherOneDaysWar)
        })
    }
    inputChange = (event)=>{
        this.setState({
            input:event.target.value
        })

    }
    render() {
        return (
            <>
                <WeatherOneDays props={this.state} weatherGetRedux={this.weatherGetRedux} inputChange={this.inputChange}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.reducerGlobal.addWeatherOne
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        addWeatherOne: (item) => {
            dispatch(addWeatherOne(item))
        },
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(ContainerWeatherOneDays)