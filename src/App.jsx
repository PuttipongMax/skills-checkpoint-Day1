import './App.css'
import Navbar from './component/Navbar'
import Content from './component/Content'
import AdditionalPassion from './component/AdditionalPassion'
import Portfolio from './component/Portfolio'
import ContactMe from './component/ContactMe'

function App() {

  return (
    <>
    <div className="bg-[#0b132b] w-full ">
      <Navbar />
    </div> 
    <div className="bg-zinc-400 w-full h-screen">
      <Content />
      <AdditionalPassion />
      <Portfolio />
      <ContactMe />
    </div>    
    </>
  )
}

export default App
