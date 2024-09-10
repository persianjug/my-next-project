import React from "react";
import styles from "./index.module.css";
import Image from "next/image";

type Props = {
  href: string;
  children: React.ReactNode;
}

export default function ButtonLink({ href, children }: Props) {
  return (
    <a href={href} className={styles.button}>
      {children}
    </a>
  );
}