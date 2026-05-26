import { fadeLeftCustomType, fadeUpCustomType } from '@/types/types';
import { type Variants } from 'motion/react';

//FADE Y
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
export const fadeDown: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
export const fadeUpCustom: fadeUpCustomType = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

//FADE X

export const fadeLeftCustom: fadeLeftCustomType = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export const fadeRight: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};
export const fadeLeft: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

//SCALE
export const scaleUp = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

//STAGGER CHILDREN
export const staggerChildren = {
  hidden: {},
  visible: {
    staggerChildren: 0.2,
  },
};
