"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework that enables server-side rendering and static site generation, making apps faster and more SEO-friendly.",
    },
    {
      question: "Is Next.js free to use?",
      answer: "Yes, it’s open-source and available under the MIT license.",
    },
    {
      question: "How do I deploy a Next.js app?",
      answer:
        "You can deploy on any platform that supports Node.js. Vercel offers seamless integration and is built by the creators of Next.js.",
    },
  ];

  const features = [
    {
      title: "Unlimited ad-free videos",
      description:
        "Immerse in more of your favorite videos without waiting for ads. Find helpful how-to’s, try new recipes, or work out with your favorite creators — all without any interruptions.",
      image: "/feature1.png",
      reverse: false,
    },
    {
      title: "Enjoy videos offline",
      description:
        "Watch anytime, anywhere — download videos and watch them whenever, wherever, without the need for cell data or WiFi.",
      image: "/feature2.png",
      reverse: true,
    },
    {
      title: "Background play",
      description:
        "Keep watching—whether the screen’s off or you’re using other apps, you can continue playing your videos in the background with zero interruptions.",
      image: "/feature3.png",
      reverse: false,
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white dark:bg-black text-black dark:text-white font-geist-sans">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex justify-center items-center px-6 sm:px-10">
        <div className="max-w-5xl w-full text-center space-y-12">
          <div className="space-y-6">
            <Image
              className="mx-auto dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={180}
              height={38}
              priority
            />
            <h1 className="text-3xl sm:text-4xl font-bold pt-5">
              Build faster with Next.js
            </h1>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
              A minimal, production-ready framework for React — with built-in
              routing, server-side rendering, and great developer experience.
            </p>
            <a
              className="inline-block bg-black dark:bg-white text-white dark:text-black rounded-full px-8 py-4 text-base sm:text-lg font-medium hover:opacity-80 transition"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-left mt-10 pt-10">
            {["Blazing Fast", "Developer Friendly", "Hybrid Rendering"].map(
              (title, i) => (
                <div
                  key={title}
                  className="flex flex-col items-center sm:items-start"
                >
                  <Image
                    src="/window.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="mb-2 dark:invert"
                  />
                  <h3 className="text-lg font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {
                      [
                        "Optimized performance out of the box with smart bundling and SSR.",
                        "Built-in TypeScript, ESLint, and flexible file-based routing.",
                        "Use static generation, server rendering, or both on a per-page basis.",
                      ][i]
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-6 sm:px-10 py-20">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Keep playing what you love—uninterrupted
          </h2>

          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row ${
                feature.reverse ? "sm:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="sm:w-1/2 text-center sm:text-left">
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>

              <div className="sm:w-1/2 flex justify-center">
                <Image
                  src="/window.svg"
                  alt={feature.title}
                  width={300}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full px-6 sm:px-10 py-20">
        <div className="w-full max-w-2xl bg-gray-100 dark:bg-gray-900 rounded-xl p-8 text-center mx-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
            Jumpstart your next project with Next.js and experience the power of
            full-stack flexibility.
          </p>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black dark:bg-white text-white dark:text-black rounded-full px-8 py-4 text-base sm:text-lg font-medium hover:opacity-80 transition"
          >
            Deploy Now
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-6 sm:px-10 py-20">
        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center">
            FAQ
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 dark:border-gray-700 pb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex justify-between items-center text-base sm:text-lg font-medium"
                >
                  {faq.question}
                  <span className="ml-2 text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>

                {openIndex === index && (
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
