import Link from "next/link";

export function BlogCard({ title, description, className, id }: any) {
  return (
    <Link href={`/blogs/${id}`}>
      <a
        className={`${className} 
          group w-100 border  
          border-white 
          text-left 
          p-5 rounded-md  
          transition-all hover:bg-white 
          hover:shadow-xl hover:ease-in-out duration-300 hover:scale-105
        dark:shadow-white/20
    `}
      >
        <p
          className="text-black text-xl dark:group-hover:text-black 
        dark:text-white transition-all duration-300"
        >
          {title}
        </p>
        <p
          className="text-gray-600 dark:text-gray-400 
        dark:group-hover:text-gray-600 text-md transition-all duration-300"
        >
          {description}
        </p>
      </a>
    </Link>
  );
}
