import React from 'react'

function Clock() {

    const [clock, setClock] = React.useState(new Date());

    setTimeout(()=>{
            setClock(new Date()) 
    },1000);

  return ( <p>Il est exactement : {clock.toLocaleTimeString('fr-FR')}</p> ) 
}

export default Clock
