
import logo from './eva/logo.png'

import DashBoard from './Components/DashBoard';
import GameBoard from './Components/GameBoard';

import { useEffect,useState } from 'react';
function App() {


 
  const [currentCards,setCurrentCards] = useState([])
  const [currentScore,SetCurrentScore]=useState(0)
  const [bestScore,setBestScore]=useState(0)
  

  useEffect (()=>{
    console.log(currentCards)
    
 
  },[currentCards])
  


  
 


  return (
    <div className="main">
      <div className="header">
        <div>
          <img src={logo} alt="problem!"></img>
        </div>
        <div className="dashBoard">
      <DashBoard currentScore={currentScore} bestScore={bestScore}
    />

        </div>

      </div>
      <div className="gameBoard">
      <GameBoard setCurrentCards={setCurrentCards} 
      currentCards={currentCards}
       currentScore={currentScore} 
       SetCurrentScore={SetCurrentScore}
       bestScore={bestScore}
       setBestScore={setBestScore}/>
      </div>


      
    </div>
  );
}

export default App;
