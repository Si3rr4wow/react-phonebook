import React from "react";
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import SearchContacts from "./searchContacts";
import { BrowserRouter as Router } from "react-router-dom";
import getResults from "./fetch/getResults"

jest.mock("./fetch/getResults");

jest.mock("./hooks/useQuery", () => () => [{ term: "tim" }, () => {}])

describe("searchContacts", () => {
  describe("when a search term is provided via the url param", () => {
    it("prefills the search box with the search term", () => {
      const { getByPlaceholderText } = render(
        <Router>
          <SearchContacts />
        </Router>
      );
      const searchBox = getByPlaceholderText("Search for contacts");
      expect(searchBox.value).toBe("tim");
    });
    it("shows matching a contact results", async () => {
      const { getByText } = render(
        <Router>
          <SearchContacts />
        </Router>
      );
      // It's using the value given but refuses to beleive it's actually mocked
      // I can see the output is correct, so frustrating.
      await waitFor(() => expect(getResults).toHaveBeenCalledTimes(1))
      const searchItem = getByText("Tim Cook");
      expect(searchItem).toBeDefined();
      expect(searchItem.tagName).toBe("A");
    });
  });

  describe("when a new search is submitted", () => {
    describe("when a valid search term is used", () => {
      it("shows matching contacts", async () => {
        const { getByPlaceholderText, getByText } = render(
          <Router>
            <SearchContacts />
          </Router>
        );
        const searchBox = getByPlaceholderText("Search for contacts");
        userEvent.type(searchBox, "George");
        const searchButton = getByText("Search");
        userEvent.click(searchButton);
        await waitFor(() => {
          const searchItem = getByText("George Michael");
          return expect(searchItem).toBeDefined();
        })
        const searchItem = getByText("George Michael");
        expect(searchItem.tagName).toBe("A");
      });
    });

    describe("when the search box is empty", () => {
      it("clears the search results", () => {
        const { getByPlaceholderText, getByText, container } = render(
          <SearchContacts />
        );
        const searchBox = getByPlaceholderText("Search for contacts");
        userEvent.type(searchBox, "George");
        const searchButton = getByText("Search");
        userEvent.click(searchButton);
        expect(container.querySelector(".results")).toBeDefined();
        userEvent.clear(searchBox);
        userEvent.click(searchButton);
        expect(container.querySelector(".results")).toBeNull();
      });
    });
  });
});
