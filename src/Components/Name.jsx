import React from 'react'
import DisplayName from './DisplayName';

function Name() {


    const [name, setName] = React.useState("anonym");

    function toto(e){
        setName (e.target.value);
    }

  return (

    <React.Fragment>

        <p>
            Voulez-vous me donnez votre nom?  <input id="form" type="text" onChange={toto}/>

        </p>
        <p>
            Alors, bonjour {name}
        </p>

        <DisplayName name = {name} />

        
    </React.Fragment>

    
  )
}

export default Name