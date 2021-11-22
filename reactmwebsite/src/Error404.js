import React from 'react'
import { NavLink } from 'react-router-dom'

const Error404 = () => {
    return (
        <>
           <div id = "notfound">
               <div className = "notfound">
                   <div className = "not-found-404">
                       <h1>404</h1>
                   </div>
                   <h2>WE ARE SORRY, PAGE NOT FOUND</h2>
                   <p>THE PAGE YOU HAVE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</p>
                   <NavLink to = "/">Back To HomePage</NavLink>
               </div>
            </div> 
        </>
    )
}

export default Error404
