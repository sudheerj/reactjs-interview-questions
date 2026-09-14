import { useState } from "react";
import type { CartItem, Product } from "./types/product";
import { ProductCard } from "./components/ProductCard";
import {products} from "./data/products";
import { Cart } from "./components/Cart";
import "./App.css";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const onAddToCart = (product: Product) => {
    setCart((items) => {
      const isExisting = items.find((item) => item.id === product.id);
      if(isExisting) {
        return items.map((item) => {
          return item.id === product.id ? {...item, quantity:item.quantity + 1} : item
        });
      }

      return [...items, {...product, quantity: 1}];
    });
  }
  const onIncrement = (id: number) => {
    setCart((items) => {
      return items.map((item) => item.id === id ? {...item, quantity: item.quantity + 1} : item);
    })
  }

  const onDecrement = (id: number) => {
    setCart((items) => {
      return items.map((item) => item.id === id ? {...item, quantity: Math.max(1, item.quantity-1)} : item);
    })
  }

  const onRemove = (id: number) => {
    setCart((items) => items.filter((item) => item.id !== id));
  }

  return(
    <div className="app">
      <header>
        <h1>Shopping cart</h1>
      </header>
      <main>
        <section>
            <div className="products">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={onAddToCart}></ProductCard>
              ))}
            </div>
        </section>
              <Cart
                cart={cart}
                onIncrease={onIncrement}
                onDecrease={onDecrement}
                onRemove={onRemove}>
              </Cart>
      </main>
    </div>
  )

}