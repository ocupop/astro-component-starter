---
title: Card with After Content
spacing:
blocks:
  _component: "wrappers/card"
  border: true
  paddingHorizontal: md
  paddingVertical: md
  rounded: true
  contentBlocks:
    - _component: "typography/heading"
      text: "Card with After Content"
      level: h3
    - _component: "typography/simple-text"
      text: "The image below is placed in the afterContentBlocks area, which sits outside the card's internal padding. This is ideal for footer images or visual footers."
  afterContentBlocks:
    - _component: "elements/smart-image"
      source: "/src/assets/images/component-library/dunedin-cliff.jpg"
      alt: "Dunedin Cliff"
      aspectRatio: widescreen
  style: "max-width: 400px; margin-inline: auto;"
---
