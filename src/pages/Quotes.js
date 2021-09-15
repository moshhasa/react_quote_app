import React, { useEffect } from 'react'
import NoQuotesFound from '../components/quotes/NoQuotesFound'
import QuoteList from '../components/quotes/QuoteList'
import LoadingSpinner from '../components/UI/LoadingSpinner'
import useHttp, { httpStatus } from '../hooks/use-http'
import { getAllQuotes } from '../lib/api'

const Quotes = () => {
    const {sendRequest, status, data : quotes, error} =  useHttp(getAllQuotes, true);
    useEffect(() => {
       sendRequest()
    }, [sendRequest])

    if(status === httpStatus.pending)
    {
        return <div className='cantered' ><LoadingSpinner/> </div>
    }
    
    if(error)
    {
        return <div className='cantered focus' >{error}</div>
    }

    if(status === httpStatus.completed && (!quotes || quotes.length === 0))
    {
        return <NoQuotesFound />
    }

    return  <QuoteList quotes={quotes}/>
}

export default Quotes
