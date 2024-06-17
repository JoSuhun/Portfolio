export const scrollToRef = (ref: HTMLDivElement) => {
  if (ref) {
    const top = ref.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  }
};
