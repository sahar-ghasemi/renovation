import fs from "fs";
import path from "path";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");
const baseUrl = "https://your-domain.com"; // TODO: Replace with your real domain

export async function GET() {
  // Blog posts
  const files = fs.readdirSync(BLOG_DIR);
  const blogUrls = files
    .filter((file) => file.endsWith(".md"))
    .map(
      (file) =>
        `<url><loc>${baseUrl}/blog/${file.replace(/\.md$/, "")}</loc></url>`
    );

  // Static pages
  const staticUrls = ["", "/about", "/stones", "/blog", "/contact"].map(
    (route) => `<url><loc>${baseUrl}${route}</loc></url>`
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...blogUrls].join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
