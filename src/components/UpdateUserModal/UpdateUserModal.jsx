import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { update } from '../../utilities/UserRequests/users-service'

export default function UpdateUserModal({ user, setUser, modalOpened, setModalOpened }) {
  let state = {
    firstname: user.firstname ,
    lastname: user.lastname,
    email: user.email,
    profilePicture: user.profilePicture,
    about: user.about
  }

  const [formData, setFormData] = useState ({
    firstname: user.firstname ,
    lastname: user.lastname,
    email: user.email,
    profilePicture: user.profilePicture,
    about: user.about
  })
  const theme = useMantineTheme();
  

  function handleChange(e) {
    state[e.target.name] = e.target.value
    // setFormData = {...formData, lastname : e.target.value} 
    setFormData(state)
   }
  

  function handleSubmit(e) {
    e.preventDefault()
    try {
      console.log (formData)
      const user = update(formData)
      // setUser(user)
    } catch (error) {
      console.log ({error}) 
    }
  }
    

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form onSubmit={handleSubmit}>
        <h3>Your Info</h3>
        <div>
          <label>First Name</label>
          <input
            value={state.firstname}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
          />
          <label>Last Name</label>
          <input
            value={state.lastname}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />

            <label>Email</label>
            <input
              value={state.email}
              onChange={handleChange}
              type="email"
              className="infoInput"
              name="email"
              placeholder="Email"       
            />
          
          <label>picture</label>
          <input
            value={state.picture}
            onChange={handleChange}
            type="text"
            className="infoInput"
            name="profilePicture"
            placeholder="Profile Picture"
          />

          <textarea
            value={state.about}
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
    </Modal>
  );
}
