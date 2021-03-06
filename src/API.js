const Api = (API_ENDPOINT) => {

    const fetchLanguages = async () => {
        let langsResponse = await fetch(`${API_ENDPOINT}/languages`)
        let receivedLanguages = langsResponse.json()
        console.log(receivedLanguages)
            
        return receivedLanguages
    }
    
    const translate = async(input, targetLanguage = 'si') => {
      try{
        let transl8Response = await fetch(`${API_ENDPOINT}/translate/${targetLanguage}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'text/plain',
          },
          body: input,
        })

        console.log("translation")
        let transl8Text = await transl8Response.text()
        console.log(transl8Text)
        return transl8Text
      }
      catch(e) {
        throw(e)  
      }
       
    }

    return {
     fetchLanguages,
     translate   
    }
}
export default Api