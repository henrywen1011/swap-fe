import { useEffect, useRef } from "react";

const useBodyScrollLock = (isOpen: boolean) => {
  const scrollableContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;

    if (isOpen) {
      const scrollableContainer = scrollableContainerRef.current;

      if (scrollableContainer) {
        scrollableContainer.style.overflow = "hidden";
      }

      document.body.style.overflow = "hidden";
    } else {
      const scrollableContainer = scrollableContainerRef.current;

      if (scrollableContainer) {
        scrollableContainer.style.overflow = "auto";
      }

      document.body.style.overflow = originalOverflow;
    }

    // Cleanup: Re-enable scrolling on unmount or when isOpen changes
    return () => {
      const scrollableContainer = scrollableContainerRef.current;

      if (scrollableContainer) {
        scrollableContainer.style.overflow = "auto";
      }

      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return scrollableContainerRef;
};

export default useBodyScrollLock;
