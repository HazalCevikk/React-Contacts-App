import {useState} from 'react'

function Form({addContact, history}) {
const formClear= { fullname: "", phone_number: ""}
const [form, setForm] = useState(formClear)
 
const onChangeInput=(e)=>{
  setForm({...form, [e.target.name]: e.target.value })
}

const onSubmit=(e)=>{ 
  e.preventDefault();
if(form.fullname === '' || form.phone_number === ''){
  return false;
}
addContact([...history, form]);
  console.log(form);
  setForm(formClear);
}
  return (
    <>
    <form onSubmit={onSubmit}>
    <div>
      <input name='fullname' placeholder='Enter fullname' value={form.fullname} onChange={onChangeInput}></input>
    </div>
    <div>
      <input name='phone_number' placeholder='Enter the phone number' value={form.phone_number} onChange={onChangeInput}></input>
    </div>
    <button id='button'>Add</button>
    </form>
    </>
  )
}

export default Form

