import Link from 'next/link';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <main className="section-wrap py-10">
      <h1 className="mb-5 text-4xl font-bold">Blog MEDACCER</h1>
      <div className="space-y-3">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block rounded-xl border border-border bg-panel p-4">
            <p className="text-xs text-cyan-300">{post.category}</p>
            <h2 className="font-semibold">{post.title}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
}
