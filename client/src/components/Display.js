import React from "react"

export default class Display extends React.Component {
    render() {
        if (this.props.error !== "") {
            return <div><h1>{this.props.error}</h1></div>
        }

        else if (this.props.weather === "" && this.props.temp === 0) {
            return <div></div>
        } 
        
        else {
            return (
                <div>
                    <h1>Weather is {this.props.weather}</h1>
                    <h1>Temp is {this.props.temp}</h1>
                </div>
            )
        } 
    }
}
