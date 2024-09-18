if (document.getElementById("page3Identifier")) {
  function toggleAdditionalProjects() {
    const showMoreButton = document.getElementById("show-more-projects");
    const projectGroups = document.querySelectorAll(".project-group");

    let currentBlock = 0;

    showMoreButton.addEventListener("click", function (event) {
      event.preventDefault();

      if (currentBlock < projectGroups.length) {
        projectGroups[currentBlock].style.display = "grid";
        currentBlock++;

        if (currentBlock === projectGroups.length) {
          showMoreButton.style.display = "none";
        }
      }
    });
  }

  toggleAdditionalProjects();
}
