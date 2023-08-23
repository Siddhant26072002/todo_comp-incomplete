
import React from 'react';

export default function Addblog({num,setComplete,complete,setNum}) {
    function Click(e){
     setComplete(()=>[...complete,{id:num, content:`Blog ${num}`}]);
     setNum(num => num+1);
    }

  return (
    <div>
        <span>Blog {num}</span>
        <button onClick={Click}>add</button>
    </div>
  )
}
