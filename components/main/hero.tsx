/**
 * ZxtniPortfolio - Hero Section
 * 
 * author: Rahul Mondal (Zxtni)
 * github: https://github.com/isyrae
 * telegram: https://t.me/zxtni
 * email: zxtni@proton.me
 * 
 * Main hero section with animated background and content
 */

import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};

/**
 * End of ZxtniPortfolio - Hero Section
 * 
 * author: Rahul Mondal (Zxtni)
 * github: https://github.com/isyrae
 * telegram: https://t.me/zxtni
 * email: zxtni@proton.me
 */
