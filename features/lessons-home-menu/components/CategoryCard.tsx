import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  href: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const CategoryCard: React.FC<CardProps> = ({
  href,
  title,
  description,
  imageSrc,
  imageAlt,
}) => (
  <Link href={href}>
    <div className="card h-full min-h-[160px] max-w-xs bg-base-100 border shadow-md hover:cursor-pointer hover:shadow-lg items-start">
      <div className="card-body text-left px-4 pt-2 flex flex-col gap-2">
        <div className="z-10">
          <h2 className="card-title text-xl line-clamp-1">{title}</h2>
          <p className="text-sm pr-24">
            <span className="font-base">{description}</span>
          </p>
        </div>
        <figure className="h-[150px] absolute top-2 right-0 z-0 opacity-50">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={150}
            height={150}
            className="px-3 pt-2"
          />
        </figure>
      </div>
    </div>
  </Link>
);

export default CategoryCard;
