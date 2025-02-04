import React from "react";

export default function LinkSocial({ href, src }) {
  return (
    <a href={href} target="_blank">
      <img src={src} className="w-[35px]" />
    </a>
  );
}
