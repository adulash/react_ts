import { useCallback, useState, memo, useMemo } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
};

const products: Product[] = [
  { id: 1, name: "Laptop", price: 999, category: "Electronics" },
  { id: 2, name: "Phone", price: 699, category: "Electronics" },
  { id: 3, name: "Book", price: 19, category: "Books" },
  { id: 4, name: "Tablet", price: 499, category: "Electronics" },
  { id: 5, name: "Headphones", price: 149, category: "Electronics" },
];

// ProductCard Component مع React.memo
const ProductCard = memo(
  ({ product, onAddToCart }: { product: Product; onAddToCart: (id: number) => void }) => {
    console.log(`ProductCard ${product.id} rendered`);

    return (
      <div className="card bg-base-200 shadow-md p-4">
        <h3 className="font-bold text-base-content">{product.name}</h3>
        <p className="text-sm text-base-content">${product.price}</p>
        <p className="text-xs text-base-content opacity-70">{product.category}</p>
        <button className="btn btn-sm btn-primary mt-2" onClick={() => onAddToCart(product.id)}>
          Add to Cart
        </button>
      </div>
    );
  }
);

ProductCard.displayName = "ProductCard";

export default function SearchExample() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [cart, setCart] = useState<number[]>([]);

  // ✅ useCallback - الدالة محفوظة
  const handleAddToCart = useCallback((productId: number) => {
    setCart((prev) => [...prev, productId]);
    alert(`Product ${productId} added to cart!`);
  }, []);

  // ✅ useMemo - فلترة المنتجات
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, []);

  return (
    <div className="card bg-base-300 text-base-content shadow-xl p-6">
      <h2 className="card-title text-2xl mb-4">Real World: Search & Filter</h2>
      <div className="space-y-4">
        <div>
          <label className="label">
            <span className="label-text text-base-content">Search:</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search products..."
          />
        </div>

        <div>
          <label className="label">
            <span className="label-text text-base-content">Category:</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="all">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title text-base-content">Products Found</div>
            <div className="stat-value text-base-content">{filteredProducts.length}</div>
          </div>
          <div className="stat">
            <div className="stat-title text-base-content">Cart Items</div>
            <div className="stat-value text-base-content">{cart.length}</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>

        <div className="alert alert-info">
          <span>
            <strong>Real World Benefit:</strong> When you type in search or change category,
            ProductCard components don't re-render unnecessarily because onAddToCart is memoized.
            Check console to see render logs.
          </span>
        </div>
      </div>
    </div>
  );
}
