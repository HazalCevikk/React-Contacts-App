import {useState} from 'react'

function List({contact}) {
const [filterText, setFilterText]= useState("")

const filtered = contact.filter((item)=> {
  return Object.keys(item).some((key)=>{ 
    return item[key]
    .toString()
    .toLowerCase()
    .includes(filterText.toLocaleLowerCase())
  });
});

console.log(filtered);
 
  return (
   <div>
     <input placeholder='Filter Contacts' value={filterText}  onChange={(e) => setFilterText(e.target.value)}></input>
     <ul>
       {
         filtered.map((contact, i)=> 
         <li id='list' key={i}>
          <span>{contact.fullname}</span>
          <span>{contact.phone_number}</span>
          </li>)
       }
     </ul> 
   </div>
  )
}

export default List