export default function MyPopup({message, onClose}) {

    return (
        <>

            <div className="backdrop"></div>
            <div className="popup">
                <h2>{message}</h2>
                <button onClick={onClose}>Play Again</button>
            </div>

        </>
    )
}
