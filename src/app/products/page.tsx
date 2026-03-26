import Product from "@/types/Product";
import next from "next";
import Link from "next/link";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 60 }, //ISR
  });

  const products: Product[] = await res.json();

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
