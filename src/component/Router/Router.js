import React from 'react'
import  {Route} from "react-router-dom";
import WeatherButt from "../weatherButt/weatherButt";
import ContainerWeatherOneDays from "../weatherOneDays/ContainerWeatherOneDays";
import ContainerWeatherFiveDays from "../weatherFiveDays/ContainerWeatherFiveDays";


const Router = ()=>{
    return (
        <>
            <Route path="/" exact render={()=>{
                return <WeatherButt/>
            }} />
            <Route path="/weather" render={()=>{
                return <ContainerWeatherOneDays/>
            }} />
            <Route path="/weather-five" render={()=>{
                return <ContainerWeatherFiveDays/>
            }} />
        </>
    )
}
export default Router