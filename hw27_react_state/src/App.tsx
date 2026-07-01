import {products} from "./data";
import ProductCardFunction from "./ProductCardFunction";



function App() {

    return (
        <main>
            <header className="page-header">
                <p className="page-label">React + TypeScript</p>
                <h1>Product Cart</h1>

            </header>


            <div className={"product-list"}>
                {products.map(product => (
                        <ProductCardFunction key={product.id} product={product}/>
                    )
                )}
            </div>


            <footer className="page-footer">
                <p>Homework 27 · React State </p>
            </footer>
        </main>
    )
}

export default App