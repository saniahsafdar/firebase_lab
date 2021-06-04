import { FormEvent, useState } from "react";
import ShoutOut from "../model/ShoutOut";


interface Props {
    onSubmit: (shoutOut :ShoutOut) => void;
}

function ShoutOutForm({onSubmit}:Props) {
    const [ to, toSet] = useState("");
    const [from, fromSet] = useState("");
    const [message, messageSet] = useState("");

    function handleSubmit(event:FormEvent):void {
        event.preventDefault();
        const shoutOut: ShoutOut = {
            to: to,
            from: from,
            message: message
        }
        onSubmit(shoutOut);

        toSet("");
        fromSet("");
        messageSet("");
    }

        return (
        <form className="ShoutOutForm" onSubmit={handleSubmit}>
            <p>
                <label htmlFor="ShoutOutForm_to">To:</label>
                <input id="ShoutOutForm_to" value={to} onChange={e => toSet(e.target.value)} required />
            </p>
            <p>
                <label htmlFor="ShoutOutForm_from">From:</label>
                <input id="ShoutOutForm_from" value={from} onChange={e => fromSet(e.target.value)} required />
            </p>
            <p>
                <label htmlFor="ShoutOutForm_message">Message:</label>
                <input id="ShoutOutForm_message" value={message} onChange={e => messageSet(e.target.value)} required />
            </p>
            <p>
                <button type="submit">Send a shout!</button>
            </p>
        </form>
    )

}

export default ShoutOutForm;