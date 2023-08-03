import Style from './Navigation.module.css'
const Navigation = () => {



  return (
<div >
    <nav className = {`${Style.navigation}` } >
       <div className = "logo">KeepInTouch</div>

       <ul>

        <li><a href ="#">Home</a></li>
        <li><a href ="#">About</a></li>
        <li><a href ="#">Contact</a></li>
        
       </ul>

        
        </nav>
        </div>

  )
}

export default Navigation