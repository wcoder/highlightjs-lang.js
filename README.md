# highlightjs-lang.js [![npm](https://img.shields.io/npm/v/highlightjs-lang.js.svg)](https://www.npmjs.com/package/highlightjs-lang.js) ![npm](https://img.shields.io/npm/dw/highlightjs-lang.js.svg)

[Highlight.js](https://github.com/highlightjs/highlight.js) plugin for display language of syntax highlight.

[DEMO](http://wcoder.github.io/highlightjs-lang.js/)

## Install

#### Npm
```
npm i highlightjs-lang.js
```

#### Bower
```
bower install highlightjs-lang
```

#### Getting the library from CDN

```html
<script src="//cdn.jsdelivr.net/npm/highlightjs-lang.js@1.0.0/dist/highlightjs-lang.min.js"></script>
```

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
hljs.initHighlightingOnLoad();

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

## More plugins

- [highlightjs-line-numbers.js](https://github.com/wcoder/highlightjs-line-numbers.js) — Line numbering plugin.

---
&copy; 2015 Yauheni Pakala | MIT License
