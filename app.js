const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion__panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

const toggleAccordion = (panelToActivate) => {
  const activeButton = panelToActivate.querySelector("button");
  const activePanel = panelToActivate.querySelector(".accordion__content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    activeButton.setAttribute("aria-expanded", false);
    activePanel.setAttribute("aria-hidden", true);
  } else {
    activeButton.setAttribute("aria-expanded", true);
    activePanel.setAttribute("aria-hidden", false);
  }
};
