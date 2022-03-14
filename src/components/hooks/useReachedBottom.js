import { useEffect } from "react";

function useReachedBottom(hasMorePages, fetchMoreMedia) {
  useEffect(() => {
    window.addEventListener("scroll", fetchMoreMedia);
    return () => window.removeEventListener("scroll", fetchMoreMedia);
  }, []);

  return null;
}

export default useReachedBottom;
