import './LikeCounter.css'
import {useState, useEffect} from 'react'
function LikeCounter({title, description, count, bgcolor, autor}) {
    const [likes, setLikes] = useState(parseInt(count));

    useEffect(() =>{
        console.log("use effect odpalony");
         if(`${likes}` == 0){
            document.title = "MiniFeed - Licznik lajków"
         }
         if(`${likes}` > 0){
            document.title = `${likes} Nowe lajki na MiniFeed`
         }
         if(`${likes}` > 20){
            document.title = "Jestes absolutnym viralem!"
         }
    }, [likes])

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
        <div className='post' style={{backgroundColor: bgcolor}}>
            <p style={counterStyle}>Fajny post!!! 🔥🔥🔥Liczba lajków: {likes}</p>
            <h1>{autor}</h1>
            <h2>{title}</h2>
            <p>{description}</p>
            <div className='actions'>
                <button onClick={handleClick}>Polub 👍</button>
                <button onClick={handleClick2}>Nie lub</button>
            </div>
        </div>
    )
}

export default LikeCounter;