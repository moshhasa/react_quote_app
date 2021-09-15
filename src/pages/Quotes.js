import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id : 1 , author : 'John', text : 'My first quote'},
    { id : 2 , author : 'Max', text : 'My second quote'},
    { id : 3 , author : 'Dave', text : 'My third quote'}
]
const Quotes = () => {
    return  <QuoteList quotes={DUMMY_QUOTES}/>
}

export default Quotes
