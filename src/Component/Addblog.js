
import React from 'react';

export default function Addblog({num,setIncomplete,incomplete,setNum}) {
    function Click(e){
     setIncomplete([...incomplete,{id:num, content:`Blog ${num}`}]);
     setNum(num => num+1);
    }

  return (
    <div className='blog'>
        <span>Blog {num}</span>
        <button className='add' onClick={Click}>add</button>
    </div>
  )
}
