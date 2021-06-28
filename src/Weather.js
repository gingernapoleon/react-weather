import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function handleResponse(response) {
    alert (
        'The weather in ${response.data.name} is ${response.data.main.temp} °C'
        );
}

    let apiKey = "da16df2d631e0a7dbbac5c7b96916177";
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=N${props.city}&appid=${apiKey}&units=metric';

    axios.get(apiUrl).then(handleResponse);
    return <h2>Hello from Weather</h2>;
}