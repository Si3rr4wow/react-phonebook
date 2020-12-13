import React, { useState } from "react";
import SearchBox from "./searchBox";
import Results from "./results";
import getResults from "./api/getResults";

const SearchClients = props => {
  const { terms } = props.params || {};
  const searchActive = Boolean(terms);

  const [state, setState] = useState({
    currentSearch: searchActive ? terms : "",
    results: searchActive ? getResults(terms) : [],
    searchActive: searchActive,
  })

  const clearSearch = () => {
    setState({
      searchActive: false,
      currentSearch: "",
      results: [],
    });
  }

  const onSubmit = (searchStr) => {
    if (searchStr.length === 0) {
      return clearSearch();
    }
    if (state.currentSearch !== searchStr) {
      setState({
        searchActive: true,
        currentSearch: searchStr,
        results: getResults(searchStr),
      });
    }
  }

  return (
    <section>
      <SearchBox
        onSubmit={onSubmit}
        currentSearch={state.currentSearch}
      />
      {state.searchActive ? <Results data={state.results} /> : ""}
    </section>
  );
}

export default SearchClients
