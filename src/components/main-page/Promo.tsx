export default function Promo() {
  return (
    <div className="w-full z-50 overflow-hidden pointer-events-none">
      <div className="h-12 bg-teal-950 border-y border-white/10 flex items-center">
        <div className="flex promo-track">
          <TapeRow />
          <TapeRow />
        </div>
      </div>
    </div>
  );
}

const TapeRow = () => {
  return (
    <div className="flex whitespace-nowrap">
      <TapeChunk />
      <TapeChunk />
      <TapeChunk />
      <TapeChunk />
    </div>
  );
};

const TapeChunk = () => {
  return (
    <>
      <span className="mx-6 text-xs tracking-widest uppercase text-white/90">
        Check it out!
      </span>
      <span className="mx-6 text-xs text-white/60">•</span>
      <span className="mx-6 text-xs tracking-widest uppercase text-white/90">
        new laser machine – Alexandrite & ND YAG
      </span>
      <span className="mx-6 text-xs text-white/60">•</span>
    </>
  );
};
