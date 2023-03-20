import Navbar from '@/components/Navbar.js';
import ChatWindow from '@/components/ChatWindow.js';
import InputField from '@/components/InputField.js';
import { useEffect } from 'react';

export default function Home() {
  return (
    <>
      <div className='container h-screen flex flex-col'>
        <Navbar />
        <ChatWindow />
        <InputField />
      </div>
    </>
  )
}
