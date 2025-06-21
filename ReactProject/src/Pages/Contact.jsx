import React, { useContext } from 'react'
import  Context  from '../Hooks/Context'
import image from '../assets/rock.png'
const Contact = () => {
  const user = useContext(Context);

  return (
    <div>
      <h1>{user.name}</h1>
      <h1>{user.phn}</h1>
      <img src={image} alt="rock" />
    </div>
  )
}

export default Contact