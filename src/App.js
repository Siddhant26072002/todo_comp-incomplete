import { useState } from 'react';
import './App.css';
import Create from './Component/Addblog';
import Navbar from './Component/Navbar';
import { BrowserRouter as Router, Route,Routes, Link} from 'react-router-dom';
import Complete from './Component/Complete';
import Incomplete from './Component/Incomplete';

function App() {
  const [complete,setComplete]=useState([
    {id:1,content:"Blog 1"},
    {id:2,content:"Blog 2"}
  ]);

  const [incomplete,setIncomplete]=useState([
    {id:3,content:"Blog 3"},
    {id:4,content:"Blog 4"}
  ]);

  const [num,setNum]=useState(5);

  return (
    
    <Router>
      <Navbar />
      <div className='container'>
      <Create num={num} setIncomplete={setIncomplete}
      incomplete={incomplete}
      setNum={setNum}
      />
      <Routes>
      <Route path="/complete" exact 
      element={<Complete incomplete={incomplete} 
        complete={complete}
        setComplete={setComplete}
        setIncomplete={setIncomplete} />} 
        
      />
      
      
      <Route path="/incomplete" 
      element={<Incomplete incomplete={incomplete} 
        complete={complete}
        setComplete={setComplete}
        setIncomplete={setIncomplete} />}
      />
      </Routes>
      </div>
</Router>
 
  );
}

export default App;
