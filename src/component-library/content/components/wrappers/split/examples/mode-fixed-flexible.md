---
title: Fixed-Flexible
spacing:
blocks:
  _bookshop_name: "wrappers/split"
  firstColumnContentBlocks:
    - _bookshop_name: "wrappers/container"
      backgroundColor: "accent"
      content_blocks:
        - _bookshop_name: "primitives/rich-text"
          text: |-
            ## Fixed Width Column

            This column has a fixed width of 300px.
  firstColumnMinWidth: null
  secondColumnContentBlocks:
    - _bookshop_name: "wrappers/container"
      backgroundColor: "highlight"
      content_blocks:
        - _bookshop_name: "primitives/rich-text"
          text: |-
            ## Flexible Column

            This column takes up the remaining space.
  secondColumnMinWidth: null
  distributionMode: "fixed-flexible"
  fixedWidth: 300
  verticalAlignment: "top"
  reverse: false
---
