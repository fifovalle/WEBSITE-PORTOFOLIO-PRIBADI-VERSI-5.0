export const Muncul = (direction, delay) => {
  return {
    hilang: {
      y: direction === "atas" ? 80 : direction === "bawah" ? -80 : 0,
      opacity: 0,
      x: direction === "kiri" ? 80 : direction === "kanan" ? -80 : 0,
    },
    ada: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
