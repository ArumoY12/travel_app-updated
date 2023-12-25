import React from 'react';
import "./Trip.css"
import mykonos from "./Images/mykonos.jpg"
import mykonos2 from "./Images/mykonos2.jpg"
import mysore from "./Images/mysore.jpg"
import mysore2 from "./Images/Mysore2.jpg"
import tajmahal from "./Images/tajmahal.jpg"
import fort from "./Images/fort.jpg"

function TripData()
{
return(
    <>
        <div className="desp">
        <div className="despo">
        <h2>Mysore, India</h2>
        <h5>Mysore, located in the southern part of India, is a city steeped in rich history and vibrant culture. 
          A trip to Mysore is a journey into the heart of Karnataka's heritage. 
          The city is renowned for its magnificent Mysore Palace, 
          an architectural marvel that illuminates the night with thousands of lights. 
          St. Philomena's Church, a neo-Gothic masterpiece, offers a serene spiritual experience.

          Exploring the Brindavan Gardens, visitors are enchanted by the dancing fountains and lush greenery. 
          Mysore Zoo, one of the oldest in India, houses diverse wildlife. 
          The Chamundi Hill Temple offers panoramic views of the city, reached by climbing 1,000 steps.

          Mysore is also famous for its silk sarees, sandalwood products, and intricate crafts. 
          Don't miss trying the delectable Mysore Pak, a sweet delight. With its warm and welcoming atmosphere, 
          Mysore invites you to discover the beauty of South India's culture and history.
         </h5>
         </div>
         <div className="image">
          <img alt="missing" src={mysore}></img>
          <img alt="missing" src={mysore2}></img>
         </div>
         </div>
         <div className="desp10">
         <div className="despo">
          <h2>Agra, India</h2>
          <h5>
          A trip to Agra promises an enchanting experience. Home to the iconic Taj Mahal, 
          Agra's allure lies in its rich Mughal heritage and architectural marvels. 
          As you stroll through the intricate designs of the Taj Mahal, you'll be captivated by its timeless beauty, 
          particularly at sunrise or sunset. Agra Fort, another UNESCO World Heritage site, 
          showcases remarkable Mughal architecture and offers breathtaking views of the Yamuna River. 
          Don't miss Fatehpur Sikri, an abandoned city nearby, known for its historical significance.

          Agra's bustling streets are a treasure trove of local cuisine, including delectable sweets and 
          savory snacks. The vibrant bazaars invite you to shop for handicrafts and souvenirs. 
          Agra's culture, deeply intertwined with its historical gems, welcomes visitors with open arms, 
          creating memories that will last a lifetime.
          </h5>
         </div> 
         <div className="image">
          <img alt="missing" src={tajmahal}></img>
          <img alt="missing" src={fort}></img>
         </div>
       </div>
       <div className="desp">
         <div className="despo">
          <h2>Mykonos, Greece</h2>
          <h5>
          Mykonos, a Greek island gem in the heart of the Aegean Sea, offers an enchanting journey of azure seas, 
          golden beaches, and charming white-washed buildings. As you wander the labyrinthine streets of 
          Mykonos Town, the vibrant bougainvillea and cobblestone alleys beckon you into a world of art, 
          history, and delightful cuisine. Stroll through the iconic windmills that stand sentinel over the island, 
          their sails catching the gentle sea breeze.

          During your trip to Mykonos, embrace the lively nightlife at beachfront clubs and bars, 
          or unwind in secluded bays, perfect for relaxation. Discover the ancient beauty of Delos, 
          a nearby island that's an open-air archaeological museum. Mykonos seamlessly combines tradition and 
          modernity, offering a remarkable experience for travelers seeking both tranquility and exhilaration in the heart of the Cyclades.
          </h5>
         </div> 
         <div className="image">
          <img alt="missing" src={mykonos}></img>
          <img alt="missing" src={mykonos2}></img>
         </div>
       </div>
       </>
)
}
export default TripData;