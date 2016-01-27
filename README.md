# highlightjs-lang.js

Highlight.js plugin for display language of syntax highlight.

## Usage

Download plugin and include file after highlight.js:
```html
<script src="path/to/highlight.min.js"></script>

<script src="path/to/highlightjs-lang.min.js"></script>
```

Adding styles:
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

---
&copy; 2015 Yauheni Pakala | MIT License