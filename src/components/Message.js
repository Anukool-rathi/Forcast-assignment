export default function Message({ message, created_at }) {
    const timestamp = created_at.slice(11, 16)
    return (
        <>
            <div className="chat chat-end">
                <div className="chat-bubble">{message}</div>
                <div className="chat-footer opacity-50">
                    {timestamp}
                </div>
            </div>
        </>
    )
}