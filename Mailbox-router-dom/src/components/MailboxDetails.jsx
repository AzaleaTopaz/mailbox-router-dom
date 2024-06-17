import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const MailboxDetails = (props) => {

  const [mailbox, setMailbox] = useState('')

    // stays the same pulls the id from the url and allows us to find an object with it.
  let {id} = useParams()
  
  
  useEffect(() => {

    let selectedMailbox = props.mailboxes.find((mailbox) => mailbox.id === parseInt(id))
    setMailbox(selectedMailbox)
    
  }, [props.mailbox, id])

  return mailbox ? (
    <div className="detail">
      <div className="detail-header">
        <div className='Mailbox'>
          <h1>Mailbox</h1>
        </div> 
      </div>
      <div className="info-wrapper">
        <div>
          <h3>Boxholder Name: {mailbox.boxholderName}</h3>
         
        </div>
      </div>
    </div>
  ) : null;
}
        

export default MailboxDetails