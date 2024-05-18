import { useEffect } from "react";

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title || "Taylor Dashboard";
    return () => {
      document.title = "Taylor Dashboard";
    };
  }, [title]);
  return null;
}
