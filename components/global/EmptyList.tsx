import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  className?: string;
  heading?: string;
}

export const EmptyList = ({
  className,
  heading = "no items found",
}: IProps) => {
  return <h2 className={cn("text-xl", className)}>{heading}</h2>;
};
