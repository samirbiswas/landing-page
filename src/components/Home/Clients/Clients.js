import React, { useEffect, useState } from 'react';
import Client from '../Client/Client';


const Clients = () => {
const [reviewData, setReviewData] = useState([]);

//This is my personal api
useEffect(() => {
    fetch('https://fast-temple-74960.herokuapp.com/review')
   
        .then(res => res.json())
        .then(data => setReviewData(data))
}, [])


            return (
                <section id='clients' style={{marginTop:'5%'}}>
                <div className="container">
                    <div className="section-header text-center">
                         <h2 style={{color:'#RRGGBB'}}>Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
                        
                    </div>
                    <div style={{marginTop:'100px'}}>
                         <div className="row">
                         {
                            reviewData.map(client=> <Client key={client._id} client={client}></Client>)
                         }
                         </div>
                    </div>
                </div>
            </section>
            );
        };

export default Clients;