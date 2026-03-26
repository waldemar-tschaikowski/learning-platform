import Category from "@/types/Category";
import Link from "next/link";

export default async function Categories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories: Category[] = await res.json();

  const categoriesList = (
    <ul>
      {categories.map((c) => (
        <li key={c.id}>
          <Link href={`categories/${c.id}`}>{c.name}</Link>
        </li>
      ))}
    </ul>
  );

  return <div>{categoriesList}</div>;
}
