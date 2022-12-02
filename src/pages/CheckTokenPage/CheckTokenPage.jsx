// delete page

import React from 'react'
import * as userService from "../../utilities/users-service"

export default function CheckTokenPage() {
  
  async function handleCheckToken(){
    const expDate = await userService.checkToken()
    console.log(expDate)

  }
  return (
    <>

    <h1>Useless Check Token Page</h1>
    <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  )
}
