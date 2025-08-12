---
title: Non equal width items
spacing:
blocks:
  _bookshop_name: "wrappers/grid"
  equalWidth: false
  items:
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "surface"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Short"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "Short content."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "accent"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Medium Length Content"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "This item has medium length content that determines its natural width."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "highlight"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Longer Content Title"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "This item has significantly more content and will be wider."
    - contentBlocks:
        - _bookshop_name: "wrappers/container"
          backgroundColor: "surface"
          content_blocks:
            - _bookshop_name: "primitives/heading"
              text: "Tiny"
              level: h3
            - _bookshop_name: "primitives/paragraph"
              text: "Small."
---
