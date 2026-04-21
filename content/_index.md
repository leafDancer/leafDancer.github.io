---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: About
        education: Education
        interests: Interests
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: markdown
    content:
      title: '📚 My Research'
      subtitle: ''
      text: |-
        I am a Ph.D. student at the School of Computer Science, Peking University, and I am also interning at the Beijing Institute for General Artificial Intelligence. My research focuses on multi-agent systems intersecting with quantitative macroeconomics, and I also have some research experience in game theory and RLHF.
        
        I am committed to advancing AI4S, especially AI4E.

        Please reach out to collaborate 😃
    design:
      columns: '1'
  - block: collection
    id: papers
    content:
      title: Papers
      filters:
        folders:
          - publications
    design:
      view: article-grid
      columns: 2
---
