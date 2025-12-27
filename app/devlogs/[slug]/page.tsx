import { getPostBySlug, getPostSlugs } from "@/lib/mdx";
import { format } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getPostSlugs();
  return posts.map((post) => ({
    slug: post.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, ["title", "date", "tags"]);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Junaid Shaikh`,
    description: `Read about ${post.title}`,
  };
}

export default async function DevlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug, ["title", "date", "slug", "content", "tags"]);

  if (!post.slug) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/devlogs"
          className="text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
        >
          &larr; Back to List
        </Link>

        <article className="prose prose-neutral dark:prose-invert max-w-none">
          <div className="mb-8 not-prose">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex gap-4 items-center text-muted-foreground">
              <time dateTime={post.date}>
                {post.date ? format(new Date(post.date), "MMMM d, yyyy") : ""}
              </time>
              <div className="flex gap-2">
                {post.tags &&
                  (post.tags as unknown as string[]).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md text-xs"
                    >
                      {tag}
                    </span>
                  ))}
              </div>
            </div>
          </div>
          <MDXRemote source={post.content} />
        </article>
      </div>
    </main>
  );
}
