import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Diego Candido",
  description:
    "Artigos sobre desenvolvimento web, data engineering e projetos reais em produção. Case studies e técnicas que funcionam.",
  openGraph: {
    title: "Blog | Diego Candido",
    description:
      "Artigos sobre desenvolvimento web, data engineering e projetos reais.",
    type: "website",
    images: [
      {
        url: "https://dscs.com.br/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Blog - Diego Candido",
      },
    ],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-widest font-mono">
            Blog
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--color-text-dark)] mb-4 leading-[1.1]">
            Artigos e Case Studies
          </h1>
          <p className="text-[var(--color-text-secondary)] max-w-xl">
            Experiências reais, técnicas que funcionam e aprendizados de projetos em produção.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--color-text-secondary)]">
                Em breve, novos artigos será publicados.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="border border-[var(--color-border)] rounded-lg p-6 hover:border-[var(--color-text-dark)] transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group"
                      >
                        <h2 className="text-xl font-bold text-[var(--color-text-dark)] group-hover:text-[var(--color-accent)] transition-colors">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-sm text-[var(--color-text-secondary)] mt-1">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)]">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>•</span>
                    <span className="px-2 py-1 rounded bg-[var(--color-bg-secondary)]">
                      {post.category}
                    </span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 mt-4 text-sm font-semibold text-[var(--color-accent)] hover:gap-3 transition-all"
                  >
                    Ler mais →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
