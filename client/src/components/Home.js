import React from 'react';
import "./Home.css"

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <div className="center-block">
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={() => {this.props.handleSubmit(this.state.value); this.setState({value: ''})}}></button>
            </div>
        );
    }
}

class Display extends React.Component {
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

function Home() {
    const [weatherVal, setWeatherVal] = React.useState("")
    const [errorVal, setErrorVal] = React.useState("")
    const [tempVal, setTempVal] = React.useState(0)

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
        } else {
            setErrorVal("")
            setWeatherVal(jsonData["current"]["condition"]["text"])
            setTempVal(jsonData["current"]["temp_f"])
        }
    }

    return (
        <div>
            <Form handleSubmit={handleSubmit}></Form>
            <Display error={errorVal} weather={weatherVal} temp={tempVal} ></Display>
        </div>
    )
}

export default Home;