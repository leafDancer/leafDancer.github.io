---
title: "Sample-Efficient Regret-Minimizing Double Oracle in Extensive-Form Games"
authors:
- Xiaohang Tang
- admin
- Chengdong Ma
- Ilija Bogunovic
- Stephen McAleer
- Yaodong Yang
date: "2024-11-01"

# Schedule page publish date (NOT publication's date).
publishDate: "2024-11-01"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: Extensive-Form Game (EFG) represents a fundamental model for analyzing sequential interactions among multiple agents and the primary challenge to solve it lies in mitigating sample complexity. Existing research indicated that Double Oracle (DO) can reduce the sample complexity dependence on the information set number  to the final restricted game size  in solving EFG. This is attributed to the early convergence of full-game Nash Equilibrium (NE) through iteratively solving restricted games. However, we prove that the state-of-the-art Extensive-Form Double Oracle (XDO) exhibits \textit{exponential} sample complexity of , due to its exponentially increasing restricted game expansion frequency. Here we introduce Adaptive Double Oracle (AdaDO) to significantly alleviate sample complexity to \textit{polynomial} by deploying the optimal expansion frequency. Furthermore, to comprehensively study the principles and influencing factors underlying sample complexity, we introduce a novel theoretical framework Regret-Minimizing Double Oracle (RMDO) to provide directions for designing efficient DO algorithms. Empirical results demonstrate that AdaDO attains the more superior approximation of NE with less sample complexity than the strong baselines including Linear CFR, MCCFR and existing DO. Importantly, combining RMDO with warm starting and stochastic regret minimization further improves convergence rate and scalability, thereby paving the way for addressing complex multi-agent tasks.

# Summary. An optional shortened abstract.
summary: A highly efficient and theoretically guaranteed algorithm framework for solving two-player zero-sum games.

tags:
- Game Theory
- Regret Minimization
- Double Oracle
- Nash Equilibrium

featured: true

hugoblox:
  ids:
    arxiv: 2411.00954v1

links:
- type: preprint
  provider: arxiv
  id: 2411.00954v1
- type: code
  url: https://github.com/xiaohangt/RMDO
#- type: slides
#  url: https://www.slideshare.net/
#- type: dataset
#  url: "#"
#- type: poster
#  url: "#"
- type: source
  url: "#"
#- type: video
#  url: https://youtube.com
#- type: custom
#  label: Custom Link
#  url: http://example.org

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/s9CC2SKySJM)'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:
- internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

This work is driven by the results in my [previous paper](/publications/conference-paper/) on LLMs.

{{% callout note %}}
Create your slides in Markdown - click the *Slides* button to check out the example.
{{% /callout %}}

Add the publication's **full text** or **supplementary notes** here. You can use rich formatting such as including [code, math, and images](https://docs.hugoblox.com/content/writing-markdown-latex/).
