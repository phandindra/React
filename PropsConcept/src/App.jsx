import './App.css'
import Product from './components/Product'
import ProductForm from './components/ProductForm'


function App() {
  return (
    <div className=' bg-gray-700 text-white w-full mb-5 flex flex-col  '>

     

      <Product day="3" month="Aug" year="2003"
                title="Aireal"
      ></Product>

      <Product day="22" month="June" year="2003"
                      title="yoyo"
            ></Product>

<ProductForm></ProductForm>

      <Product day="8" month="Sept" year="2003"
                      title="tide"
            ></Product>

      <Product day="5" month="jan" year="2010"
                      title="sirf excel"
            ></Product>

    </div>
  )
}

export default App
