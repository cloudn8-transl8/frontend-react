import './App.css';
import { useState, createRef, useEffect } from 'react'
import { Form, Container, Button, NavLink} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

function Transl8(props) {

    const api = props.api

    const [translationInput, setTranslationInput] = useState('')
    const [translationOutput, setTranslationOutput] = useState('¡Soy milk!')
    const [languages, setLanguages] = useState([{"code":"af","name":"Afrikaans"},{"code":"sq","name":"Albanian"},{"code":"am","name":"Amharic"},{"code":"ar","name":"Arabic"},{"code":"hy","name":"Armenian"},{"code":"az","name":"Azerbaijani"},{"code":"eu","name":"Basque"},{"code":"be","name":"Belarusian"},{"code":"bn","name":"Bengali"},{"code":"bs","name":"Bosnian"},{"code":"bg","name":"Bulgarian"},{"code":"ca","name":"Catalan"},{"code":"ceb","name":"Cebuano"},{"code":"ny","name":"Chichewa"},{"code":"zh-CN","name":"Chinese (Simplified)"},{"code":"zh-TW","name":"Chinese (Traditional)"},{"code":"co","name":"Corsican"},{"code":"hr","name":"Croatian"},{"code":"cs","name":"Czech"},{"code":"da","name":"Danish"},{"code":"nl","name":"Dutch"},{"code":"en","name":"English"},{"code":"eo","name":"Esperanto"},{"code":"et","name":"Estonian"},{"code":"tl","name":"Filipino"},{"code":"fi","name":"Finnish"},{"code":"fr","name":"French"},{"code":"fy","name":"Frisian"},{"code":"gl","name":"Galician"},{"code":"ka","name":"Georgian"},{"code":"de","name":"German"},{"code":"el","name":"Greek"},{"code":"gu","name":"Gujarati"},{"code":"ht","name":"Haitian Creole"},{"code":"ha","name":"Hausa"},{"code":"haw","name":"Hawaiian"},{"code":"iw","name":"Hebrew"},{"code":"hi","name":"Hindi"},{"code":"hmn","name":"Hmong"},{"code":"hu","name":"Hungarian"},{"code":"is","name":"Icelandic"},{"code":"ig","name":"Igbo"},{"code":"id","name":"Indonesian"},{"code":"ga","name":"Irish"},{"code":"it","name":"Italian"},{"code":"ja","name":"Japanese"},{"code":"jw","name":"Javanese"},{"code":"kn","name":"Kannada"},{"code":"kk","name":"Kazakh"},{"code":"km","name":"Khmer"},{"code":"rw","name":"Kinyarwanda"},{"code":"ko","name":"Korean"},{"code":"ku","name":"Kurdish (Kurmanji)"},{"code":"ky","name":"Kyrgyz"},{"code":"lo","name":"Lao"},{"code":"la","name":"Latin"},{"code":"lv","name":"Latvian"},{"code":"lt","name":"Lithuanian"},{"code":"lb","name":"Luxembourgish"},{"code":"mk","name":"Macedonian"},{"code":"mg","name":"Malagasy"},{"code":"ms","name":"Malay"},{"code":"ml","name":"Malayalam"},{"code":"mt","name":"Maltese"},{"code":"mi","name":"Maori"},{"code":"mr","name":"Marathi"},{"code":"mn","name":"Mongolian"},{"code":"my","name":"Myanmar (Burmese)"},{"code":"ne","name":"Nepali"},{"code":"no","name":"Norwegian"},{"code":"or","name":"Odia (Oriya)"},{"code":"ps","name":"Pashto"},{"code":"fa","name":"Persian"},{"code":"pl","name":"Polish"},{"code":"pt","name":"Portuguese"},{"code":"pa","name":"Punjabi"},{"code":"ro","name":"Romanian"},{"code":"ru","name":"Russian"},{"code":"sm","name":"Samoan"},{"code":"gd","name":"Scots Gaelic"},{"code":"sr","name":"Serbian"},{"code":"st","name":"Sesotho"},{"code":"sn","name":"Shona"},{"code":"sd","name":"Sindhi"},{"code":"si","name":"Sinhala"},{"code":"sk","name":"Slovak"},{"code":"sl","name":"Slovenian"},{"code":"so","name":"Somali"},{"code":"es","name":"Spanish"},{"code":"su","name":"Sundanese"},{"code":"sw","name":"Swahili"},{"code":"sv","name":"Swedish"},{"code":"tg","name":"Tajik"},{"code":"ta","name":"Tamil"},{"code":"tt","name":"Tatar"},{"code":"te","name":"Telugu"},{"code":"th","name":"Thai"},{"code":"tr","name":"Turkish"},{"code":"tk","name":"Turkmen"},{"code":"uk","name":"Ukrainian"},{"code":"ur","name":"Urdu"},{"code":"ug","name":"Uyghur"},{"code":"uz","name":"Uzbek"},{"code":"vi","name":"Vietnamese"},{"code":"cy","name":"Welsh"},{"code":"xh","name":"Xhosa"},{"code":"yi","name":"Yiddish"},{"code":"yo","name":"Yoruba"},{"code":"zu","name":"Zulu"},{"code":"he","name":"Hebrew"},{"code":"zh","name":"Chinese (Simplified)"}])

    const inputRef = createRef()
    const languageRef = createRef() 

    useEffect(async () => {
        
        let languageList = await api.fetchLanguages()
        setLanguages(languageList)
    }, [])

    const submitTranslation = async e => {
        e.preventDefault()
        let stringToTranslate = inputRef.current.value
        let language = languages[languageRef.current.selectedIndex].code
        let transl8Response = await api.translate(stringToTranslate, language)    
        setTranslationOutput(transl8Response)
      }

    return (
        <Container className="Content-container">
            <header className="App-Header">
                <h1>Cloudn8-Transl8</h1>

                <h4>🇦🇺🇧🇷🇨🇿🇪🇹🇫🇰🇬🇮🇭🇳🇮🇶🇯🇴🇰🇪🇰🇵🇨🇺🇮🇪🇺🇳🇿🇲🇱🇾🇦🇪🇲🇳🇳🇵🇨🇭🇲🇩🇦🇲</h4>
                <h4>The only translation service your business will ever need</h4>
                <h5>Powered by TF, CI/CD, K8S, AI, ML, DL, NLP, and most importantly C8H10N4O2</h5>
                <br />
            </header>

            <Form.Control ref={inputRef} name="input" as="textarea" rows={3} placeholder="Enter the sentence you wish to translate. For example, typing in I am milk" />

            <br />

            <Button variant="primary" type="submit" onClick={submitTranslation}>
                <FontAwesomeIcon icon={faLanguage} />
            </Button>

            <Form.Control ref={languageRef} as="select" defaultValue={languages[0].name}>
                {languages.map(language => <option key={language.code}>  {language.name} </option>)}
            </Form.Control>

            <br />
            <br />

            <Form.Control
                name="output"
                as="textarea"
                rows={3}
                value={translationOutput}
                readOnly
            />

            <br />
            <footer>
                Source on <a href="https://github.com/cloudn8-transl8">github.com/cloudn8-transl8</a> <br />Proudly overengineered in London by <a href="https://twitter.com/sheriffjackson">@sheriffjackson</a> and <a href="https://twitter.com/zmarkan">@zmarkan</a>
            </footer>


        </Container>

    )
}

export default Transl8