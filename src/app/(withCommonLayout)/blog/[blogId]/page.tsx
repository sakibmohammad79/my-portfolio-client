"use client";
import { useGetSingleBlogQuery } from "@/redux/api/blogApi";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowLeft, FileText, Calendar, User, Share2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const Page = ({ params }: any) => {
  const { blogId } = params;
  const { data } = useGetSingleBlogQuery(blogId);
  const router = useRouter();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: data?.title,
        text: data?.description || "Check out this amazing blog post!",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "Recent";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const calculateReadTime = (content: string) => {
    if (!content) return "5 min read";
    const wordsPerMinute = 200;
    const textLength = content.replace(/<[^>]*>/g, "").split(" ").length;
    const readTime = Math.ceil(textLength / wordsPerMinute);
    return `${readTime} min read`;
  };

  const ghostButtonClass =
    "inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-2 py-1.5 text-sm font-semibold text-muted-foreground backdrop-blur-md transition-all duration-300 hover:border-primary/45 hover:text-primary sm:px-3 sm:py-2 sm:text-[15px]";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 25%, var(--primary-softer) 0%, transparent 50%), radial-gradient(circle at 75% 75%, oklch(28% 0.05 290 / 0.16) 0%, transparent 50%)",
        }}
      />

      <div className="relative z-[1] mx-auto w-full max-w-none px-2 py-10 sm:px-3 md:px-4 md:py-16">
        <div className="mx-auto w-full max-w-[800px] px-1 sm:px-2">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <button onClick={() => router.back()} className={ghostButtonClass}>
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </button>
              <button onClick={handleShare} className={ghostButtonClass}>
                <Share2 className="h-4 w-4" />
                Share
              </button>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={slideInLeft}>
              <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_40px_rgba(0,0,0,0.3)] backdrop-blur-xl">
                <motion.div variants={slideInLeft}>
                  <div className="relative h-[250px] w-full overflow-hidden sm:h-[300px] md:h-[400px]">
                    <Image
                      src={data?.image || "/placeholder-blog.jpg"}
                      alt={data?.title || "Blog Image"}
                      fill
                      className="object-cover"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px]"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 0%, var(--card) 100%)",
                      }}
                    />

                    <div className="absolute left-4 top-4 z-[2] sm:left-6 sm:top-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/45 bg-background/85 px-3 py-1 text-sm font-semibold text-primary backdrop-blur-md">
                        <FileText className="h-4 w-4" />
                        {data?.name || "Article"}
                      </span>
                    </div>
                  </div>
                </motion.div>

                <div className="relative z-[2] p-3 sm:p-4 md:p-6">
                  <motion.div variants={slideInRight}>
                    <h1 className="mb-2 text-[1.75rem] font-extrabold leading-tight tracking-tight text-foreground sm:mb-3 sm:text-[2.2rem] md:text-[2.8rem]">
                      {data?.title}
                    </h1>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="mb-3 flex flex-wrap gap-2 border-b border-border pb-2 sm:mb-4 sm:gap-3 sm:pb-3">
                      <div className="flex items-center gap-1">
                        <User className="h-5 w-5 text-primary" />
                        <span className="text-[13px] font-medium text-muted-foreground sm:text-sm">
                          Md. Sakib
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-[13px] font-medium text-muted-foreground sm:text-sm">
                          {formatDate(data?.publishedAt || data?.createdAt)}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <span className="text-[13px] font-medium text-muted-foreground sm:text-sm">
                          {calculateReadTime(data?.content || "")}
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    {data?.content ? (
                      <div
                        className="prose-dark"
                        dangerouslySetInnerHTML={{ __html: data.content }}
                      />
                    ) : (
                      <p className="py-4 text-center text-base italic text-muted-foreground sm:py-6 sm:text-lg">
                        Blog content is loading...
                      </p>
                    )}
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <div className="my-4 sm:my-6" style={{ background: "linear-gradient(90deg, transparent, var(--border), transparent)" }}>
                      <div className="h-px w-full" />
                    </div>

                    <div className="text-center">
                      <p className="mb-2 text-sm text-muted-foreground sm:mb-3 sm:text-[15px]">
                        Thank you for reading! Share this article if you found it helpful.
                      </p>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <button
                          onClick={handleShare}
                          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-bold text-primary-foreground shadow-[0_12px_35px_var(--primary-glow)] transition-all duration-300 hover:bg-primary-light sm:px-4 sm:py-2.5 sm:text-base"
                        >
                          <Share2 className="h-4 w-4" />
                          Share Article
                        </button>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Page;