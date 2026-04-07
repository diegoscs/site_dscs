import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post não encontrado",
    };
  }

  return {
    title: `${post.title} | Diego Candido`,
    description: post.description,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image
        ? [
            {
              url: post.image,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [
            {
              url: "https://dscs.com.br/og-blog.jpg",
              width: 1200,
              height: 630,
              alt: "Blog - Diego Candido",
            },
          ],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <article className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[var(--color-accent)] hover:gap-2 transition-all inline-flex items-center gap-1 mb-4"
          >
            ← Voltar para blog
          </Link>
          <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-widest font-mono">
            {post.category}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-dark)] mb-4 leading-[1.1]">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)] pb-6 border-b border-[var(--color-border)]">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </div>
      </article>

      {/* Content */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto prose prose-invert max-w-none">
          <div
            className="prose prose-invert prose-headings:text-[var(--color-text-dark)] prose-headings:font-bold prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline prose-strong:text-[var(--color-text-dark)] prose-code:bg-[var(--color-bg-secondary)] prose-code:text-[var(--color-accent)] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-[var(--color-bg-secondary)] prose-pre:border prose-pre:border-[var(--color-border)]"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[var(--color-text-dark)] mb-3">
            Quer discutir este artigo?
          </h2>
          <p className="text-[var(--color-text-secondary)] mb-6">
            Entre em contato via LinkedIn, GitHub ou envie um e-mail.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold bg-[var(--color-text-dark)] text-[var(--color-bg-dark)] hover:bg-white transition-colors"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </>
  );
}
