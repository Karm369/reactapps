import { useState } from "react";
import "./App.css";
import { TwitterFollorCard } from "./TwitterFollowCard";

export function App (){

    const formatUserName = (userName)=>`@${userName}`

    const elonmusk ={isFollowing:false,
    userName:"elonmusk" ,
    name:"Elon Musk"}

    
    const [name, setName] = useState("midudev")


    const users = [
        {
            userName :"EvilAFM",
            name: "Alex",
            isFollowing: true
        },
        {
            userName :"pheealb",
            name: "Pablo H",
            isFollowing: false
        },
        {
            userName :"pacoHdez",
            name: "Paco",
            isFollowing: true
        },
    ]
    
 

    return (
    <section className="App">

      {/*  <TwitterFollorCard
        isFollowing={true} 
        userName={name}
        name="midudev" />

        <TwitterFollorCard
        isFollowing={true} 
        userName="midudev" 
        name="midudev" />

        <TwitterFollorCard {...elonmusk}/>

        <TwitterFollorCard 
        isFollowing={false} 
        userName="BillGates" 
        name="Bill Gates" />

        <button onClick={()=>setName("karm219")}>
            Cambiar nombre
        </button>*/}
      
        {
            users.map(user=>{
                const {userName,name,isFollowing}= user
                return(<TwitterFollorCard key={userName} userName={userName} initialIsFollowing={isFollowing} >
                    {name}
                </TwitterFollorCard>)
            })


        }
        

        </section>

        
    )
}