import { channel, supabase } from "@/lib/supabaseClient";
import { useState, useEffect, useRef } from "react";
import Message from "./Message.js";

export default function ChatWindow() {

    const [prevData, setPrevData] = useState([]);
    const messagesEndRef = useRef();

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    };

    useEffect(scrollToBottom, [prevData])

    async function getPrevData() {
        channel.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                const { data, error } = await supabase
                    .from('messages')
                    .select()
                if (error) {
                    throw new Error("Data could not be fetched!")
                }
                else {
                    setPrevData(data)
                }
            }
        })
    }

    useEffect(() => {
        getPrevData()
    }, [])

    channel.on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'messages',
        },
        (payload) => {
            setPrevData(lastData => [...lastData, payload.new])
        }
      )

    return (
        <>
            <div className="border rounded-lg bg-base-300 m-5 grow overflow-auto">
                {prevData.map(data => (
                    <Message message={data.message} key={data.id}/>
                ))}
                <div ref={messagesEndRef}></div>
            </div>
        </>
    )
}