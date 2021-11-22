import React, {useState} from 'react';
import serviceapi from './API/serviceApi';



const Services = () => {
    const [serviceData, setServiceData] = useState(serviceapi);
    console.log(serviceData);
    return (
        <>
           <section className = "service-main-container">
               <div className = "container service-container">
                   <h1 className = "main-heading text-center fw-bold">How to send Money</h1>
                   <div className = "row">

                       {serviceData.map((curElem)=>
                       {
                            return(
                                <>
                                    <div className = "col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                            <i className = {curElem.logo}></i>
                            <h2 className = "sub-heading">
                                {curElem.title}
                            </h2>
                            <p className = 
                            "main-hero-para">{curElem.info}</p>
                        </div>
                                </>
                            )
                       })}
                        
                   </div>
               </div>
            </section> 
        </>
    )
}

export default Services
