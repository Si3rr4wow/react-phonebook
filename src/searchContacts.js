import React from "react";
import SearchBox from "./searchBox";
import Results from "./results";
import getResults from "./api/getResults";

class SearchContacts extends React.Component {
  constructor(props) {
    super(props);
    const { terms } = this.props.params || {};
    const searchActive = Boolean(terms);
    this.state = {
      currentSearch: searchActive ? terms : "",
      results: searchActive ? getResults(terms) : [],
      searchActive: searchActive,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(searchStr) {
    if (searchStr.length === 0) {
      return this.clearSearch();
    }
    if (this.state.currentSearch !== searchStr) {
      this.setState({
        searchActive: true,
        currentSearch: searchStr,
        results: getResults(searchStr),
      });
    }
  }

  clearSearch() {
    this.setState({
      searchActive: false,
      currentSearch: "",
      results: [],
    });
  }

  render() {
    return (
      <section>
        <SearchBox
          onSubmit={this.onSubmit}
          currentSearch={this.state.currentSearch}
        />
        {this.state.searchActive ? <Results data={this.state.results} /> : ""}
      </section>
    );
  }
}

export default SearchContacts;
