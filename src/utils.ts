export const jumpTo = (target: string) => {
  const target_el = document.getElementById(target);
  if (target_el) {
    target_el.scrollIntoView({ behavior: "smooth" });
  }
};
