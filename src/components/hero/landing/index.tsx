"use client";

import Button from "@/components/buttons/Button";
import RoundButton from "@/components/buttons/RoundButton";
import { useRouter } from "next/navigation";
import React from "react";

const LandingHero = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center max-md:flex-col-reverse max-md:space-y-reverse max-md:space-y-5 min-h-screen p-20 px-3  space-x-5 ">
      <div className="md:w-1/2 space-y-8 max-md:space-y-4">
        <h1 className="text-6xl uppercase max-lg:text-4xl max-md:text-3xl">
          <span className="text-first">Acesse</span> a consultoria de onde{" "}
          <span className="text-first">você</span> estiver!
        </h1>
        <p className="text-xl max-lg:text-lg">
          Converse com um dos nossos profissionais por R$ 1,99/min.
        </p>
        <p className="uppercase text-sm text-paragraph">
          registe-se na aplicação como
        </p>
        <div className="flex space-x-5">
          <Button text="Cliente" variation="primary" to={"/auth?tab=client"} />
          <Button
            text="Consultor"
            variation="secundary"
            to={"/auth?tab=consultor"}
          />
        </div>
      </div>
      <div className="w-[450px] h-[450px] max-lg:w-[350px] max-lg:h-[350px] flex items-center justify-center bg-pink-100 rounded-full overflow-hidden max-md:w-[250px] max-md:h-[250px]">
        <img
          src="/landing.png"
          width={300}
          height={500}
          alt="surprised woman"
          className="object-cover max-lg:w-[230px] max-md:w-[160px]"
        />
      </div>
    </div>
  );
};

export default LandingHero;
