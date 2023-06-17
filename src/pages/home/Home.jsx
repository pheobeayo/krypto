import React from 'react'
import hero_bg from "../../assets/svg/hero_bg.svg"
import { Button } from '@mantine/core'
function Home() {
  return (
    <div>
        <section className="hero">
            <img className='hero_bg' src={hero_bg} alt="" />
            <div className="content">
                <div className="text">
                    <h1>Krypto Staking, Trusted staking platform for the masses </h1>
                    <p>Simplified and secure participation in staking</p>
                    <Button size='lg' >Connect Wallet</Button>
                </div>  
            </div>
        </section>
    </div>
  )
}

export default Home