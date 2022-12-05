import React, { useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { useSetState } from "@mantine/hooks";
import { update } from '../../utilities/UserRequests/users-service';
import { UploadToS3 } from 'react-upload-to-s3'
import './UpdatUserModal.css';


export default function UpdateUserModal({ user, setUser, modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
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
      <div className="updateContainer">
        <h1>CHATTER BOX</h1>
        
        <img className="profileImg" src={state.profilePicture} />
          <div>
            <input
              defaultValue={state.firstname}
              onChange={handleChange}
              type="text"
              className="infoInput"
              name="firstname"
              placeholder="First Name"
            />
            

            <input
              defaultValue={state.lastname}
              onChange={handleChange}
              type="text"
              className="infoInput"
              name="lastname"
              placeholder="Last Name"
            />

              <input
                defaultValue={state.email}
                onChange={handleChange}
                type="email"
                className="infoInput"
                name="email"
                placeholder="Email"       
              />
        
            <input
              defaultValue={state.picture}
              onChange={handleChange}
              type="file"
              className="infoInput custom-file-input"
              name="profilePicture"
              placeholder="Profile Picture"
            />
            <UploadToS3 
                className="infoInput custom-file-input"
                bucket="{process.env.REACT_APP_BUCKET_NAME}"
                awsRegion="{process.env.REACT_APP_REGION}"
                awsKey="{process.env.REACT_APP_ACCESS}"
                awsSecret="{process.env.REACT_APP_SECRET}"
                awsMediaConvertEndPoint="{process.env.S3_BASE_URL}"
                type="image"
                mediaConvertRole="mediaconvert_role"
                theme={theme}
                showNewUpload={false}
                onResult={(result) => {console.log('on Result', result);}} />
                
            <textarea
              defaultValue={state.about}
              onChange={handleChange}
              type="text"
              className="infoInput"
              rows="4" cols="40"
              name="about"
              placeholder="About ..."
            />
            <button 
            type="submit"
            className="submitBtn">Update</button>
          </div>

          
       
      </div>
      </form>
    </Modal>
    
      
  );
}
