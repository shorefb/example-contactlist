import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid' 
import React, {useState} from 'react'

function Main(single) {
    const [contact, setContact] = useState({    
              firstName: '',
              lastName: '',
              emails: '',})

    const handleChange = (e) => {
       this.setState({
          [e.target.name]: e.target.value,
       })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let first = single.firstName
        let last = single.lastName
        let newUser = {"firstName": first, "lastName": last}
        addContact(newUser)
    }

    const handleDelete = (e) => {
        e.preventDefault();
        let id = single.user.id
        ServiceWorker.deleteContact(id)
    }

    const handleCancel = () => {
        this.setState={
            firstName: '',
            lastName: '',
            emails: ''
        }
    }

   const toggleInput = () => {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }
    return (
        <div className='py-12'>
            <form onSubmit={handleSubmit}>
            {/* First/Last Name Inputs */}
            <div className="flex justify-between">
                <div className="px-6">
                    <div className='text-xs text-gray-400'>First Name</div>
                    <input className='bg-transparent border' placeholder={single.user.firstName} name='firstName' onChange={handleChange}/>
                </div>
                <div className="px-6">
                    <div className='text-xs text-gray-400'>Last Name</div>
                    <input className='bg-transparent border' name='lastName' placeholder={single.user.lastName} onChange={handleChange}/>
                </div>
            </div>
            {/* Emails and Add Email Button */}
            <div className="p-6">
                <div className='text-xs text-gray-400'>Email</div>
                <div className='flex flex-col'>
                    <div className='flex flex-col px-1'>
                        {single.user.emails?.map((each, idx) => 
                        <div key={idx} className='flex'>
                            {each}
                            <MinusCircleIcon className='opacity-0 hover:opacity-100 active:reveal h-6 px-3 text-red-400 cursor-pointer transform hover:scale-110'/>
                        </div>)}
                    </div>
                </div>
                <div className='flex py-2'>
                    <div id="myDIV" style={{display: 'none'}}>
                            <input className='border'></input>
                    </div>
                    <button type='button' onClick={toggleInput}>
                    <PlusCircleIcon className="h-6 text-blue-400 cursor-pointer transform hover:scale-110"/>
                    </button>
                    <p className='px-1 text-blue-400'>add email</p>
                </div>
            </div>
            {/* Delete, Cancel and Save */}
            <div className='flex justify-between'>
                <button onClick={handleDelete} className='bg-red-400 text-white px-5 cursor-pointer transform hover:scale-110'>Delete</button>
                <div className='flex px-5'>
                    <button type='button' onClick={handleCancel} className='border border-blue-400 px-5 cursor-pointer transform hover:scale-110'>Cancel</button>
                    <button type='submit' className='bg-blue-400 text-white px-5 cursor-pointer transform hover:scale-110'>Save</button>
                </div>
            </div>
            </form>      
        </div>
    )
}

export default Main
