import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

import './App.css';
import { getState, setState } from 'react'
import { Form, Container, Button, NavLink} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   } from "@fortawesome/fontawesome-svg-core";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/fontawesome-free";
import background from './background.jpg'
// import 

function App() {
  return (
    <div className="App">

<Container className="Content-container">
  <header className="App-Header">
      <h1>Cloudn8-Transl8</h1>
      <h4>The only translation service your business will ever need</h4>
      <h5>Powered by TF, CI/CD, K8S, AI, ML, and most importantly C8H10N4O2</h5>
      
  </header>
<Form>
  <Form.Group controlId="translateForm.translationInput">
    {/* <Form.Label>Enter the sentence you wish to translate</Form.Label> */}
    <Form.Control as="textarea" rows={3} placeholder="Enter the sentence you wish to translate. For example, typing in I am milk" />
  </Form.Group>

  <Button variant="primary" type="submit">
    <FontAwesomeIcon icon={faLanguage} />
    {/* <FontAwesomeIcon icon={translate} fixedWidth border /> */}
  </Button>

  <Form.Group controlId="translateForm.translationOutput">
    <Form.Label>Translation output</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="¡Soy milk!"/>
  </Form.Group>

  


</Form>

<footer>
  Source on <a href="https://github.com/cloudn8-transl8">github.com/cloudn8-transl8</a> <br/>Proudly overengineered in London by <a href="https://twitter.com/sheriffjackson">@sheriffjackson</a> and <a href="https://twitter.com/zmarkan">@zmarkan</a>
</footer>


</Container>



</div>
  );
}

export default App;
