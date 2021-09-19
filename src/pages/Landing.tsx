import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function Landing() {
    return (
        <div>
           <nav>
               <Sidebar />
           </nav>
           <main>
               <Header />
           </main>
        </div>
    )
}

export default Landing
