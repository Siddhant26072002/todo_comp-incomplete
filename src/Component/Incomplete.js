import React from 'react';

export default function Incomplete({incomplete,complete,setComplete,setIncomplete}) {
    function ChangetoComplete(identity){
        console.log(identity);
        const upincomplete=incomplete.filter(blog=> blog.id!== identity);
        setIncomplete(upincomplete);
        setComplete([...complete,{id: identity,content:`Blog ${identity}`}]); 
            }
    
  return (
    <div className='group'>
    {incomplete.map((blog) =>(
        <div className='card2'
                key={blog.id}>
            <div>{blog.content}</div>
            <button className='incompletebutton' onClick={() =>ChangetoComplete(blog.id)}>mark complete</button>
        </div>
  ))}
  </div>
  )
}
