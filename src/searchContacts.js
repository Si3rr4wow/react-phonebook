import React, { useState, useEffect } from "react";
import SearchBox from "./searchBox";
import Results from "./results";
import Loading from "./loading";
import getResults from "./fetch/getResults";
import useQuery from "./hooks/useQuery"

const SearchClients = props => {
  const [{ term }, setQuery] = useQuery()
  const [state, setState] = useState({
    currentSearch: term || "",
    loading: false,
    results: [],
    error: null
  })

  useEffect(() => {
    if(!term || term.length < 3) { return }

    getResults({ term }).then(results => {
      setState(s => ({
        ...s,
        currentSearch: term,
        loading: false,
        results
      }))
    }, error => {
      setState(s => ({
        ...s,
        loading: false,
        error
      }))
    })
  }, [term])

  const clearSearch = () => {
    setState({
      currentSearch: "",
      results: [],
    });
  }

  const onSubmit = (searchStr) => {
    if (searchStr.length === 0) {
      return clearSearch();
    }
    setQuery({ term: searchStr })
  }

  return (
    <section>
      <SearchBox
        onSubmit={onSubmit}
        currentSearch={state.currentSearch}
      />
      {state.loading ? <Loading/> : null }
      {state.error ? <div>Something went wrong :(</div> : null }
      {state.results?.length ? <Results data={state.results} /> : ""}
    </section>
  );
}

export default SearchClients
