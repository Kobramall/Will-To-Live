import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = (props) => {
  
    const { changeHandler, players } = props
    const navigate = useNavigate()
  
    return (
    <div>
       <section data-aos='fade-up' className="header">
        <h2 className=''>WELCOME TO</h2>
        <h1 className=''>"THE WILL TO LIVE"</h1>
        <img src='https://ac-cdn.azureedge.net/infusionnewssiteimages/agingcare/e4e7bd86-1472-4dbf-8c89-88f759f42940.jpg' alt='will'/>
      </section>
      <section data-aos='fade-up'className='players-section'>
        <h3>Find a Lobby</h3>
        <div>
            {players}
        </div>
        <button onClick={() => navigate('/game')}>BEGIN</button>
      </section>
      <footer data-aos='fade-down'>
        <button>Home</button>
        <button>About</button>
        <button>Rules</button>
        <button>Videos</button>
      </footer>
    </div>
  )
}

export default Home
