import ShoutOut from '../model/ShoutOut'


interface Props {
    shoutOut: ShoutOut;
}

function ShoutOutCard({shoutOut}: Props) {
    return (
        <div className= "ShoutOutCard">
            <h3>Sending Shoutout to {shoutOut.to} </h3>
            <p>From: {shoutOut.from}</p>
            <p>{shoutOut.message}</p>
        </div>
    )
}

export default ShoutOutCard