import React from 'react';
import { useState } from 'react';

function Form({setcatgcontrol,catgcontrol,inputcontrol,setinputcontrol,handleSubmit }) {
    let style = {
        backgroundColor: "orangered",
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        gap: "2rem",
        padding: "1rem"
    }

    const style2 = {
        height: "30px",
        borderRadius: "20px",
        border: "0" 
    }



    return (
        <form style={style} onSubmit={handleSubmit}>
            <h2>what do you need for your trip 😍</h2>
            <select style={style2} value={catgcontrol} onChange={(e) => setcatgcontrol(e.target.value)} >
                <option>o1</option>
                <option>o2</option>
                <option>o3</option>
                <option>o4</option>
                <option>o5</option>
            </select>
            <input onChange={e => setinputcontrol(e.target.value)} value={inputcontrol} style={style2} type='input' placeholder='enter your items...'></input>
            <button style={style2} >Add</button>
        </form>
    ); 
}

export default Form;