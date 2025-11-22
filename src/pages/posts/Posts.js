import LikeCounter from "../../components/LikeCounter/LikeCounter";
import "./Posts.css";

function Posts(){
    return(
        <>
        <h1>Lastest post</h1>
        <article>
            <h1>Latest Posts</h1>
            <div className='posts'>
              <LikeCounter title='1. Pierwszy post' description='Opis naszego artykulu' count='5' bgcolor='lightblue' autor='Jakis Pan1'></LikeCounter>
              <LikeCounter title='2. Pierwszy post' description='Opis naszego artykulu' count='16' bgcolor='lightgreen' autor='Jakis Pan2'></LikeCounter>
              <LikeCounter title='3. Pierwszy post' description='Opis naszego artykulu' count='3' bgcolor='lightpink' autor='Jakis Pan3'></LikeCounter>
            </div>
        </article>
        </>
    )
}

export default Posts;