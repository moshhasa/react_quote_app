import React from 'react'
import { useHistory } from 'react-router'
import QuoteForm from '../components/quotes/QuoteForm'
const NewQuote = () => {
    const history = useHistory();
    
    const addQuoteHandler = (quote) => {
        console.log(quote);

        history.push('/quotes') //Note this will allow the user to use the back button to visit the previous page
        //history.replace('/quotes') //Note this will replace the current page hence user's can't navigate back to the previous page 
    }
    return (
        <QuoteForm onAddQuote={addQuoteHandler}/>
    )
}

export default NewQuote
