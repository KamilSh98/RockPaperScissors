const rules = document.getElementById("rules");
const showRules = document.getElementById("showRules")
const closeRules = document.getElementById("closeRules")


rules.addEventListener("click", () => {
    showRules.style.display = "block";
});

closeRules.addEventListener("click", () => {
    showRules.style.display = "none";
});