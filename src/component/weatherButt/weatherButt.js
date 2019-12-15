import React from "react"
import "./css/index.css"
import {Route} from "react-router-dom";



const WeatherButt =()=>{
    return (
        <div>
            <div className="container">
                <div className="WeatherButt">
                    <Route  render={({history}) => (
                        <div onClick={() => {
                            history.push(`/weather`)
                        }}>
                            <p>Нажми сюда чтобы узнать погоду на текущий день.</p>
                        </div>
                    )}/>
                    <Route  render={({history}) => (
                        <div onClick={() => {
                            history.push(`/weather-five`)
                        }}>
                            <p>Нажми сюда чтобы узнать погоду на 5 дней.</p>
                        </div>
                    )}/>
                </div>
            </div>
        </div>
    )


}

export default WeatherButt