import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';

//ReactDOM.render(
    //name of element, properties and text
    //React elements are building blocks of react apps

    //React.createElement("h1",{style:{color:"red"}},"Hello"
    //), document.getElementById('root'));

    //React.createElement("div",{style:{color:"red"}},React.createElement("h1",null,Hello), document.getElementById('root'))

/*     ReactDOM.render(
        React.createElement(
            "ul",
            {style:{color:"blue"}},
            React.createElement("li",null,"Hot dogs")
        ),document.getElementById("root")
        ) */
    

        //JSX is a language allows you to write tags in JS, JavaScript as XML
//Babel will allow JSX to work and internally converts to React elements
/* ReactDOM.render(
    <ul>
        <li>Hot Dogs</li>
    </ul>,
    document.getElementById("root")
)

let city = {name:"Madrid",country:"Spain"};

ReactDOM.render(
    <h1 className='heading'>Hello from {city.name}</h1>,
    document.getElementById("root")

) */

//Collections of React elements called Components. A component allows to render user interfaces with independent reusable pieces

//A component can be function of class which returns react elements . Components have to be capitalized letters

//Props contain properties about the component, its a object available in the components. dynamic data can be viewed within a component with this.
//Props obj provide data to component to be discplayed
function Hello({library,message,number}){
   // console.log(Object.keys(props));
    return (
        <div>
        {/* <h1>Welcome to {props.library}!</h1> */}
        <h1>Welcome to {library}!</h1>
        <p>My demo is {message}</p>
        <p>{number} Props total</p>
        <p></p>
        </div>
    );
}

//composing components is the most important function which React does

function Lake({name}){
    return (
        <div>
        <p>Welcome to Lake {name}</p>
        <p>Welcome to Lake {name}</p>
        <p>Welcome to Lake {name}</p>
        </div>
    )
}

function Country(){
    return (
    <>
    <div><Lake name="Tahoa"/></div>
    <div><Lake name="Canal"/></div>
    <div><Lake name="Brienz"/></div>
    </>
    )
}

const root = createRoot(document.getElementById("root"));

root.render(<App/>)


