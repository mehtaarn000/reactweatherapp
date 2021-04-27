import React from "react"
import "../css/Form.css"

function WeatherCard(props) {
    return (
        <div style={{
            overflow: "hidden",
            zIndex: 10,
            position: "absolute",
            margin: "150px auto",
            height: "90px",
            width: "300px",
            backgroundColor: props.color,
            borderRadius: "10px", 
            boxShadow: "2px 2px 1px rgba(0, 0, 0, 0.2)"}}>

            <h1 style={{color: "black"}} class="Condition">{props.condition}</h1>
            <h2 style={{color: "black"}} class="Temp">{props.temp}<span id="F">&#8457;</span></h2>
            <h1 style={{color: "black"}} class="Location"><i class="material-icons locationIcon">place</i> Raleigh, NC</h1>
        </div>
    )
}

export default class Display extends React.Component {
    render() {
        if (this.props.error !== "") {
            return <div><h1>{this.props.error}</h1></div>
        }

        else if (this.props.weather === "" && this.props.temp === 0) {
            return <div></div>
        } 
        
        else {
            if (this.props.weather.includes("cloudy") || this.props.weather.includes("Cloudy") || this.props.weather.includes("Overcast")) {
                return (
                    <div>
                        <WeatherCard color="gray" condition={this.props.weather} temp={this.props.temp}></WeatherCard>
                    </div>
                )
            }

            else if (this.props.weather.includes("sunny") || this.props.weather.includes("Sunny") || this.props.weather.includes("Clear")) {
                return (
                    <div>
                        <WeatherCard color="orange" condition={this.props.weather} temp={this.props.temp}></WeatherCard>
                    </div>
                )
            }
        } 
    }
}
