/* eslint-disable no-unused-vars */
import { useContext } from "react"
import {KryptoContext} from '../../context/KryptoContext.jsx'
import hero_bg from "../../assets/svg/hero_bg.svg"
import { Button } from '@mantine/core'
import {Link} from 'react-router-dom'

function Home() {
  const {connectMetaMask, address, signer} = useContext(KryptoContext)

  return (
    <div>
        <section className="hero">
            <img className='hero_bg' src={hero_bg} alt="" />
            <div className="content">
                <div className="text">
                    <h1>Krypto Staking, Trusted staking platform for the masses </h1>
                    <p className="" style={{marginBottom:"3rem"}}>Simplified and secure participation in staking</p>
                    {
                    !address?
                    <Button size='lg' onClick={connectMetaMask}>Connect Wallet</Button>:
                    <Link className="stake-link" to={"/stake"}>Start Staking</Link>
                    }
                </div>  
            </div>
        </section>
    </div>
  )
}

export default Home