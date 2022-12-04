import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { update } from '../../utilities/UserRequests/users-service'

export default function UpdateUser({ user, setUser, modalOpened, setModalOpened }) {
  let state = {
    firstname: user.firstname ,
    lastname: user.lastname,
    email: user.email,
    profilePicture: user.profilePicture,
    about: user.about
  }
  const [formData, setFormData] = useState (state)
  // const theme = useMantineTheme();
  

  function handleChange(e) {
    state[e.target.name] = e.target.value
    setFormData( {...formData, lastname : e.target.value} )
    setFormData(state)
   }
  

  function handleSubmit(e) {
     e.preventDefault()
     try {
       const user = update(formData)
       setUser(user)
     } catch (error) {
       console.log ({error}) 
     }
  }
    

  return (

      <form onSubmit={handleSubmit}>
        <h3>Your Info</h3>
        <div>
          <label>First Name</label>
          <input
            defaultValue={state.firstname}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
          />
          

          <label>Last Name</label>
          <input
            defaultValue={state.lastname}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />

            <label>Email</label>
            <input
              defaultValue={state.email}
              onChange={handleChange}
              type="email"
              className="infoInput"
              name="email"
              placeholder="Email"       
            />
          
          <label>picture</label>
          <input
            defaultValue={state.picture}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="profilePicture"
            placeholder="Profile Picture"
          />
          <label>About </label>
          <textarea
            defaultValue={state.about}
            onChange={handleChange}
            type="text"
            className="infoInput"
            rows="4" cols="40"
            name="about"
            placeholder="About ..."
          />

        </div>

        <button type="submit">Update</button>
      </form>
  );
}
