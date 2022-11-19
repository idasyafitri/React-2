const Modal = ({children, title}) => {
    return(
      <div style={{margin:"15px 10px", borderStyle:"solid", borderRadius:"20px", padding:"15px", width:"50%"}}>
        <h3>{title}</h3>
        {children}
      </div>
    );
};

export default Modal;