import { useNavigate } from "react-router-dom";

const MailboxForm = (props) => {
    let navigate = useNavigate()


    const handleSubmit = (e) => {
        props.addMailbox(e)
        navigate('/mailboxes')
    }

    const newMailbox = props.newMailbox

    return (
        <div>
            <h1>New Mailbox</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor="new-mailbox">New Mailbox</label>
        <select id="mailbox" onChange ={props.handleChange} name= 'boxsize'>
        <option value="" defaultValue>Select a Box Size:</option>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
          </select>
        
        <label htmlFor="box-holder">Enter a Boxholder</label>
        <textarea id="boxholder" cols="1" rows="1" onChange = {props.handleChange} name = 'boxholderName'></textarea>
    
         <button type="submit">Send</button>
    </form>
    </div>
    
     );
    }
    
    export default MailboxForm













