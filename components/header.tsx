import React from "react";
import Logo from "./logo";
import LinkerButton from "./linker-button";
import { ModeToggle } from "./mode-toogle";
import MaxWidthWrapper from "./max-width-wrapper";

export default function Header() {
  return (
    <header className="h-20">
      <MaxWidthWrapper className="flex items-center justify-between h-full">
        <Logo />
        <div className="flex gap-3 items-center">
          <LinkerButton />
          <ModeToggle />
        </div>
      </MaxWidthWrapper>
    </header>
  );
}
