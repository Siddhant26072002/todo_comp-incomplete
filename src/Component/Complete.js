import React from 'react'

export default function Complete({incomplete,complete,setComplete,setIncomplete}) {
    function ChangetoIncomplete(identity){
        const upcomplete=complete.filter(blog=> blog.id!== identity);
        setComplete(upcomplete);
        setIncomplete([...incomplete,{id:identity,content:`Blog ${identity}`}]); 
        
            }
    
  return (
    <>
    {complete.map((blog) =>(
        <div className='card'
                key={blog.id}>
            <div>{blog.content}</div>
            <button onClick={() =>ChangetoIncomplete(blog.id)}>mark incomplete</button>
        </div>
  ))}
  </>
  )
}
