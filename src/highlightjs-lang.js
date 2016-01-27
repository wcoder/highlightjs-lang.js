(function (w) {
	'use strict';

	if (typeof w.hljs === 'undefined') {
		console.error('highlight.js not detected!');
	} else {
		w.hljs.initLineNumbersOnLoad = initLineNumbersOnLoad;
		w.hljs.lineNumbersBlock = lineNumbersBlock;
	}

	function initLineNumbersOnLoad () {
		w.addEventListener('load', function () {
			try {
				var blocks = document.querySelectorAll('code.hljs');

				for (var i in blocks) {
					if (blocks.hasOwnProperty(i)) {
						lineNumbersBlock(blocks[i]);
					}
				}
			} catch (e) {
				console.error('highlight-lang error: ', e);
			}
		});
	}

	function lineNumbersBlock (element) {
		if (typeof element !== 'object') return;

		var classes = element.className.split(' ');
		var lang = getLangNameFromClasses(classes);

		if (lang !== '') {
			var langPanel = document.createElement('div');
			langPanel.className = 'hljs-lang';
			langPanel.textContent = convertLangName(lang);
			element.parentNode.insertBefore(langPanel, element);
		}
	}

	function getLangNameFromClasses(classes) {
		// TODO: define lang for auto-syntax
		if (!!classes && classes.length > 1 && classes[1] === 'hljs') {
			return classes[0];
		}
		return '';
	}

	function convertLangName(lang)
	{
		// TODO: add more
		var map = [
			['C#', ['cs', 'csharp']],
			['F#', ['fsharp']],
			['Objective-C', ['objectivec']]
		];

		map.forEach(function (e) {
			if (e[1].indexOf(lang) !== -1) {
				lang = e[0];
				return;
			}
		});
		return lang;
	}

}(window));