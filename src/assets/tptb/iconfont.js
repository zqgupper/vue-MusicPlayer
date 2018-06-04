(function(window) {
	var svgSprite = '<svg><symbol id="icon-baiduyinle" viewBox="0 0 1024 1024"><path d="M847 453.7c-4.3-181-152.3-326.5-334.4-326.5-182.1 0-330.1 145.5-334.4 326.5-64.2 4.9-114.8 58.5-114.8 124 0 68.8 55.7 124.5 124.5 124.5 13.3 0 26.2-2.1 38.2-6V461.9c0-158.3 128.3-286.6 286.6-286.6 157.7 0 285.7 127.5 286.5 285v235.9c12 3.9 24.9 6 38.2 6 68.8 0 124.5-55.7 124.5-124.5-0.1-65.5-50.7-119-114.9-124z" fill="#3EB8B0" ></path><path d="M477 377.3c-9.5 0-17.2 7.7-17.2 17.2v134.9c-18.1-16.1-41.8-26-68-26-56.5 0-102.4 45.8-102.4 102.4s45.8 102.4 102.4 102.4c55.1 0 99.9-43.5 102.2-98.1 0.1 0.1 0.2-0.1 0.2-1V394.5c0.1-9.5-7.7-17.2-17.2-17.2z m-85.1 299.3c-39.1 0-70.7-31.7-70.7-70.7 0-39.1 31.7-70.7 70.7-70.7s70.7 31.7 70.7 70.7-31.7 70.7-70.7 70.7zM723.2 499.9c-9.5 0-17.2 3.4-17.2 7.6v105.2c-3.5 35.8-31.2 63.8-68 63.8s-64.5-28-68-63.8v-99.1c0-5.6-7.7-10.2-17.2-10.2s-17.2 4.6-17.2 10.2l0.2 101.1c0.1 0.7 0.2 1.2 0.4 1.6 5.3 51.6 48.8 91.8 101.8 91.8 54.2 0 98.8-42.1 102.4-95.4V507.5c0-4.2-7.7-7.6-17.2-7.6zM552.8 612.8h-8.1c2.3-1.4 5.1-2.7 8.1-2.7v2.7z" fill="#3EB8B0" ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M370.56 236.16H106.24c-12.16 0-22.4-10.24-22.4-22.4s10.24-22.4 22.4-22.4h263.68c12.16 0 22.4 10.24 22.4 22.4 0.64 12.16-9.6 22.4-21.76 22.4z m503.68 630.4l-108.8-188.8c-6.4-10.88-1.92-24.96 8.32-30.72 10.88-6.4 24.96-1.92 30.72 8.32l108.8 188.8c6.4 10.88 1.92 24.96-8.32 30.72-10.88 6.4-24.32 1.92-30.72-8.32zM305.92 523.52H106.24c-12.16 0-22.4-10.24-22.4-22.4s10.24-22.4 22.4-22.4h199.04c12.16 0 22.4 10.24 22.4 22.4 0.64 12.16-9.6 22.4-21.76 22.4z m426.24 320.64H106.24c-12.16 0-22.4-10.24-22.4-22.4s10.24-22.4 22.4-22.4h625.92c12.16 0 22.4 10.24 22.4 22.4s-9.6 22.4-22.4 22.4z m208-411.52c0 158.08-128 286.08-286.08 286.08s-286.08-128-286.08-286.08 128-286.08 286.08-286.08 286.08 127.36 286.08 286.08z m-286.72-244.48c-134.4 0-243.84 109.44-243.84 243.84s109.44 243.84 243.84 243.84 243.84-109.44 243.84-243.84c0.64-134.4-108.8-243.84-243.84-243.84z"  ></path></symbol></svg>';
	var script = function() {
		var scripts = document.getElementsByTagName("script");
		return scripts[scripts.length - 1]
	}();
	var shouldInjectCss = script.getAttribute("data-injectcss");
	var ready = function(fn) {
		if (document.addEventListener) {
			if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
				setTimeout(fn, 0)
			} else {
				var loadFn = function() {
					document.removeEventListener("DOMContentLoaded", loadFn, false);
					fn()
				};
				document.addEventListener("DOMContentLoaded", loadFn, false)
			}
		} else if (document.attachEvent) {
			IEContentLoaded(window, fn)
		}

		function IEContentLoaded(w, fn) {
			var d = w.document,
				done = false,
				init = function() {
					if (!done) {
						done = true;
						fn()
					}
				};
			var polling = function() {
				try {
					d.documentElement.doScroll("left")
				} catch (e) {
					setTimeout(polling, 50);
					return
				}
				init()
			};
			polling();
			d.onreadystatechange = function() {
				if (d.readyState == "complete") {
					d.onreadystatechange = null;
					init()
				}
			}
		}
	};
	var before = function(el, target) {
		target.parentNode.insertBefore(el, target)
	};
	var prepend = function(el, target) {
		if (target.firstChild) {
			before(el, target.firstChild)
		} else {
			target.appendChild(el)
		}
	};

	function appendSvg() {
		var div, svg;
		div = document.createElement("div");
		div.innerHTML = svgSprite;
		svgSprite = null;
		svg = div.getElementsByTagName("svg")[0];
		if (svg) {
			svg.setAttribute("aria-hidden", "true");
			svg.style.position = "absolute";
			svg.style.width = 0;
			svg.style.height = 0;
			svg.style.overflow = "hidden";
			prepend(svg, document.body)
		}
	}
	if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
		window.__iconfont__svg__cssinject__ = true;
		try {
			document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
		} catch (e) {
			console && console.log(e)
		}
	}
	ready(appendSvg)
})(window)