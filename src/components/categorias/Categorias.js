import React from "react";
import {useParams} from 'react-router-dom';

const Categorias = () => {

  const params = useParams();
  // hacer un get con ese params
  
  return (
    <div>
      <h1 className="text-center my-5">{params.categoria}</h1>
    </div>
  );
};

export default Categorias;
