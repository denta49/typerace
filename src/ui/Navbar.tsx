"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useIdentityStore from "@/logic/stores/useIdentityStores";
import NicknameDialog from "@/ui/NicknameDialog";

import type NavbarPropsType from "@/types/uiTypes/NavbarPropsType";

const Navbar: React.FC<NavbarPropsType> = ({ title, onOpenAuth }) => {
  const { username } = useIdentityStore();

  return (
    <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4">
      {/* Left: brand/title */}
      <div className="flex items-center gap-3">
        <div
          aria-hidden
          className="h-7 w-7 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-sm"
        />
        <span className="text-base font-semibold tracking-tight">{title}</span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-muted-foreground text-sm">You:</span>
        <span className="bg-muted rounded-md px-2 py-1 text-sm font-medium">{username}</span>

        <Separator orientation="vertical" className="mx-1 h-6" />

        <NicknameDialog triggerClassName="h-8" />

        {onOpenAuth && (
          <Button size="sm" variant="outline" onClick={onOpenAuth}>
            Sign in
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
