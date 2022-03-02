import { useState, useEffect } from 'react'
import Form from './Form/Form'
import List from './List/List'

function Contacts() {

const [ contact, setContact] = useState([
  { fullname: 'Hazal',
    phone_number: 5550555055 
},{
    fullname: 'Ali Furkan',
    phone_number: 5393940394
},{
    fullname:'Özgür',
    phone_number: 5353222414  
}
])

useEffect(()=>{
  console.log(contact)
}, [contact])

  return (
    <div id='container'>
    <h1>Contact</h1>
    <List contact={contact}/>
    <Form addContact={setContact} history={contact}/>
     
    </div>
  )
}

export default Contacts