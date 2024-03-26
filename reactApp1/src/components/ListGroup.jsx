
import { MouseEvent } from "react";
function ListGroup(){
    const items = [
        'New York',
        'Kuala Lumpur',
        'Paris',
        'Shanghai',
        'Dubai'
    ]
 
    const getMessage = () => {
        // TERNARY OPERATOR 
        return items.length === 0 ? <p>No Item Found</p> : null 
        // USE && when only one outcome
    }

    function handleClick(item){
        console.log(item+" clicked");
    }

    return(
        // Empty <> signals a fragment
        <> 
            <h1>Hello!!</h1>
            {getMessage()}
            <ul className="list-group">
                {/* Dynamically adding each item to the page */}
                {items.map((item, index) => (<li key={item} 
                                    className="list-group-item"
                                    onClick={handleClick(item)}
                                    >{item}
                                    </li>))} 
                                    
            </ul>
        </>
    )
}

export default ListGroup;