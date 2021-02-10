import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

import './App.css';
import { useState, createRef, useEffect } from 'react'
import { Form, Container, Button, NavLink} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [translationInput, setTranslationInput] = useState('')
  const [translationOutput, setTranslationOutput] = useState('¡Soy milk!')
  const [languages, setLanguages] = useState([{"code":"en","name":"English"}, {"code":"sl","name":"Slovenian"}])

  const inputRef = createRef()
  const languageRef = createRef() 

  const fetchLanguages = async () => {
    let langsResponse = await fetch('/languages')
    let languages = langsResponse.json()
    setLanguages(languages)
  }

  useEffect( () => {
    fetchLanguages()
  }, [])

  const submitTranslation = async e => {
    e.preventDefault()
    let stringToTranslate = inputRef.current.value

    let transl8Response = await fetch('/translate', {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: stringToTranslate,
    })

    setTranslationOutput(transl8Response.value)
  }

  return (
    <div className="App">

<Container className="Content-container">
  <header className="App-Header">
      <h1>Cloudn8-Transl8</h1>

      <h4>🇦🇺🇧🇷🇨🇿🇪🇹🇫🇰🇬🇮🇭🇳🇮🇶🇯🇴🇰🇪🇰🇵🇨🇺🇮🇪🇺🇳🇿🇲🇱🇾🇦🇪🇲🇳🇳🇵🇨🇭🇲🇩🇦🇲</h4>
      <h4>The only translation service your business will ever need</h4>
      <h5>Powered by TF, CI/CD, K8S, AI, ML, and most importantly C8H10N4O2</h5>
      <br/>
  </header>

  <Form.Control ref={inputRef} name="input" as="textarea" rows={3} placeholder="Enter the sentence you wish to translate. For example, typing in I am milk" />
  <br/>
  <Button variant="primary" type="submit" onClick={submitTranslation}>
    <FontAwesomeIcon icon={faLanguage} />
  </Button>

  <Form.Control ref={languageRef} as="select" defaultValue={ languages[0].name }>
    { languages.map( language => <option> { language.name } </option> )}
  </Form.Control>

    <br/>
    <br/>

  <Form.Control 
    name="output" 
    as="textarea" 
    rows={3} 
    value={translationOutput}
    readOnly
    />

    <br/>
<footer>
  Source on <a href="https://github.com/cloudn8-transl8">github.com/cloudn8-transl8</a> <br/>Proudly overengineered in London by <a href="https://twitter.com/sheriffjackson">@sheriffjackson</a> and <a href="https://twitter.com/zmarkan">@zmarkan</a>
</footer>


</Container>



</div>
  );
}

export default App;
