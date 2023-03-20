export default function Message({ message }) {
    return (
        <>
            <div className="chat chat-end">
                <div className="chat-bubble">{message}</div>
            </div>
        </>
    )
}