import { useState, useContext } from "react";
import './ProductCount.css'
// Cart Import
import CartContext from "../../context/CartContext";
// Bootstrap Import
import Container from "react-bootstrap/esm/Container";


const ProductCount = ({product}) => {
    const [cant, setCant] = useState(1)
    const {addToCart, cart} = useContext(CartContext)
    const {id, name, price, discount, src1, stock} = product
    function addCant(){
        if(cant < stock){
            setCant(prevCant => prevCant + 1)
        }
    }

    function decCant(){
        if(cant > 1){
            setCant(prevCant => prevCant - 1)
        }
    }


    return(
        <Container className="d-flex flex-column justify-content-center align-items-center">
            {stock > 0
            ?   <>
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="shrink-border" onClick={decCant}>-</button>
                        <span className="cant">{cant}</span>
                        <button className="shrink-border" onClick={addCant}>+</button>
                    </div>
                    <button className="shrink-border mb-1" onClick={() => addToCart({id, name, price, discount, src1, stock, cant}, cant, cart)}>Agregar al Carrito</button>
                </>
            : <p className="text-light">No hay stock de este producto</p>
        }
        </Container>
    )
}

export default ProductCount