# cmd-software/alpine-animate

A minimalist and opinionated package to use [Animate.css](https://animate.style) animations on scroll using [Alpine.js](https://alpinejs.dev).

```html
<h1 x-data="animate" x-animate>
  Animate.css 🤝 Alpine.JS
</h1>
```

## Installation

```bash
npm install https://github.com/cmd-software/alpine-animate
```

## Usage

Initialise the component using `x-data="animate"` and the `x-animate` directive.

By default, the `fadeInUp` animation will be applied, however any Animate.css animation can be supplied.

```html
<h1 x-data="animate" x-animate="tada">...</h1>
```

### Behaviour

Internally, this uses the (Alpine Intersect)[https://alpinejs.dev/plugins/intersect] plugin.

When the root element (the one with `x-data`) scrolls into the viewport, any elements with the `x-animate` directive will have the relevant `animate--*` classes added to them, which triggers the animation(s).

More specifically – and this is the opinionated bit – when the *top* of the root element scrolls more than `10vh` the classes are applied.

The effective `10%` bottom margin can be changed by supplying an `offset` key/value pair in an object.

```html
<h1 x-data="animate({ offset: -50% })"
```

Note that the value should be negative. See (https://alpinejs.dev/plugins/intersect#margin) for details.

### Modifiers

#### `duration`

The `duration` modifier will change the duration of the animation from the default of `1s`. Units must be `s` or `ms`.

```html
<h1 x-data="animate" x-animate.duration.500ms>...</h1>
```

#### `delay`

The `delay` modifier will change the delay of the animation from the default of `0s`. Units must be `s` or `ms`.

```html
<h1 x-data="animate" x-animate.delay.500ms>...</h1>
```
