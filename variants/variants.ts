import { type Variants } from 'motion/react';

// ===============================
// FADE Y
// ===============================

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

// Custom fade up with delay
export const fadeUpCustom: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

// ===============================
// FADE X
// ===============================

// Custom fade left with delay
export const fadeLeftCustom: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },

  visible: (delay: number = 0) => ({
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

// ===============================
// SCALE
// ===============================

export const scaleUp: Variants = {
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

// ===============================
// STAGGER CHILDREN
// ===============================

export const staggerChildren: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// ===============================
// BUTTON ANIMATION
// ===============================

export const buttonAnimation: Variants = {
  whileHover: {
    scale: 1.2,
  },

  whileTap: {
    scale: 0.9,
  },
};