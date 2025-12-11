function initProgressBars() {
    const containers = document.querySelectorAll("[data-progress]");
    console.log("progress.js: found containers:", containers.length);
  
    containers.forEach(container => {
      // Avoid adding multiple bars if this runs more than once
      if (container.querySelector(".progress-container")) {
        return;
      }
  
      const total = container.querySelectorAll("li").length;
      const done = container.querySelectorAll("li.done").length;
      const percent = total === 0 ? 0 : Math.round((done / total) * 100);
  
      const bar = document.createElement("div");
      bar.className = "progress-container";
      bar.innerHTML = `
        <div class="progress-label">${percent}% complete</div>
        <div class="progress">
          <div class="progress-fill" style="width: ${percent}%"></div>
        </div>
      `;
  
      container.prepend(bar);
    });
  }
  
  // For first full page load
  document.addEventListener("DOMContentLoaded", initProgressBars);
  
  // For MkDocs Material instant navigation
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initProgressBars);
  }
  