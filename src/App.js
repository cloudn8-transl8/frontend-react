import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Translation from './components/Translation'
import { getState, setState } from 'react'
import { Form, Container } from 'react-bootstrap'



function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<Container>
  <header className="App-Header">
      <h1>Cloudn8-Transl8</h1>
  </header>
<Form>
  <Form.Group controlId="translateForm.translationInput">
    <Form.Label>Enter the sentence you wish to translate</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="I am milk" />
  </Form.Group>

  <Form.Group controlId="translateForm.translationOutput">
    <Form.Label>Translation output</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="¡Soy milk!"/>
  </Form.Group>


</Form>


</Container>



</div>
  );
}

export default App;
