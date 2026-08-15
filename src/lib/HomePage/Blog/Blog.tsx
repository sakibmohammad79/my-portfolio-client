"use client";
import { useGetAllBlogQuery } from "@/redux/api/blogApi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { ArrowRight, FileText } from "lucide-react";

const defaultBlogs = [
  {
    id: "1",
    title: "Mastering Full-Stack TypeScript with Next.js 14 & Prisma",
    name: "Full Stack",
    publishedAt: "2025-01-15T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Designing Scalable REST APIs: Architecture & Security Patterns",
    name: "Backend",
    publishedAt: "2025-01-28T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Optimizing PostgreSQL Database Queries in Production Node.js",
    name: "Database",
    publishedAt: "2025-02-10T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1000&auto=format&fit=crop",
  },
];

const Blog = () => {
  const { data } = useGetAllBlogQuery({});
  const blogList = data && data.length > 0 ? data : defaultBlogs;

  return (
    <Section id="blog" className="py-16 sm:py-20 md:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="Blog"
          title={
            <>
              My <span className="text-primary">Writings</span>
            </>
          }
          subtitle="Insights, tutorials, and thoughts on modern web development."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogList.map((blog: any, index: number) => (
            <motion.div
              key={blog.id}
              className="h-full"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.4) }}
              whileHover={{ y: -4 }}
            >
              <Link
                href={`/blog/${blog.id}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/45 hover:shadow-[0_20px_45px_var(--primary-glow)]"
              >
                {/* Image */}
                <div className="relative h-[210px] w-full overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 250, damping: 26 }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={blog?.image}
                      alt={blog?.title || "Blog post"}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="block object-cover"
                    />
                  </motion.div>
                  <span className="absolute left-3 top-3 z-[2] rounded-full border border-primary/40 bg-background/85 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.06em] text-primary backdrop-blur-md">
                    {blog?.name || "Technology"}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4 sm:p-5">
                  <h3 className="mb-3 flex-1 text-base font-bold leading-snug text-foreground transition-colors duration-300 group-hover:text-primary sm:text-[17px] md:text-lg">
                    {blog?.title}
                  </h3>

                  <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-3">
                    <span className="text-xs text-muted-foreground sm:text-[13px]">
                      {blog?.publishedAt
                        ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })
                        : "Recent"}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-primary transition-all duration-300 group-hover:gap-1.5 sm:text-sm">
                      Read More <ArrowRight className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Blog;