// Code Keypad Component Here
import React from "react"

function Keypad (){
    function inputPassword(event) {
        console.log('Entering password...')
    } 
    
    return (
        <div>
            <input 
                type="password"
                onChange={inputPassword}>
            </input>
        </div>
    )
}

export default Keypad;