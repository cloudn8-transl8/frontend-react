import './App.css'
import dead_fish from './dead_fish.png'
import {Container} from 'react-bootstrap'


function ErrorPage(){

    return (
        <Container className="Error-container">
        
        <h1>Ooops!</h1>
        <h4>Something happened and the babel fish is dead. No translation for you!</h4>

        <img src={dead_fish} />
        
        </Container>
    )
}

export default ErrorPage