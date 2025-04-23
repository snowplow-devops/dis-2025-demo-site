import { useRouter } from "next/router";
import { tracker } from "@/lib/snowplow";
import { useEffect } from "react";
import { useUserStore } from "@/store/userStore";
import { setUserId } from "@snowplow/browser-tracker";

export function PageTracker() {
  const router = useRouter();
  const userId = useUserStore((state) => state.userId);

  useEffect(() => {
    // We can store the User Id of a Logged-In User here
    // setUserId(userId);
  }, [userId]);

  useEffect(() => {
      // Automatic Pageview here

    router.events.on("routeChangeComplete", () => {
      // Automatic Pageview here
  });

    return () => {
      router.events.off("routeChangeComplete", () => {
        // Automatic Pageview here
  });
    };
  }, [router.events]);

  return null;
}
