import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
}

export default function BrandLogo({
  className = "",
  variant = "light",
  showTagline = false,
}: BrandLogoProps) {
  const isDark = variant === "dark";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0647B9] rounded-lg p-0.5 transition-all ${className}`}
      aria-label="CRIICO Corporate Home"
    >
      {/* Actual Uploaded CRIICO Official Logo */}
      <div
        className={`relative flex items-center justify-center transition-transform duration-200 group-hover:scale-105 ${
          isDark
            ? "bg-white p-1 rounded-lg shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Image
          src="/criico-logo.png"
          alt="CRIICO Official Logo"
          width={160}
          height={84}
          className="object-contain w-auto h-12 sm:h-14"
          priority
        />
      </div>

      <div className="flex flex-col justify-center">
        <span
          className={`font-black tracking-tight text-xl sm:text-2xl leading-none flex items-center transition-colors ${
            isDark ? "text-white" : "text-[#0B1F49]"
          }`}
        >
          CRIICO
        </span>
        {showTagline && (
          <span
            className={`text-[10px] uppercase font-bold tracking-widest mt-1 ${
              isDark ? "text-slate-300" : "text-[#0647B9]"
            }`}
          >
            Nepal Sports Tech
          </span>
        )}
      </div>
    </Link>
  );
}
