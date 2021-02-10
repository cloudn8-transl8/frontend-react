import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { useState, createRef, useEffect } from 'react'
import { Form, Container, Button, NavLink} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from "@fortawesome/free-solid-svg-icons";
import API from './API'
import Transl8 from './Transl8'

function App() {

  const API_ENDPOINT = window._env_.API_ENDPOINT || 'http://localhost:3001'
  const api = API(API_ENDPOINT)

  return (
    <div className="App">
      <Transl8 api={api}
      />
</div>
  );
}

export default App;
