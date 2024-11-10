import React from "react";
import { Input } from "../ui/input";

export const NavSearch = () => {
  return (
    <Input
      type="search"
      placeholder="search priduct..."
      className="max-w-xs dark:bg-muted"
    ></Input>
  );
};
