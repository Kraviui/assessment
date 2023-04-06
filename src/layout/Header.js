import React from 'react'
import Menu from '../images/menu.png'


function Header(){
    let url="";
    return(
          <div>
        <div className='flex-box' tabIndex='1'>
            <a href={url} className='logo'  >Your Logo </a>
            <nav>
                <a href={url} >Explore</a>
                <a href={url}>About</a>
                <select tabIndex='4'>
                    <option>Cities </option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
                <button href='#' >Call</button>
              
      
            </nav>
                 <img src={Menu}   class="menu-icon"  alt='mobile menu' />

                
        </div>

      </div>
      
    )
}

export default Header