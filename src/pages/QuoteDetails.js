import React, { useEffect } from 'react'
import { Route, useParams, useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';


const QuoteDetails = () => {
    const params = useParams();
    const routeMatch = useRouteMatch();
    const {sendRequest, status, data : quote, error} =  useHttp(getSingleQuote, true)
     
    useEffect(() => {
        sendRequest(params.quoteId);
    }, [sendRequest, params.quoteId])

    if(status.pending){
        return <div className="centered">
            <LoadingSpinner />
        </div>
    }

    if(status.error){
        return <p className="centered">
            {error}
        </p>
    }

    if(quote && !quote.text){
        return <p className="centered">
           No quote found!
        </p>
    }
    
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
