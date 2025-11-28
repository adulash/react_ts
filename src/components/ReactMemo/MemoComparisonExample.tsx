import { useState, memo } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
};

// ProductCard بدون React.memo
function ProductCardWithoutMemo({ product }: { product: Product }) {
  console.log(`ProductCardWithoutMemo ${product.id} rendered`);
  return (
    <div className="bg-base-200 p-4 rounded">
      <h3 className="font-bold text-base-content">{product.name}</h3>
      <p className="text-base-content">${product.price}</p>
    </div>
  );
}

// ProductCard مع React.memo
const ProductCardWithMemo = memo(({ product }: { product: Product }) => {
  console.log(`ProductCardWithMemo ${product.id} rendered`);
  return (
    <div className="bg-base-200 p-4 rounded">
      <h3 className="font-bold text-base-content">{product.name}</h3>
      <p className="text-base-content">${product.price}</p>
    </div>
  );
});

ProductCardWithMemo.displayName = "ProductCardWithMemo";

export default function MemoComparisonExample() {
  const [products] = useState<Product[]>([
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Phone", price: 699 },
    { id: 3, name: "Tablet", price: 499 },
  ]);
  const [filter, setFilter] = useState<"all" | "expensive">("all");
  const [otherState, setOtherState] = useState(0);

  const filteredProducts = products.filter((p) => filter === "all" || p.price > 500);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Performance Comparison</h2>
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            className={`btn btn-sm ${filter === "all" ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setFilter("all")}>
            All Products
          </button>
          <button
            className={`btn btn-sm ${filter === "expensive" ? "btn-primary" : "btn-ghost"}`}
            onClick={() => setFilter("expensive")}>
            Expensive Only
          </button>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Filtered Count</div>
            <div className="stat-value text-base-content">{filteredProducts.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Other State</div>
            <div className="stat-value text-base-content">{otherState}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2 text-base-content">Without React.memo:</h3>
            <div className="space-y-2">
              {filteredProducts.map((product) => (
                <ProductCardWithoutMemo key={product.id} product={product} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2 text-base-content">With React.memo:</h3>
            <div className="space-y-2">
              {filteredProducts.map((product) => (
                <ProductCardWithMemo key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>

        <button className="btn btn-accent w-full" onClick={() => setOtherState(otherState + 1)}>
          Update Other State (triggers parent re-render)
        </button>

        <div className="alert alert-warning">
          <span>
            <strong>Without React.memo:</strong> All ProductCard components re-render when
            otherState changes, even though their props haven't changed.
          </span>
        </div>

        <div className="alert alert-success">
          <span>
            <strong>With React.memo:</strong> ProductCard components only re-render when their props
            actually change. Check console to see the difference.
          </span>
        </div>
      </div>
    </div>
  );
}
