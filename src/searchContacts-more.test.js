import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchContacts from "./searchContacts";
import { BrowserRouter as Router } from "react-router-dom";
import getResults from "./fetch/getResults"

jest.mock("./fetch/getResults");

jest.mock("./hooks/useQuery", () => () => [{ }, () => {}])

//I moved this one out into it's own file because I couldn't figure out how to
// reassign the mock function for useQuery 

describe("searchContacts", () => {
  describe("when no search has been made", () => {
    it("does not show any results or messages", () => {
      const { container } = render(
        <Router>
          <SearchContacts />
        </Router>
      );
      expect(container.querySelector(".results")).toBeNull();
    });
  });
});
