
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
  className?: string;
}

export function ProductCard({ title, price, image, className }: ProductCardProps) {
  return (
    <div className={cn("group relative rounded-lg overflow-hidden bg-white shadow-md transition-all duration-300 hover:shadow-lg", className)}>
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold text-purple-600">${price}</p>
          <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
