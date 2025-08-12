---
title: Top Alignment
spacing:
blocks:
  _bookshop_name: "wrappers/grid"
  minItemWidth: 200
  maxItemWidth: 250
  verticalAlignment: "start"
  equalWidth: true
  items:
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "surface"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Short Item"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "This is a short grid item."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "accent"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Taller Item"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "This grid item has more content and will be taller than the others. It demonstrates how items align to the top when using start alignment."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "highlight"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Medium Item"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "This item has medium height content."
---
