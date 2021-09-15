function ContactCard({firstName, lastName, id}) {
    return (
       <div className="hover:bg-blue-400 fill hover:text-gray-50">
           <div className="flex items-left">
                {firstName} {lastName}
            </div>
        </div>
    )
}

export default ContactCard