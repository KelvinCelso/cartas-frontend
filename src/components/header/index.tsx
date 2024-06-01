"use client";
import React from "react";
import RoundButton from "../buttons/RoundButton";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Layers } from "lucide-react";
import { Separator } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  return (
    <div className="w-full flex justify-between items-center py-[12px] px-8 text-sm fixed  bg-white border-b-first shadow-md">
      <div>
        <p className="text-xl">
          <span className="text-first">Ciganos</span> Encantados
        </p>
      </div>
      <div className="flex space-x-5  text-first max-xl:hidden">
        <p className="underline-animation cursor-pointer">Como funciona</p>
        <p className="underline-animation cursor-pointer">Sobre nós</p>
        <p className="underline-animation cursor-pointer">Consultores online</p>
        <p className="underline-animation cursor-pointer">
          Perguntas Frequentes
        </p>
        <p className="underline-animation cursor-pointer">Preços</p>
      </div>
      <div className="flex items-center space-x-4 xl:hidden">
        <div className="max-sm:hidden">
          <Link href={"/auth"}>
            <RoundButton
              text="Entrar"
              variation="primary"
              px={"40px"}
              py={"10px"}
            />
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Layers />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-5">
            <DropdownMenuItem className="cursor-pointer">
              Como funciona
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Sobre nós
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Consultores online
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Perguntas Frequentes
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Preços
            </DropdownMenuItem>
            <DropdownMenuSeparator className="sm:hidden" />
            <Link href={"/auth"}>
              <DropdownMenuItem className="cursor-pointer sm:hidden">
                Entrar
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Header;
