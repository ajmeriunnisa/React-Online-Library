import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './utils/store'


function App() {
  return (
    <div>
      <Provider store={store}>
    <Header/>
    {/* <Body/> */}
    <Outlet/>
    <Footer/>
    </Provider>
    </div>
  )
}

export default App