import axios from 'axios';

const URL = "https://avb-contacts-api.herokuapp.com/contacts/paginated"
const baseURL = 'https://avb-contacts-api.herokuapp.com/contacts'

class ServiceWorker {

    getContacts(){
        return axios.get(URL)
    }

    addContact(contact){
        return axios.post(baseURL, contact)
    }

    getContactById(id){
        return axios.get(baseURL + '/' + id)
    }

    updateContact(contact, id){
        return axios.put(baseURL + '/' + contact, id)
    }

    deleteContact(id){
        return axios.delete(baseURL + '/' + id)
    }

}

export default new ServiceWorker()