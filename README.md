# highlightjs-lang.js [![npm](https://img.shields.io/npm/v/highlightjs-lang.js.svg)](https://www.npmjs.com/package/highlightjs-lang.js) ![npm](https://img.shields.io/npm/dw/highlightjs-lang.js.svg)

[Highlight.js](https://github.com/highlightjs/highlight.js) plugin for display language of syntax highlight.

[DEMO](https://wcoder.github.io/highlightjs-lang.js/)

## Install

### Npm

```bash
npm i highlightjs-lang.js
```

### Bower

```bash
bower install highlightjs-lang
```

#### Getting the library from CDN

```html
<script src="//cdn.jsdelivr.net/npm/highlightjs-lang.js@1.1.0/dist/highlightjs-lang.min.js"></script>
```

highlightjs-lang.js 1.1.0 is known to work with highlight.js 11.3.1.

## Usage

Download plugin and include file after highlight.js:

```html
<script src="path/to/highlight.min.js"></script>

<script src="path/to/highlightjs-lang.min.js"></script>
```

Add styles:

```css
.hljs-lang {
    background: #333;
    text-align: center;
    color: #fff;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
```

Initialize plugin after highlight.js:

```js
hljs.highlightAll();

hljs.initLangOnLoad();
```

Here’s an equivalent way to calling `initLangBlock` using jQuery:

```js
$(document).ready(function() {
    $('code.hljs').each(function(i, block) {
        hljs.initLangBlock(block);
    });
});
```

## Options

After version 1.1.0 plugin has optional parameter `options` - for custom setup:

version | name          | type    | default value | description
--------|---------------|---------|---------------|-----------------------
v1.1.0  | overrideNames | object  | {}            | [Override the default language names](#overrideNames)
v1.1.1  | fallback    | func(str): str | (lang) => lang | [Fallback to convert unknown names](#fallback)

### Examples of using

Options can be used in these calls:

```js
hljs.initLangOnLoad(myOptions);
```

```js
hljs.initLangBlock(myCodeBlock, myOptions);
```

### overrideNames

If you want to override the default language name, you can specify a _overridden language names_, in one of the following ways:

- Specifying the desired value in js code, as in:

```js
var myOptions = {
    overrideNames: {
        cs: 'C#',
    }
};
```

- Specifying the desired value in `data-lang-name` attribute of `code` element, as in:

```html
<pre>
    <code class="cs" data-lang-name="C#">
    ...
    </code>
</pre>
```

In both cases language name will be `C#`.

> [List of default language names](https://github.com/wcoder/highlightjs-lang.js/blob/master/src/highlightjs-lang.js#L4-L10)

### fallback

Specifying the desired format for undeclared language names:

```js
var myOptions = {
  // ...
  fallback: function (lang) {
    return '~~' + lang;
  },
  // ...
};
```

Convert all undeclared language names to names with `~~` prefix:

```
xyz -> ~~xyz
```

## Skipping some blocks

(Applies to `hljs.initLangOnLoad()` initialization only.)

If you want to skip some of your `code` blocks (to leave them unnumbered), you can mark them with `.nohljslang` class.

## More plugins

- [highlightjs-line-numbers.js](https://github.com/wcoder/highlightjs-line-numbers.js) — Line numbering plugin.

---
&copy; 2015 Yauheni Pakala | MIT License
