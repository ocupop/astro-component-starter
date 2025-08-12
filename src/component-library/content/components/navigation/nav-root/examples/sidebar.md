---
title: Sidebar Navigation
blocks:
  _bookshop_name: "navigation/nav-root"
  variant: "sidebar"
  navBlocks:
    - _bookshop_name: "navigation/nav-list"
      navBlocks:
        - _bookshop_name: "navigation/nav-item"
          href: "#"
          label: "Home"
        - _bookshop_name: "navigation/nav-item"
          href: "#"
          label: "About"
        - _bookshop_name: "navigation/nav-item"
          label: "Resources"
          navBlocks:
            - _bookshop_name: "navigation/nav-list"
              navBlocks:
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  label: "Blog"
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  label: "Docs"
        - _bookshop_name: "navigation/nav-item"
          label: "Help"
          navBlocks:
            - _bookshop_name: "navigation/nav-list"
              navBlocks:
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  label: "FAQ"
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  label: "Support"
                - _bookshop_name: "navigation/nav-item"
                  href: "#"
                  label: "Guides"
        - _bookshop_name: "navigation/nav-item"
          href: "#"
          label: "Contact"
---
