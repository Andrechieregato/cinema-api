import "./Filme.css";

const Filme = (props) =>{
   
        
    return (
        <div className="filme" style={{display: props.hiddenDisplay ? 'none' : 'flex'}} >
            <img src={props.image} alt={props.name}/> 
            <div className="filme-content"> 
                <ul className="filme-unorder-list">
                    <li>Id Movie: {props.id}</li>
                    <li>Name:{props.name}</li>
                    <li>Popularity: {props.popularity}</li>
                    <li>Overview:{props.overview}</li>
                </ul>
            </div>
        </div>
      
    )
}

export default Filme;