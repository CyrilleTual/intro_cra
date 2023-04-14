import React from 'react';

const wrapper = ({ data, id }) => (<li key={id} >{id +"  "+ data}</li>); 

export default wrapper;