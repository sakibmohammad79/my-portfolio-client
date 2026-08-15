"use client";
import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Github, Mail, Phone, MapPin, Send, ArrowRight, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useAddContactMutation } from "@/redux/api/contact";
import Section from "@/components/Shared/Section/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const [addContact, { isLoading }] = useAddContactMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Name must be less than 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    } else if (formData.subject.trim().length > 100) {
      newErrors.subject = "Subject must be less than 100 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Message must be less than 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await addContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
      }).unwrap();

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
      setSubmitMessage("Thank you for your message! I'll get back to you soon.");
    } catch (err: any) {
      setSubmitStatus("error");
      setSubmitMessage(err?.data?.message || "Failed to send message. Please try again.");
    }
  };

  useEffect(() => {
    if (submitStatus !== "idle") {
      const timer = setTimeout(() => {
        setSubmitStatus("idle");
        setSubmitMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/md-sakib79/" },
    { name: "GitHub", icon: Github, url: "https://github.com/sakibmohammad79" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/profile.php?id=100011373134077" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/md_sakib75/" },
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "(+880) 1870584779", href: "tel:+8801870584779" },
    { icon: Mail, label: "Email", value: "mohammadsakib7679@gmail.com", href: "mailto:mohammadsakib7679@gmail.com" },
    { icon: MapPin, label: "Location", value: "Chattogram, Bangladesh", href: "#" },
  ];

  return (
    <Section id="contact" variant="top-left" className="py-16 sm:py-20 md:py-28">
      <div className="container">
        {/* Strong final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="relative px-2 py-4 text-center md:py-6">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[90%] -translate-x-1/2 -translate-y-1/2 opacity-50 blur-[30px] md:w-[500px]"
              style={{
                background: "radial-gradient(ellipse at center, var(--primary-glow) 0%, transparent 70%)",
              }}
            />
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground sm:text-[13px]">
              Contact
            </p>
            <h2 className="relative text-2xl font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
              Let&apos;s build something{" "}
              <span className="text-primary">together.</span>
            </h2>
            <p className="relative mx-auto mt-2.5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Have a project in mind? Let&apos;s discuss your next idea and create something amazing.
            </p>
          </div>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 items-stretch gap-6 md:mt-12 lg:grid-cols-12 lg:gap-8">
          {/* Contact info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full"
            >
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-6 md:p-8">
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    Contact Info
                  </p>

                  <div className="flex flex-col gap-3">
                    {contactInfo.map((info, index) => {
                      const Comp = info.href !== "#" ? "a" : "div";
                      return (
                        <Comp
                          key={index}
                          href={info.href !== "#" ? info.href : undefined}
                          className="flex items-center gap-3.5 rounded-xl border border-border bg-background-secondary p-3 text-left transition-all duration-300 hover:translate-x-1 hover:border-primary/45 hover:bg-primary/10 sm:p-3.5"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground sm:h-11 sm:w-11">
                            <info.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-muted-foreground sm:text-[11px]">
                              {info.label}
                            </p>
                            <p className="text-xs font-medium break-all text-foreground sm:text-sm md:text-[15px]">
                              {info.value}
                            </p>
                          </div>
                        </Comp>
                      );
                    })}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60">
                  <p className="mb-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                    Find Me On
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background-secondary text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:bg-primary/10 hover:text-primary sm:h-11 sm:w-11"
                      >
                        <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full"
            >
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 sm:rounded-3xl sm:p-6 md:p-8">
                <h3 className="mb-1 text-lg font-bold text-foreground sm:text-xl md:text-2xl">
                  Send Me A Message
                </h3>
                <p className="mb-5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>

                {submitStatus === "success" && (
                  <Alert variant="success" className="mb-4">
                    <AlertTitle>Success</AlertTitle>
                    <AlertDescription>{submitMessage}</AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{submitMessage}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-xs sm:text-sm">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        disabled={isLoading}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-xs font-medium text-destructive">{errors.name}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-xs sm:text-sm">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        disabled={isLoading}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-xs font-medium text-destructive">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <Label htmlFor="subject" className="text-xs sm:text-sm">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        disabled={isLoading}
                        aria-invalid={!!errors.subject}
                      />
                      {errors.subject && (
                        <p className="text-xs font-medium text-destructive">{errors.subject}</p>
                      )}
                    </div>

                    <div className="space-y-1.5 sm:col-span-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="message" className="text-xs sm:text-sm">Your Message</Label>
                        <span className="text-xs text-muted-foreground">
                          {formData.message.length}/1000
                        </span>
                      </div>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={5}
                        disabled={isLoading}
                        aria-invalid={!!errors.message}
                      />
                      {errors.message && (
                        <p className="text-xs font-medium text-destructive">{errors.message}</p>
                      )}
                    </div>

                    <div className="sm:col-span-2 pt-1">
                      <motion.div whileHover={{ y: isLoading ? 0 : -2 }} whileTap={{ scale: isLoading ? 1 : 0.99 }}>
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_28px_var(--primary-glow)] transition-all duration-300 hover:bg-primary-light disabled:cursor-not-allowed disabled:bg-primary-dark sm:py-3.5 sm:text-base"
                        >
                          {isLoading ? (
                            <>
                              Sending...
                              <Loader2 className="h-4 w-4 animate-spin" />
                            </>
                          ) : (
                            <>
                              Send Message
                              <Send className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="mt-8 text-center md:mt-12">
            <a
              href="mailto:mohammadsakib7679@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-[0_12px_30px_var(--primary-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-light sm:px-7 sm:py-3.5 sm:text-base"
            >
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;