import React, {useState} from 'react'
import "./chatroom.css"
import MenuIcon from "../../assets/menuicon1.png"

const users = [
  {
    name: 'John',
    avatarUrl: ''
  },
  {
    name: 'Doe',
    avatarUrl: ''
  },
  {
    name: 'Test',
    avatarUrl: ''
  },
  {
    name: 'Not tested',
    avatarUrl: ''
  },
]

export default function Chatroom(){

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  return (
    <div className='chathome'>

      <div className="topnav">
        <button 
          className={isMenuOpen ? 'toggle-btn active' :  'toggle-btn'}
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }}  
        >
          <img src={MenuIcon} alt="icon" />
        </button>
        <p>geeky-python34</p>
      </div>

      <div className={isMenuOpen ? 'sidepanel' :  'sidepanel active'}>
        <ul className='userslist'>
          <li className='you'> 
            <div className="avatar"></div>
            <p>You</p>
          </li>
          {
            isLoading ? <li className='loader'>
              <div className="loading"></div>
            </li> : 
            users.map(user => (
              <li  
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen)
                }} >
                <div className="avatar"></div>
                <p>{user.name}</p>
              </li>
            ))
          }
        </ul>
        <button 
          className='menu-btn'
          onClick={() => {
            setIsMenuOpen(!isMenuOpen)
          }} 
        >Go Back</button>
      </div>

      <div className="chatspace">
        <div className="chat-card">
          <p>hi how are you</p>
        </div>
        <div className="chat-card card-right">
          <p>looks like somebody don't want to talk</p>
        </div>
      </div>

      <div className="inputbox">
        <input type="text" />
        <button className="send-btn">↗️</button>
      </div>

    </div>
  )
}
