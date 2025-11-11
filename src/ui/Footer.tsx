"use client";

import React from "react";

import type FooterPropsType from "@/types/uiTypes/FooterPropsType";

const Footer: React.FC<FooterPropsType> = ({ text }) => {
  return (
    <footer className="border-t">
      <div className="text-muted-foreground mx-auto flex h-14 w-full max-w-4xl items-center justify-between px-4 text-sm">
        <span>{text}</span>

        <nav aria-label="Footer links" className="hidden gap-3 sm:flex">
          <a href="#" className="hover:text-foreground transition-colors">
            Privacy policy
          </a>
          <span aria-hidden>•</span>
          <a
            href="https://github.com/denta49/typerace-tonik"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
