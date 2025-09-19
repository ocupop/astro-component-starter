---
_schema: default
title: Your Site
pageBlocks:
  - _bookshop_name: wrappers/container
    label: ''
    contentBlocks:
      - _bookshop_name: typography/heading
        text: Welcome to your CloudCannon Starter Component site
        type: h1
        size:
        align: center
        iconName:
        iconPosition:
      - _bookshop_name: wrappers/button-group
        buttonBlocks:
          - _bookshop_name: elements/button
            text: View Components
            link: /component-library/
            iconPosition: before
            hideText: false
            variant: primary
            size: lg
        direction: row
        align: center
      - _bookshop_name: forms/form
        action:
        formBlocks:
          - _bookshop_name: forms/choice-group
            name: subscription
            options:
              - value: newsletter
                label: Subscribe to newsletter
                checked: false
              - value: updates
                label: Get product updates
                checked: false
            title: Subscription
            orientation: vertical
            required: false
            multiple: true
          - _bookshop_name: forms/file-upload
            label: Upload a file
            name: file_upload
            required: false
            accept:
            multiple: true
          - _bookshop_name: forms/input
            label: Email Address
            name: email
            type: email
            placeholder: youremail@email.com
            required: true
            value:
          - _bookshop_name: forms/input
            label: Password
            name: password
            type: password
            placeholder:
            required: true
            value:
          - _bookshop_name: forms/input
            label: Your message
            name: message
            type: text
            placeholder: Hello, I'd like one form and...
            required: true
            value:
          - _bookshop_name: forms/input
            label: Telephone number
            name: telephone
            type: tel
            placeholder: '+641234567'
            required: false
            value:
          - _bookshop_name: forms/input
            label: Url
            name: url
            type: url
            placeholder:
            required: false
            value:
          - _bookshop_name: forms/input
            label: Age
            name: age
            type: number
            placeholder:
            required: false
            value:
          - _bookshop_name: forms/input
            label: Birth Date
            name: birthdate
            type: date
            placeholder: 18/03/2025
            required: false
            value:
          - _bookshop_name: forms/segments
            name: options
            options:
              - value: optionOne
                label: First Option
                checked: true
                icon: archive-box-arrow-down
              - value: optionTwo
                label: Second Option
                checked:
                icon: arrow-down
              - value: optionThree
                label: Last Option
                checked:
                icon: arrow-up-left
            title: Which option would you like?
            required: true
            iconOnly: false
            multiple: false
            keepStateOnRefresh: true
          - _bookshop_name: forms/select
            label: Which do you prefer?
            name: preferred_dinosaur
            options:
              - value: option1
                label: Option 1
              - value: option2
                label: Option 2
              - value: option3
                label: Option 3
            placeholder:
            required: true
            value:
    maxContentWidth: 2xl
    paddingHorizontal: lg
    paddingVertical: lg
    colorScheme: default
    backgroundImage:
      source: ''
      alt: ''
      positionVertical: top
      positionHorizontal: center
    rounded: false
---
