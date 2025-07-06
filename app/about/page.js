"use client";
import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-5 text-white bg-black">
      <section className="max-w-3xl text-center space-y-6">
        <h1 className="text-5xl font-extrabold text-blue-500 tracking-tight">
          Welcome to <span className="text-white">Micro</span>
          <span className="text-blue-500">Links</span>
        </h1>

        <p className="text-lg text-gray-300">
          At <span className="text-blue-400 font-semibold">MicroLinks</span>, we believe long URLs shouldn&apos;t stand in your way.
          Whether you&apos;re sharing a project, marketing a product, or organizing your links, our platform helps you create clean,
          short, and memorable links that just work.
        </p>

        <p className="text-gray-400">
          MicroLinks is built with simplicity and performance in mind — no clutter, no ads, just pure link shortening power.
          Designed for modern users, marketers, and developers who care about link management.
        </p>

        <p className="text-gray-500">
          🔗 Create, customize, and share links in seconds. <br />
          🚀 Built with cutting-edge tech for speed and reliability. <br />
          🧠 Smart, minimal, and made for the future.
        </p>

        <div className="mt-8">
          <Link
            href="/shorten"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}
