import './App.css'
import Product from './components/products'




function App() {

  function add(a:number, b:number):number{
    return a +b;
  }
  console.log(add(5, 3));
  
  return (
    <>
    
    <Product productName="Wireless Mouse" productPrice={40} onAddToCart={()=>{}} showButton={true}/>
    </>
  )
}

export default App
