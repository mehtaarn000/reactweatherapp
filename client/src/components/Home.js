import React from 'react';

// Components
import Form from "./Form"
import Display from "./Display"

export default function Home() {
    const [weatherVal, setWeatherVal] = React.useState("")
    const [errorVal, setErrorVal] = React.useState("")
    const [tempVal, setTempVal] = React.useState(0)
    const [place, setPlace] = React.useState("")

    async function handleSubmit(event) {
        let response = await fetch("/api?city=" + event)
        const jsonData = await response.json()

        let checkerr
        try {
            checkerr = jsonData["error"]["message"]
        } catch {
            checkerr = false
        }

        if (checkerr) {
            setErrorVal(checkerr)
            setWeatherVal("")
            setTempVal(0)
            setPlace("")
        } else {
            setErrorVal("")
            setWeatherVal(jsonData["current"]["condition"]["text"])
            setTempVal(jsonData["current"]["temp_f"])
            setPlace(jsonData["location"]["name"] + ", " + jsonData["location"]["region"])
        }
    }

    return (
        <div>
            <Form handleSubmit={handleSubmit}></Form>
            <Display error={errorVal} weather={weatherVal} temp={tempVal} place={place}></Display>
        </div>
    )
}