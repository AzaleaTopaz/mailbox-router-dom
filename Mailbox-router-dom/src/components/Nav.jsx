import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='nav'>
          <h2>Mailbox</h2>
          <div>
          <Link to='/'>
            <h2>Home</h2>
            </Link>
          <Link to='/mailboxes'>
            <h2>Mailboxes</h2>
            </Link>
            <Link to='/new-mailbox'>
            <h2>New Mailbox</h2>
            </Link>
            </div>
        </nav>
    )
}

export default Nav