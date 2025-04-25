"use client";
import Image from "next/image";

export default function BackgroundImage() {
  return (
    <div className="">
      <Image
        src="/assets/images/stone-bg1.jpg"
        alt="Kitchen Background"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0"></div>
    </div>
  );
}
