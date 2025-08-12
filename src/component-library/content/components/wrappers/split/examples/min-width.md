---
title: Min Width
spacing:
blocks:
  _bookshop_name: "wrappers/split"
  firstColumnContentBlocks:
    - _bookshop_name: "wrappers/container"
      backgroundColor: "accent"
      content_blocks:
        - _bookshop_name: "primitives/rich-text"
          text: |-
            ## First Column

            This column will take up the available space and can shrink as needed.
  firstColumnMinWidth: null
  secondColumnContentBlocks:
    - _bookshop_name: "wrappers/container"
      backgroundColor: "highlight"
      content_blocks:
        - _bookshop_name: "primitives/rich-text"
          text: |-
            ## Second Column

            This column has a minimum width of 400px, so it will jump to a new line if it gets below that.
  secondColumnMinWidth: 400
  distributionMode: "third-two-thirds"
  fixedWidth: null
  verticalAlignment: "top"
  reverse: false
---
