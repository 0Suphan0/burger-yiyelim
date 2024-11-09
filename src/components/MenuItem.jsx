import '../style/menu.css'

function MenuItem({image,name,content,price}) {
    return (
    <div className="menuItem">
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1 style={{marginBottom:'30px'}}>{name}</h1>
        <h5 style={{marginTop:'0px'}}>{content}</h5>

        <i style={{color:'red'}}>
            <p>{price} TL</p>

        </i>

    </div> );
}

export default MenuItem;