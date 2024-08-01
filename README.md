# cmd-software/alpine-animate

A minimalist and opinionated package to use [Animate.css](https://animate.style) animations on scroll using [Alpine.js](https://alpinejs.dev).

```html
<h1 x-data="animate" x-animate>
  Animate.css 🤝 Alpine.JS
</h1>
```

### Kitchen Sink Example

This real-world example uses both modifiers (`duration` and `delay`, listed below) and customises the point in the viewport which triggers the animation. It also uses `x-animate` (the directive that causes the element to animate) on children of the root element.

https://github.com/user-attachments/assets/e9f112f3-9dd9-4e5c-b6b1-cd80f54ff499

## Installation

```bash
npm install https://github.com/cmd-software/alpine-animate
```

Next, register the plugin with Alpine.

```js
import Alpine from 'alpinejs'
import animate from '@cmd-software/alpine-animate'

Alpine.plugin(animate)

window.Alpine = Alpine
Alpine.start()
```

> [!NOTE]
> Ensure that the CSS styles for Animate.css are included on the page.

Install the library using `npm` or include it in your project using a CDN.

In a typical Tailwind CSS setup (with `@import`, see [https://tailwindcss.com/docs/using-with-preprocessors#build-time-imports]()), the library would be installed using `npm`.

```bash
npm install animate.css
```

Then in the `app.css` file, include the library by importing it.

```css
@import 'animate.css';

@tailwind base;
@tailwind components;
@tailwind utilities;

...
```

## Usage

Initialise the component using `x-data="animate"` and the `x-animate` directive.

By default, the `fadeInUp` animation will be applied, however any Animate.css animation can be supplied.

```html
<h1 x-data="animate" x-animate="tada">...</h1>
```

### Behaviour

Internally, this uses the [Alpine Intersect](https://alpinejs.dev/plugins/intersect) plugin.

When the root element (the one with `x-data`) scrolls into the viewport, any elements with the `x-animate` directive will have the relevant `animate--*` classes added to them, which triggers the animation(s).

> [!TIP]
> To simplify things, usually something like a `section` will be the root element (with `x-data`) and children to be animated will have the `x-animate` directive. See the example above.


More specifically – and this is the opinionated bit – when the *top* of the root element scrolls more than `10vh` the classes are applied.

The effective `10%` bottom margin can be changed by supplying an `offset` key/value pair in an object.

```html
<h1 x-data="animate({ offset: -50% })"
```

Note that the value should be negative. See [https://alpinejs.dev/plugins/intersect#margin]() for details.

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

#### Combined usage

The `duration` and `delay` modifiers can be combined in either order.

```html
<h1 x-data="animate" x-animate.duration.500ms.delay.500ms>...</h1>
```
