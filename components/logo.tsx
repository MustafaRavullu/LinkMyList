import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src={"/logo.png"}
      width={100}
      height={100}
      alt="LinkMyList"
      style={{ width: "auto", height: "auto" }}
      priority
    />
  );
}
