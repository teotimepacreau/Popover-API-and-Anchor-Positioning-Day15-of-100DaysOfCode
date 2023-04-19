# Popover API and Anchor Positioning
![Interactive Form demo](https://github.com/teotimepacreau/Interactive-Form-Day-14-of-100DaysOfCode/blob/main/interactiveform.gif)

# Project goals
- Popover API : allows any element and itsdescendants to be rendered on top of all other content only with HTML and CSS. Setup popovertarget="foo" to make a triggerer, must be on a button to work. The popover is simply an attribute in the wanted element. Style in CSS with [popover]
- Anchor CSS positioning : begin by declaring all in CSS an anchor [popovertarget=foo] {anchor-name: --context;}. Specifies spacing properties in order to make the anchored element refers to it : bottom: calc(anchor(--context top) + 1rem); top: auto; left: calc(anchor(--context right) - 1.3rem);
- Span and Icon styling with tints and shades
# 🛠️
VanillaJS, CSS, HTML
