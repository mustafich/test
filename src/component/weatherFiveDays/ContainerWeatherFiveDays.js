import React from "react"

import {addWeatherFive} from "../../redux/actions/actions";
import {connect} from "react-redux";
import WeatherFiveDays from "./weatherFiveDays";
import {apiWeatherFunction} from "./../../api/api"





class ContainerWeatherFiveDays extends React.Component {
    state = {
        input:"",
        weatherFiveDaysWar:null,
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
                ...this.state,
            weatherFiveDaysWar:{
                id:nextProps.state.id,
                city:nextProps.state.city,
                country:nextProps.state.country,
                temp:{
                    one:{
                        data:nextProps.state.temp.one.data,
                        dataTemp:nextProps.state.temp.two.dataTemp,
                    },
                    two:{
                        data:nextProps.state.temp.two.data,
                        dataTemp:nextProps.state.temp.two.dataTemp,
                    },
                    there:{
                        data:nextProps.state.temp.there.data,
                        dataTemp:nextProps.state.temp.there.dataTemp,
                    },
                    four :{
                        data:nextProps.state.temp.four.data,
                        dataTemp:nextProps.state.temp.four.dataTemp,
                    },
                    five :{
                        data:nextProps.state.temp.five.data,
                        dataTemp:nextProps.state.temp.five.dataTemp,
                    }
                }
            }

        }
        )
    }




    weatherGetRedux = (city)=>{
        apiWeatherFunction.gettingWeatherFive(city).then(data=>{
            let weatherFiveDays = {
                id:data.city.id,
                city:data.city.name,
                country:data.city.country,
                temp:{
                    one:{
                        data:data.list[0].dt_txt,
                        dataTemp:data.list[0].main.temp,
                    },
                    two:{
                        data:data.list[8].dt_txt,
                        dataTemp:data.list[8].main.temp,
                    },
                    there:{
                        data:data.list[16].dt_txt,
                        dataTemp:data.list[16].main.temp,
                    },
                    four :{
                        data:data.list[24].dt_txt,
                        dataTemp:data.list[24].main.temp,
                    },
                    five :{
                        data:data.list[32].dt_txt,
                        dataTemp:data.list[32].main.temp,
                    }
                }
            }
            this.props.addWeatherFive(weatherFiveDays)
        }).catch(()=>{
            let weatherFiveDaysWar = {
                id:"Вы ввели неправильный город",
                city:"Вы ввели неправильный город",
                country:"Вы ввели неправильный город",
                temp:{
                    one:{
                        data:"Вы ввели неправильный город",
                        dataTemp:"Вы ввели неправильный город",
                    },
                    two:{
                        data:"Вы ввели неправильный город",
                        dataTemp:"Вы ввели неправильный город",
                    },
                    there:{
                        data:"Вы ввели неправильный город",
                        dataTemp:"Вы ввели неправильный город",
                    },
                    four :{
                        data:"Вы ввели неправильный город",
                        dataTemp:"Вы ввели неправильный город",
                    },
                    five :{
                        data:"Вы ввели неправильный город",
                        dataTemp:"Вы ввели неправильный город",
                    }
                }
            }

            this.props.addWeatherFive(weatherFiveDaysWar)
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
                <WeatherFiveDays props={this.state} weatherGetRedux={this.weatherGetRedux} inputChange={this.inputChange}/>

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state.reducerGlobal.addWeatherFive
    }
}
const mapStateToDispatch = (dispatch) => {
    return {
        addWeatherFive: (item) => {
            dispatch(addWeatherFive(item))
        },
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(ContainerWeatherFiveDays)