import { Cloud, Star, Flower, Sparkles } from "lucide-react";

export function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <Cloud className="absolute top-10 left-[8%] h-16 w-16 text-sky animate-float-slow" strokeWidth={1.5} />
      <Cloud className="absolute top-32 right-[12%] h-20 w-20 text-blossom animate-float" strokeWidth={1.5} />
      <Star className="absolute top-1/2 left-[5%] h-10 w-10 text-sunny fill-sunny animate-wiggle" strokeWidth={1.5} />
      <Star className="absolute bottom-24 right-[8%] h-12 w-12 text-tangerine fill-tangerine animate-float" strokeWidth={1.5} />
      <Flower className="absolute bottom-10 left-[15%] h-14 w-14 text-blossom animate-spin-slow" strokeWidth={1.5} />
      <Sparkles className="absolute top-20 right-[40%] h-8 w-8 text-grape animate-wiggle" strokeWidth={1.5} />
    </div>
  );
}

export function Blob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M44.5,-58.2C57.3,-49.1,66.7,-34.6,69.9,-19.1C73.2,-3.6,70.3,12.9,62.4,26.4C54.5,39.9,41.6,50.4,27.1,57.2C12.6,64,-3.6,67.1,-19.5,63.7C-35.4,60.3,-51,50.4,-60.2,36.5C-69.4,22.6,-72.2,4.7,-68.8,-11.6C-65.4,-27.9,-55.7,-42.6,-42.7,-51.8C-29.7,-61,-14.8,-64.7,1.3,-66.4C17.5,-68.1,34.9,-67.8,44.5,-58.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
