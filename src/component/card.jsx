const Card=({title, subtitle})=>{
    return (
        <div style={{margin:"15px 10px", borderStyle:"solid", borderRadius:"20px", padding:"15px", width:"50%"}}>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </div>
      );
    };

export default Card;