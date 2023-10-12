"use client"

import Image from "next/image";
import Link from "next/link";
import { Icon } from '@iconify/react'

export default function Home() {
  return (
    <main className="w-full h-full fixed">
      <Image
        src="/all-of-me.jpeg"
        quality={100}
        placeholder="blur"
        blurDataURL="/all-of-me.jpeg"
        fill
        sizes="100vw"
        alt="All of Me"
        style={{ objectFit: "cover" }}
      />
      <div
        className="w-full h-full absolute flex items-center justify-center"
        style={{
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(20, 20, 20, 0.8)",
        }}
      >
        <div className="w-[50rem]">
          <article>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center w-full text-white/85">
              Upsided
            </h1>
            <p className="leading-7 [&:not(:first-child)]:my-[2rem] text-xl px-[6.3rem] text-center">
A dude who enjoys programming, Terraria, making music, and embarking on incredibly arbitrary coding projects that will never see the <span className="text-transparent bg-clip-text bg-gradient-to-t from-yellow-200 to-yellow-50">light of day</span>. I&apos;m also active on discord I guess.
            </p>
            <div className="w-full h-[10rem] flex flex-row gap-5 justify-center">
              {...([
              [<Icon key={1} icon="ic:baseline-discord" className="w-[2.5rem] h-[2.5rem]" />, 'https://discord.gg/PKCTcBPB8r'],
              [<Icon key={2} icon="mdi:youtube" className="w-[2.5rem] h-[2.5rem]" />, 'https://www.youtube.com/channel/UCDXeDbeq-Z6ngCASDZ5Dmzg'],
              [<Icon key={3} icon="mdi:github" className="w-[2.5rem] h-[2.5rem]" />, 'https://github.com/Upsidedly']
            ] as [JSX.Element, string][])
                .map((v) => <Link href={v[1]} key={v[0].key}><div
                  className="h-[5rem] w-[5rem] bg-opacity-30 hover:bg-opacity-80 bg-slate-950 duration-200 flex justify-center items-center rounded-full aspect-square">
                    {v[0]}
                </div></Link>)}
            </div>
          </article>
        </div>
      </div>
      <footer className="fixed bottom-0 flex justify-center items-center w-full h-10 border border-black/10 bg-slate-950 bg-opacity-10">
        <p className="text-slate-400">Background is the cover of Masayoshi Takanaka&apos;s compilation album <Link href="https://www.youtube.com/watch?v=BNig6xG36i4&t=53s&pp=ygUJYWxsIG9mIG1l" target="_blank" className="underline-offset-4 hover:underline font-semibold">All of Me</Link> </p>
      </footer>
    </main>
  );
}
