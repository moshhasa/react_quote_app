import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import QuoteForm from '../components/quotes/QuoteForm';
import { addQuote } from '../lib/api';
import  useHttp from '../hooks/use-http';

const NewQuote = () => {
    const history = useHistory();
    const {sendRequest, status} =  useHttp(addQuote)

    useEffect(() => {
        if(status.completed)
        {
            history.push('/quotes') //Note this will allow the user to use the back button to visit the previous page
            //history.replace('/quotes') //Note this will replace the current page hence user's can't navigate back to the previous page 
        }
    }, [status, history])

    const addQuoteHandler = (quote) => {
        sendRequest(quote);
    }

    return (
        <QuoteForm isLoading={status.pending} onAddQuote={addQuoteHandler}/>
    )
}

export default NewQuote
