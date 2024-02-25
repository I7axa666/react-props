import { TMessage } from './MessageHistory'

export default function Message(messageInfo: TMessage){
  const message = messageInfo.message
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online">{message.from.name}</i> </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message my-message">
        {message.text}
      </div>
    </li>
  )
}