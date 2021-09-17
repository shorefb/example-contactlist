import React, {useState} from 'react'
import fetch from 'node-fetch'

const baseURL = 'https://avb-contacts-api.herokuapp.com/contacts'

export async function addContact(contact){
    try{
        const response = await fetch(baseURL, {
            method: 'post',
            body: JSON.stringify(contact),
            headers: {'Content-Type': 'application/json'}
        });
    }catch(err){console.log(err)}
}

function NewContactForm() {
    const [contact, setContact] = useState({})

    const handleChange = async e => {
        setContact({
            ...contact,
           [e.target.name]: e.target.value
        })
     }

     const handleSubmit = async e => {
        e.preventDefault();
        addContact(contact)
    }
    return (
        <div className="border-2">
            <form onSubmit={handleSubmit}>
            <div className="flex justify-between p-2">
                <div className="px-6">
                    <div className='text-xs text-gray-400'>First Name</div>
                    <input className='bg-transparent border'  name='firstName' onChange={handleChange} />
                </div>
                <div className="px-6">
                    <div className='text-xs text-gray-400'>Last Name</div>
                    <input className='bg-transparent border' name='lastName' onChange={handleChange} />
                </div>
            </div>
            <div className="flex">
            <button type='submit' className='bg-green-400 text-white px-5 cursor-pointer transform hover:scale-110'>Add</button>
            </div>
            </form>
        </div>
    )
}

export default NewContactForm
