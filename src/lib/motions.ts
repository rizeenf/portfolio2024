export const fromLeftMotion = {
  initial: {
    opacity: 0,
    x: -20,
  },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.7,
      type: "spring",
    },
  },
};

export const fadingMotion = {
  initial: {
    opacity: 0,
  },
  whileInView: {
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
    },
  },
};

export const fadingStaggerMotion = {
  initial: {
    x: -10,
  },
  whileInView: {
    x: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      delayChildren: 0.2,
      staggerChildren: 0.15,
      type: "tween",
    },
  },
};
export const fadingExpStaggerMotion = {
  initial: {
    x: -10,
  },
  whileInView: {
    x: 0,
    transition: {
      delay: 0.3,
      duration: 1,
      delayChildren: 0.2,
      staggerChildren: 0.5,
      type: "tween",
    },
  },
};

export const fadingChildrenMotion = {
  initial: {
    x: -5,
    opacity: 0,
  },
  whileInView: {
    x: 0,
    opacity: 1,
  },
};

export const topVar = {
  close: {
    rotate: 0,
  },
  open: {
    rotate: -45,
    backgroundColor: "rgb(255,255,255)",
  },
};
export const cenVar = {
  close: {
    opacity: 1,
  },
  open: {
    opacity: 0,
  },
};
export const botVar = {
  close: {
    rotate: 0,
  },
  open: {
    rotate: 45,
    backgroundColor: "rgb(255,255,255)",
  },
};

export const listVariants = {
  close: {
    y: "-100vh",
  },
  open: {
    y: 0,
    transition: {
      duration: 0.4,
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

export const linkVar = {
  close: {
    y: -30,
    opacity: 0,
  },
  open: {
    y: 0,
    opacity: 1,
  },
};
