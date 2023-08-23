import React from 'react';

export default function Incomplete({incomplete,complete,setComplete,setIncomplete}) {
    function ChangetoComplete(identity){
        incomplete=incomplete.filter(blog=> blog.id!== identity);
        setIncomplete(incomplete);
        setComplete(()=>[...complete,{id:identity,content:`Blog ${identity}`}]); 
            }
    
  return (
    <>
    {incomplete.map((blog) =>(
        <div className='card'
                key={blog.id}>
            <div>{blog.content}</div>
            <button onClick={() =>ChangetoComplete(blog.id)}>mark complete</button>
        </div>
  ))}
  </>
  )
}
