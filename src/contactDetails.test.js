import React from "react";
import { render } from "@testing-library/react";
import ContactDetails from "./contactDetails";
import { BrowserRouter as Router } from 'react-router-dom';

describe("contactDetails", () => {
  it("prints first name correctly", () => {
    const testContact = {
      name: "John Doe",
      phone: "99999999",
    };
    const { container } = render(<Router><ContactDetails data={testContact} /></Router>);

    const title = container.querySelector("h2").textContent;

    expect(title).toEqual("Contact details for: John");
  });
});
