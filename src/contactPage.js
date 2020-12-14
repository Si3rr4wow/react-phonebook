import React, { useState, useEffect } from "react";
import ContactDetails from "./contactDetails";
import Loading from "./loading";
import getContact from "./fetch/getContact";
import { useParams } from "react-router-dom";

const ContactPage = () => {
  const params = useParams()
  const [state, setState] = useState({
    data: {},
    loading: true,
    error: null
  })

  useEffect(() => {
    getContact(params.contactId).then(data => {
      setState(s => ({
        ...s,
        loading: false,
        data
      }))
    }, error => {
      setState(s => ({
        ...s,
        loading: false,
        error
      }))
    })
  }, [params.id])

  if(state.loading) { return <Loading/> }
  if(state.error) { return <div>Something went wrong :(</div> }
  return <ContactDetails data={state.data} />;
}

export default ContactPage;
