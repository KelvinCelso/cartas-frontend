import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variation: "primary" | "secundary";
  clasName?: string;
  to: string;
}

function Button({ text, variation, clasName, to, ...rest }: IButtonProps) {
  return (
    <Link href={to}>
      <button
        className={cn(
          `rounded-lg text-sm hover:scale-110 transition-all px-20 max-lg:px-10 py-[10px] ${
            variation === "primary"
              ? "bg-first text-white "
              : "border border-first text-first hover:bg-first hover:text-white"
          } `,
          clasName
        )}
        {...rest}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
