import { PlusCircleIcon, MinusCircleIcon } from '@heroicons/react/solid' 
import React from 'react'
import ServiceWorker from './api/ServiceWorker'



class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            firstName: '',
            lastName: '',
            emails: '',
            hideForm: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleCancel = this.handleCancel.bind(this)
        this.toggleInput = this.toggleInput.bind(this)
    }

    handleChange(e) {
       this.setState({
          [e.target.name]: e.target.value,
       })
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let first = this.state.firstName
        let last = this.state.lastName
        let newUser = {"firstName": first, "lastName": last}
        ServiceWorker.addContact(newUser)
    }

    handleDelete = (e) => {
        e.preventDefault();
        let id = this.props.user.id
        ServiceWorker.deleteContact(id)
    }

    handleCancel() {
        this.setState={
            firstName: '',
            lastName: '',
            emails: ''
        }
    }

    toggleInput() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    }

    render(){
        const {firstName, lastName, emails, id} = this.props.user
        // const showForm = () => this.setState={hideForm: true}
    return (
        <div className='py-12'>
            <form onSubmit={this.handleSubmit}>
            {/* First/Last Name Inputs */}
            <div className="flex justify-between">
                <div className="px-6">
                    <div className='text-xs text-gray-400'>First Name</div>
                    <input className='bg-transparent border' placeholder={firstName} value={this.state.firstName} name='firstName' onChange={this.handleChange}/>
                </div>
                <div className="px-6">
                    <div className='text-xs text-gray-400'>Last Name</div>
                    <input className='bg-transparent border' name='lastName' value={this.state.lastName} placeholder={lastName} onChange={this.handleChange}/>
                </div>
            </div>
            {/* Emails and Add Email Button */}
            <div className="p-6">
                <div className='text-xs text-gray-400'>Email</div>
                <div className='flex flex-col'>
                    <div className='flex flex-col px-1'>
                        {emails?.map((each, idx) => 
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
                    <button type='button' onClick={this.toggleInput}>
                    <PlusCircleIcon className="h-6 text-blue-400 cursor-pointer transform hover:scale-110"/>
                    </button>
                    <p className='px-1 text-blue-400'>add email</p>
                </div>
            </div>
            {/* Delete, Cancel and Save */}
            <div className='flex justify-between'>
                <button onClick={this.handleDelete} className='bg-red-400 text-white px-5 cursor-pointer transform hover:scale-110'>Delete</button>
                <div className='flex px-5'>
                    <button type='button' onClick={this.handleCancel} className='border border-blue-400 px-5 cursor-pointer transform hover:scale-110'>Cancel</button>
                    <button type='submit' className='bg-blue-400 text-white px-5 cursor-pointer transform hover:scale-110'>Save</button>
                </div>
            </div>
            </form>
        </div>
    )
}
}

export default Main