import React from "react";
import PropTypes from "prop-types";
import { Contact } from "../models/contact.model";
import ComponentB from "./ComponentB";

const ComponentA = ({ contact }) => {
  const { firstName, lastName, email, online } = contact;

  return (
    <div>
      <h2>
        Nombre: {firstName} {lastName}
      </h2>
      <h4>{email}</h4>
      <ComponentB online={online}></ComponentB>
    </div>
  );
};

ComponentA.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ComponentA;
