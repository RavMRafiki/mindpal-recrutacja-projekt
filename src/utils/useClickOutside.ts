import { useEffect, type RefObject } from "react";

export function useClickOutside(
  ref: RefObject<HTMLElement | null>,
  onOutsideClick: () => void,
  enabled: boolean,
) {
  useEffect(() => {
    if (!enabled) return;
    if (!ref.current) return;

    function handlePointerDown(event: PointerEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onOutsideClick();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onOutsideClick();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);
}
