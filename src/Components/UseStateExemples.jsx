import React from 'react'
import { useState } from 'react';

function UseStateNumber() {
    const [counter, setCounter] = useState(0);
   // function increment () {setCounter ( counter + 1 )}  ;
    const increment = () => {
        setCounter ((currentCounter) => {       
            return currentCounter +1;
        })
    }

    const decrement = () => setCounter ( counter - 1 );

    return (
        <React.Fragment>
            <h3>Numbers</h3>
            <p>Current counter : {counter}</p>
            <button onClick={increment} > plus </button>
            <button onClick={decrement} > minus </button>
        </React.Fragment>
    )
}

function UseSateString() {

    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    
    return(
        <React.Fragment>
            <h3>Strings</h3>
            <p> Voici mon nom : {name}</p>
            <input onChange = {updateName} type="text" placeholder='here enter your name '/>
        </React.Fragment>
    )
}

function UseBoolean(){

    const [ myBool, setMybool] = useState(true);

    // function toogleBool () {
    //     setMybool (!myBool);
    // }

    function toogleBool () { 
        setMybool ((monAvis) => !monAvis ) 
    }

    return(
        <React.Fragment>
            <h3>Boolean</h3>
            <p> Je pense que c'est {myBool ? 'vrai' : 'faux' }</p>
            <button onClick = {toogleBool}> Je change d'avis</button>
        </React.Fragment>
    )

}

function UseArray(){
    const myTodoList = ["sauver le monde", "décrocher la lune", "tour du monde en 80 jours"];
   
    const  [ myTodo, setMyTodo] = useState(myTodoList);
    const  [ myDone, setMyDone] = useState([]);

    function itsDone (task){
        setMyDone((yetDone)=>{ 
            return [...yetDone, task]
        });
        setMyTodo((myTodo)=>{
            return(myTodo.filter (function(elt){
                return elt != task; 
            } ) );
        });
    }

    function itsNotDone (task){
        setMyTodo((list)=>{
            return[...list, task]
        })
        setMyDone ((yetDone) => {
            return yetDone.filter ((elt) => elt != task) ;
        })

    }

    return(
        <React.Fragment>
            <h3>Arrays</h3>
            <ul> todo : 
                {myTodo.map( task => (
                    <React.Fragment>
                        <li>{task}<button onClick = {() => itsDone(task)}> C'est Fait </button></li>
                    </React.Fragment> 
                ))}
            </ul>

            <ul> Done : 
                {myDone.map( task => (
                    <React.Fragment>
                        <li>{task}<button onClick = {() => itsNotDone(task)}> C'est à refaire </button></li>
                    </React.Fragment> 
                ))}
            </ul>
        </React.Fragment>
    )
}

export {UseStateNumber, UseSateString, UseBoolean, UseArray}