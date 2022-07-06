import React, { useEffect } from "react";

import '../style.css'
import asuka from '../eva/asuka.png'
import shinji from '../eva/pngegg.png'
import evablue from '../eva/blueeva.png'
import misato from '../eva/misato.png'
import gendo from '../eva/gendo.png'
import mari from '../eva/mari (2).png'
import rei from '../eva/rei2.png'
import penguin from '../eva/penguin.png'
import Card from "./Card";





const GameBoard = (props) => {


  



    const characters = [
        {name:"shinji", img:shinji},
        {name:"asuka", img:asuka},
        {name:"blue eva", img:evablue},
        {name:"misato", img:misato},
        {name:"mari", img:mari},
        {name:"gendo", img:gendo},
        {name:"penguin", img:penguin},
        {name:"rei", img:rei}
    ]
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex !== 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }
      useEffect (()=>{
        if(props.currentScore>props.bestScore)
        {
          props.setBestScore(props.currentScore)
        }
        
     
      },[props.currentScore])

    const handler = (name) =>{

       
        if(props.currentCards.some(e=>e===name))
        {
            console.log(`lost!`)
           
              
                props.setCurrentCards([])
                props.SetCurrentScore(0)

            
            
          
        }
        else{
        props.setCurrentCards(props.currentCards.concat(name))
        props.SetCurrentScore(props.currentScore+1)
        console.log(props.currentScore)
        if(props.currentScore>props.bestScore)
        {
            console.log(`current `,props.currentScore)
            props.setBestScore(props.currentScore)
           

        }
        
    
        }
    }

    return(
        <div className="gameBoard" onClick={()=>{
            console.log(`form div`)
        }}>
       { shuffle(characters).map(e =>{ return <Card charName={e.name} imgSrc={e.img} actionListner={()=>{
            handler(e.name)
        }}/>})}
        </div>
    )

}

export default GameBoard