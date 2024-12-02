"use client";

import Menu from "@/components/Menu";
import MenuButton from "@/components/MenuButton";
import Menucc from "@/components/Menucc";
import Link from "next/link";
import { useState } from "react";

const Page = async () => {
  const data = await fetch("https://api.sampleapis.com/coffee/hot").then(
    (response) => response.json()
  );

  return (
    <>
      <section
        style={{
          width: "100vw",
          maxWidth: "1040px",
          margin: "0 auto",
          paddingTop: "80px",
        }}
      >
        <Menucc />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "15px",
          }}
        >
          {data.map((v, i) => (
            <Link href={`/menu/${i}`}>
              <Menu key={i} img={v.image} menuname={v.title} />
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Page;
