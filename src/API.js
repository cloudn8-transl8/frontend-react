const Api = (API_ENDPOINT) => {

    const fetchLanguages = async () => {
        let langsResponse = await fetch(`${API_ENDPOINT}/languages`)
        let receivedLanguages = langsResponse.json()
        console.log(receivedLanguages)
            
        return receivedLanguages
    }
    
    const translate = async(input, targetLanguage = 'si') => {
        let transl8Response = await fetch(`${API_ENDPOINT}/translate/${targetLanguage}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'text/plain',
            },
            body: input,
          })
          return transl8Response.value
    }

    return {
     fetchLanguages,
     translate   
    }
}
export default Api