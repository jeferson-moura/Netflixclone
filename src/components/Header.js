import React from 'react';
import './Header.css';
export default ({black}) => {
    return (
        <header className={black ?"black" : ''} >

            <div className="header--logo">

                <a href="/">
                    <img src="https://marcas-logos.net/wp-content/uploads/2019/11/Netflix-Logotipo.jpg" 
                        alt="Netflix" />
                </a> </div>

                <div className="header--user" >
                    <a href="/"><img src="https://ih1.redbubble.net/image.908933355.7118/pp,504x498-pad,450x450,f8f8f8.jpg" alt="user" />

                    </a>

                </div>
          
        </header>
    );
}