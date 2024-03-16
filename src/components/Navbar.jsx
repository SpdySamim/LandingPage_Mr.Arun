import { useState } from "react"
export default function Navbar(){
    const[menu,setMenu]=useState(false)

    const hbar=()=>{
        setMenu(true)
    }
    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="AA2.png" alt="AA" />
                    <h2>Arun Academy</h2>
                </div>
                <div className="icons">
                    <a href="#hero">Home</a>
                    <a href="#about">About Me</a>
                    <a href="#course">Course</a>
                    <a href="#enroll">Enroll Now!</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="hmenu">
                <button onClick={hbar} ><i className="fa-solid fa-bars"></i></button>
                {!menu?"":(
                    <div className="xsMenu">
                        <button onClick={()=>{setMenu(false)}}><i class="fa-solid fa-xmark close"></i></button>
                        <div className="xsIcons">
                            <a href="#hero">Home</a>
                            <a href="#about">About Me</a>
                            <a href="#course">Course</a>
                            <a href="#enroll">Enroll Now!</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                )}
                </div>

            </div>
        </>
    )
}