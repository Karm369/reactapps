import { Children, useState } from "react";

export function TwitterFollorCard({userName,children}){

//const state = useState(false)

    const [isFollowing,setIsFollowing] = useState(false)

    const imageSrc = `https://unavatar.io/twitter/${userName}`; //o pnerlo directo en el src


    const texto = isFollowing? "Siguiendo" : "seguir" 

    const buttonClassName = isFollowing? "jk-button-siguiendo" : "jk-button-Seguir"

    const handleClick= () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="jk-twittercard">
            <header className="jk-twittercard-header"> 
                <img className="jk-twittercard-avatar"
                src={imageSrc} alt="imgAvatar"/>
                <div className="twittercard-header-div">
                    <strong>{children}</strong>
                    <span className="twittercard-div-span">@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick} >
                    {texto}
                    <span className="jk-twittercard-unfollow">Dejar de seguir</span>
                </button>
                
            </aside>
        </article>
    )
}