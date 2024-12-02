import Menu from "@/components/Menu";
import Link from "next/link";

const Page = () => {
  return (
    <div
      style={{
        width: "100vw",
        maxWidth: "1000px",
        margin: "0 auto",
        display: "flex",
        gap: "10px",
      }}
    >
      {/* [id] */}

      <Link href={"/goods/1"}>
        <Menu
          menuname="아슈크림"
          img="https://i.namu.wiki/i/kzMFcl3KBAAY-owhXpMK2GJ4yxLDV-uQMiJzk3T1ELNo9AVIDGbmQ2CVcmUBSzfNi3T6CSFRpDmDrft7P7pxoA.webp"
        />
      </Link>
      <Link href={"/goods/2"}>
        <Menu
          menuname="와플"
          img="https://i.namu.wiki/i/c-pI0gdR59-TiOqhOvttsFSYMKS1h-kgrH9_r51CPzUH5RgDWPHB3_WSZkg1c2d2NvillD55b4Mq7Br3npqihg.webp"
        />
      </Link>
      <Link href={"/goods/3"}>
        <Menu
          menuname="케이크"
          img="https://i.namu.wiki/i/sP0VOvMOCyYzjPuXM7BDJRyE3mXqdK9bC2o5D1bT6VSxX1IGzUVpLKa8oIWxvWCzpV5d_4kHCMR2Jct3jwFILw.webp"
        />
      </Link>
    </div>
  );
};

export default Page;
