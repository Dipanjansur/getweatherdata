import React, { Component } from 'react'
import axois from 'axios';
import Card from 'react-bootstrap/Card';
import './geolocation.css';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

import FormControl from 'react-bootstrap/FormControl';
const API_KEY = "a2d758c8011fbaa0dbe4c48e5b32e4e3";
class Geolocation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            long: 0,
            lat: 0,
            apidata:null,
        }
    }

    componentDidMount() {

        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                long: position.coords.longitude,
                lat: position.coords.latitude
            });

        });
    }

    sendapireq = () => {

        axois.get(`https://api.openweathermap.org/data/2.5/weather`, {
            params: {
                lat: this.state.lat,
                lon: this.state.long,
                appid: API_KEY,
                units: 'metric',
            }
        }).then((response) => {
          
            this.setState({
                apidata:response.data,
            })
            console.log(this.state.apidata);
        })
            .catch(function (error) {
                console.log(error);
            });


    }

    render() {
        if(this.state.apidata==null){
            return (
                <div> 
                <h1>current location is:latitude{this.state.lat} and longitude is:{this.state.long}</h1>
                    <Button onClick={this.sendapireq} variant="success">get my weather</Button>

</div>
            )
        }else{
        return (
            <div>
                <h1>your current location is:latitude{this.state.lat} and longitude is:{this.state.long}</h1>
                <Button onClick={this.sendapireq} variant="success">Reload</Button>
                <Card className="colors_div">
                    <Card.Header>YOU are in     {this.state.apidata.name}</Card.Header>
                    <Card.Body>
                        <Card.Title className="colors_div">temparature:{this.state.apidata.main.temp}</Card.Title>
                        <ListGroup variant="flush" className="colors_div">
                            <ListGroup.Item className="colors_div">Feels like:{this.state.apidata.main.feels_like}</ListGroup.Item>
                            <ListGroup.Item className="colors_div">Min temparature{this.state.apidata.main.temp_min}</ListGroup.Item>
                            <ListGroup.Item className="colors_div">Maximum temparature{this.state.apidata.main.temp_max}</ListGroup.Item>
                            <ListGroup.Item className="colors_div">humidity:{this.state.apidata.main.humidity}</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        )
            }
    };
}

export default Geolocation;
