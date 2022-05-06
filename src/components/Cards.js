import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

{/*Text cards where:
-I can put text in
-I can link to other pages
-I can have images displayed*/}
function Cards() {
  return (
    <div className='cards'>
        <h1>Find a University Below:</h1>
        <div className='cards__container'>
           <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem 
                src="images\knowledge-center_student-union.jpg"
                text="Browse Universities"
                label="universities"
                path='/universities'/>

                <CardItem 
                src="images\2020_09_mailboxes.jpg"
                text="Find Postal Adresses"
                label="postalLookup"
                path='/postalLookup'/>
              </ul>
           </div> 
        </div>
    </div>
  )
}

export default Cards