import React, { useState } from "react";
import UpdateUser from "../../components/UpdateUser/UpdateUser";

export default function Home({user,setUser}) {
  const [modalOpened, setModalOpened] = useState(false);
 
  return (
    <>
      <div>Home Page</div>
      <div>
        <button onClick={() => setModalOpened(true)}>Edit Profile</button>
        <UpdateUser        
          user={user}
          setUser={setUser}
        />
      </div>
    </>
  );
}
