(() => {
  "use strict";

  const tasks = {
    EK: {
      title: "Economic Knowledge", count: 189,
      description: "Does the model know the methods, findings, and institutional context that economic research depends on?",
      format: "Answer paper-specific questions in single-choice, true/false, fill-in-the-blank, and ordering formats.",
      scoring: "Rule-based matching for factual answers, with normalized Kendall’s tau for ordering questions."
    },
    LR: {
      title: "Literature Review", count: 187,
      description: "Can the model position a research contribution in its literature and reconstruct the argument that motivates it?",
      format: "Reconstruct an introduction’s argument structure and cite the relevant prior literature from a condensed paper body.",
      scoring: "Citation recall and a paper-specific writing rubric, combined with equal weights. Rubric scores are averaged across two judges."
    },
    CI: {
      title: "Concept Identification", count: 160,
      description: "Can the model recognize economic concepts in historical language, before today’s formal notation?",
      format: "Classify historical passages along eight properties: relevance, mathematical formalization, uniqueness, stability, existence, equilibrium scene, time characteristic, and time horizon.",
      scoring: "Rule-based categorical exact matching against expert annotations by economics doctoral students."
    },
    MG: {
      title: "Model Generation", count: 124,
      description: "Can the model turn an economic narrative into a complete, internally consistent formal model?",
      format: "Reconstruct an economic model from a narrative with mathematical symbols removed, specifying sectors, objectives, constraints, and equilibrium conditions.",
      scoring: "Two judges apply an element-level rubric to the presence and correctness of the model’s components."
    },
    MM: {
      title: "Mathematical Modeling", count: 399,
      description: "Can the model derive the mathematics of an economic problem while preserving its economic meaning?",
      format: "Produce formal derivations from a textual economic scenario and a prescribed notation system.",
      scoring: "Formula correctness, notation consistency, derivation completeness, and economic intuition, weighted 4:2:3:1 and averaged across two judges."
    },
    EA: {
      title: "Economic Analysis", count: 380,
      description: "Can the model explain what empirical or theoretical results mean for mechanisms, theory, and policy?",
      format: "Generate a qualitative economic analysis from empirical or theoretical results presented without interpretation.",
      scoring: "Accuracy, economic interpretation, mechanism, theory connection, policy implication, and writing quality. Two judges score dimension-level rubrics."
    },
    PA: {
      title: "Paper Abstraction", count: 190,
      description: "Can the model distill a research paper into a concise, faithful academic abstract?",
      format: "Synthesize an abstract from a condensed paper body, preserving the contribution, method, and principal findings.",
      scoring: "Semantic coverage, factual accuracy, conciseness, and academic style, weighted 4:4:3:1 and averaged across two judges."
    }
  };

  const tabs = [...document.querySelectorAll("[data-task]")];
  const panel = document.getElementById("task-panel");
  const tablist = document.querySelector(".task-tabs");
  const mobile = window.matchMedia("(max-width: 600px)");
  const setOrientation = () => tablist.setAttribute("aria-orientation", mobile.matches ? "horizontal" : "vertical");
  setOrientation();
  mobile.addEventListener("change", setOrientation);

  const selectTask = (code, focus = false) => {
    const task = tasks[code];
    if (!task) return;
    tabs.forEach(tab => {
      const selected = tab.dataset.task === code;
      tab.setAttribute("aria-selected", String(selected));
      tab.tabIndex = selected ? 0 : -1;
      if (selected && focus) {
        tab.focus({ preventScroll: true });
        if (mobile.matches) {
          tablist.scrollTo({ left: tab.offsetLeft - tablist.offsetLeft - 16, behavior: "instant" });
        }
      }
    });
    panel.setAttribute("aria-labelledby", `tab-${code}`);
    document.getElementById("task-code").textContent = code;
    document.getElementById("task-count").textContent = `${task.count} evaluation items`;
    for (const field of ["title", "description", "format", "scoring"]) {
      document.getElementById(`task-${field}`).textContent = task[field];
    }
  };
  tabs.forEach((tab, index) => {
    const task = tasks[tab.dataset.task];
    tab.setAttribute("aria-label", `${task.title} (${tab.dataset.task}), ${task.count} items`);
    tab.addEventListener("click", () => selectTask(tab.dataset.task));
    tab.addEventListener("keydown", event => {
      let next;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") next = 0;
      else if (event.key === "End") next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTask(tabs[next].dataset.task, true);
    });
  });
  document.querySelectorAll("[data-task-link]").forEach(link => {
    link.addEventListener("click", () => {
      selectTask(link.dataset.taskLink);
      const selected = document.getElementById(`tab-${link.dataset.taskLink}`);
      if (mobile.matches) tablist.scrollLeft = selected.offsetLeft - tablist.offsetLeft - 16;
    });
  });

  const table = document.getElementById("results-table");
  const tbody = table.tBodies[0];
  const rows = [...tbody.rows];
  const family = document.getElementById("family-filter");
  let metric = "overall";
  let descending = true;
  const updateResults = () => {
    rows.sort((a, b) => {
      const difference = Number(b.dataset[metric.toLowerCase()]) - Number(a.dataset[metric.toLowerCase()]);
      return (descending ? difference : -difference) || a.dataset.model.localeCompare(b.dataset.model);
    });
    let count = 0;
    rows.forEach(row => {
      row.hidden = family.value !== "all" && row.dataset.family !== family.value;
      if (!row.hidden) count++;
      tbody.appendChild(row);
    });
    document.querySelectorAll("[data-sort]").forEach(button => {
      button.closest("th").setAttribute("aria-sort", button.dataset.sort === metric ? (descending ? "descending" : "ascending") : "none");
    });
    document.getElementById("results-status").textContent = `${count} models · sorted by ${metric}, ${descending ? "high to low" : "low to high"}`;
  };
  family.addEventListener("change", updateResults);
  document.querySelectorAll("[data-sort]").forEach(button => {
    button.addEventListener("click", () => {
      descending = button.dataset.sort === metric ? !descending : true;
      metric = button.dataset.sort;
      updateResults();
    });
  });

  const dialog = document.getElementById("figure-viewer");
  const figureImage = document.getElementById("figure-image");
  let previousFocus;
  document.querySelectorAll("[data-figure]").forEach(button => {
    button.addEventListener("click", () => {
      previousFocus = button;
      figureImage.src = button.dataset.figure;
      figureImage.alt = button.dataset.figureTitle;
      document.getElementById("figure-title").textContent = button.dataset.figureTitle;
      document.getElementById("figure-original").href = button.dataset.figure;
      dialog.showModal();
    });
  });
  dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener("close", () => previousFocus?.focus({ preventScroll: true }));

  document.getElementById("copy-citation").addEventListener("click", async () => {
    const citation = document.getElementById("citation");
    const status = document.getElementById("copy-status");
    try {
      await navigator.clipboard.writeText(citation.textContent);
      status.textContent = "BibTeX copied to clipboard.";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(citation);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Citation selected. Press Ctrl+C or Command+C to copy.";
    }
  });
})();
