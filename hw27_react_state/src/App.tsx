import {products} from "./data";
import ProductCartFunction from "./ProductCartFunction";
import CartSummaryFunction from "./CartSummaryFunction";
import ProductCartClass from "./ProductCartClass";
import CartSummaryClass from "./CartSummaryClass";
import {useState} from "react";


function App() {
    const [cartCounts, setCartCounts] = useState<Record<number, number>>({})
    const [cartClassCounts, setClassCartCounts] = useState<Record<number, number>>({})

    const handleFunctionIncrease = (id: number) => {
        setCartCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1
        }))
    }

    const handleFunctionDecrease = (id: number) => {
        setCartCounts((prevCounts) => {
            const currentCount = prevCounts[id] || 0;
            if (currentCount <=0) return prevCounts

            return  {
                ...prevCounts,
                [id]: currentCount - 1
            }
        })
    }

    const totalFunctionQuantity = products.reduce((acc, product) => {
        const count = cartCounts[product.id] || 0
        return acc + count
    }, 0)

    const totalFunctionPrice = products.reduce((acc, product) => {
        const count = cartCounts[product.id] || 0
        return acc + count * product.price
    }, 0)

    const handleFunctionReset = () => {
        setCartCounts({})
    }

    const handleClassIncrease = (id: number) => {
        setClassCartCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 0) + 1
        }))
    }

    const handleClassDecrease = (id: number) => {
        setClassCartCounts((prevCounts) => {
            const currentCount = prevCounts[id] || 0;
            if (currentCount <=0) return prevCounts

            return  {
                ...prevCounts,
                [id]: currentCount - 1
            }
        })
    }

    const totalClassQuantity = products.reduce((acc, product) => {
        const count = cartClassCounts[product.id] || 0
        return acc + count
    }, 0)

    const totalClassPrice = products.reduce((acc, product) => {
        const count = cartClassCounts[product.id] || 0
        return acc + count * product.price
    }, 0)

    const handleClassReset = () => {
        setClassCartCounts({})
    }

    return (
        <main>
            <header className="page-header">
                <p className="page-label">React + TypeScript</p>
                <h1>Product Cart</h1>

            </header>


            <div className={"product-list"}>
                {products.map(product => (
                        <ProductCartFunction
                            key={product.id}
                            product={product}
                            count={cartCounts[product.id] || 0}
                            onIncrease={() => handleFunctionIncrease(product.id)}
                            onDecrease={() => handleFunctionDecrease(product.id)}
                        />
                    )
                )}
            </div>

            <CartSummaryFunction
                totalQuantity={totalFunctionQuantity}
                totalPrice={totalFunctionPrice}
            />
            <button onClick={handleFunctionReset}>Reset</button>

            <div className={"product-list"}>
                {products.map(product => (
                        <ProductCartClass
                            key={product.id}
                            product={product}
                            count={cartClassCounts[product.id] || 0}
                            onIncrease={() => handleClassIncrease(product.id)}
                            onDecrease={() => handleClassDecrease(product.id)}
                        />
                    )
                )}
            </div>

            <CartSummaryClass
                totalQuantity={totalClassQuantity}
                totalPrice={totalClassPrice}
            />

            <button onClick={handleClassReset}>Reset</button>

            <footer className="page-footer">
                <p>Homework 27 · React State </p>
            </footer>
        </main>
    )
}

export default App