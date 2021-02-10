import Transl8 from './Transl8'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

let mockFetchLanguages = () => {
    // return [{"code":"es","name":"Spanish"}, {"code":"en","name":"English"}, {"code":"sl","name":"Slovenian"}]
    return new Promise((resolve, reject) => {
        resolve([{"code":"es","name":"Spanish"}, {"code":"en","name":"English"}, {"code":"sl","name":"Slovenian"}])
    })
}

let mockTranslate = (inputString, language) => {
    return new Promise((resolve,reject) => resolve(`${inputString}, but in spanish`))
}

let mockApi = {
    fetchLanguages: mockFetchLanguages,
    translate: mockTranslate
}

test('header is rendered', async () => {    
    render(<Transl8 api={mockApi}/>);
    const translationHeader = screen.getByText("Cloudn8-Transl8")
    await waitFor( () => {
        expect (translationHeader).toBeInTheDocument();
    })
});
 
test('Loads list of languages', async () => {
    render(<Transl8 api={mockApi}/>)
    await waitFor( () => {
        expect(screen.getByText("Spanish")).toBeInTheDocument()
    })
  })
  
test('Shows footer', async () => {
    render(<Transl8 api={mockApi}/>)
    const footer = screen.getByText("Source on", { exact: false})
    await waitFor( () => {
        expect(footer).toBeInTheDocument()
    })
})
