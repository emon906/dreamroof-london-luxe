import { Film } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * EMPTY video placeholder.
 * Drop your own file in `public/videos/` and pass e.g. src="/videos/hero.mp4".
 * While `src` is empty it renders an elegant placeholder frame instead.
 */
export function VideoSlot({
  src,
  poster,
  label,
  className,
  overlay = true,
  objectFit = "cover",
}: {
  src?: string;
  poster?: string;
  label: string;
  className?: string;
  overlay?: boolean;
  objectFit?: "cover" | "contain";
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)}>
      {src ? (
        <video
          className={cn("h-full w-full", objectFit === "cover" ? "object-cover" : "object-contain")}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : (
        <div className="surface-cocoa grain flex h-full w-full items-center justify-center">
          <div className="flex flex-col items-center gap-4 px-6 text-center">
            <span className="flex size-16 items-center justify-center rounded-full border border-copper/50 text-copper-soft">
              <Film className="size-6" strokeWidth={1.2} />
            </span>
            <span className="eyebrow text-copper-soft">{label}</span>
            <span className="max-w-xs text-sm text-cream/60">
              Empty video slot — add your own footage here
            </span>
          </div>
        </div>
      )}
      {overlay && src ? <div className="veil absolute inset-0" /> : null}
    </div>
  );
}
