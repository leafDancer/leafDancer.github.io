---
title: "Sample-Efficient Regret-Minimizing Double Oracle in Extensive-Form Games"
authors:
- Xiaohang Tang
- admin
- Chengdong Ma
- Ilija Bogunovic
- Stephen McAleer
- Yaodong Yang
date: 2024-11-01

# Schedule page publish date (NOT publication's date).
publishDate: "2024-11-01"

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ["article"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: |
  Extensive-form games (EFGs) are a fundamental model for sequential multi-agent interactions; a central challenge is sample complexity. Prior work suggested that Double Oracle (DO) methods can reduce dependence on the number of information sets in favor of the final restricted game size, by iteratively solving restricted games until a full-game Nash equilibrium emerges. We prove that the state-of-the-art Extensive-Form Double Oracle (XDO) can suffer exponential sample complexity in the restricted game size due to exponentially increasing expansion frequency. We introduce Adaptive Double Oracle (AdaDO), which achieves polynomial sample complexity by using an optimal expansion frequency. We further propose Regret-Minimizing Double Oracle (RMDO) as a theoretical framework for understanding and designing efficient DO algorithms. Empirically, AdaDO approximates Nash equilibria with lower sample complexity than strong baselines including Linear CFR, MCCFR, and prior DO methods; combining RMDO with warm starting and stochastic regret minimization further improves convergence and scalability.

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

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""

projects: []
---

See the [arXiv preprint](https://arxiv.org/abs/2411.00954) and [code repository](https://github.com/xiaohangt/RMDO) for full details.
