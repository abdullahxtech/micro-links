"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                seturl("")
                setshorturl("")
                // console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    const copyClipboard = async () => {
        try {
            if (navigator?.clipboard) {
                await navigator.clipboard.writeText(generated);
                alert("Copied to clipboard!");
            } else {
                alert("Clipboard API not supported.");
            }
        } catch (err) {
            console.error("Copy failed", err);
        }
    };



    return (
        <section className="flex justify-center items-center h-[70vh] w-full text-xl">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-3">
                    <input className="md:px-10 py-3 rounded-lg text-white outline-none border-2 border-white md:w-150 w-[95vw] m-1 px-3" value={url} onChange={(e) => seturl(e.target.value)} type="text" placeholder="Enter URL: " />
                    <input className="md:px-10 py-3 rounded-lg text-white outline-none border-2 border-white md:w-150 w-[95vw] m-1 px-3" value={shorturl} onChange={(e) => setshorturl(e.target.value)} type="text" placeholder="Enter Short URL: " />
                    <button className="bg-green-600 border-none font-bold text-white px-5 py-3 rounded-full" onClick={generate}>Generate</button>
                </div>
                <div className="md:m-10 mt-5 md:text-2xl bg-white md:p-3 py-1 md:px-15 px-4 md:w-fit w-[95vw] flex md:flex-row flex-col justify-around container mx-auto items-center gap-3 rounded-lg overflow-y-hidden">
                    <span className="font-bold">Your Short Link: </span>
                    <code className="flex justify-center items-center gap-3 text-sky-600 hover:font-bold">
                        {generated ? <Link target="_blank" className="underline" href={generated}>{generated}</Link> : <span>...</span>}
                        <Image onClick={copyClipboard} alt="copy short url" src="/copy.gif" width={30} height={30} />
                    </code>
                </div>
            </div>
        </section>
    )
}

export default Page

export const metadata = {
  title: "MicroLinks - Short URL Generator",
  description: "MicroLinks create your url into short urls",
};