// ここからコードを書いてください
function setupTabs() {
  const homeLink = document.querySelector('[data-tab="home"]');
  const converterTab = document.querySelector('[data-tab="converter"]');
  const homeSection = document.getElementById("home");
  const converterSection = document.getElementById("converter");

  homeLink.addEventListener("click", function() {
    converterSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  });

  converterTab.addEventListener("click", function() {
    homeSection.classList.add("hidden");
    converterSection.classList.remove("hidden");
  });
}

export { setupTabs };
