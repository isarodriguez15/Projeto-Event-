import React from "react";
import "./Toggle.css"

<<<<<<< HEAD
const Toggle = (props) => {
    return (
        <>
            <div className="teste">
                <label className="switch">
                    <input type="checkbox" checked={props.presenca}
                    onChange={props.manipular}/>
                    <span className="slider round"></span>
=======
const Toggle = () => {
    return (
        <>
            <div className="teste">
                <label  className="switch">
                    <input  type="checkbox" />
                        <span className="slider round"></span>
>>>>>>> 189ea103588e05e60eb21d3423a83bbc1f17ab82
                </label>
            </div>
        </>
    )
}

export default Toggle;