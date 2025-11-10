"use client";
import React, { FunctionComponent } from "react";

import { Button } from "@/components/ui/button";
import NavbarPropsType from "@/types/NavbarPropsType";

const Navbar: FunctionComponent<NavbarPropsType> = ({ title, username, onOpenAuth }) => {
  return (
    <nav className="flex h-16 w-full items-center bg-gray-800 px-4 text-white">
      {title}
      {username ?? ""}
      <Button onClick={onOpenAuth}>Login</Button>
      <Button onClick={onOpenAuth}>Register</Button>
    </nav>
  );
};

export default Navbar;
