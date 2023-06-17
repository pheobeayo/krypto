import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Stake } from './pages'
import { StakeContainer } from './components'
function App() {
  const [count, setCount] = useState(0)
  const path ={
    home:"/",
    stake:"/stake",
    reward:"/reward"

  }

  return (
    <>
        <div>
          <Routes>
            <Route path={path.stake} element={<StakeContainer />}>
            <Route index element={<Stake/>} />
            </Route>
            <Route path={path.home} element={<div>Home</div>} />
          </Routes>
        </div>
    </>
  )
}

export default App
