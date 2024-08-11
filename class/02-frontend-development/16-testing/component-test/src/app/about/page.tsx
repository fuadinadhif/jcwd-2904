import { useEffect, useState, useRef } from "react";

export default function About(props) {
  const headerRef = useRef();

  return <h1 ref={headerRef}></h1>;
}
