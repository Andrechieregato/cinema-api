import "./Campo.css";



const Campo = (props) => {
    
    return (
        <div className="campo" style={{marginBottom: props.marginBottom ? '0px' : '0px'}}>
            <h1>CINEMATECA</h1>
            <input 
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    )
}


export default Campo;