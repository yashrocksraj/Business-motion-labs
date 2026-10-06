"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

function ScrollMedia({
  title,
  eyebrow,
  description,
  videoSrc,
}: {
  title: string;
  eyebrow: string;
  description: string;
  videoSrc: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const inView = useInView(containerRef, {
    amount: 0.15,
  });

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (inView) {
      video
        .play()
        .catch(() => {
          // Browser can occasionally delay autoplay.
        });
    } else {
      video.pause();
    }
  }, [inView]);

  return (
    <article
      ref={containerRef}
      className="group relative min-h-[78vh] overflow-hidden bg-[#071528]"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-[1400ms] group-hover:scale-[1.04] group-hover:opacity-80"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-[#071528]/35" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#071528] via-transparent to-[#071528]/10" />

      {/* Technology grid */}
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)] [background-size:70px_70px]" />

      {/* Content */}
      <div className="relative flex min-h-[78vh] flex-col justify-between p-7 text-white sm:p-12 lg:p-16">
        <div className="flex items-start justify-between">
          <span className="text-[9px] font-bold tracking-[0.25em] text-white/60">
            {eyebrow}
          </span>

          <motion.div
            animate={{
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs text-white/70"
          >
            ↗
          </motion.div>
        </div>

        <div className="max-w-5xl">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="text-5xl font-medium tracking-[-0.06em] sm:text-7xl lg:text-[7rem]"
          >
            {title}
          </motion.h3>

          <div className="mt-8 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="text-sm leading-7 text-white/65 sm:text-base">
              {description}
            </p>

            <span className="shrink-0 text-[9px] font-bold tracking-[0.2em] text-white/45">
              SCROLL TO EXPLORE ↓
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function MediaShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#f7f8f5]">
      {/* INTRO */}
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[10px] font-bold tracking-[0.25em] text-black/35">
              BUILT FOR MOVEMENT
            </p>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl text-4xl font-medium leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl"
          >
            Digital should feel
            <span className="text-black/20"> alive.</span>
          </motion.h2>
        </div>
      </div>

      {/* VIDEO 01 */}
      <ScrollMedia
        eyebrow="01 / EXPERIENCE"
        title="Digital experiences"
        description="Every interaction is an opportunity to make a business easier to discover, understand and choose."
        videoSrc="/videos/digital-experience.mp4"
      />

      {/* VIDEO 02 */}
      <ScrollMedia
        eyebrow="02 / TECHNOLOGY"
        title="Connected systems"
        description="Websites, ordering, lead capture, automation and operations working together as one system."
        videoSrc="/videos/connected-systems.mp4"
      />

      {/* CLOSING STATEMENT */}
      <div className="mx-auto max-w-[1400px] px-6 py-28 lg:px-10 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8 }}
          className="grid gap-10 lg:grid-cols-[1fr_auto]"
        >
          <p className="max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl">
            We don't just make businesses look better online.
            <span className="text-black/20">
              {" "}
              We make the digital side of the business work better.
            </span>
          </p>

          <div className="flex items-end">
            <div className="rounded-full border border-black/10 px-5 py-3 text-[10px] font-bold tracking-[0.15em] text-black/40">
              BUSINESS MOTION LABS
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}