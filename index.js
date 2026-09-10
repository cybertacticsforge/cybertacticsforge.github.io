// Content and anchor navigation remain available without JavaScript.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
if (menuButton && navigation) {
  document.documentElement.classList.add("js");
  menuButton.hidden = false;
  const setMenu = (open) => {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.querySelector("span").textContent = open ? "−" : "+";
    navigation.classList.toggle("is-open", open);
  };
  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });
  navigation.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    setMenu(false);
    if (window.matchMedia("(max-width: 780px)").matches) {
      const target = document.querySelector(link.hash);
      if (target) {
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menuButton.focus();
    }
  });
  window
    .matchMedia("(max-width: 780px)")
    .addEventListener("change", () => setMenu(false));
}
if ("IntersectionObserver" in window) {
  const links = [...document.querySelectorAll('nav a[href^="#"]')];
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-15% 0px -55% 0px", threshold: 0 },
  );
  document
    .querySelectorAll("main > section[id]")
    .forEach((section) => observer.observe(section));
}
