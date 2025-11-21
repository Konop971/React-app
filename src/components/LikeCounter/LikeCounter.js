import './LikeCounter.css'
import {useState} from 'react'
function LikeCounter() {
    const [likes, setLikes] = useState(0);
    const handleClick = () =>{
        setLikes(likes + 1)
    }
    const handleClick2 = () =>{
        if(likes > 0){
            setLikes(likes - 1)
        }
    }
    const counterStyle = {
            color: likes > 5 ? "red" : "black",
        }
    return (
        <div className='post'>
            <p style={counterStyle}>Fajny post!!! 🔥🔥🔥Liczba lajków: {likes}</p>
            <div className='actions'>
                <button onClick={handleClick}>Polub 👍</button>
                <button onClick={handleClick2}>Nie lub</button>
            </div>
        </div>
    )
}

export default LikeCounter;