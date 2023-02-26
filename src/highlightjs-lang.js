(function (w, d) {
  'use strict';

  // TODO: add more langs
  var defaultLangNamesMap = {
    cpp: 'C++',
    cs: 'C#',
    csharp: 'C#',
    fsharp: 'F#',
    objectivec: 'Objective-C',
  };

  if (typeof w.hljs === 'undefined') {
    console.error('highlight.js not detected!');
  } else {
    w.hljs.initLangOnLoad = initLangOnLoad;
    w.hljs.initLangBlock = initLangBlock;
  }

  function initLangOnLoad (options) {
    if (d.readyState === 'interactive' || d.readyState === 'complete') {
      documentReady(options);
    } else {
      w.addEventListener('DOMContentLoaded', function () {
        documentReady(options);
      });
    }
  }

  function documentReady (options) {
    try {
      var blocks = d.querySelectorAll('code.hljs,code.nohighlight');

      for (var i in blocks) {
        if (blocks.hasOwnProperty(i)) {
          if (!isPluginDisabledForBlock(blocks[i])) {
            initLangBlock(blocks[i], options);
          }
        }
      }
    } catch (e) {
        w.console.error('hljs-lang error: ', e);
    }
  }

  function isPluginDisabledForBlock(element) {
    return element.classList.contains('nohljslang');
  }

  function initLangBlock (element, options) {
    if (typeof element !== 'object') return;

    var lang = getLangNameFromElement(element);
    var internalOptions = mapOptions(element, lang, options);

    if (lang !== '') {
      var langPanel = document.createElement('div');
      langPanel.className = 'hljs-lang';
      langPanel.textContent = convertLangName(lang, internalOptions);
      element.parentNode.insertBefore(langPanel, element);
    }
  }

  /**
   * @param {HTMLElement} element Code block.
   * @param {Object} options External API options.
   * @returns {Object} Internal API options.
   */
  function mapOptions (element, langKey, options) {
    options = options || {};
    return {
      overrideNames: getOverrideNamesOption(element, langKey, options),
      fallback: getFallbackOption(options),
    };
  }

  function getOverrideNamesOption (element, langKey, options) {
    var overrideNames = {};

    if (!!options.overrideNames) {
      overrideNames = options.overrideNames;
    }

    // can be overridden because local option is priority
    var value = getAttribute(element, 'data-lang-name');
    if (!!value) {
      var opts = {};
      opts[langKey] = value;
      overrideNames = opts;
    }

    return overrideNames;
  }

  function getFallbackOption (options) {
    return !!options.fallback
      ? options.fallback
      : defaultFallbackOption;
  }

  function defaultFallbackOption (langKey) {
    return langKey;
  }

  function getLangNameFromElement (element) {
    var classes = element.className.split(' ');
    var lang = getLangNameFromClasses(classes);
    return lang;
  }

  function getLangNameFromClasses(classes) {
    // TODO: define lang for auto-syntax
    if (!!classes && classes.length > 1 && classes[1] === 'hljs') {
      return classes[0];
    }
    return '';
  }

  function convertLangName(langKey, options)
  {
    var overriddenLangName = options.overrideNames[langKey];
    if (!!overriddenLangName) {
      return overriddenLangName;
    }

    var langName = defaultLangNamesMap[langKey];
    if (!!langName) {
      return langName;
    }

    return options.fallback(langKey);
  }

  /**
   * @param {HTMLElement} element Code block.
   * @param {String} attrName Attribute name.
   * @returns {String} Attribute value or empty.
   */
  function getAttribute (element, attrName) {
    return element.hasAttribute(attrName) ? element.getAttribute(attrName) : null;
  }

}(window, document));