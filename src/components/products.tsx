type ProductProps = {
    productName: string;
    productPrice: number;
    onAddToCart: ()=> void;
    showButton: boolean;
}
function Product({productName, productPrice, onAddToCart, showButton} : ProductProps){
    return(<>
        <h3>Name: {productName}</h3>
        <p>Price: {productPrice}</p>
        {showButton && <button onClick={onAddToCart}>Add to cart</button>}
    </>)
}

export default Product;