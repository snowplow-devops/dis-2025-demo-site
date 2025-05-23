import Link from "next/link";
import styles from "./index.module.scss";
import { Recommendations } from "../recommendations";
import Image from "next/image";
import { mockProducts } from "@/mocks/products";
import { useEffect, useMemo } from "react";

const randomProduct =
  mockProducts[Math.floor(Math.random() * mockProducts.length)];

export function Home() {
  const bannerTitle = "Shoes offers this week!";

  const promoObject = useMemo(
    () => ({
      id: "promo_123",
      name: "promo_offers_weekly",
      type: "banner",
      slot: "home_hero",
      product_ids: [randomProduct.id],
    }),
    []
  );

  function handleBannerClick() {

  }

  useEffect(() => {

  }, [promoObject]);


  function sendYourOwnEvent() {
      // Send your own event
      alert('You\'re sending your own custom event');
  }

  return (
    <>
      <div className={styles.title}>
        <h1>Snowplow shoes</h1>
        <p>For best performing analysts</p>
        <Link href={"#"} onClick={sendYourOwnEvent}>Get your own Snowplow Event!</Link>

      </div>
      <div className={styles.bannerContainer}>
        <h2>{bannerTitle}</h2>
        <Link href={`/product/${randomProduct.id}`} onClick={handleBannerClick}>
          <Image
            alt="shoe"
            height={320}
            width={250}
            src={randomProduct.imgSrc}
          ></Image>
        </Link>
        <div className={styles.banner}></div>
      </div>
      <Recommendations
        containerClass={styles.noPadding}
        title="Top this week"
      />
      <Recommendations containerClass={styles.noPadding} title="New series" />
    </>
  );
}
