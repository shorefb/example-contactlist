import '@heroicons/react/solid'
import {PlusCircleIcon } from '@heroicons/react/solid'
import React, {useState} from 'react'
import ContactCard from './ContactCard';
import Main from './Main'
import fetch from 'node-fetch'
import NewContactForm from './NewContactForm';

const URL = "https://avb-contacts-api.herokuapp.com/contacts/paginated"

export async function getStaticProps() {
  try{
  const response = await fetch(URL)
  const data = await response.json()
  return {
      props: {data}
  }
  } catch(err){
      console.log(err)
  }
  
}

const toggleInput = () => {
  var x = document.getElementById("mydiv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

export default function Index({data}) { 
  
  const [single, setSingle] = useState({single: {}})
  const [contacts] = useState(data.contacts)
  //setSingle({single: {firstName: 'firstName', lastName: 'lastName'}})
return (
  <div className="flex p-2 ">
              <div className="">
                <div className="flex">
                <p className="h-9 font-semibold text-3xl">Contacts</p>
                  <button type='button' onClick={() => toggleInput()}>
                  <PlusCircleIcon className="h-9 px-2 text-blue-400 cursor-pointer transform hover:scale-110" />
                  </button>
                </div>
                 
                  <div className='flex flex-col px-1'>
              {contacts?.map((contact) => (     
              <button key={contact.id} onClick={() => setSingle(contact)}>
                  <ContactCard id={contact.id} firstName={contact.firstName} lastName={contact.lastName} />
              </button>   
                  ))}
                  </div>
              </div> 
              <div className='flex flex-col'>
              <div id="mydiv" style={{display: 'none'}}>
                        <NewContactForm />
              </div>
              <div>
                      <Main user={single}/>
              </div>   
              </div>        
  </div>
  )
}
