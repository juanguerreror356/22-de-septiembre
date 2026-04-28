import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Card } from '@/components/ui/card';

export function BlogPreview() {
  return (
    <section id="blog" className="section-wrap py-12">
      <h2 className="mb-4 text-3xl font-bold">Blog por especialidad</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card>
              <p className="text-xs text-cyan-300">{post.category}</p>
              <h3 className="mt-2 text-sm font-semibold">{post.title}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
