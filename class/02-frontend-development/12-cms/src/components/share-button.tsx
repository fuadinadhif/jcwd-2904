"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import {
  FaSquareXTwitter,
  FaSquareFacebook,
  FaSquareWhatsapp,
  FaTelegram,
  FaClipboardCheck,
} from "react-icons/fa6";
import { FaRegCopy } from "react-icons/fa";

export default function ShareButton({
  text,
  size,
  className,
}: {
  text: string;
  size: number;
  className: string;
}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const mediaList = [
    {
      icon: <FaSquareXTwitter size={size} />,
      url: `https://x.com/intent/tweet?text=${text}&url=${url}`,
    },
    {
      icon: <FaSquareFacebook size={size} />,
      url: `https://www.facebook.com/sharer/sharer.php?quote=${text}&u=${url}`,
    },
    {
      icon: <FaSquareWhatsapp size={size} />,
      url: `https://api.whatsapp.com/send?text=${text} ${url}`,
    },
    {
      icon: <FaTelegram size={size} />,
      url: `https://t.me/share/url?url=${url}&text=${text}`,
    },
  ];

  if (!url)
    return (
      <div className={className}>
        <p className={`h-[${size}px] text-center`}>Loading share button...</p>
      </div>
    );

  return (
    <div className={className}>
      <ul className="flex justify-center gap-2">
        <li>
          <ClipBoard size={size} url={url} />
        </li>
        {mediaList.map((media, index) => (
          <li key={index}>
            <Link href={media.url} target="_blank">
              {media.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ClipBoard({ size, url }: { size: number; url: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="flex gap-4">
      {copied ? (
        <FaClipboardCheck size={size} />
      ) : (
        <FaRegCopy
          className="cursor-pointer"
          onClick={() => {
            navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => {
              setCopied(false);
            }, 2000);
          }}
          size={size}
        />
      )}
    </div>
  );
}
