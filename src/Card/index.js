import React, { memo }  from 'react';
import { useWeather } from '../hooks/useWeather';
import '../App.css';

export const Card = memo(({city}) => {
    const data = useWeather(city);

    if (!data) return null;
    const {name, weather, main} = data;
    const {description, icon} = weather[0];
    const {temp, humidity, feels_like} = main;

    return (
    <div className = "Card">
        <div className='MainInfo'>
            <img className="Icon" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt = "icon">
            </img>
            <div className="Title">
                {name}
            </div>
            <div className="Description">
                {description}
            </div>
            <div className="Temperature">
                {temp.toFixed()}
            </div>
        </div>
        <div className='Information'>
            <div>Humudity: {humidity} </div>
            <div>Fills like: {feels_like.toFixed()} </div>
        </div>

    </div>)
});
