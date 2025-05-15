import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

interface ArticleMeta {
  title: string;
  date: string;
  summary: string;
  image: string;
  slug: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

function getAllArticles(): ArticleMeta[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      return {
        title: data.title,
        date: data.date,
        summary: data.summary,
        image: data.image,
        slug: file.replace(/\.md$/, ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const articles = getAllArticles();
  return (
    <div className="min-h-screen bg-light-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-xs text-brown font-semibold mb-2">
                  {new Date(article.date).toLocaleDateString()}
                </span>
                <h2 className="text-xl font-bold text-neutral-900 mb-2">
                  {article.title}
                </h2>
                <p className="text-neutral-600 mb-4 flex-1">
                  {article.summary}
                </p>
                <span className="mt-auto text-brown font-semibold hover:underline">
                  Read More
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
