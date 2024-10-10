import React, { useState ,useEffect } from 'react';
 import { Form  } from 'react-router-dom';
 import './Linkdin.css';
function Linkdin() {

  
  
    return (
       <div className='cover-page'   >
        <Post profile={'/media/p-1.jfif'} username={"bhushan"} follwers={"100k"} content={" hi there i have make my coding app "}  />
        <Post profile={'/media/p-2.jfif'} username={"ram"} follwers={"10k"} content={"good moring "}  />
       </div>
  
    );
} 

function Post({profile,username,follwers,content }){


  const [like,setLike]=useState(0)

  function makelike(){
      setLike((c)=>c+1);
  }
  function removelike(){
    setLike((c)=>c-1);
}
  return <div>

    <div className='user-post' >
           <div className='user-info'>
              <div>
                <img  className='user-img' src={profile} alt="imge"   />
              </div>

              <div>
                <h4>{username}</h4>
                <h4>{follwers}</h4>
              </div>
             </div>

             <div className='post-content'>
              <p>{content} </p>
             </div>

             <div className='post-image'>
              <img style={{width:'55%'}} src="/media/HOME-PAGE.jpg" alt="imag" />

             </div>

             <div className='reaction-post'>

              <button onClick={makelike} onDoubleClick={removelike} className='btn btn-primary'> {like}</button>
              <button className='btn btn-primary'>comment</button>
              <button className='btn btn-primary'>repost</button>
              <button className='btn btn-primary'>send</button>

               
             </div>
    </div>
  
  </div>
}
 

export default Linkdin;
