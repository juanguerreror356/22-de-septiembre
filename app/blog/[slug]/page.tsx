import { blogPosts } from '@/lib/data';

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return <main className="section-wrap py-10">Artículo no encontrado.</main>;
  return (
    <main className="section-wrap py-10">
      <p className="text-cyan-300">{post.category}</p>
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <p className="max-w-3xl text-slate-300">Artículo demo. Aquí irá el contenido especializado SEO con CTA a funcionalidades del producto.</p>
    </main>
  );
}
