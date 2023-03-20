import { FunctionsClient } from "@supabase/functions-js";
import { useState } from "react"
import { supabase } from "../lib/supabaseClient.js"

export default function InputField() {

    const [message, setMessage] = useState('');

    function handleMessageChange(event) {
        const newMessage = event.target.value;
        setMessage(newMessage);
    }

    async function handleSend() {
        const res = await supabase.from('messages').insert({
            message: message
          })
          setMessage("");
    }

    return (
        <>
            <div className='flex flex-row mx-5'>
                <input type="text" placeholder="Type here"
                    value={message}
                    onChange={handleMessageChange}
                    className="input input-bordered grow mb-5 mr-5 placeholder:italic placeholder:text-slate-400"
                />
                <button onClick={handleSend} className="btn" disabled={message.trim() == ''}>Send</button>
            </div>
        </>
    )
}