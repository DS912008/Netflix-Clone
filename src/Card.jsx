import { useEffect, useState } from "react"

function Card(){

    const [data, setData] = useState([]);

   useEffect(() => {
     fetch("https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/movies-in-theaters.json")
    .then(res=>res.json())
    .then(data=>setData(data))
    
   }, [])

   let style={
   display:"grid",
   gridTemplateColumns:"repeat(3,1fr)",
   gap:"20px",
   padding:"20px",
   backgroundColor:"black",
   color:"#f5f5f5b9",
   
   }
   const imgStyle={
    width:"100%",
    height:"300px",
    objectFit:"cover",  
   }
   return(
    
    <div style={style}>
       {
        
data.map((v)=>{
    return(
      
         <div key ={v.id} style={{boxShadow:"0px 0px 10px red",padding:"20px 35px",height:"350px",width:"400px",borderRadius:"10px"}}>
<div><img src={v.posterurl} alt={v.title} style={imgStyle} /></div>
           <div style={{display:"flex",justifyContent:"space-between",gap:"10px",marginTop:"10px"}}>
            <div style={{color:"white"}}>Title:{v.title}</div>
           <div style={{color:"white"}}>Rating:{v.contentRating}</div>
            <div>Release Year:{v.year}</div>
            
           </div>
        </div>
     
    )
})



       }
    </div>
  
   )
}
export default Card;