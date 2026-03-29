function Header(){
const style={
    display:"flex",
    justifyContent:"space-between",
    margin:"0px",
    padding:"20px",
    alignItems:"center",
    backgroundColor:"black",
    color:"white",
}
const navStyle={
   textDecoration:"none",
   color:"white",
   fontSize:"18px"
}
    return(
        <div style={style}>
            <h1 style={{color:"red",textShadow:"0px 2px 10px red"}}>NetFlix</h1>
            <nav style={{display:"flex",gap:"20px"}}>
                <a href="#" style={navStyle}>Home</a>
                <a href="#" style={navStyle}>TV Shows</a>
                <a href="#" style={navStyle}>Movies</a>
              
            </nav>
            <h4>Sign In</h4>
        </div>
    )
}
export default Header;