import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router';

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get('sort') === 'asc';

  const sortedQuotes = sortQuotes(props.quotes, isSortingAscending);
  
  const sortHandler = () => {
    history.push({
      pathname: location.pathname,
      search : `?sort=${isSortingAscending ? 'desc' : 'asc'}`
    });
    // Same up above
   // history.push(`${location.pathname}?sort=${isSortingAscending ? 'desc' : 'asc'}`)
  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortHandler}>Sort {isSortingAscending? 'Desc':'Asc'}</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            quote={quote}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
