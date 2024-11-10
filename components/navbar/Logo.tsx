import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { VscCode } from "react-icons/vsc";

const Logo = () => {
  return (
    <Button size="icon">
      <Link href="/">
        <VscCode className="w-9 h-9" />
      </Link>
    </Button>
  );
};

export default Logo;
