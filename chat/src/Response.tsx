import { TMessage } from './MessageHistory'

export default function Response(messageInfo: TMessage){
  const message = messageInfo.message
  return (
    <li className="clearfix">
      <div className="message-data align-right">
        <span className="message-data-name"><i className="fa fa-circle me">{message.from.name}</i> </span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="message other-message float-right">
        {message.text}
      </div>
    </li>
  )
}