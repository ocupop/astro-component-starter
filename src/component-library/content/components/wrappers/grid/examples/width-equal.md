---
title: Equal width items
spacing:
blocks:
  _bookshop_name: "wrappers/grid"
  minItemWidth: 100
  maxItemWidth: 300
  equalWidth: true
  verticalAlignment: "stretch"
  items:
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "surface"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Equal Width"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "All items have the same width regardless of content length. This creates a uniform, grid-like appearance."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "accent"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Consistent Layout"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "Perfect for displaying cards, features, or any content that should have consistent sizing."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "highlight"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Responsive Design"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "Items automatically wrap and adjust based on available space while maintaining equal widths."
---
