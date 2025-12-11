// Automatically builds a progress bar for any <div data-progress> block.
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-progress]").forEach(container => {
      const total = container.querySelectorAll("li").length;         // All milestones
      const done = container.querySelectorAll("li.done").length;     // Completed milestones
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
  });
  