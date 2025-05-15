import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";
import Head from "next/head";

interface ArticleMeta {
  title: string;
  date: string;
  summary: string;
  image: string;
}

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

export async function generateStaticParams() {
  const files = fs.readdirSync(BLOG_DIR);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(BLOG_DIR, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  const meta = data as ArticleMeta;

  return (
    <>
      <Head>
        <link
          rel="canonical"
          href={`https://your-domain.com/blog/${params.slug}`}
        />
      </Head>
      <div className="min-h-screen bg-light-background px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-neutral-900 mb-2">
              {meta.title}
            </h1>
            <span className="text-sm text-brown font-semibold">
              {new Date(meta.date).toLocaleDateString()}
            </span>
          </div>
          {meta.image && (
            <div className="mb-8 flex justify-center">
              <Image
                src={meta.image}
                alt={meta.title}
                width={800}
                height={500}
                className="rounded-2xl shadow-md max-w-full h-auto"
                priority
              />
            </div>
          )}
          <article
            className="prose prose-lg max-w-none text-neutral-800"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </div>
    </>
  );
}
//for seo
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const filePath = path.join(BLOG_DIR, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return {};
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  return {
    title: data.title,
    description: data.summary,
    openGraph: {
      title: data.title,
      description: data.summary,
      images: [data.image],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.summary,
      images: [data.image],
    },
  };
}
