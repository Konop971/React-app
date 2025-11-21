import './LikeCounter.css'
function LikeCounter() {
    const like = ()=>{
        let x = 0;
    }
    return (
        <div className='post'>
        <p>Fajny post!!! 🔥🔥🔥Liczba lajków: {like}</p>
        <button onClick={like()}>Polub 👍</button>
        </div>
    )
}

export default LikeCounter;