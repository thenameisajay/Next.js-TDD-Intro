
import { Inter } from "next/font/google";
import NewMessageForm from "@/components/NewMessageForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-dvh justify-center flex items-center">
      <NewMessageForm />
    </div>
  )
}
