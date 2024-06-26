"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import ConsultorCards from "../cards/consultorCard";
import HomeHeader from "../header/HomeHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import useGetUsers from "@/hooks/usuGetUsers";

const arr = [1, 2, , 3, 4, 5, 6, 8, 9, 10, 11];

const Home = () => {
  const { users } = useGetUsers({ query: "CLIENT" });
  return (
    <section className="flex items-center justify-center  space-y-5  text-white mt-header">
      <section className="flex flex-col px-4 mt-14 mb-10 w-main">
        <div className="h-52">
          <Carousel className="z-0 ">
            <CarouselContent className="rounded-lg">
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 bg-hero-pattern rounded-lg h-52 items-center justify-center flex text-white">
                    {index + 1}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <h1 className="text-3xl mt-10 text-black font-semibold">
          Encontre os melhores <span className="text-first">consultores!</span>
        </h1>
        <p className="text-sm mb-4 text-paragraph">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quas
          odio, debitis, harum vitae, suscipit nostrum facilis modi deserunt
        </p>
        <div className="grid grid-cols-3 gap-10">
          {users.map((user, idx) => (
            <ConsultorCards
              key={idx}
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Home;
