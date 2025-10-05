/**
 * ZxtniPortfolio - Motion Animations
 * 
 * author: Rahul Mondal (Zxtni)
 * github: https://github.com/isyrae
 * telegram: https://t.me/zxtni
 * email: zxtni@proton.me
 * 
 * Framer Motion animation configurations for smooth portfolio interactions
 */

export function slideInFromLeft(delay: number) {
  return {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export function slideInFromRight(delay: number) {
  return {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: 0.5,
      },
    },
  };
}

export const slideInFromTop = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
};

/**
 * End of ZxtniPortfolio - Motion Animations
 * 
 * author: Rahul Mondal (Zxtni)
 * github: https://github.com/isyrae
 * telegram: https://t.me/zxtni
 * email: zxtni@proton.me
 */
