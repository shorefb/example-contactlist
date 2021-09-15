import '@heroicons/react/solid'
import { PlusCircleIcon } from '@heroicons/react/solid'
import React from 'react'
import ContactCard from './ContactCard';
import ServiceWorker from './api/ServiceWorker'
import Main from './Main'

class Sidebar extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      contacts: [],
      single: {}
    }
  }

  componentDidMount() {
      ServiceWorker.getContacts().then((res) => {
        this.setState({contacts: res.data})
      })
  }

render() {
  let contacts = this.state.contacts.contacts
  let single = this.state.single
return (
  <div className="flex p-2 ">
              <div className="">
                <div className="flex">
                <p className="h-9 font-semibold text-3xl">Contacts</p>
                  <PlusCircleIcon className="h-9 px-2 text-blue-400 cursor-pointer transform hover:scale-110" />
                </div>
                 
                  <div className='flex flex-col px-1'>
              {contacts?.map(({firstName, lastName, id}) => (     
              <button key={id} onClick={() => ServiceWorker.getContactById(id).then((res) => {this.setState({single: res.data})})}>
                  <ContactCard id={id} firstName={firstName} lastName={lastName} />
              </button>   
                  ))}
                  </div>
              </div> 
              <div>
                <Main user={single}/>
                </div>           
  </div>
)
}
}

export default Sidebar
