"use client";
import { motion } from "framer-motion";
import Section from "@/components/Shared/Section/Section";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader";
import { Quote, Star, Linkedin } from "lucide-react";

const testimonial = {
  id: 1,
  name: "Adam Blumenfeld",
  position: "CEO at CSX Labs",
  review:
    "Mohammad always completed work on time. He's dedicated to learning and can do so autonomously. He's very respectful and diligent. It was a pleasure working with him and I wish him well for his next position!",
  rating: 5,
  avatar: "https://i.postimg.cc/bwDdxzmf/image.png",
  linkedIn: "https://linkedin.com/in/adam-blumenfeld",
  connection: "1st degree connection",
};

const Testimonials = () => {
  return (
    <Section id="testimonials" variant="bottom-right" className="py-16 sm:py-20 md:py-28" background="subtle">
      <div className="container">
        <SectionHeader
          eyebrow="Testimonials"
          title={
            <>
              What Clients <span className="text-primary">Say</span>
            </>
          }
          subtitle="Real feedback from amazing clients I've had the pleasure to work with."
        />

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/45 hover:shadow-[0_24px_50px_var(--primary-glow)] sm:rounded-3xl sm:p-8 md:p-10">
            {/* Decorative quote */}
            <span
              aria-hidden
              className="pointer-events-none absolute -top-6 right-2 select-none font-serif text-[8rem] leading-none text-primary/10 sm:text-[10rem] md:text-[12rem]"
            >
              &rdquo;
            </span>

            {/* Quote icon */}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground sm:h-14 sm:w-14">
              <Quote className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.4} />
            </div>

            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                >
                  <Star className="h-4 w-4 fill-primary text-primary sm:h-5 sm:w-5" />
                </motion.div>
              ))}
            </div>

            {/* Review */}
            <p className="mb-6 text-sm font-normal leading-relaxed text-foreground sm:text-base md:text-lg">
              &ldquo;{testimonial.review}&rdquo;
            </p>

            {/* Author */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4 sm:pt-5">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full border-2 border-primary/40 bg-background-secondary object-cover sm:h-14 sm:w-14"
                />
                <div>
                  <p className="text-sm font-bold text-foreground sm:text-base">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-primary sm:text-sm">{testimonial.position}</p>
                  <p className="text-[11px] font-medium text-muted-foreground sm:text-xs">
                    {testimonial.connection}
                  </p>
                </div>
              </div>
              <a
                href={testimonial.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${testimonial.name} on LinkedIn`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 hover:text-primary sm:h-11 sm:w-11"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Testimonials;