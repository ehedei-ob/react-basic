import React, { useState } from "react";
import PropTypes from "prop-types";

const ComponentB = ({ online }) => {
  const [status, setStatus] = useState(online);

  return (
    <div>
      <h4>{status ? "Online" : "Desconectado"}</h4>
      <button onClick={() => setStatus(!status)}>
        {status ? "Desconectar" : "Conectar"}
      </button>
    </div>
  );
};

ComponentB.propTypes = {
  online: PropTypes.bool,
};

export default ComponentB;
