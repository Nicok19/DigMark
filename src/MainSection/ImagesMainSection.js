import React from 'react';

function imageSection() {
  return (
    <div className="ImagesElements">

      <div id='line'>  
      
      <img src="/Elements/topRigthPhoto.png" className='topRigthPhoto' alt=" Photography of a group of people working" />

      <div className='cicleOne'>

      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <img src="https://i.imgur.com/hrfiuVB.jpg" alt="Instagram Logo" />


</a>
      </div>
      </div>




<div id='line'>  

      <div className='cicleTwoo'>

      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
      <img src="https://i.imgur.com/B6tK1lx.jpg" alt="Youtube Logo" />

</a>
      </div>
      <img src="/Elements/MidleRigthPhoto.png" className='MidleRigthPhoto' alt="Photography of a girl with a tablet" />
</div>


<div id='line'>  

      <img src="/Elements/DownLeftPhoto.png" className='DownLeftPhoto' alt="Photography of a girl jumping from a cellphone" />
      <div className='cicleTrhee'>

      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <img src="https://i.imgur.com/5dtiWD7.jpg" alt="X Logo" />

</a>

<a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
<img src="https://i.imgur.com/IQqUdLQ.jpg" alt="Linkedin Logo" />

</a>

      </div>
      </div>
    </div>
  );
}

export default imageSection;


