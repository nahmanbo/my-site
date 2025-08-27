import { useEffect, useState } from "react";

/** הרחבות טיפוס לאלמנטים עם מתודות fullscreen ישנות */
type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
  mozRequestFullScreen?: () => Promise<void> | void;
  msRequestFullscreen?: () => Promise<void> | void;
};

type FullscreenDocument = Document & {
  webkitExitFullscreen?: () => Promise<void> | void;
  mozCancelFullScreen?: () => Promise<void> | void;
  msExitFullscreen?: () => Promise<void> | void;
  webkitFullscreenElement?: Element | null;
  mozFullScreenElement?: Element | null;
  msFullscreenElement?: Element | null;
};

function isFullscreen(doc: FullscreenDocument): boolean {
  return Boolean(
    doc.fullscreenElement ??
    doc.webkitFullscreenElement ??
    doc.mozFullScreenElement ??
    doc.msFullscreenElement
  );
}

async function requestFullscreen(el: FullscreenElement): Promise<void> {
  if (el.requestFullscreen) return el.requestFullscreen();
  if (el.webkitRequestFullscreen) return el.webkitRequestFullscreen();
  if (el.mozRequestFullScreen) return el.mozRequestFullScreen();
  if (el.msRequestFullscreen) return el.msRequestFullscreen();
  // אין תמיכה – לא עושים כלום
}

async function exitFullscreen(doc: FullscreenDocument): Promise<void> {
  if (doc.exitFullscreen) return doc.exitFullscreen();
  if (doc.webkitExitFullscreen) return doc.webkitExitFullscreen();
  if (doc.mozCancelFullScreen) return doc.mozCancelFullScreen();
  if (doc.msExitFullscreen) return doc.msExitFullscreen();
}

export default function FullscreenButton() {
  const [active, setActive] = useState<boolean>(isFullscreen(document as FullscreenDocument));

  useEffect(() => {
    const handleChange = () => setActive(isFullscreen(document as FullscreenDocument));

    // האירוע הסטנדרטי
    document.addEventListener("fullscreenchange", handleChange);
    // פריפיקסים היסטוריים (הטייפים לא מכירים את שמות האירועים, אבל addEventListener מקבל string)
    document.addEventListener("webkitfullscreenchange" as keyof DocumentEventMap, handleChange);
    document.addEventListener("mozfullscreenchange" as unknown as keyof DocumentEventMap, handleChange);
    document.addEventListener("MSFullscreenChange" as unknown as keyof DocumentEventMap, handleChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleChange);
      document.removeEventListener("webkitfullscreenchange" as keyof DocumentEventMap, handleChange);
      document.removeEventListener("mozfullscreenchange" as unknown as keyof DocumentEventMap, handleChange);
      document.removeEventListener("MSFullscreenChange" as unknown as keyof DocumentEventMap, handleChange);
    };
  }, []);

  const enter = () => requestFullscreen(document.documentElement as FullscreenElement);
  const exit  = () => exitFullscreen(document as FullscreenDocument);

  return (
    <button
      className="fullscreen-btn"
      aria-label={active ? "יציאה ממסך מלא" : "מסך מלא"}
      onClick={active ? exit : enter}
      type="button"
      title={active ? "יציאה ממסך מלא" : "מסך מלא"}
    >
      ⤢
    </button>
  );
}
