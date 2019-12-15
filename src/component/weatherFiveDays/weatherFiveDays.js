import React from "react"
import "./css/index.css"
import {CSSTransition, TransitionGroup,} from 'react-transition-group';

const WeatherFiveDays = ({weatherGetRedux, inputChange, props}) => {



    let view = ""
if (props.weatherFiveDaysWar!==null) {

    view = (
        <CSSTransition
            key={props.weatherFiveDaysWar.id}
            timeout={2000}
            classNames="item">
        <div key={props.weatherFiveDaysWar}  className="WeatherOneDays-block_view__box">
            <div className="WeatherOneDays-block_view__box___flex">
            <p>Страна:</p><p>{props.weatherFiveDaysWar.country}</p>
            </div>
            <div className="WeatherOneDays-block_view__box___flex">
                <p>Город:</p><p>{props.weatherFiveDaysWar.city}</p>
            </div>
            <div className="WeatherOneDays-block_view__box___flex">
                <p>1)Первый день { props.weatherFiveDaysWar.temp.one.data}</p><p>Будет { props.weatherFiveDaysWar.temp.one.dataTemp}°C</p>
            </div>
            <div className="WeatherOneDays-block_view__box___flex">
                <p>2)Второй день { props.weatherFiveDaysWar.temp.two.data}</p><p>Будет { props.weatherFiveDaysWar.temp.two.dataTemp}°C</p>
            </div>
            <div className="WeatherOneDays-block_view__box___flex">
                <p>3)Третий день { props.weatherFiveDaysWar.temp.there.data}</p><p>Будет { props.weatherFiveDaysWar.temp.there.dataTemp}°C</p>
            </div>
            <div className="WeatherOneDays-block_view__box___flex">
                <p>4)Четвертый день { props.weatherFiveDaysWar.temp.four.data}</p><p>Будет { props.weatherFiveDaysWar.temp.four.dataTemp}°C</p>
            </div>
            <div className="WeatherOneDays-block_view__box___flex">
                <p>5)Пятый день { props.weatherFiveDaysWar.temp.five.data}</p><p>Будет { props.weatherFiveDaysWar.temp.five.dataTemp}°C</p>
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
export default WeatherFiveDays





