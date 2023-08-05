import React from 'react'

export default function Contact() {
  return (
    <div className="conn grid">
    <div>
     <iframe className=" float-right my-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30263.277202762274!2d73.82169980955221!3d18.53298457452628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0791d785177%3A0x20d86a81ca743dc8!2sShivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690375547256!5m2!1sen!2sin" width="600" height="550"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
     <div className="flex  font-mono flex-col justify-center h-60 w-44 bg-white m-auto my-48 border-2  border-blue-300  rounded">
        <input className=" border-black m-2 border-2 rounded w-36 text-center "   type="text" placeholder='Write something...'></input>
        <input className=" border-black m-2  border-2 rounded w-36 text-center" type="email" placeholder='Email id'></input>
        <input className=" border-black m-2  border-2 rounded w-36 text-center" type="password" placeholder='Password'></input>
     </div>
    </div>
    </div>
  )
}
