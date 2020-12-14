import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { parseQueryObject, parseQueryString } from '../utils'

const useQuery = () => {
  const [query, setQuery] = useState({});
  const history = useHistory()

  useEffect(() => {
    setQuery(s => ({
      ...s,
      ...parseQueryString(history.location.search)
    }))
  }, [history.location.search]);

  const setUrlQuery = nextQuery => {
    const nextQueryString = parseQueryObject(nextQuery)
    setQuery(nextQueryString)
    history.push(history.location.pathname + nextQueryString)
  }

  return [query, setUrlQuery];
};

export default useQuery;
