import React from 'react'
import LeftMenu from './components/LeftMenu/LeftMenu'
import Main from './components/Main/Main'
const Home = () => {
  return (
    <div className='home-container'>
        <LeftMenu></LeftMenu>
        <Main></Main>
    </div>
  )
}

export default Home