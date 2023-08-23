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
    {id:1,content:"Blog 3"},
    {id:2,content:"Blog 4"}
  ]);

  const [num,setNum]=useState(5);

  return (
    
    <Router>
      <Navbar />
      <Create num={num} setComplete={setComplete}
      complete={complete}
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
</Router>
 
  );
}

export default App;
