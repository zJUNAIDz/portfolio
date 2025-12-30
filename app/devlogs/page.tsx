import DevlogPathTracker from "@/components/devlog-tracker";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllPosts } from "@/lib/mdx";
import { format } from "date-fns";
import Link from "next/link";

export const metadata = {
  title: "Devlogs | Junaid Shaikh",
  description: "Progress Dump.",
};

export default function DevlogPage() {
  const posts = getAllPosts(["title", "date", "slug", "tags"]);
  return (
    <main className="container mx-auto px-4 py-24 min-h-screen">
      <DevlogPathTracker />
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/devlogs/${post.slug}`}>
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                    <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">
                      {post.date ? format(new Date(post.date), "MMMM d, yyyy") : ""}
                    </span>
                  </div>
                  <CardDescription className="flex gap-2 mt-2">
                    {post.tags &&
                      (post.tags as unknown as string[]).map((tag) => (
                        <span
                          key={tag}
                          className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                  </CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
