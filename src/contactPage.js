import React from "react";
import ContactDetails from "./contactDetails";
import getResults from "./api/getResults";

class ContactPage extends React.Component {
  render() {
    const data = getResults(this.props.params.contact)[0];
    return <ContactDetails data={data} />;
  }
}

export default ContactPage;
