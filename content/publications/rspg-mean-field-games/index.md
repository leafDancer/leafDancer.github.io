---
title: "Recurrent Structural Policy Gradient for Partially Observable Mean Field Games"
authors:
  - Clarisse Wibault
  - Johannes Forkel
  - Sebastian Towers
  - Tiphaine Wibault
  - Juan Duque
  - George Whittle
  - Andreas Schaab
  - Yucheng Yang
  - admin
  - Michael Osborne
  - Benjamin Moll
  - Jakob Foerster
date: 2026-02-23
publishDate: "2026-02-23"

publication_types: ["article"]
publication: ""
publication_short: ""

abstract: |
  Mean Field Games (MFGs) provide a principled framework for modeling interactions in large population models: at scale, population dynamics become deterministic, with uncertainty entering only through aggregate shocks, or common noise. However, algorithmic progress has been limited since model-free methods are too high variance and exact methods scale poorly. Recent Hybrid Structural Methods (HSMs) use Monte Carlo rollouts for the common noise in combination with exact estimation of the expected return, conditioned on those samples. However, HSMs have not been scaled to partially observable settings. We propose Recurrent Structural Policy Gradient (RSPG), the first history-aware HSM for settings involving public information. We also introduce MFAX, our JAX-based framework for MFGs. By leveraging known transition dynamics, RSPG achieves state-of-the-art performance as well as an order-of-magnitude faster convergence and solves, for the first time, a macroeconomics MFG with heterogeneous agents, common noise and history-aware policies.

summary: History-aware hybrid structural RL for partially observable MFGs; introduces the MFAX JAX framework.

tags:
  - Mean Field Games
  - Reinforcement Learning
  - Partial Observability

featured: true

hugoblox:
  ids:
    arxiv: 2602.20141v1

links:
  - type: preprint
    provider: arxiv
    id: 2602.20141v1
  - type: code
    url: https://github.com/CWibault/mfax

projects: []
slides: ""
---

[Read on arXiv](https://arxiv.org/abs/2602.20141). Code and environments are in the [MFAX repository](https://github.com/CWibault/mfax).
