import { useNavigate } from 'react-router-dom'


const MailboxList = (props) => {
    console.log(props)
    
    let navigate = useNavigate()

    const showMailbox = (mailbox) => {
        navigate(`${mailbox.id}`)

    }

    return (
        <div className ="mailbox-grid">
            <h2>Mailbox List</h2>
            
                <ul>
                {props.mailboxes.map((mailbox) => (
                    <li key={mailbox.id} onClick={() => showMailbox(mailbox)}>
                        <h3>{mailbox.boxholderName}</h3>

                      </li>
                      ))}
                      </ul>
                    
                  
            
        </div>
    )
}

export default MailboxList
