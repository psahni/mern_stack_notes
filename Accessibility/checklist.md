### Don’t Use Aria

The first rule of ARIA is “don’t use ARIA”. If semantic HTML already gets the job done, there is no need to add any aria attributes.

Only use ARIA as the last resort.

### Focus and Reading the Order

In general, focus order should follow visual order, eg. on an English page, focus should flow logically from left to right then top to bottom, following the visual
hierarchy of the page.

When it comes to complex UIs, think about what is more logical for someone who might not be able to see the screen. Let’s say there is a banner design that features a CTA on the left rather
than the right. It might make sense visually but the focus and reading order should go from the content to the CTA. In such cases, keep the DOM structure in the desired order—content
first and then CTA—and apply CSS for the layout.

### 320 CSS Pixels

It is a common misconception that designing for 320px viewport is an obsolete practice because mobile phones have higher resolutions nowadays, however, that is not the correct way to
think about this practice.

The WCAG Success Criterion 1.4.10 states that content can be
presented in a width of “320 CSS pixel” without loss of
information. This could literally mean a device that is 320px
wide but it is also the equivalent of zooming in 400% on a
device that is 1280px wide. The WCAG specifically use the term
“320 CSS pixel” to highlight this nuance.

If a responsive design cannot fit within “320 CSS pixel”, it does
not conform to WCAG 2.1 Level AA

### Unique Labels

Provide a unique label for each interactive control. For example, if a page has multiple “learn more” CTAs, these are considered duplicate labels. Use `arialabel` to give each CTA a unique accessible label, eg. "learn more about TOEFL".

```html
<a aria-label="learn more about TOEFL" href="..."> Learn more </a>
<!--Read more-->
```

Note: `aria-label` only has full screen reader support if used on interactive elements.

### Icon-only CTAs

Icon-only CTAs still need accessible text labels. Use `aria-label` to define it.
Unique labels rule still applies here.

```html
<button aria-label="{accessible_label}">
  <a aria-label="{accessible_label}" href="..."></a>
</button>
```

Note: `aria-label` only has full screen reader support if used on interactive elements

Build accordions with semantic buttons. Use `aria-expanded` to manage states.

```html
<button
  type="button"
  aria-expanded="false"
  aria-controls="accordion-panel-1-id"
  id="accordion-header-1-id"
></button>

<section id="accordion-panel-1-id" arialabelledby="accordion-header-1-id">
  ...
</section>
```

### Carousel

Reference W3C’s pattern on building an accessible carousel. Pay close attention to the keyboard support section.

Previous and next buttons are mandatory. Each time a button is clicked, screen reader would announce: “item 1 of 5”, “item 2 of 5” and so on. The focus stays on the button after click.

Never auto announce the content of each carousel item. Allow the user to read them
on demand by moving focus.

### Play/Pause

Any video, motion graphics, and animated elements need to provide the user the ability to pause.

A play/pause button per element and/or an overall “reduce motion” switch can be utilized based on the use case.

The button’s state should map to the “reduce motion”/“advanced animation” device setting. If the setting is enabled, the button is in the paused state.

### Horizontal Overflow Scrolling

Horizontal overflow scrolling is a more accessible alternative to carousels. Such interface shows the device specific scrollbar when the user turns on the device setting to always show scrollbar.

Use CSS to handle overflow scrolling and
add tabindex to enable keyboard control.

```html
<section tabindex="0" aria-label="section name">...</section>
```

### Reduce Motion

In addition to providing play/pause button for any video, motion graphics, and animated elements, the "reduce motion"/"advanced animation" device setting also needs to be respected.

Static designs should be provided along with any animated designs. Implement them using the prefers-reduced-motion CSS media query.

### All Caps

Generally, avoid using ALL CAPS because certain screen readers would just spell out the word rather than read the word if text is written in caps. It may be used sparingly in design. In such case, use CSS to change case, never hardcode text string in all uppercase.

### Disabled Buttons

Avoid disabled buttons because they are not accessible. Design team should provide proper form validations to eliminate the need for disabled buttons.

In rare cases where a disabled button is inevitable, use `aria-disabled` instead of the disabled attribute.

Display error message and error summary
to make forms more inclusive.

### Form Validations

When errors occur, show an error summary in the beginning of the form along with error message accompanying each errored input field.

The error summary is crucial for keyboard users and screen reader users as it shifts the user’s focus to the summary first, allowing the user to jump back into the form when they move
focus. The error message would be announced when the user moves focus to a particular errored input field.

### Input Place Holder

The presence of both the `label` and `placeholder` can create a very redundant experience for screen reader users. Since labels are mandatory, avoid using the placeholder attribute.

In scenarios where brevity is preferred, style the label to look like a placeholder. When an input field receives focus, the label still needs to be visible. Floating label is a common technique to
achieve this.

### Dialog Focus

Modal dialogs and bottom sheets should be contained within their own contexts.
Implement focus trapping to ensure the user can only move focus around elements inside the modal dialog or bottom sheet. Obscured content—the page content in this case—should not
gain focus.

A link navigates to another page or another section on the same page. A link changes URL.
Use `<a href=...>` for links.

A button performs a function. A button does not change URL. Use `<button type=...>` for buttons.

### Navs are not menus

A nav is a list of links. It can be operated by the tab key and is built with the <nav> landmark.

A menu is a list of buttons. It can be operated by the arrow keys and is built with `ARIA` roles such as menubar, menu, and menuitem.

### Title attribute

Title attribute is not announced by certain screen readers, do not use it for labelling.
Use `aria-label` instead.

Note: `aria-label` only has full screen reader support if used on interactive elements and sections.

### Skip Links

Add a skip link that allows the user to bypass the site header and navigation,
and jump directly to the main content. This helps to reduce tab stops for keyboard users. The skip link should be visible only when focused.

### Dynamic Annoucements

Content that is changing dynamically on screen needs to be announced to screen reader users. Utilize `aria-live` regions to make such announcements.

#### <img

Essential image:
`set alt="describe the
image"`

Decorative image:
`set empty alt=""`

#### <svg

- Essential image:

```html
<svg role="img">
  <title>Describe the image</title>
  ...
</svg>
```

- Decorative image:

```html
<svg aria-hidden="true">...</svg>
```

### Override Visual Text

Use a combination of aria-hidden text and visually hidden text.

```html
<span class="visuallyhidden">Screen reader text</span>
<span aria-hidden="true">Visual text</span>
```

Note that `aria-label` does not work on generic elements like `div`, `span`, and `p`, hence this technique is needed.

Treat screen reader text writing as formal writing with proper formatting and no slangs or abbreviations. This ensures all screen readers can announce them correctly.

### Clickable Card

Use the pseudo element on the main CTA to cover the whole card—it could be a linked heading or a separate CTA.

```html
<div class="card">
  <img
    class="card__image"
    alt="Rainbows and unicorns"
    width="400"
    height="300"
  />
  <p class="card__title">
    <a href="/path">
      Card title
      <!-- Style a::before to cover the whole card -->
    </a>
  </p>
  <p class="card__description">Card description.</p>
</div>
```

### Switch

Apply the ARIA role of switch on a checkbox input to change screen reader announcement to properly communicate the switch context with on and off states.

```html
<label for="input-id">Turn me on</label>
<input type="checkbox" id="input-id" role="switch" />
```

### Data Viz

- Interactive charts can be navigated via keyboard (arrow keys and/or tab key)

- Provide a text summary of the visualization for screen readers or an alternative format such as a simple table

- Add accessible names to controls

- Highcharts should be referenced as a good starting point.

https://www.highcharts.com/blog/accessibility/#exploreFeatures
