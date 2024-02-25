import Message from "./Message"
import Response from "./Response"
import Typing from "./Typing"

export interface TMessage {
  id: string,
  from: {name: string},
  type: string,
  time: string,
  text: string
}

export interface Messages {
  list: TMessage[]
}

export default function MessageHistory({list}: Messages) {
    if (!list){return}
    // console.log(list)
  return (
    <ul>
      {list.map((message: TMessage, index: number) => {
        if(message.type === 'message') {
          return <Message message={message} key={index}/>
        } else if (message.type === 'response') {
          return <Response message={message} key={message.id}/>
        } else {
          return <Typing message={message} key={message.id}/>
        }
      })}
    </ul>

  )
}