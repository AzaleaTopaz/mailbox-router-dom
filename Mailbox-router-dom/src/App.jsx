import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import MailboxList from './components/MailboxList'
import MailboxForm from './components/MailboxForm'
import MailboxDetails from './components/MailboxDetails'


function App() {
  const [mailboxes, setMailboxes] = useState([])
  const [newMailbox, setNewMailbox] = useState({})

  const addMailbox = (e) => {
    e.preventDefault()
   
    // const currentMailboxes = mailboxes
    const createdMailbox = {
      ...newMailbox,
      
      id: parseInt(mailboxes.length + 1),
      
    }
    // console.log(mailboxes.length)
    // currentMailboxes.push(createdMailbox)
    // setNewMailbox({...newMailbox, id: mailboxes.length + 1})
    setMailboxes([...mailboxes, createdMailbox])
    
  }
  const handleChange = (e) => {
    setNewMailbox({ ...newMailbox, [e.target.name]: e.target.value })
  }



  return (
    <div className = 'App'>
   <header>
    <Nav />
   </header>
   <Routes>
    <Route path = '/' element={<main><h1>Post Office</h1></main>} />
    <Route path = '/mailboxes' element={<MailboxList mailboxes={mailboxes} />} />
    <Route path = '/new-mailbox' element={<MailboxForm newMailbox={newMailbox} handleChange={handleChange} addMailbox={addMailbox} />} />
    <Route path = '/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes} />} />
   </Routes>
  
   
   </div>
  )
}

export default App
