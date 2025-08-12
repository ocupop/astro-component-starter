---
title: Horizontal Alignment - Start
spacing:
blocks:
  _bookshop_name: "wrappers/grid"
  minItemWidth: 200
  maxItemWidth: 250
  horizontalAlignment: "start"
  equalWidth: true
  items:
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "surface"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Item 1"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "This is a grid item with sample content."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "accent"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Item 2"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "This is a grid item with sample content."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "highlight"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Item 3"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "This is a grid item with sample content."
---
