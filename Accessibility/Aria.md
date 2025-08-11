### ARIA (Accessible Rich Internet Applications)

ARIA is a set of attributes that define ways to make web content and web applications more accessible to people with disabilities.

It supplements HTML by providing additional information about elements and their relationships to assistive technologies like screen readers.

#### Core Principals

[Roles]

```html
<!-- ARIA role for custom components -->
<div role="button" tabindex="0">Custom Button</div>
```

[States]

```html
<!-- Aria states -->
<checkbox aria-checked="true" />
<input aria-disabled="true" />
<div aria-expanded="false">Collapsible Section</div>
```

[Properties]

```html
<input
  aria-label="Search"
  aria-required="true"
  aria-describedby="search-hint"
/>
<div id="search-hint">Enter keywords to search</div>
```

### Key ARIA Attributes

[Landmark-Roles]

```html
<header role="banner" />
<nav role="navigation" />
<main role="main" />
<footer role="contentinfo" />
```

[Live-Regions]

`aria-live="polite" | "live"`

- Form Validation
  Refer aria_example.html

Note: Only use ARIA when no native HTML semantic element exists.

### Best Practices

- Use Native HTML First
- Prefer `<button>` over `<div role="button">`.

* Do Not Overuse ARIA
  Avoid adding `role="button"` to an actual `<button>` element.

- Combine ARIA with Keyboard Accessibility
  `<div role="button" tabindex="0">Click Me</div>`

- Test your implementation using screen readers like JAWS

### Patterns

https://www.w3.org/WAI/ARIA/apg/patterns/
https://www.w3.org/WAI/fundamentals/accessibility-intro/
