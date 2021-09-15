import React from 'react'
import { Route, useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id : 1 , author : 'John', text : 'My first quote'},
    { id : 2 , author : 'Max', text : 'My second quote'},
    { id : 3 , author : 'Dave', text : 'My third quote'}
]

const QuoteDetails = () => {
    const params = useParams();
    const routeMatch = useRouteMatch();
     const quote = DUMMY_QUOTES.find(quote => quote.id === +params.quoteId);
    return (
        <>
          {quote ?  <HighlightedQuote text={quote.text} author={quote.author}/>  : <p>No quote</p>}
            <Route path={routeMatch.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${routeMatch.url}/comments`}>Show Comments</Link>
                </div>
          </Route>
          <Route  path={`${routeMatch.path}/comments`}>
              <Comments />
          </Route>
        </>
    )
}

export default QuoteDetails
