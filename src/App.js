import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';

import './App.css';
import { useState, createRef} from 'react'
import { Form, Container, Button, NavLink} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from "@fortawesome/free-solid-svg-icons";



function App() {

  const [translationInput, setTranslationInput] = useState('')
  const [translationOutput, setTranslationOutput] = useState('')
  const inputRef = createRef()

  const submitTranslation = async e => {
    e.preventDefault()
    let stringToTranslate = inputRef.current.value

    let transl8Response = await fetch({
      url: 'http://api.translate.demo.gs/translate', //Inject value
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: stringToTranslate
    })

    console.log(transl8Response)
    
    
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
    {/* <FontAwesomeIcon icon={translate} fixedWidth border /> */}
  </Button>

    <br/>
    <br/>

  <Form.Control name="output" as="textarea" rows={3} placeholder="¡Soy milk!" value={translationOutput}/>

    <br/>
<footer>
  Source on <a href="https://github.com/cloudn8-transl8">github.com/cloudn8-transl8</a> <br/>Proudly overengineered in London by <a href="https://twitter.com/sheriffjackson">@sheriffjackson</a> and <a href="https://twitter.com/zmarkan">@zmarkan</a>
</footer>


</Container>



</div>
  );
}

export default App;
