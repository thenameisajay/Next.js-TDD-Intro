import { useState } from "react";
import { Inter } from "next/font/google";

import NewMessageForm from "@/components/NewMessageForm/NewMessageForm";
import MessageList from "@/components/MessageList/MessageList";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [messages, setMessages] = useState([]);

  function handleSend(newMessage) {
    setMessages([newMessage, ...messages]);

  }



  return (
    <div className="w-screen h-dvh justify-center flex flex-col items-center">
      <NewMessageForm onSend={handleSend} />
      <MessageList data={messages} />
    </div>
  )
}
