import React from "react"
import "./css/index.css"
import {CSSTransition, TransitionGroup,} from 'react-transition-group';

const WeatherOneDays = ({weatherGetRedux, inputChange, props}) => {



    let view = ""
if (props.weatherOneDaysWar!==null) {
    view = (
        <CSSTransition
            key={props.weatherOneDaysWar.id}
            timeout={2000}
            classNames="item">
        <div  key={props.weatherOneDaysWar} className="WeatherOneDays-block_view__box">
            <div className="WeatherOneDays-block_view__box___flex">
                <p>Страна: </p><p>{props.weatherOneDaysWar.country}</p>
            </div>
            <div className="WeatherOneDays-block_view__box___flex">
                <p>Город: </p><p>{props.weatherOneDaysWar.city}</p>
            </div>
            <div className="WeatherOneDays-block_view__box___flex">
                <p>Погода: </p><p>{props.weatherOneDaysWar.temp}°C</p>
            </div>
        </div>
</CSSTransition>

    )
}
    return (
        <>
            <div className="WeatherOneDays">
                <div className="WeatherOneDays-block">
                    <input value={props.input} onChange={(event) => {
                        inputChange(event)
                    }} placeholder="Какой город ?" type="text"/>
                    <button onClick={(event) => {
                        weatherGetRedux(props.input)
                    }}>Узнать погоду
                    </button>

                </div>
                <div className="WeatherOneDays-block_view">
                    <TransitionGroup>
                        {view}
                    </TransitionGroup>

                </div>
            </div>

        </>
    )
}
export default WeatherOneDays





