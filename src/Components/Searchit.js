import React,{useState} from 'react';
import axois from 'axios';
import './Searchit.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
const API_KEY ="a2d758c8011fbaa0dbe4c48e5b32e4e3";
function Searchit() {
    
    const [location, setlocation] = useState(null);
    const [apidata, setapidata] = useState(' ');
    const handleinputchange=(event)=>{
setlocation(event.target.value)
    }
    const sendapireq=()=>{

        axois.get(`http://api.openweathermap.org/data/2.5/weather`,{
            params:{
                q:location,
                appid:API_KEY,
                units:'metric',
            }
        }).then(function(response) {
            setapidata(response.data);
            console.log(apidata);
        })
            .catch(function (error) {
                console.log(error);
            });
        

    }
    if(apidata===' '){
        return(
            <div>
                <InputGroup className="mb-3">
                    <FormControl onChange={handleinputchange} value={location}
                        placeholder="enter the location"
                        aria-label="Enter the location"
                        aria-describedby="basic-addon2"
                    />
                    <Button onClick={sendapireq} variant="outline-secondary">
                        Search
    </Button>
                </InputGroup>
            </div>
        )
    }else{
    return (
        <div >
            <div >
                <InputGroup className="mb-3">
                    <FormControl onChange={handleinputchange} value={location}
                        placeholder="enter the location"
                        aria-label="Enter the location"
                        aria-describedby="basic-addon2"
                    />
                    <Button onClick={sendapireq} variant="outline-secondary">
                        Search
    </Button>
                </InputGroup>
                
                <Card className="color_div">
                    <Card.Header>{apidata.name}</Card.Header>
                    <Card.Body>
                        <Card.Title>temparature:{apidata.main.temp}°C</Card.Title>
                        <ListGroup variant="flush" className="color_div">
                            <ListGroup.Item className="color_div">Feels like:{apidata.main.feels_like}°C</ListGroup.Item>
                            <ListGroup.Item className="color_div">Min temparature{apidata.main.temp_min}°C</ListGroup.Item>
                            <ListGroup.Item className="color_div">Maximum temparature{apidata.main.temp_max}°C</ListGroup.Item>
                            <ListGroup.Item className="color_div">humidity:{apidata.main.humidity}°C</ListGroup.Item>
                        </ListGroup>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
        }
}

export default Searchit;
