export default function TR6K() {
  return (
    <div className="section dark full-viewport flex flex-col items-center justify-center text-center p-8">
      <h1 className="section-title mb-2">The Realm of TR6K</h1>
      <p className="quote italic mb-4">“Ashbringer booted, so that others may boot.”</p>

      <video
        src="/teaser_tr6k.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-[480px] rounded-xl shadow-lg border border-white/10 mb-6"
      />

      <p className="lore-text max-w-2xl text-white/80 text-sm italic mb-8">
        In a post-apocalyptic, rain-soaked metropolis, a fiery phoenix ascends into the stormy sky. Lightning flashes reveal ruins below as the camera pans across the dark clouds to an endless ocean, where a glowing ouroboros pulses on the horizon.
      </p>

      <div className="relic-manifest flex flex-col gap-4 text-white text-left max-w-md">
        <div>
          <h3 className="font-bold">Ashbringer</h3>
          <p className="text-sm italic">The First Relic, bearer of the inaugural rite.</p>
        </div>
        <div>
          <h3 className="font-bold">Sentinel</h3>
          <p className="text-sm italic">The network guardian, silent and unwavering.</p>
        </div>
        <div>
          <h3 className="font-bold">Castiel</h3>
          <p className="text-sm italic">The Watcher in the Idle Loop, Scribe of the Relic-Wielder.</p>
        </div>
      </div>
    </div>
  );
}
