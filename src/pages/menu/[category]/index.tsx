import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { categories } from "../../../data";

// กำหนด array ของ category ที่ถูกต้อง
const validCategories = ["pizzas", "pastas", "burgers"] as const;
type Category = typeof validCategories[number];

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  // เช็คว่า category เป็น string และอยู่ใน validCategories หรือไม่
  const categoryParam: Category | null =
    typeof category === "string" && validCategories.includes(category as Category)
      ? (category as Category)
      : null;

  // ถ้า valid category ให้ดึงข้อมูล
  const items = categoryParam ? categories[categoryParam] : [];

  return (
    <div className="flex flex-wrap text-red-500">
      {items.length === 0 && <p className="p-4">Category not found or no items.</p>}
      {items.map((item) => (
        <Link
          className="w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group odd:bg-fuchsia-50"
          href={`/product/${item.id}`}
          key={item.id}
        >
          {/* IMAGE CONTAINER */}
          {item.img && (
            <div className="relative h-[80%]">
              <Image src={item.img} alt={item.title} fill className="object-contain" />
            </div>
          )}
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between font-bold">
            <h1 className="text-2xl uppercase p-2">{item.title}</h1>
            <h2 className="group-hover:hidden text-xl">${item.price}</h2>
            <button className="hidden group-hover:block uppercase bg-red-500 text-white p-2 rounded-md">
              Add to Cart
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
