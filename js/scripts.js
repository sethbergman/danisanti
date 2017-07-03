/*!
 * Retina.js v1.3.0
 *
 * Copyright 2014 Imulus, LLC
 * Released under the MIT license
 *
 * Retina.js is an open source script that makes it easy to serve
 * high-resolution images to devices with retina displays.
 */
!function() {
	function a() {}
	function b(a) {
		return f.retinaImageSuffix + a
	}

	// function c(a, c) {
	// 	if (this.path = a || "", "undefined" != typeof c && null !== c)
	// 		this.at_2x_path = c,
	// 		this.perform_check = !1;
	// 	else {
	// 		if (void 0 !== document.createElement) {
	// 			var d = document.createElement("a");
	// 			d.href = this.path,
	// 			d.pathname = d.pathname.replace(g, b),
	// 			this.at_2x_path = d.href
	// 		} else {
	// 			var e = this.path.split("?");
	// 			e[0] = e[0].replace(g, b),
	// 			this.at_2x_path = e.join("?")
	// 		}
	// 		this.perform_check = !0
	// 	}
	// }
	// function d(a) {
	// 	this.el = a,
	// 	this.path = new c(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
	// 	var b = this;
	// 	this.path.check_2x_variant(function(a) {
	// 		a && b.swap()
	// 	})
	// }
	var e = "undefined" == typeof exports
			? window
			: exports,
		f = {
			retinaImageSuffix: "@2x",
			check_mime_type: !0,
			force_original_dimensions: !0
		};
	e.Retina = a,
	a.configure = function(a) {
		null === a && (a = {});
		for (var b in a)
			a.hasOwnProperty(b) && (f[b] = a[b])
	},
	a.init = function(a) {
		null === a && (a = e);
		var b = a.onload || function() {};
		a.onload = function() {
			var a,
				c,
				e = document.getElementsByTagName("img"),
				f = [];
			for (a = 0; a < e.length; a += 1)
				c = e[a],
				c.getAttributeNode("data-no-retina") || f.push(new d(c));
			b()
		}
	},
	a.isRetina = function() {
		var a = "(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";
		return e.devicePixelRatio > 1
			? !0
			: e.matchMedia && e.matchMedia(a).matches
				? !0
				: !1
	};
	var g = /\.\w+$/;
	e.RetinaImagePath = c,
	c.confirmed_paths = [],
	c.prototype.is_external = function() {
		return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
	},
	c.prototype.check_2x_variant = function(a) {
		var b,
			d = this;
		return this.is_external()
			? a(!1)
			: this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path
				? this.at_2x_path in c.confirmed_paths
					? a(!0)
					: (b = new XMLHttpRequest, b.open("HEAD", this.at_2x_path), b.onreadystatechange = function() {
						if (4 !== b.readyState)
							return a(!1);
						if (b.status >= 200 && b.status <= 399) {
							if (f.check_mime_type) {
								var e = b.getResponseHeader("Content-Type");
								if (null === e || !e.match(/^image/i))
									return a(!1)
							}
							return c.confirmed_paths.push(d.at_2x_path),
							a(!0)
						}
						return a(!1)
					},
					b.send(),
					void 0)
				: a(!0)
	},
	e.RetinaImage = d,
	d.prototype.swap = function(a) {
		function b() {
			c.el.complete
				? (f.force_original_dimensions && (c.el.setAttribute("width", c.el.offsetWidth), c.el.setAttribute("height", c.el.offsetHeight)), c.el.setAttribute("src", a))
				: setTimeout(b, 5)
		}
		"undefined" == typeof a && (a = this.path.at_2x_path);
		var c = this;
		b()
	},
	a.isRetina() && a.init(e)
}();

/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery)
	throw new Error("Bootstrap's JavaScript requires jQuery");

+ function(a) {
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1)
		throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(a) {
	"use strict";
	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c])
				return {end: b[c]};
	return !1
	}
	a.fn.emulateTransitionEnd = function(b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function() {
			c = !0
		});
		var e = function() {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b),
		this
	},
	a(function() {
		a.support.transition = b(),
		a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function(b) {
				return a(b.target).is(this)
					? b.handleObj.handler.apply(this, arguments)
					: void 0
			}
		})
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)),
			"string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function(b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.1",
	d.TRANSITION_DURATION = 150,
	d.prototype.close = function(b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a(f);
		b && b.preventDefault(),
		g.length || (g = e.closest(".alert")),
		g.trigger(b = a.Event("close.bs.alert")),
		b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade")
			? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION)
			: c())
	};
	var e = a.fn.alert;
	a.fn.alert = b,
	a.fn.alert.Constructor = d,
	a.fn.alert.noConflict = function() {
		return a.fn.alert = e,
		this
	},
	a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)),
			"toggle" == b
				? e.toggle()
				: b && e.setState(b)
		})
	}
	var c = function(b, d) {
		this.$element = a(b),
		this.options = a.extend({}, c.DEFAULTS, d),
		this.isLoading = !1
	};
	c.VERSION = "3.3.1",
	c.DEFAULTS = {
		loadingText: "loading..."
	},
	c.prototype.setState = function(b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input")
				? "val"
				: "html",
			f = d.data();
		b += "Text",
		null == f.resetText && d.data("resetText", d[e]()),
		setTimeout(a.proxy(function() {
			d[e](null == f[b]
				? this.options[b]
				: f[b]),
			"loadingText" == b
				? (this.isLoading = !0, d.addClass(c).attr(c, c))
				: this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
		}, this), 0)
	},
	c.prototype.toggle = function() {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active")
				? a = !1
				: b.find(".active").removeClass("active")),
			a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
		} else
			this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
		a && this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b,
	a.fn.button.Constructor = c,
	a.fn.button.noConflict = function() {
		return a.fn.button = d,
		this
	},
	a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
		var d = a(c.target);
		d.hasClass("btn") || (d = d.closest(".btn")),
		b.call(d, "toggle"),
		c.preventDefault()
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.carousel"),
				f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
				g = "string" == typeof b
					? b
					: f.slide;
			e || d.data("bs.carousel", e = new c(this, f)),
			"number" == typeof b
				? e.to(b)
				: g
					? e[g]()
					: f.interval && e.pause().cycle()
		})
	}
	var c = function(b, c) {
		this.$element = a(b),
		this.$indicators = this.$element.find(".carousel-indicators"),
		this.options = c,
		this.paused = this.sliding = this.interval = this.$active = this.$items = null,
		this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
		"hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
	};
	c.VERSION = "3.3.1",
	c.TRANSITION_DURATION = 600,
	c.DEFAULTS = {
		interval: 5e3,
		pause: "hover",
		wrap: !0,
		keyboard: !0
	},
	c.prototype.keydown = function(a) {
		if (!/input|textarea/i.test(a.target.tagName)) {
			switch (a.which) {
				case 37:
					this.prev();
					break;
				case 39:
					this.next();
					break;
				default:
					return
			}
			a.preventDefault()
		}
	},
	c.prototype.cycle = function(b) {
		return b || (this.paused = !1),
		this.interval && clearInterval(this.interval),
		this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
		this
	},
	c.prototype.getItemIndex = function(a) {
		return this.$items = a.parent().children(".item"),
		this.$items.index(a || this.$active)
	},
	c.prototype.getItemForDirection = function(a, b) {
		var c = "prev" == a
				? -1
				: 1,
			d = this.getItemIndex(b),
			e = (d + c) % this.$items.length;
		return this.$items.eq(e)
	},
	c.prototype.to = function(a) {
		var b = this,
			c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
		return a > this.$items.length - 1 || 0 > a
			? void 0
			: this.sliding
				? this.$element.one("slid.bs.carousel", function() {
					b.to(a)
				})
				: c == a
					? this.pause().cycle()
					: this.slide(a > c
						? "next"
						: "prev", this.$items.eq(a))
	},
	c.prototype.pause = function(b) {
		return b || (this.paused = !0),
		this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)),
		this.interval = clearInterval(this.interval),
		this
	},
	c.prototype.next = function() {
		return this.sliding
			? void 0
			: this.slide("next")
	},
	c.prototype.prev = function() {
		return this.sliding
			? void 0
			: this.slide("prev")
	},
	c.prototype.slide = function(b, d) {
		var e = this.$element.find(".item.active"),
			f = d || this.getItemForDirection(b, e),
			g = this.interval,
			h = "next" == b
				? "left"
				: "right",
			i = "next" == b
				? "first"
				: "last",
			j = this;
		if (!f.length) {
			if (!this.options.wrap)
				return;
			f = this.$element.find(".item")[i]()
		}
		if (f.hasClass("active"))
			return this.sliding = !1;
		var k = f[0],
			l = a.Event("slide.bs.carousel", {
				relatedTarget: k,
				direction: h
			});
		if (this.$element.trigger(l), !l.isDefaultPrevented()) {
			if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
				this.$indicators.find(".active").removeClass("active");
				var m = a(this.$indicators.children()[this.getItemIndex(f)]);
				m && m.addClass("active")
			}
			var n = a.Event("slid.bs.carousel", {
				relatedTarget: k,
				direction: h
			});
			return a.support.transition && this.$element.hasClass("slide")
				? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() {
					f.removeClass([b, h].join(" ")).addClass("active"),
					e.removeClass(["active", h].join(" ")),
					j.sliding = !1,
					setTimeout(function() {
						j.$element.trigger(n)
					}, 0)
				}).emulateTransitionEnd(c.TRANSITION_DURATION))
				: (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(n)),
			g && this.cycle(),
			this
		}
	};
	var d = a.fn.carousel;
	a.fn.carousel = b,
	a.fn.carousel.Constructor = c,
	a.fn.carousel.noConflict = function() {
		return a.fn.carousel = d,
		this
	};
	var e = function(c) {
		var d,
			e = a(this),
			f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
		if (f.hasClass("carousel")) {
			var g = a.extend({}, f.data(), e.data()),
				h = e.attr("data-slide-to");
			h && (g.interval = !1),
			b.call(f, g),
			h && f.data("bs.carousel").to(h),
			c.preventDefault()
		}
	};
	a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
	a(window).on("load", function() {
		a('[data-ride="carousel"]').each(function() {
			var c = a(this);
			b.call(c, c.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		var c,
			d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}
	function c(b) {
		return this.each(function() {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && "show" == b && (f.toggle = !1),
			e || c.data("bs.collapse", e = new d(this, f)),
			"string" == typeof b && e[b]()
		})
	}
	var d = function(b, c) {
		this.$element = a(b),
		this.options = a.extend({}, d.DEFAULTS, c),
		this.$trigger = a(this.options.trigger).filter('[href="#' + b.id + '"], [data-target="#' + b.id + '"]'),
		this.transitioning = null,
		this.options.parent
			? this.$parent = this.getParent()
			: this.addAriaAndCollapsedClass(this.$element, this.$trigger),
		this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.1",
	d.TRANSITION_DURATION = 350,
	d.DEFAULTS = {
		toggle: !0,
		trigger: '[data-toggle="collapse"]'
	},
	d.prototype.dimension = function() {
		var a = this.$element.hasClass("width");
		return a
			? "width"
			: "height"
	},
	d.prototype.show = function() {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b,
				e = this.$parent && this.$parent.find("> .panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
					this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
					this.transitioning = 1;
					var h = function() {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
						this.transitioning = 0,
						this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition)
						return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	},
	d.prototype.hide = function() {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight,
				this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
				this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
				this.transitioning = 1;
				var e = function() {
					this.transitioning = 0,
					this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition
					? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION)
					: e.call(this)
			}
		}
	},
	d.prototype.toggle = function() {
		this[this.$element.hasClass("in")
				? "hide"
				: "show"]()
	},
	d.prototype.getParent = function() {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	},
	d.prototype.addAriaAndCollapsedClass = function(a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c),
		b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c,
	a.fn.collapse.Constructor = d,
	a.fn.collapse.noConflict = function() {
		return a.fn.collapse = e,
		this
	},
	a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g
				? "toggle"
				: a.extend({}, e.data(), {trigger: this});
		c.call(f, h)
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		b && 3 === b.which || (a(e).remove(), a(f).each(function() {
			var d = a(this),
				e = c(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (e.trigger(b = a.Event("hide.bs.dropdown", f)), b.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f)))
		}))
	}
	function c(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length
			? d
			: b.parent()
	}
	function d(b) {
		return this.each(function() {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)),
			"string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function(b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.1",
	g.prototype.toggle = function(d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = c(e),
				g = f.hasClass("open");
			if (b(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())
					return;
				e.trigger("focus").attr("aria-expanded", "true"),
				f.toggleClass("open").trigger("shown.bs.dropdown", h)
			}
			return !1
		}
	},
	g.prototype.keydown = function(b) {
		if (/(38|40|27|32)/.test(b.which) && !/input|textarea/i.test(b.target.tagName)) {
			var d = a(this);
			if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = c(d),
					g = e.hasClass("open");
				if (!g && 27 != b.which || g && 27 == b.which)
					return 27 == b.which && e.find(f).trigger("focus"),
					d.trigger("click");
				var h = " li:not(.divider):visible a",
					i = e.find('[role="menu"]' + h + ', [role="listbox"]' + h);
				if (i.length) {
					var j = i.index(b.target);
					38 == b.which && j > 0 && j--,
					40 == b.which && j < i.length - 1 && j++, ~ j || (j = 0),
					i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d,
	a.fn.dropdown.Constructor = g,
	a.fn.dropdown.noConflict = function() {
		return a.fn.dropdown = h,
		this
	},
	a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="menu"]', g.prototype.keydown).on("keydown.bs.dropdown.data-api", '[role="listbox"]', g.prototype.keydown)
}(jQuery), + function(a) {
	"use strict";
	function b(b, d) {
		return this.each(function() {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)),
			"string" == typeof b
				? f[b](d)
				: g.show && f.show(d)
		})
	}
	var c = function(b, c) {
		this.options = c,
		this.$body = a(document.body),
		this.$element = a(b),
		this.$backdrop = this.isShown = null,
		this.scrollbarWidth = 0,
		this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.1",
	c.TRANSITION_DURATION = 300,
	c.BACKDROP_TRANSITION_DURATION = 150,
	c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	},
	c.prototype.toggle = function(a) {
		return this.isShown
			? this.hide()
			: this.show(a)
	},
	c.prototype.show = function(b) {
		var d = this,
			e = a.Event("show.bs.modal", {relatedTarget: b});
		this.$element.trigger(e),
		this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body),
			d.$element.show().scrollTop(0),
			d.options.backdrop && d.adjustBackdrop(),
			d.adjustDialog(),
			e && d.$element[0].offsetWidth,
			d.$element.addClass("in").attr("aria-hidden", !1),
			d.enforceFocus();
			var f = a.Event("shown.bs.modal", {relatedTarget: b});
			e
				? d.$element.find(".modal-dialog").one("bsTransitionEnd", function() {
					d.$element.trigger("focus").trigger(f)
				}).emulateTransitionEnd(c.TRANSITION_DURATION)
				: d.$element.trigger("focus").trigger(f)
		}))
	},
	c.prototype.hide = function(b) {
		b && b.preventDefault(),
		b = a.Event("hide.bs.modal"),
		this.$element.trigger(b),
		this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade")
			? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION)
			: this.hideModal())
	},
	c.prototype.enforceFocus = function() {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
			this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	},
	c.prototype.escape = function() {
		this.isShown && this.options.keyboard
			? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
				27 == a.which && this.hide()
			}, this))
			: this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	},
	c.prototype.resize = function() {
		this.isShown
			? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this))
			: a(window).off("resize.bs.modal")
	},
	c.prototype.hideModal = function() {
		var a = this;
		this.$element.hide(),
		this.backdrop(function() {
			a.$body.removeClass("modal-open"),
			a.resetAdjustments(),
			a.resetScrollbar(),
			a.$element.trigger("hidden.bs.modal")
		})
	},
	c.prototype.removeBackdrop = function() {
		this.$backdrop && this.$backdrop.remove(),
		this.$backdrop = null
	},
	c.prototype.backdrop = function(b) {
		var d = this,
			e = this.$element.hasClass("fade")
				? "fade"
				: "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a('<div class="modal-backdrop ' + e + '" />').prependTo(this.$element).on("click.dismiss.bs.modal", a.proxy(function(a) {
				a.target === a.currentTarget && ("static" == this.options.backdrop
					? this.$element[0].focus.call(this.$element[0])
					: this.hide.call(this))
			}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)
				return;
			f
				? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
				: b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function() {
				d.removeBackdrop(),
				b && b()
			};
			a.support.transition && this.$element.hasClass("fade")
				? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION)
				: g()
		} else
			b && b()
	},
	c.prototype.handleUpdate = function() {
		this.options.backdrop && this.adjustBackdrop(),
		this.adjustDialog()
	},
	c.prototype.adjustBackdrop = function() {
		this.$backdrop.css("height", 0).css("height", this.$element[0].scrollHeight)
	},
	c.prototype.adjustDialog = function() {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a
				? this.scrollbarWidth
				: "",
			paddingRight: this.bodyIsOverflowing && !a
				? this.scrollbarWidth
				: ""
		})
	},
	c.prototype.resetAdjustments = function() {
		this.$element.css({paddingLeft: "", paddingRight: ""})
	},
	c.prototype.checkScrollbar = function() {
		this.bodyIsOverflowing = document.body.scrollHeight > document.documentElement.clientHeight,
		this.scrollbarWidth = this.measureScrollbar()
	},
	c.prototype.setScrollbar = function() {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	},
	c.prototype.resetScrollbar = function() {
		this.$body.css("padding-right", "")
	},
	c.prototype.measureScrollbar = function() {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure",
		this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a),
		b
	};
	var d = a.fn.modal;
	a.fn.modal = b,
	a.fn.modal.Constructor = c,
	a.fn.modal.noConflict = function() {
		return a.fn.modal = d,
		this
	},
	a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal")
				? "toggle"
				: a.extend({
					remote: !/#/.test(e) && e
				}, f.data(), d.data());
		d.is("a") && c.preventDefault(),
		f.one("show.bs.modal", function(a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
				d.is(":visible") && d.trigger("focus")
			})
		}),
		b.call(f, g, this)
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b,
				g = f && f.selector;
			(e || "destroy" != b) && (g
				? (e || d.data("bs.tooltip", e = {}), e[g] || (e[g] = new c(this, f)))
				: e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
		this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null,
		this.init("tooltip", a, b)
	};
	c.VERSION = "3.3.1",
	c.TRANSITION_DURATION = 150,
	c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	},
	c.prototype.init = function(b, c, d) {
		this.enabled = !0,
		this.type = b,
		this.$element = a(c),
		this.options = this.getOptions(d),
		this.$viewport = this.options.viewport && a(this.options.viewport.selector || this.options.viewport);
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g)
				this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g
						? "mouseenter"
						: "focusin",
					i = "hover" == g
						? "mouseleave"
						: "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
				this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector
			? this._options = a.extend({}, this.options, {
				trigger: "manual",
				selector: ""
			})
			: this.fixTitle()
	},
	c.prototype.getDefaults = function() {
		return c.DEFAULTS
	},
	c.prototype.getOptions = function(b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
		b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}),
		b
	},
	c.prototype.getDelegateOptions = function() {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function(a, d) {
			c[a] != d && (b[a] = d)
		}),
		b
	},
	c.prototype.enter = function(b) {
		var c = b instanceof this.constructor
			? b
			: a(b.currentTarget).data("bs." + this.type);
		return c && c.$tip && c.$tip.is(":visible")
			? void(c.hoverState = "in")
			: (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show
				? void(c.timeout = setTimeout(function() {
					"in" == c.hoverState && c.show()
				}, c.options.delay.show))
				: c.show())
	},
	c.prototype.leave = function(b) {
		var c = b instanceof this.constructor
			? b
			: a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)),
		clearTimeout(c.timeout),
		c.hoverState = "out",
		c.options.delay && c.options.delay.hide
			? void(c.timeout = setTimeout(function() {
				"out" == c.hoverState && c.hide()
			}, c.options.delay.hide))
			: c.hide()
	},
	c.prototype.show = function() {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d)
				return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(),
			f.attr("id", g),
			this.$element.attr("aria-describedby", g),
			this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement
					? this.options.placement.call(this, f[0], this.$element[0])
					: this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"),
			f.detach().css({top: 0, left: 0, display: "block"}).addClass(h).data("bs." + this.type, this),
			this.options.container
				? f.appendTo(this.options.container)
				: f.insertAfter(this.$element);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.options.container
						? a(this.options.container)
						: this.$element.parent(),
					p = this.getPosition(o);
				h = "bottom" == h && k.bottom + m > p.bottom
					? "top"
					: "top" == h && k.top - m < p.top
						? "bottom"
						: "right" == h && k.right + l > p.width
							? "left"
							: "left" == h && k.left - l < p.left
								? "right"
								: h,
				f.removeClass(n).addClass(h)
			}
			var q = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(q, h);
			var r = function() {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type),
				e.hoverState = null,
				"out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade")
				? f.one("bsTransitionEnd", r).emulateTransitionEnd(c.TRANSITION_DURATION)
				: r()
		}
	},
	c.prototype.applyPlacement = function(b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0),
		isNaN(h) && (h = 0),
		b.top = b.top + g,
		b.left = b.left + h,
		a.offset.setOffset(d[0], a.extend({
			using: function(a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0),
		d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left
			? b.left += k.left
			: b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l
				? 2 * k.left - e + i
				: 2 * k.top - f + j,
			n = l
				? "offsetWidth"
				: "offsetHeight";
		d.offset(b),
		this.replaceArrow(m, d[0][n], l)
	},
	c.prototype.replaceArrow = function(a, b, c) {
		this.arrow().css(c
			? "left"
			: "top", 50 * (1 - a / b) + "%").css(c
			? "top"
			: "left", "")
	},
	c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html
				? "html"
				: "text"](b),
		a.removeClass("fade in top bottom left right")
	},
	c.prototype.hide = function(b) {
		function d() {
			"in" != e.hoverState && f.detach(),
			e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
			b && b()
		}
		var e = this,
			f = this.tip(),
			g = a.Event("hide.bs." + this.type);
		return this.$element.trigger(g),
		g.isDefaultPrevented()
			? void 0
			: (f.removeClass("in"), a.support.transition && this.$tip.hasClass("fade")
				? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION)
				: d(), this.hoverState = null, this)
	},
	c.prototype.fixTitle = function() {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	},
	c.prototype.hasContent = function() {
		return this.getTitle()
	},
	c.prototype.getPosition = function(b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = d
				? {
					top: 0,
					left: 0
				}
				: b.offset(),
			g = {
				scroll: d
					? document.documentElement.scrollTop || document.body.scrollTop
					: b.scrollTop()
			},
			h = d
				? {
					width: a(window).width(),
					height: a(window).height()
				}
				: null;
		return a.extend({}, e, g, h, f)
	},
	c.prototype.getCalculatedOffset = function(a, b, c, d) {
		return "bottom" == a
			? {
				top: b.top + b.height,
				left: b.left + b.width / 2 - c / 2
			}
			: "top" == a
				? {
					top: b.top - d,
					left: b.left + b.width / 2 - c / 2
				}
				: "left" == a
					? {
						top: b.top + b.height / 2 - d / 2,
						left: b.left - c
					}
					: {
						top: b.top + b.height / 2 - d / 2,
						left: b.left + b.width
					}
	},
	c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport)
			return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top
				? e.top = g.top - h
				: i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left
				? e.left = g.left - j
				: k > g.width && (e.left = g.left + g.width - k)
		}
		return e
	},
	c.prototype.getTitle = function() {
		var a,
			b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title
			? c.title.call(b[0])
			: c.title)
	},
	c.prototype.getUID = function(a) {
		do
			a +=~~ (1e6 * Math.random());
		while (document.getElementById(a));
		return a
	},
	c.prototype.tip = function() {
		return this.$tip = this.$tip || a(this.options.template)
	},
	c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	},
	c.prototype.enable = function() {
		this.enabled = !0
	},
	c.prototype.disable = function() {
		this.enabled = !1
	},
	c.prototype.toggleEnabled = function() {
		this.enabled = !this.enabled
	},
	c.prototype.toggle = function(b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))),
		c.tip().hasClass("in")
			? c.leave(c)
			: c.enter(c)
	},
	c.prototype.destroy = function() {
		var a = this;
		clearTimeout(this.timeout),
		this.hide(function() {
			a.$element.off("." + a.type).removeData("bs." + a.type)
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b,
	a.fn.tooltip.Constructor = c,
	a.fn.tooltip.noConflict = function() {
		return a.fn.tooltip = d,
		this
	}
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b,
				g = f && f.selector;
			(e || "destroy" != b) && (g
				? (e || d.data("bs.popover", e = {}), e[g] || (e[g] = new c(this, f)))
				: e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function(a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip)
		throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.1",
	c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}),
	c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
	c.prototype.constructor = c,
	c.prototype.getDefaults = function() {
		return c.DEFAULTS
	},
	c.prototype.setContent = function() {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html
				? "html"
				: "text"](b),
		a.find(".popover-content").children().detach().end()[this.options.html
				? "string" == typeof c
					? "html"
					: "append"
				: "text"](c),
		a.removeClass("fade top bottom left right in"),
		a.find(".popover-title").html() || a.find(".popover-title").hide()
	},
	c.prototype.hasContent = function() {
		return this.getTitle() || this.getContent()
	},
	c.prototype.getContent = function() {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content
			? b.content.call(a[0])
			: b.content)
	},
	c.prototype.arrow = function() {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	},
	c.prototype.tip = function() {
		return this.$tip || (this.$tip = a(this.options.template)),
		this.$tip
	};
	var d = a.fn.popover;
	a.fn.popover = b,
	a.fn.popover.Constructor = c,
	a.fn.popover.noConflict = function() {
		return a.fn.popover = d,
		this
	}
}(jQuery), + function(a) {
	"use strict";
	function b(c, d) {
		var e = a.proxy(this.process, this);
		this.$body = a("body"),
		this.$scrollElement = a(a(c).is("body")
			? window
			: c),
		this.options = a.extend({}, b.DEFAULTS, d),
		this.selector = (this.options.target || "") + " .nav li > a",
		this.offsets = [],
		this.targets = [],
		this.activeTarget = null,
		this.scrollHeight = 0,
		this.$scrollElement.on("scroll.bs.scrollspy", e),
		this.refresh(),
		this.process()
	}
	function c(c) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)),
			"string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.1",
	b.DEFAULTS = {
		offset: 10
	},
	b.prototype.getScrollHeight = function() {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	},
	b.prototype.refresh = function() {
		var b = "offset",
			c = 0;
		a.isWindow(this.$scrollElement[0]) || (b = "position", c = this.$scrollElement.scrollTop()),
		this.offsets = [],
		this.targets = [],
		this.scrollHeight = this.getScrollHeight();
		var d = this;
		this.$body.find(this.selector).map(function() {
			var d = a(this),
				e = d.data("target") || d.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[
					f[b]().top + c,
					e
				]
			] || null
		}).sort(function(a, b) {
			return a[0] - b[0]
		}).each(function() {
			d.offsets.push(this[0]),
			d.targets.push(this[1])
		})
	},
	b.prototype.process = function() {
		var a,
			b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d)
			return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0])
			return this.activeTarget = null,
			this.clear();
		for (a = e.length; a--;)
			g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
	},
	b.prototype.activate = function(b) {
		this.activeTarget = b,
		this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
		d.trigger("activate.bs.scrollspy")
	},
	b.prototype.clear = function() {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c,
	a.fn.scrollspy.Constructor = b,
	a.fn.scrollspy.noConflict = function() {
		return a.fn.scrollspy = d,
		this
	},
	a(window).on("load.bs.scrollspy.data-api", function() {
		a('[data-spy="scroll"]').each(function() {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)),
			"string" == typeof b && e[b]()
		})
	}
	var c = function(b) {
		this.element = a(b)
	};
	c.VERSION = "3.3.1",
	c.TRANSITION_DURATION = 150,
	c.prototype.show = function() {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {relatedTarget: b[0]}),
				g = a.Event("show.bs.tab", {relatedTarget: e[0]});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c),
				this.activate(h, h.parent(), function() {
					e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}),
					b.trigger({type: "shown.bs.tab", relatedTarget: e[0]})
				})
			}
		}
	},
	c.prototype.activate = function(b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
			b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
			h
				? (b[0].offsetWidth, b.addClass("in"))
				: b.removeClass("fade"),
			b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
			e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h
			? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION)
			: f(),
		g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b,
	a.fn.tab.Constructor = c,
	a.fn.tab.noConflict = function() {
		return a.fn.tab = d,
		this
	};
	var e = function(c) {
		c.preventDefault(),
		b.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function(a) {
	"use strict";
	function b(b) {
		return this.each(function() {
			var d = a(this),
				e = d.data("bs.affix"),
				f = "object" == typeof b && b;
			e || d.data("bs.affix", e = new c(this, f)),
			"string" == typeof b && e[b]()
		})
	}
	var c = function(b, d) {
		this.options = a.extend({}, c.DEFAULTS, d),
		this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
		this.$element = a(b),
		this.affixed = this.unpin = this.pinnedOffset = null,
		this.checkPosition()
	};
	c.VERSION = "3.3.1",
	c.RESET = "affix affix-top affix-bottom",
	c.DEFAULTS = {
		offset: 0,
		target: window
	},
	c.prototype.getState = function(a, b, c, d) {
		var e = this.$target.scrollTop(),
			f = this.$element.offset(),
			g = this.$target.height();
		if (null != c && "top" == this.affixed)
			return c > e
				? "top"
				: !1;
		if ("bottom" == this.affixed)
			return null != c
				? e + this.unpin <= f.top
					? !1
					: "bottom"
				: a - d >= e + g
					? !1
					: "bottom";
		var h = null == this.affixed,
			i = h
				? e
				: f.top,
			j = h
				? g
				: b;
		return null != c && c >= i
			? "top"
			: null != d && i + j >= a - d
				? "bottom"
				: !1
	},
	c.prototype.getPinnedOffset = function() {
		if (this.pinnedOffset)
			return this.pinnedOffset;
		this.$element.removeClass(c.RESET).addClass("affix");
		var a = this.$target.scrollTop(),
			b = this.$element.offset();
		return this.pinnedOffset = b.top - a
	},
	c.prototype.checkPositionWithEventLoop = function() {
		setTimeout(a.proxy(this.checkPosition, this), 1)
	},
	c.prototype.checkPosition = function() {
		if (this.$element.is(":visible")) {
			var b = this.$element.height(),
				d = this.options.offset,
				e = d.top,
				f = d.bottom,
				g = a("body").height();
			"object" != typeof d && (f = e = d),
			"function" == typeof e && (e = d.top(this.$element)),
			"function" == typeof f && (f = d.bottom(this.$element));
			var h = this.getState(g, b, e, f);
			if (this.affixed != h) {
				null != this.unpin && this.$element.css("top", "");
				var i = "affix" + (h
						? "-" + h
						: ""),
					j = a.Event(i + ".bs.affix");
				if (this.$element.trigger(j), j.isDefaultPrevented())
					return;
				this.affixed = h,
				this.unpin = "bottom" == h
					? this.getPinnedOffset()
					: null,
				this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
			}
			"bottom" == h && this.$element.offset({
				top: g - b - f
			})
		}
	};
	var d = a.fn.affix;
	a.fn.affix = b,
	a.fn.affix.Constructor = c,
	a.fn.affix.noConflict = function() {
		return a.fn.affix = d,
		this
	},
	a(window).on("load", function() {
		a('[data-spy="affix"]').each(function() {
			var c = a(this),
				d = c.data();
			d.offset = d.offset || {},
			null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
			null != d.offsetTop && (d.offset.top = d.offsetTop),
			b.call(c, d)
		})
	})
}(jQuery);

/*!
 * animsition v4.0.2
 * A simple and easy jQuery plugin for CSS animated page transitions.
 * http://blivesta.github.io/animsition
 * License : MIT
 * Author : blivesta (http://blivesta.com/)
 */
!function(t) {
	"use strict";
	"function" == typeof define && define.amd
		? define(["jquery"], t)
		: "object" == typeof exports
			? module.exports = t(require("jquery"))
			: t(jQuery)
}(function(t) {
	"use strict";
	var n = "animsition",
		i = {
			init: function(a) {
				a = t.extend({
					inClass: "fade-in",
					outClass: "fade-out",
					inDuration: 1500,
					outDuration: 800,
					linkElement: ".animsition-link",
					loading: !0,
					loadingParentElement: "body",
					loadingClass: "animsition-loading",
					loadingInner: "",
					timeout: !1,
					timeoutCountdown: 5e3,
					onLoadEvent: !0,
					browser: [
						"animation-duration", "-webkit-animation-duration"
					],
					overlay: !1,
					overlayClass: "animsition-overlay-slide",
					overlayParentElement: "body",
					transition: function(t) {
						window.location.href = t
					}
				}, a),
				i.settings = {
					timer: !1,
					data: {
						inClass: "animsition-in-class",
						inDuration: "animsition-in-duration",
						outClass: "animsition-out-class",
						outDuration: "animsition-out-duration",
						overlay: "animsition-overlay"
					},
					events: {
						inStart: "animsition.inStart",
						inEnd: "animsition.inEnd",
						outStart: "animsition.outStart",
						outEnd: "animsition.outEnd"
					}
				};
				var o = i.supportCheck.call(this, a);
				if (!o && a.browser.length > 0 && (!o || !this.length))
					return "console" in window || (window.console = {}, window.console.log = function(t) {
						return t
					}),
					this.length || console.log("Animsition: Element does not exist on page."),
					o || console.log("Animsition: Does not support this browser."),
					i.destroy.call(this);
				var e = i.optionCheck.call(this, a);
				return e && t("." + a.overlayClass).length <= 0 && i.addOverlay.call(this, a),
				a.loading && t("." + a.loadingClass).length <= 0 && i.addLoading.call(this, a),
				this.each(function() {
					var o = this,
						e = t(this),
						s = t(window),
						r = t(document),
						l = e.data(n);
					l || (a = t.extend({}, a), e.data(n, {options: a}), a.timeout && i.addTimer.call(o), a.onLoadEvent && s.on("load." + n, function() {
						i.settings.timer && clearTimeout(i.settings.timer),
						i["in"].call(o)
					}), s.on("pageshow." + n, function(t) {
						t.originalEvent.persisted && i["in"].call(o)
					}), s.on("unload." + n, function() {}), r.on("click." + n, a.linkElement, function(n) {
						n.preventDefault();
						var a = t(this),
							e = a.attr("href");
						2 === n.which || n.metaKey || n.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && n.ctrlKey
							? window.open(e, "_blank")
							: i.out.call(o, a, e)
					}))
				})
			},
			addOverlay: function(n) {
				t(n.overlayParentElement).prepend('<div class="' + n.overlayClass + '"></div>')
			},
			addLoading: function(n) {
				t(n.loadingParentElement).append('<div class="' + n.loadingClass + '">' + n.loadingInner + "</div>")
			},
			removeLoading: function() {
				var i = t(this),
					a = i.data(n).options,
					o = t(a.loadingParentElement).children("." + a.loadingClass);
				o.fadeOut().remove()
			},
			addTimer: function() {
				var a = this,
					o = t(this),
					e = o.data(n).options;
				i.settings.timer = setTimeout(function() {
					i["in"].call(a),
					t(window).off("load." + n)
				}, e.timeoutCountdown)
			},
			supportCheck: function(n) {
				var i = t(this),
					a = n.browser,
					o = a.length,
					e = !1;
				0 === o && (e = !0);
				for (var s = 0; o > s; s++)
					if ("string" == typeof i.css(a[s])) {
						e = !0;
						break
					}
				return e
			},
			optionCheck: function(n) {
				var a,
					o = t(this);
				return a = n.overlay || o.data(i.settings.data.overlay)
					? !0
					: !1
			},
			animationCheck: function(i, a, o) {
				var e = t(this),
					s = e.data(n).options,
					r = typeof i,
					l = !a && "number" === r,
					d = a && "string" === r && i.length > 0;
				return l || d
					? i = i
					: a && o
						? i = s.inClass
						: !a && o
							? i = s.inDuration
							: a && !o
								? i = s.outClass
								: a || o || (i = s.outDuration),
				i
			},
			"in": function() {
				var a = this,
					o = t(this),
					e = o.data(n).options,
					s = o.data(i.settings.data.inDuration),
					r = o.data(i.settings.data.inClass),
					l = i.animationCheck.call(a, s, !1, !0),
					d = i.animationCheck.call(a, r, !0, !0),
					u = i.optionCheck.call(a, e),
					c = o.data(n).outClass;
				e.loading && i.removeLoading.call(a),
				c && o.removeClass(c),
				u
					? i.inOverlay.call(a, d, l)
					: i.inDefault.call(a, d, l)
			},
			inDefault: function(n, a) {
				var o = t(this);
				o.css({
					"animation-duration": a + "ms"
				}).addClass(n).trigger(i.settings.events.inStart).animateCallback(function() {
					o.removeClass(n).css({opacity: 1}).trigger(i.settings.events.inEnd)
				})
			},
			inOverlay: function(a, o) {
				var e = t(this),
					s = e.data(n).options;
				e.css({opacity: 1}).trigger(i.settings.events.inStart),
				t(s.overlayParentElement).children("." + s.overlayClass).css({
					"animation-duration": o + "ms"
				}).addClass(a).animateCallback(function() {
					e.trigger(i.settings.events.inEnd)
				})
			},
			out: function(a, o) {
				var e = this,
					s = t(this),
					r = s.data(n).options,
					l = a.data(i.settings.data.outClass),
					d = s.data(i.settings.data.outClass),
					u = a.data(i.settings.data.outDuration),
					c = s.data(i.settings.data.outDuration),
					m = l
						? l
						: d,
					g = u
						? u
						: c,
					f = i.animationCheck.call(e, m, !0, !1),
					v = i.animationCheck.call(e, g, !1, !1),
					h = i.optionCheck.call(e, r);
				s.data(n).outClass = f,
				h
					? i.outOverlay.call(e, f, v, o)
					: i.outDefault.call(e, f, v, o)
			},
			outDefault: function(a, o, e) {
				var s = t(this),
					r = s.data(n).options;
				s.css({
					"animation-duration": o + 1 + "ms"
				}).addClass(a).trigger(i.settings.events.outStart).animateCallback(function() {
					s.trigger(i.settings.events.outEnd),
					r.transition(e)
				})
			},
			outOverlay: function(a, o, e) {
				var s = this,
					r = t(this),
					l = r.data(n).options,
					d = r.data(i.settings.data.inClass),
					u = i.animationCheck.call(s, d, !0, !0);
				t(l.overlayParentElement).children("." + l.overlayClass).css({
					"animation-duration": o + 1 + "ms"
				}).removeClass(u).addClass(a).trigger(i.settings.events.outStart).animateCallback(function() {
					r.trigger(i.settings.events.outEnd),
					l.transition(e)
				})
			},
			destroy: function() {
				return this.each(function() {
					var i = t(this);
					t(window).off("." + n),
					i.css({opacity: 1}).removeData(n)
				})
			}
		};
	t.fn.animateCallback = function(n) {
		var i = "animationend webkitAnimationEnd";
		return this.each(function() {
			var a = t(this);
			a.on(i, function() {
				return a.off(i),
				n.call(this)
			})
		})
	},
	t.fn.animsition = function(a) {
		return i[a]
			? i[a].apply(this, Array.prototype.slice.call(arguments, 1))
			: "object" != typeof a && a
				? void t.error("Method " + a + " does not exist on jQuery." + n)
				: i.init.apply(this, arguments)
	}
});

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a) {
	"function" == typeof define && define.amd
		? define(["jquery"], a)
		: "object" == typeof exports
			? module.exports = a
			: a(jQuery)
}(function(a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m
			? l
			: m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q,
				m *= q,
				l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r,
				m *= r,
				l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1
					? "floor"
					: "ceil"](j / f), l = Math[l >= 1
					? "floor"
					: "ceil"](l / f), m = Math[m >= 1
					? "floor"
					: "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left,
				p = b.clientY - s.top
			}
			return b.deltaX = l,
			b.deltaY = m,
			b.deltaFactor = f,
			b.offsetX = o,
			b.offsetY = p,
			b.deltaMode = 0,
			h.unshift(b, j, l, m),
			e && clearTimeout(e),
			e = setTimeout(c, 200),
			(a.event.dispatch || a.event.handle).apply(this, h)
		}
	}
	function c() {
		f = null
	}
	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e,
		f,
		g = [
			"wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"
		],
		h = "onwheel" in document || document.documentMode >= 9
			? ["wheel"]
			: [
				"mousewheel", "DomMouseScroll", "MozMousePixelScroll"
			],
		i = Array.prototype.slice;
	if (a.event.fixHooks)
		for (var j = g.length; j;)
			a.event.fixHooks[g[--j]] = a.event.mouseHooks;
var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if (this.addEventListener)
				for (var c = h.length; c;)
					this.addEventListener(h[--c], b, !1);
		else
				this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
			a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function() {
			if (this.removeEventListener)
				for (var c = h.length; c;)
					this.removeEventListener(h[--c], b, !1);
		else
				this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"),
			a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(b) {
			var c = a(b),
				d = c["offsetParent" in a.fn
						? "offsetParent"
						: "parent"]();
			return d.length || (d = a("body")),
			parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function(b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function(a) {
			return a
				? this.bind("mousewheel", a)
				: this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
});

/*! jQuery Mobile v1.4.5 | Copyright 2010, 2014 jQuery Foundation, Inc. | jquery.org/license */

(function(e, t, n) {
	typeof define == "function" && define.amd
		? define(["jquery"], function(r) {
			return n(r, e, t),
			r.mobile
		})
		: n(e.jQuery, e, t)
})(this, document, function(e, t, n, r) {
	(function(e, t, n, r) {
		function T(e) {
			while (e && typeof e.originalEvent != "undefined")
				e = e.originalEvent;
			return e
		}
		function N(t, n) {
			var i = t.type,
				s,
				o,
				a,
				l,
				c,
				h,
				p,
				d,
				v;
			t = e.Event(t),
			t.type = n,
			s = t.originalEvent,
			o = e.event.props,
			i.search(/^(mouse|click)/) > -1 && (o = f);
			if (s)
				for (p = o.length, l; p;)
					l = o[--p],
					t[l] = s[l];
		i.search(/mouse(down|up)|click/) > -1 && !t.which && (t.which = 1);
			if (i.search(/^touch/) !== -1) {
				a = T(s),
				i = a.touches,
				c = a.changedTouches,
				h = i && i.length
					? i[0]
					: c && c.length
						? c[0]
						: r;
				if (h)
					for (d = 0, v = u.length; d < v; d++)
						l = u[d],
						t[l] = h[l]
			}
			return t
		}
		function C(t) {
			var n = {},
				r,
				s;
			while (t) {
				r = e.data(t, i);
				for (s in r)
					r[s] && (n[s] = n.hasVirtualBinding = !0);
				t = t.parentNode
			}
			return n
		}
		function k(t, n) {
			var r;
			while (t) {
				r = e.data(t, i);
				if (r && (!n || r[n]))
					return t;
				t = t.parentNode
			}
			return null
		}
		function L() {
			g = !1
		}
		function A() {
			g = !0
		}
		function O() {
			E = 0,
			v.length = 0,
			m = !1,
			A()
		}
		function M() {
			L()
		}
		function _() {
			D(),
			c = setTimeout(function() {
				c = 0,
				O()
			}, e.vmouse.resetTimerDuration)
		}
		function D() {
			c && (clearTimeout(c), c = 0)
		}
		function P(t, n, r) {
			var i;
			if (r && r[t] || !r && k(n.target, t))
				i = N(n, t),
				e(n.target).trigger(i);
			return i
		}
		function H(t) {
			var n = e.data(t.target, s),
				r;
			!m && (!E || E !== n) && (r = P("v" + t.type, t), r && (r.isDefaultPrevented() && t.preventDefault(), r.isPropagationStopped() && t.stopPropagation(), r.isImmediatePropagationStopped() && t.stopImmediatePropagation()))
		}
		function B(t) {
			var n = T(t).touches,
				r,
				i,
				o;
			n && n.length === 1 && (r = t.target, i = C(r), i.hasVirtualBinding && (E = w++, e.data(r, s, E), D(), M(), d = !1, o = T(t).touches[0], h = o.pageX, p = o.pageY, P("vmouseover", t, i), P("vmousedown", t, i)))
		}
		function j(e) {
			if (g)
				return;
			d || P("vmousecancel", e, C(e.target)),
			d = !0,
			_()
		}
		function F(t) {
			if (g)
				return;
			var n = T(t).touches[0],
				r = d,
				i = e.vmouse.moveDistanceThreshold,
				s = C(t.target);
			d = d || Math.abs(n.pageX - h) > i || Math.abs(n.pageY - p) > i,
			d && !r && P("vmousecancel", t, s),
			P("vmousemove", t, s),
			_()
		}
		function I(e) {
			if (g)
				return;
			A();
			var t = C(e.target),
				n,
				r;
			P("vmouseup", e, t),
			d || (n = P("vclick", e, t), n && n.isDefaultPrevented() && (r = T(e).changedTouches[0], v.push({touchID: E, x: r.clientX, y: r.clientY}), m = !0)),
			P("vmouseout", e, t),
			d = !1,
			_()
		}
		function q(t) {
			var n = e.data(t, i),
				r;
			if (n)
				for (r in n)
					if (n[r])
						return !0;
		return !1
		}
		function R() {}
		function U(t) {
			var n = t.substr(1);
			return {
				setup: function() {
					q(this) || e.data(this, i, {});
					var r = e.data(this, i);
					r[t] = !0,
					l[t] = (l[t] || 0) + 1,
					l[t] === 1 && b.bind(n, H),
					e(this).bind(n, R),
					y && (l.touchstart = (l.touchstart || 0) + 1, l.touchstart === 1 && b.bind("touchstart", B).bind("touchend", I).bind("touchmove", F).bind("scroll", j))
				},
				teardown: function() {
					--l[t],
					l[t] || b.unbind(n, H),
					y && (--l.touchstart, l.touchstart || b.unbind("touchstart", B).unbind("touchmove", F).unbind("touchend", I).unbind("scroll", j));
					var r = e(this),
						s = e.data(this, i);
					s && (s[t] = !1),
					r.unbind(n, R),
					q(this) || r.removeData(i)
				}
			}
		}
		var i = "virtualMouseBindings",
			s = "virtualTouchID",
			o = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
			u = "clientX clientY pageX pageY screenX screenY".split(" "),
			a = e.event.mouseHooks
				? e.event.mouseHooks.props
				: [],
			f = e.event.props.concat(a),
			l = {},
			c = 0,
			h = 0,
			p = 0,
			d = !1,
			v = [],
			m = !1,
			g = !1,
			y = "addEventListener" in n,
			b = e(n),
			w = 1,
			E = 0,
			S,
			x;
		e.vmouse = {
			moveDistanceThreshold: 10,
			clickDistanceThreshold: 10,
			resetTimerDuration: 1500
		};
		for (x = 0; x < o.length; x++)
			e.event.special[o[x]] = U(o[x]);
		y && n.addEventListener("click", function(t) {
			var n = v.length,
				r = t.target,
				i,
				o,
				u,
				a,
				f,
				l;
			if (n) {
				i = t.clientX,
				o = t.clientY,
				S = e.vmouse.clickDistanceThreshold,
				u = r;
				while (u) {
					for (a = 0; a < n; a++) {
						f = v[a],
						l = 0;
						if (u === r && Math.abs(f.x - i) < S && Math.abs(f.y - o) < S || e.data(u, s) === f.touchID) {
							t.preventDefault(),
							t.stopPropagation();
							return
						}
					}
					u = u.parentNode
				}
			}
		}, !0)
	})(e, t, n),
	function(e) {
		e.mobile = {}
	}(e),
	function(e, t) {
		var r = {
			touch: "ontouchend" in n
		};
		e.mobile.support = e.mobile.support || {},
		e.extend(e.support, r),
		e.extend(e.mobile.support, r)
	}(e),
	function(e, t, r) {
		function l(t, n, i, s) {
			var o = i.type;
			i.type = n,
			s
				? e.event.trigger(i, r, t)
				: e.event.dispatch.call(t, i),
			i.type = o
		}
		var i = e(n),
			s = e.mobile.support.touch,
			o = "touchmove scroll",
			u = s
				? "touchstart"
				: "mousedown",
			a = s
				? "touchend"
				: "mouseup",
			f = s
				? "touchmove"
				: "mousemove";
		e.each("touchstart touchmove touchend tap taphold swipe swipeleft swiperight scrollstart scrollstop".split(" "), function(t, n) {
			e.fn[n] = function(e) {
				return e
					? this.bind(n, e)
					: this.trigger(n)
			},
			e.attrFn && (e.attrFn[n] = !0)
		}),
		e.event.special.scrollstart = {
			enabled: !0,
			setup: function() {
				function s(e, n) {
					r = n,
					l(t, r
						? "scrollstart"
						: "scrollstop", e)
				}
				var t = this,
					n = e(t),
					r,
					i;
				n.bind(o, function(t) {
					if (!e.event.special.scrollstart.enabled)
						return;
					r || s(t, !0),
					clearTimeout(i),
					i = setTimeout(function() {
						s(t, !1)
					}, 50)
				})
			},
			teardown: function() {
				e(this).unbind(o)
			}
		},
		e.event.special.tap = {
			tapholdThreshold: 750,
			emitTapOnTaphold: !0,
			setup: function() {
				var t = this,
					n = e(t),
					r = !1;
				n.bind("vmousedown", function(s) {
					function a() {
						clearTimeout(u)
					}
					function f() {
						a(),
						n.unbind("vclick", c).unbind("vmouseup", a),
						i.unbind("vmousecancel", f)
					}
					function c(e) {
						f(),
						!r && o === e.target
							? l(t, "tap", e)
							: r && e.preventDefault()
					}
					r = !1;
					if (s.which && s.which !== 1)
						return !1;
					var o = s.target,
						u;
					n.bind("vmouseup", a).bind("vclick", c),
					i.bind("vmousecancel", f),
					u = setTimeout(function() {
						e.event.special.tap.emitTapOnTaphold || (r = !0),
						l(t, "taphold", e.Event("taphold", {target: o}))
					}, e.event.special.tap.tapholdThreshold)
				})
			},
			teardown: function() {
				e(this).unbind("vmousedown").unbind("vclick").unbind("vmouseup"),
				i.unbind("vmousecancel")
			}
		},
		e.event.special.swipe = {
			scrollSupressionThreshold: 30,
			durationThreshold: 1e3,
			horizontalDistanceThreshold: 30,
			verticalDistanceThreshold: 30,
			getLocation: function(e) {
				var n = t.pageXOffset,
					r = t.pageYOffset,
					i = e.clientX,
					s = e.clientY;
				if (e.pageY === 0 && Math.floor(s) > Math.floor(e.pageY) || e.pageX === 0 && Math.floor(i) > Math.floor(e.pageX))
					i -= n,
					s -= r;
				else if (s < e.pageY - r || i < e.pageX - n)
					i = e.pageX - n,
					s = e.pageY - r;
				return {x: i, y: s}
			},
			start: function(t) {
				var n = t.originalEvent.touches
						? t.originalEvent.touches[0]
						: t,
					r = e.event.special.swipe.getLocation(n);
				return {
					time: (new Date).getTime(),
					coords: [
						r.x, r.y
					],
					origin: e(t.target)
				}
			},
			stop: function(t) {
				var n = t.originalEvent.touches
						? t.originalEvent.touches[0]
						: t,
					r = e.event.special.swipe.getLocation(n);
				return {
					time: (new Date).getTime(),
					coords: [r.x, r.y]
				}
			},
			handleSwipe: function(t, n, r, i) {
				if (n.time - t.time < e.event.special.swipe.durationThreshold && Math.abs(t.coords[0] - n.coords[0]) > e.event.special.swipe.horizontalDistanceThreshold && Math.abs(t.coords[1] - n.coords[1]) < e.event.special.swipe.verticalDistanceThreshold) {
					var s = t.coords[0] > n.coords[0]
						? "swipeleft"
						: "swiperight";
					return l(r, "swipe", e.Event("swipe", {
						target: i,
						swipestart: t,
						swipestop: n
					}), !0),
					l(r, s, e.Event(s, {
						target: i,
						swipestart: t,
						swipestop: n
					}), !0),
					!0
				}
				return !1
			},
			eventInProgress: !1,
			setup: function() {
				var t,
					n = this,
					r = e(n),
					s = {};
				t = e.data(this, "mobile-events"),
				t || (t = {
					length: 0
				}, e.data(this, "mobile-events", t)),
				t.length++,
				t.swipe = s,
				s.start = function(t) {
					if (e.event.special.swipe.eventInProgress)
						return;
					e.event.special.swipe.eventInProgress = !0;
					var r,
						o = e.event.special.swipe.start(t),
						u = t.target,
						l = !1;
					s.move = function(t) {
						if (!o || t.isDefaultPrevented())
							return;
						r = e.event.special.swipe.stop(t),
						l || (l = e.event.special.swipe.handleSwipe(o, r, n, u), l && (e.event.special.swipe.eventInProgress = !1)),
						Math.abs(o.coords[0] - r.coords[0]) > e.event.special.swipe.scrollSupressionThreshold && t.preventDefault()
					},
					s.stop = function() {
						l = !0,
						e.event.special.swipe.eventInProgress = !1,
						i.off(f, s.move),
						s.move = null
					},
					i.on(f, s.move).one(a, s.stop)
				},
				r.on(u, s.start)
			},
			teardown: function() {
				var t,
					n;
				t = e.data(this, "mobile-events"),
				t && (n = t.swipe, delete t.swipe, t.length--, t.length === 0 && e.removeData(this, "mobile-events")),
				n && (n.start && e(this).off(u, n.start), n.move && i.off(f, n.move), n.stop && i.off(a, n.stop))
			}
		},
		e.each({
			scrollstop: "scrollstart",
			taphold: "tap",
			swipeleft: "swipe.left",
			swiperight: "swipe.right"
		}, function(t, n) {
			e.event.special[t] = {
				setup: function() {
					e(this).bind(n, e.noop)
				},
				teardown: function() {
					e(this).unbind(n)
				}
			}
		})
	}(e, this)
});

/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function() {
	function e() {}
	function t(e, t) {
		for (var n = e.length; n--;)
			if (e[n].listener === t)
				return n;
	return -1
	}
	function n(e) {
		return function() {
			return this[e].apply(this, arguments)
		}
	}
	var i = e.prototype,
		r = this,
		o = r.EventEmitter;
	i.getListeners = function(e) {
		var t,
			n,
			i = this._getEvents();
		if ("object" == typeof e) {
			t = {};
			for (n in i)
				i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
		} else
			t = i[e] || (i[e] = []);
		return t
	},
	i.flattenListeners = function(e) {
		var t,
			n = [];
		for (t = 0; e.length > t; t += 1)
			n.push(e[t].listener);
		return n
	},
	i.getListenersAsObject = function(e) {
		var t,
			n = this.getListeners(e);
		return n instanceof Array && (t = {}, t[e] = n),
		t || n
	},
	i.addListener = function(e, n) {
		var i,
			r = this.getListenersAsObject(e),
			o = "object" == typeof n;
		for (i in r)
			r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o
				? n
				: {
					listener: n,
					once: !1
				});
		return this
	},
	i.on = n("addListener"),
	i.addOnceListener = function(e, t) {
		return this.addListener(e, {
			listener: t,
			once: !0
		})
	},
	i.once = n("addOnceListener"),
	i.defineEvent = function(e) {
		return this.getListeners(e),
		this
	},
	i.defineEvents = function(e) {
		for (var t = 0; e.length > t; t += 1)
			this.defineEvent(e[t]);
		return this
	},
	i.removeListener = function(e, n) {
		var i,
			r,
			o = this.getListenersAsObject(e);
		for (r in o)
			o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
		return this
	},
	i.off = n("removeListener"),
	i.addListeners = function(e, t) {
		return this.manipulateListeners(!1, e, t)
	},
	i.removeListeners = function(e, t) {
		return this.manipulateListeners(!0, e, t)
	},
	i.manipulateListeners = function(e, t, n) {
		var i,
			r,
			o = e
				? this.removeListener
				: this.addListener,
			s = e
				? this.removeListeners
				: this.addListeners;
		if ("object" != typeof t || t instanceof RegExp)
			for (i = n.length; i--;)
				o.call(this, t, n[i]);
	else
			for (i in t)
				t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r
					? o.call(this, i, r)
					: s.call(this, i, r));
		return this
	},
	i.removeEvent = function(e) {
		var t,
			n = typeof e,
			i = this._getEvents();
		if ("string" === n)
			delete i[e];
		else if ("object" === n)
			for (t in i)
				i.hasOwnProperty(t) && e.test(t) && delete i[t];
	else
			delete this._events;
		return this
	},
	i.removeAllListeners = n("removeEvent"),
	i.emitEvent = function(e, t) {
		var n,
			i,
			r,
			o,
			s = this.getListenersAsObject(e);
		for (r in s)
			if (s.hasOwnProperty(r))
				for (i = s[r].length; i--;)
					n = s[r][i],
					n.once === !0 && this.removeListener(e, n.listener),
					o = n.listener.apply(this, t || []),
					o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
	return this
	},
	i.trigger = n("emitEvent"),
	i.emit = function(e) {
		var t = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(e, t)
	},
	i.setOnceReturnValue = function(e) {
		return this._onceReturnValue = e,
		this
	},
	i._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue")
			? this._onceReturnValue
			: !0
	},
	i._getEvents = function() {
		return this._events || (this._events = {})
	},
	e.noConflict = function() {
		return r.EventEmitter = o,
		e
	},
	"function" == typeof define && define.amd
		? define("eventEmitter/EventEmitter", [], function() {
			return e
		})
		: "object" == typeof module && module.exports
			? module.exports = e
			: this.EventEmitter = e
}).call(this),
function(e) {
	function t(t) {
		var n = e.event;
		return n.target = n.target || n.srcElement || t,
		n
	}
	var n = document.documentElement,
		i = function() {};
	n.addEventListener
		? i = function(e, t, n) {
			e.addEventListener(t, n, !1)
		}
		: n.attachEvent && (i = function(e, n, i) {
			e[n + i] = i.handleEvent
				? function() {
					var n = t(e);
					i.handleEvent.call(i, n)
				}
				: function() {
					var n = t(e);
					i.call(e, n)
				},
			e.attachEvent("on" + n, e[n + i])
		});
	var r = function() {};
	n.removeEventListener
		? r = function(e, t, n) {
			e.removeEventListener(t, n, !1)
		}
		: n.detachEvent && (r = function(e, t, n) {
			e.detachEvent("on" + t, e[t + n]);
			try {
				delete e[t + n]
			} catch (i) {
				e[t + n] = void 0
			}
		});
	var o = {
		bind: i,
		unbind: r
	};
	"function" == typeof define && define.amd
		? define("eventie/eventie", o)
		: e.eventie = o
}(this),
function(e, t) {
	"function" == typeof define && define.amd
		? define([
			"eventEmitter/EventEmitter", "eventie/eventie"
		], function(n, i) {
			return t(e, n, i)
		})
		: "object" == typeof exports
			? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie"))
			: e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function(e, t, n) {
	function i(e, t) {
		for (var n in t)
			e[n] = t[n];
		return e
	}
	function r(e) {
		return "[object Array]" === d.call(e)
	}
	function o(e) {
		var t = [];
		if (r(e))
			t = e;
		else if ("number" == typeof e.length)
			for (var n = 0, i = e.length; i > n; n++)
				t.push(e[n]);
	else
			t.push(e);
		return t
	}
	function s(e, t, n) {
		if (!(this instanceof s))
			return new s(e, t);

		"string" == typeof e && (e = document.querySelectorAll(e)),
		this.elements = o(e),
		this.options = i({}, this.options),
		"function" == typeof t
			? n = t
			: i(this.options, t),
		n && this.on("always", n),
		this.getImages(),
		a && (this.jqDeferred = new a.Deferred);
		var r = this;
		setTimeout(function() {
			r.check()
		})
	}
	function f(e) {
		this.img = e
	}
	function c(e) {
		this.src = e,
		v[e] = this
	}
	var a = e.jQuery,
		u = e.console,
		h = u !== void 0,
		d = Object.prototype.toString;
	s.prototype = new t,
	s.prototype.options = {},
	s.prototype.getImages = function() {
		this.images = [];
		for (var e = 0, t = this.elements.length; t > e; e++) {
			var n = this.elements[e];
			"IMG" === n.nodeName && this.addImage(n);
			var i = n.nodeType;
			if (i && (1 === i || 9 === i || 11 === i))
				for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
					var f = r[o];
					this.addImage(f)
				}
			}
	},
	s.prototype.addImage = function(e) {
		var t = new f(e);
		this.images.push(t)
	},
	s.prototype.check = function() {
		function e(e, r) {
			return t.options.debug && h && u.log("confirm", e, r),
			t.progress(e),
			n++,
			n === i && t.complete(),
			!0
		}
		var t = this,
			n = 0,
			i = this.images.length;
		if (this.hasAnyBroken = !1, !i)
			return this.complete(),
			void 0;
		for (var r = 0; i > r; r++) {
			var o = this.images[r];
			o.on("confirm", e),
			o.check()
		}
	},
	s.prototype.progress = function(e) {
		this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
		var t = this;
		setTimeout(function() {
			t.emit("progress", t, e),
			t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
		})
	},
	s.prototype.complete = function() {
		var e = this.hasAnyBroken
			? "fail"
			: "done";
		this.isComplete = !0;
		var t = this;
		setTimeout(function() {
			if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
				var n = t.hasAnyBroken
					? "reject"
					: "resolve";
				t.jqDeferred[n](t)
			}
		})
	},
	a && (a.fn.imagesLoaded = function(e, t) {
		var n = new s(this, e, t);
		return n.jqDeferred.promise(a(this))
	}),
	f.prototype = new t,
	f.prototype.check = function() {
		var e = v[this.img.src] || new c(this.img.src);
		if (e.isConfirmed)
			return this.confirm(e.isLoaded, "cached was confirmed"),
			void 0;
		if (this.img.complete && void 0 !== this.img.naturalWidth)
			return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
			void 0;
		var t = this;
		e.on("confirm", function(e, n) {
			return t.confirm(e.isLoaded, n),
			!0
		}),
		e.check()
	},
	f.prototype.confirm = function(e, t) {
		this.isLoaded = e,
		this.emit("confirm", this, t)
	};
	var v = {};
	return c.prototype = new t,
	c.prototype.check = function() {
		if (!this.isChecked) {
			var e = new Image;
			n.bind(e, "load", this),
			n.bind(e, "error", this),
			e.src = this.src,
			this.isChecked = !0
		}
	},
	c.prototype.handleEvent = function(e) {
		var t = "on" + e.type;
		this[t] && this[t](e)
	},
	c.prototype.onload = function(e) {
		this.confirm(!0, "onload"),
		this.unbindProxyEvents(e)
	},
	c.prototype.onerror = function(e) {
		this.confirm(!1, "onerror"),
		this.unbindProxyEvents(e)
	},
	c.prototype.confirm = function(e, t) {
		this.isConfirmed = !0,
		this.isLoaded = e,
		this.emit("confirm", this, t)
	},
	c.prototype.unbindProxyEvents = function(e) {
		n.unbind(e.target, "load", this),
		n.unbind(e.target, "error", this)
	},
	s
});

/*
 * jQuery Easing v1.3.2 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Open source under the BSD License.
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * https://raw.github.com/gdsmith/jquery-easing/master/LICENSE
*/
(function(h) {
	h.easing.jswing = h.easing.swing;
	h.extend(h.easing, {
		def: "easeOutQuad",
		swing: function(e, a, c, b, d) {
			return h.easing[h.easing.def](e, a, c, b, d)
		},
		easeInQuad: function(e, a, c, b, d) {
			return b * (a /= d) * a + c
		},
		easeOutQuad: function(e, a, c, b, d) {
			return -b * (a /= d) * (a - 2) + c
		},
		easeInOutQuad: function(e, a, c, b, d) {
			return 1 > (a /= d / 2)
				? b / 2 * a * a + c
				: -b / 2 * (--a * (a - 2) - 1) + c
		},
		easeInCubic: function(e, a, c, b, d) {
			return b * (a /= d) * a * a + c
		},
		easeOutCubic: function(e, a, c, b, d) {
			return b * ((a = a / d - 1) * a * a + 1) + c
		},
		easeInOutCubic: function(e, a, c, b, d) {
			return 1 > (a /= d / 2)
				? b / 2 * a * a * a + c
				: b / 2 * ((a -= 2) * a * a + 2) + c
		},
		easeInQuart: function(e, a, c, b, d) {
			return b * (a /= d) * a * a * a + c
		},
		easeOutQuart: function(e, a, c, b, d) {
			return -b * ((a = a / d - 1) * a * a * a - 1) + c
		},
		easeInOutQuart: function(e, a, c, b, d) {
			return 1 > (a /= d / 2)
				? b / 2 * a * a * a * a + c
				: -b / 2 * ((a -= 2) * a * a * a - 2) + c
		},
		easeInQuint: function(e, a, c, b, d) {
			return b * (a /= d) * a * a * a * a + c
		},
		easeOutQuint: function(e, a, c, b, d) {
			return b * ((a = a / d - 1) * a * a * a * a + 1) + c
		},
		easeInOutQuint: function(e, a, c, b, d) {
			return 1 > (a /= d / 2)
				? b / 2 * a * a * a * a * a + c
				: b / 2 * ((a -= 2) * a * a * a * a + 2) + c
		},
		easeInSine: function(e, a, c, b, d) {
			return -b * Math.cos(a / d * (Math.PI / 2)) + b + c
		},
		easeOutSine: function(e, a, c, b, d) {
			return b * Math.sin(a / d * (Math.PI / 2)) + c
		},
		easeInOutSine: function(e, a, c, b, d) {
			return -b / 2 * (Math.cos(Math.PI * a / d) - 1) + c
		},
		easeInExpo: function(e, a, c, b, d) {
			return 0 == a
				? c
				: b * Math.pow(2, 10 * (a / d - 1)) + c
		},
		easeOutExpo: function(e, a, c, b, d) {
			return a == d
				? c + b
				: b * (-Math.pow(2, -10 * a / d) + 1) + c
		},
		easeInOutExpo: function(e, a, c, b, d) {
			return 0 == a
				? c
				: a == d
					? c + b
					: 1 > (a /= d / 2)
						? b / 2 * Math.pow(2, 10 * (a - 1)) + c
						: b / 2 * (-Math.pow(2, -10 * --a) + 2) + c
		},
		easeInCirc: function(e, a, c, b, d) {
			return -b * (Math.sqrt(1 - (a /= d) * a) - 1) + c
		},
		easeOutCirc: function(e, a, c, b, d) {
			return b * Math.sqrt(1 - (a = a / d - 1) * a) + c
		},
		easeInOutCirc: function(e, a, c, b, d) {
			return 1 > (a /= d / 2)
				? -b / 2 * (Math.sqrt(1 - a * a) - 1) + c
				: b / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + c
		},
		easeInElastic: function(e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if (0 == a)
				return c;
			if (1 == (a /= d))
				return c + b;
			f || (f = .3 * d);
			g < Math.abs(b)
				? (g = b, e = f / 4)
				: e = f / (2 * Math.PI) * Math.asin(b / g);
			return -(g * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f)) + c
		},
		easeOutElastic: function(e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if (0 == a)
				return c;
			if (1 == (a /= d))
				return c + b;
			f || (f = .3 * d);
			g < Math.abs(b)
				? (g = b, e = f / 4)
				: e = f / (2 * Math.PI) * Math.asin(b / g);
			return g * Math.pow(2, -10 * a) * Math.sin(2 * (a * d - e) * Math.PI / f) + b + c
		},
		easeInOutElastic: function(e, a, c, b, d) {
			e = 1.70158;
			var f = 0,
				g = b;
			if (0 == a)
				return c;
			if (2 == (a /= d / 2))
				return c + b;
			f || (f = .3 * d * 1.5);
			g < Math.abs(b)
				? (g = b, e = f / 4)
				: e = f / (2 * Math.PI) * Math.asin(b / g);
			return 1 > a
				? -.5 * g * Math.pow(2, 10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f) + c
				: g * Math.pow(2, -10 * --a) * Math.sin(2 * (a * d - e) * Math.PI / f) * .5 + b + c
		},
		easeInBack: function(e, a, c, b, d, f) {
			void 0 == f && (f = 1.70158);
			return b * (a /= d) * a * ((f + 1) * a - f) + c
		},
		easeOutBack: function(e, a, c, b, d, f) {
			void 0 == f && (f = 1.70158);
			return b * ((a = a / d - 1) * a * ((f + 1) * a + f) + 1) + c
		},
		easeInOutBack: function(e, a, c, b, d, f) {
			void 0 == f && (f = 1.70158);
			return 1 > (a /= d / 2)
				? b / 2 * a * a * (((f *= 1.525) + 1) * a - f) + c
				: b / 2 * ((a -= 2) * a * (((f *= 1.525) + 1) * a + f) + 2) + c
		},
		easeInBounce: function(e, a, c, b, d) {
			return b - h.easing.easeOutBounce(e, d - a, 0, b, d) + c
		},
		easeOutBounce: function(e, a, c, b, d) {
			return (a /= d) < 1 / 2.75
				? 7.5625 * b * a * a + c
				: a < 2 / 2.75
					? b * (7.5625 * (a -= 1.5 / 2.75) * a + .75) + c
					: a < 2.5 / 2.75
						? b * (7.5625 * (a -= 2.25 / 2.75) * a + .9375) + c
						: b * (7.5625 * (a -= 2.625 / 2.75) * a + .984375) + c
		},
		easeInOutBounce: function(e, a, c, b, d) {
			return a < d / 2
				? .5 * h.easing.easeInBounce(e, 2 * a, 0, b, d) + c
				: .5 * h.easing.easeOutBounce(e, 2 * a - d, 0, b, d) + .5 * b + c
		}
	})
})(jQuery);

/**
 * Owl carousel
 * @version 2.0.0
 * @author Bartosz Wojciechowski
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
!function(a, b, c, d) {
	function e(b, c) {
		this.settings = null,
		this.options = a.extend({}, e.Defaults, c),
		this.$element = a(b),
		this.drag = a.extend({}, m),
		this.state = a.extend({}, n),
		this.e = a.extend({}, o),
		this._plugins = {},
		this._supress = {},
		this._current = null,
		this._speed = null,
		this._coordinates = [],
		this._breakpoint = null,
		this._width = null,
		this._items = [],
		this._clones = [],
		this._mergers = [],
		this._invalidated = {},
		this._pipe = [],
		a.each(e.Plugins, a.proxy(function(a, b) {
			this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
		}, this)),
		a.each(e.Pipe, a.proxy(function(b, c) {
			this._pipe.push({
				filter: c.filter,
				run: a.proxy(c.run, this)
			})
		}, this)),
		this.setup(),
		this.initialize()
	}
	function f(a) {
		if (a.touches !== d)
			return {x: a.touches[0].pageX, y: a.touches[0].pageY};
		if (a.touches === d) {
			if (a.pageX !== d)
				return {x: a.pageX, y: a.pageY};
			if (a.pageX === d)
				return {x: a.clientX, y: a.clientY}
			}
	}
	function g(a) {
		var b,
			d,
			e = c.createElement("div"),
			f = a;
		for (b in f)
			if (d = f[b], "undefined" != typeof e.style[d])
				return e = null,
				[d, b];
	return [!1]
	}
	function h() {
		return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
	}
	function i() {
		return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
	}
	function j() {
		return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
	}
	function k() {
		return "ontouchstart" in b || !!navigator.msMaxTouchPoints
	}
	function l() {
		return b.navigator.msPointerEnabled
	}
	var m,
		n,
		o;
	m = {
		start: 0,
		startX: 0,
		startY: 0,
		current: 0,
		currentX: 0,
		currentY: 0,
		offsetX: 0,
		offsetY: 0,
		distance: null,
		startTime: 0,
		endTime: 0,
		updatedX: 0,
		targetEl: null
	},
	n = {
		isTouch: !1,
		isScrolling: !1,
		isSwiping: !1,
		direction: !1,
		inMotion: !1
	},
	o = {
		_onDragStart: null,
		_onDragMove: null,
		_onDragEnd: null,
		_transitionEnd: null,
		_resizer: null,
		_responsiveCall: null,
		_goToLoop: null,
		_checkVisibile: null
	},
	e.Defaults = {
		items: 3,
		loop: !1,
		center: !1,
		mouseDrag: !0,
		touchDrag: !0,
		pullDrag: !0,
		freeDrag: !1,
		margin: 0,
		stagePadding: 0,
		merge: !1,
		mergeFit: !0,
		autoWidth: !1,
		startPosition: 0,
		rtl: !1,
		smartSpeed: 250,
		fluidSpeed: !1,
		dragEndSpeed: !1,
		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: b,
		responsiveClass: !1,
		fallbackEasing: "swing",
		info: !1,
		nestedItemSelector: !1,
		itemElement: "div",
		stageElement: "div",
		themeClass: "owl-theme",
		baseClass: "owl-carousel",
		itemClass: "owl-item",
		centerClass: "center",
		activeClass: "active"
	},
	e.Width = {
		Default: "default",
		Inner: "inner",
		Outer: "outer"
	},
	e.Plugins = {},
	e.Pipe = [
		{
			filter: [
				"width", "items", "settings"
			],
			run: function(a) {
				a.current = this._items && this._items[this.relative(this._current)]
			}
		}, {
			filter: [
				"items", "settings"
			],
			run: function() {
				var a = this._clones,
					b = this.$stage.children(".cloned");
				(b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
			}
		}, {
			filter: [
				"items", "settings"
			],
			run: function() {
				var a,
					b,
					c = this._clones,
					d = this._items,
					e = this.settings.loop
						? c.length - Math.max(2 * this.settings.items, 4)
						: 0;
				for (a = 0, b = Math.abs(e / 2); b > a; a++)
					e > 0
						? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop())
						: (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
				}
		}, {
			filter: [
				"width", "items", "settings"
			],
			run: function() {
				var a,
					b,
					c,
					d = this.settings.rtl
						? 1
						: -1,
					e = (this.width() / this.settings.items).toFixed(3),
					f = 0;
				for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++)
					a = this._mergers[this.relative(b)],
					a = this.settings.mergeFit && Math.min(a, this.settings.items) || a,
					f += (this.settings.autoWidth
						? this._items[this.relative(b)].width() + this.settings.margin
						: e * a) * d,
					this._coordinates.push(f)
			}
		}, {
			filter: [
				"width", "items", "settings"
			],
			run: function() {
				var b,
					c,
					d = (this.width() / this.settings.items).toFixed(3),
					e = {
						width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 *this.settings.stagePadding,
						"padding-left": this.settings.stagePadding || "",
						"padding-right": this.settings.stagePadding || ""
					};
				if (this.$stage.css(e), e = {
					width: this.settings.autoWidth
						? "auto"
						: d - this.settings.margin
				}, e[this.settings.rtl
						? "margin-left"
						: "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
					return a > 1
				}).length > 0)
					for (b = 0, c = this._coordinates.length; c > b; b++)
						e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin,
						this.$stage.children().eq(b).css(e);
			else
					this.$stage.children().css(e)
			}
		}, {
			filter: [
				"width", "items", "settings"
			],
			run: function(a) {
				a.current && this.reset(this.$stage.children().index(a.current))
			}
		}, {
			filter: ["position"],
			run: function() {
				this.animate(this.coordinates(this._current))
			}
		}, {
			filter: [
				"width", "position", "items", "settings"
			],
			run: function() {
				var a,
					b,
					c,
					d,
					e = this.settings.rtl
						? 1
						: -1,
					f = 2 * this.settings.stagePadding,
					g = this.coordinates(this.current()) + f,
					h = g + this.width() * e,
					i = [];
				for (c = 0, d = this._coordinates.length; d > c; c++)
					a = this._coordinates[c - 1] || 0,
					b = Math.abs(this._coordinates[c]) + f * e,
					(this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
				this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass),
				this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass),
				this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
			}
		}
	],
	e.prototype.initialize = function() {
		if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
			var b,
				c,
				e;
			if (b = this.$element.find("img"), c = this.settings.nestedItemSelector
				? "." + this.settings.nestedItemSelector
				: d, e = this.$element.children(c).width(), b.length && 0 >= e)
				return this.preloadAutoWidthImages(b),
				!1
		}
		this.$element.addClass("owl-loading"),
		this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),
		this.$element.append(this.$stage.parent()),
		this.replace(this.$element.children().not(this.$stage.parent())),
		this._width = this.$element.width(),
		this.refresh(),
		this.$element.removeClass("owl-loading").addClass("owl-loaded"),
		this.eventsCall(),
		this.internalEvents(),
		this.addTriggerableEvents(),
		this.trigger("initialized")
	},
	e.prototype.setup = function() {
		var b = this.viewport(),
			c = this.options.responsive,
			d = -1,
			e = null;
		c
			? (a.each(c, function(a) {
				b >= a && a > d && (d = Number(a))
			}), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
				return b.replace(/\b owl-responsive-\S+/g, "")
			}).addClass("owl-responsive-" + d))
			: e = a.extend({}, this.options),
		(null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
			property: {
				name: "settings",
				value: e
			}
		}), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
			property: {
				name: "settings",
				value: this.settings
			}
		}))
	},
	e.prototype.optionsLogic = function() {
		this.$element.toggleClass("owl-center", this.settings.center),
		this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1),
		this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
	},
	e.prototype.prepare = function(b) {
		var c = this.trigger("prepare", {content: b});
		return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)),
		this.trigger("prepared", {content: c.data}),
		c.data
	},
	e.prototype.update = function() {
		for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
			return this[a]
		}, this._invalidated), e = {}; c > b;)
			(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
			b++;
		this._invalidated = {}
	},
	e.prototype.width = function(a) {
		switch (a = a || e.Width.Default) {
			case e.Width.Inner:
			case e.Width.Outer:
				return this._width;
			default:
				return this._width - 2 * this.settings.stagePadding + this.settings.margin
		}
	},
	e.prototype.refresh = function() {
		if (0 === this._items.length)
			return !1;

		(new Date).getTime();
		this.trigger("refresh"),
		this.setup(),
		this.optionsLogic(),
		this.$stage.addClass("owl-refresh"),
		this.update(),
		this.$stage.removeClass("owl-refresh"),
		this.state.orientation = b.orientation,
		this.watchVisibility(),
		this.trigger("refreshed")
	},
	e.prototype.eventsCall = function() {
		this.e._onDragStart = a.proxy(function(a) {
			this.onDragStart(a)
		}, this),
		this.e._onDragMove = a.proxy(function(a) {
			this.onDragMove(a)
		}, this),
		this.e._onDragEnd = a.proxy(function(a) {
			this.onDragEnd(a)
		}, this),
		this.e._onResize = a.proxy(function(a) {
			this.onResize(a)
		}, this),
		this.e._transitionEnd = a.proxy(function(a) {
			this.transitionEnd(a)
		}, this),
		this.e._preventClick = a.proxy(function(a) {
			this.preventClick(a)
		}, this)
	},
	e.prototype.onThrottledResize = function() {
		b.clearTimeout(this.resizeTimer),
		this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
	},
	e.prototype.onResize = function() {
		return this._items.length
			? this._width === this.$element.width()
				? !1
				: this.trigger("resize").isDefaultPrevented()
					? !1
					: (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized"))
			: !1
	},
	e.prototype.eventsRouter = function(a) {
		var b = a.type;
		"mousedown" === b || "touchstart" === b
			? this.onDragStart(a)
			: "mousemove" === b || "touchmove" === b
				? this.onDragMove(a)
				: "mouseup" === b || "touchend" === b
					? this.onDragEnd(a)
					: "touchcancel" === b && this.onDragEnd(a)
	},
	e.prototype.internalEvents = function() {
		var c = (k(), l());
		this.settings.mouseDrag
			? (this.$stage.on("mousedown", a.proxy(function(a) {
				this.eventsRouter(a)
			}, this)), this.$stage.on("dragstart", function() {
				return !1
			}), this.$stage.get(0).onselectstart = function() {
				return !1
			})
			: this.$element.addClass("owl-text-select-on"),
		this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
			this.eventsRouter(a)
		}, this)),
		this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1),
		this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
	},
	e.prototype.onDragStart = function(d) {
		var e,
			g,
			h,
			i;
		if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch)
			return !1;
		if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d)
			i = this.getTransformProperty(),
			this.drag.offsetX = i,
			this.animate(i),
			this.state.inMotion = !0;
		else if (this.state.inMotion && !this.support3d)
			return this.state.inMotion = !1,
			!1;
		this.drag.startX = g - this.drag.offsetX,
		this.drag.startY = h - this.drag.offsetY,
		this.drag.start = g - this.drag.startX,
		this.drag.targetEl = e.target || e.srcElement,
		this.drag.updatedX = this.drag.start,
		("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1),
		a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
			this.eventsRouter(a)
		}, this))
	},
	e.prototype.onDragMove = function(a) {
		var c,
			e,
			g,
			h,
			i,
			j;
		this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0
			? this.state.direction = this.settings.rtl
				? "right"
				: "left"
			: this.drag.distance > 0 && (this.state.direction = this.settings.rtl
				? "left"
				: "right"), this.settings.loop
			? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction
				? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)
				: this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length))
			: (h = this.coordinates(this.settings.rtl
				? this.maximum()
				: this.minimum()), i = this.coordinates(this.settings.rtl
				? this.minimum()
				: this.maximum()), j = this.settings.pullDrag
				? this.drag.distance / 5
				: 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d
			? c.preventDefault()
			: c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
	},
	e.prototype.onDragEnd = function(b) {
		var d,
			e,
			f;
		if (this.state.isTouch) {
			if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0)
				return this.state.inMotion = !1,
				!1;
			this.drag.endTime = (new Date).getTime(),
			d = this.drag.endTime - this.drag.startTime,
			e = Math.abs(this.drag.distance),
			(e > 3 || d > 300) && this.removeClick(this.drag.targetEl),
			f = this.closest(this.drag.updatedX),
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
			this.current(f),
			this.invalidate("position"),
			this.update(),
			this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(),
			this.drag.distance = 0,
			a(c).off(".owl.dragEvents")
		}
	},
	e.prototype.removeClick = function(c) {
		this.drag.targetEl = c,
		a(c).on("click.preventClick", this.e._preventClick),
		b.setTimeout(function() {
			a(c).off("click.preventClick")
		}, 300)
	},
	e.prototype.preventClick = function(b) {
		b.preventDefault
			? b.preventDefault()
			: b.returnValue = !1,
		b.stopPropagation && b.stopPropagation(),
		a(b.target).off("click.preventClick")
	},
	e.prototype.getTransformProperty = function() {
		var a,
			c;
		return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"),
		a = a.replace(/matrix(3d)?\(|\)/g, "").split(","),
		c = 16 === a.length,
		c !== !0
			? a[4]
			: a[12]
	},
	e.prototype.closest = function(b) {
		var c = -1,
			d = 30,
			e = this.width(),
			f = this.coordinates();
		return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
			return b > g - d && g + d > b
				? c = a
				: this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction
					? a + 1
					: a),
			-1 === c
		}, this)),
		this.settings.loop || (this.op(b, ">", f[this.minimum()])
			? c = b = this.minimum()
			: this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())),
		c
	},
	e.prototype.animate = function(b) {
		this.trigger("translate"),
		this.state.inMotion = this.speed() > 0,
		this.support3d
			? this.$stage.css({
				transform: "translate3d(" + b + "px,0px, 0px)",
				transition: this.speed() / 1e3 + "s"
			})
			: this.state.isTouch
				? this.$stage.css({
					left: b + "px"
				})
				: this.$stage.animate({
					left: b
				}, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
					this.state.inMotion && this.transitionEnd()
				}, this))
	},
	e.prototype.current = function(a) {
		if (a === d)
			return this._current;
		if (0 === this._items.length)
			return d;
		if (a = this.normalize(a), this._current !== a) {
			var b = this.trigger("change", {
				property: {
					name: "position",
					value: a
				}
			});
			b.data !== d && (a = this.normalize(b.data)),
			this._current = a,
			this.invalidate("position"),
			this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})
		}
		return this._current
	},
	e.prototype.invalidate = function(a) {
		this._invalidated[a] = !0
	},
	e.prototype.reset = function(a) {
		a = this.normalize(a),
		a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
	},
	e.prototype.normalize = function(b, c) {
		var e = c
			? this._items.length
			: this._items.length + this._clones.length;
		return !a.isNumeric(b) || 1 > e
			? d
			: b = this._clones.length
				? (b % e + e) % e
				: Math.max(this.minimum(c), Math.min(this.maximum(c), b))
	},
	e.prototype.relative = function(a) {
		return a = this.normalize(a),
		a -= this._clones.length / 2,
		this.normalize(a, !0)
	},
	e.prototype.maximum = function(a) {
		var b,
			c,
			d,
			e = 0,
			f = this.settings;
		if (a)
			return this._items.length - 1;
		if (!f.loop && f.center)
			b = this._items.length - 1;
		else if (f.loop || f.center)
			if (f.loop || f.center)
				b = this._items.length + f.items;
			else {
				if (!f.autoWidth && !f.merge)
					throw "Can not detect maximum absolute position.";
				for (revert = f.rtl
					? 1
					: -1, c = this.$stage.width() - this.$element.width(); (d = this.coordinates(e)) && !(d * revert >= c);)
					b = ++e
			} else
				b = this._items.length - f.items;
	return b
	},
	e.prototype.minimum = function(a) {
		return a
			? 0
			: this._clones.length / 2
	},
	e.prototype.items = function(a) {
		return a === d
			? this._items.slice()
			: (a = this.normalize(a, !0), this._items[a])
	},
	e.prototype.mergers = function(a) {
		return a === d
			? this._mergers.slice()
			: (a = this.normalize(a, !0), this._mergers[a])
	},
	e.prototype.clones = function(b) {
		var c = this._clones.length / 2,
			e = c + this._items.length,
			f = function(a) {
				return a % 2 === 0
					? e + a / 2
					: c - (a + 1) / 2
			};
		return b === d
			? a.map(this._clones, function(a, b) {
				return f(b)
			})
			: a.map(this._clones, function(a, c) {
				return a === b
					? f(c)
					: null
			})
	},
	e.prototype.speed = function(a) {
		return a !== d && (this._speed = a),
		this._speed
	},
	e.prototype.coordinates = function(b) {
		var c = null;
		return b === d
			? a.map(this._coordinates, a.proxy(function(a, b) {
				return this.coordinates(b)
			}, this))
			: (this.settings.center
				? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl
					? -1
					: 1))
				: c = this._coordinates[b - 1] || 0, c)
	},
	e.prototype.duration = function(a, b, c) {
		return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
	},
	e.prototype.to = function(c, d) {
		if (this.settings.loop) {
			var e = c - this.relative(this.current()),
				f = this.current(),
				g = this.current(),
				h = this.current() + e,
				i = 0 > g - h
					? !0
					: !1,
				j = this._clones.length + this._items.length;
			h < this.settings.items && i === !1
				? (f = g + this._items.length, this.reset(f))
				: h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)),
			b.clearTimeout(this.e._goToLoop),
			this.e._goToLoop = b.setTimeout(a.proxy(function() {
				this.speed(this.duration(this.current(), f + e, d)),
				this.current(f + e),
				this.update()
			}, this), 30)
		} else
			this.speed(this.duration(this.current(), c, d)),
			this.current(c),
			this.update()
	},
	e.prototype.next = function(a) {
		a = a || !1,
		this.to(this.relative(this.current()) + 1, a)
	},
	e.prototype.prev = function(a) {
		a = a || !1,
		this.to(this.relative(this.current()) - 1, a)
	},
	e.prototype.transitionEnd = function(a) {
		return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
			? !1
			: (this.state.inMotion = !1, void this.trigger("translated"))
	},
	e.prototype.viewport = function() {
		var d;
		if (this.options.responsiveBaseElement !== b)
			d = a(this.options.responsiveBaseElement).width();
		else if (b.innerWidth)
			d = b.innerWidth;
		else {
			if (!c.documentElement || !c.documentElement.clientWidth)
				throw "Can not detect viewport width.";
			d = c.documentElement.clientWidth
		}
		return d
	},
	e.prototype.replace = function(b) {
		this.$stage.empty(),
		this._items = [],
		b && (b = b instanceof jQuery
			? b
			: a(b)),
		this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
		b.filter(function() {
			return 1 === this.nodeType
		}).each(a.proxy(function(a, b) {
			b = this.prepare(b),
			this.$stage.append(b),
			this._items.push(b),
			this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
		}, this)),
		this.reset(a.isNumeric(this.settings.startPosition)
			? this.settings.startPosition
			: 0),
		this.invalidate("items")
	},
	e.prototype.add = function(a, b) {
		b = b === d
			? this._items.length
			: this.normalize(b, !0),
		this.trigger("add", {
			content: a,
			position: b
		}),
		0 === this._items.length || b === this._items.length
			? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1))
			: (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)),
		this.invalidate("items"),
		this.trigger("added", {
			content: a,
			position: b
		})
	},
	e.prototype.remove = function(a) {
		a = this.normalize(a, !0),
		a !== d && (this.trigger("remove", {
			content: this._items[a],
			position: a
		}), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
			content: null,
			position: a
		}))
	},
	e.prototype.addTriggerableEvents = function() {
		var b = a.proxy(function(b, c) {
			return a.proxy(function(a) {
				a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
			}, this)
		}, this);
		a.each({
			next: this.next,
			prev: this.prev,
			to: this.to,
			destroy: this.destroy,
			refresh: this.refresh,
			replace: this.replace,
			add: this.add,
			remove: this.remove
		}, a.proxy(function(a, c) {
			this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
		}, this))
	},
	e.prototype.watchVisibility = function() {
		function c(a) {
			return a.offsetWidth > 0 && a.offsetHeight > 0
		}
		function d() {
			c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
		}
		c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
	},
	e.prototype.preloadAutoWidthImages = function(b) {
		var c,
			d,
			e,
			f;
		c = 0,
		d = this,
		b.each(function(g, h) {
			e = a(h),
			f = new Image,
			f.onload = function() {
				c++,
				e.attr("src", f.src),
				e.css("opacity", 1),
				c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
			},
			f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
		})
	},
	e.prototype.destroy = function() {
		this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass),
		this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"),
		this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
		for (var d in this._plugins)
			this._plugins[d].destroy();

		(this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {},
		this.$stage.off("dragstart", function() {
			return !1
		})),
		this.$element.off(".owl"),
		this.$stage.children(".cloned").remove(),
		this.e = null,
		this.$element.removeData("owlCarousel"),
		this.$stage.children().contents().unwrap(),
		this.$stage.children().unwrap(),
		this.$stage.unwrap()
	},
	e.prototype.op = function(a, b, c) {
		var d = this.settings.rtl;
		switch (b) {
			case "<":
				return d
					? a > c
					: c > a;
			case ">":
				return d
					? c > a
					: a > c;
			case ">=":
				return d
					? c >= a
					: a >= c;
			case "<=":
				return d
					? a >= c
					: c >= a
		}
	},
	e.prototype.on = function(a, b, c, d) {
		a.addEventListener
			? a.addEventListener(b, c, d)
			: a.attachEvent && a.attachEvent("on" + b, c)
	},
	e.prototype.off = function(a, b, c, d) {
		a.removeEventListener
			? a.removeEventListener(b, c, d)
			: a.detachEvent && a.detachEvent("on" + b, c)
	},
	e.prototype.trigger = function(b, c, d) {
		var e = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			f = a.camelCase(a.grep([
				"on", b, d
			], function(a) {
				return a
			}).join("-").toLowerCase()),
			g = a.Event([
				b, "owl", d || "carousel"
			].join(".").toLowerCase(), a.extend({
				relatedTarget: this
			}, e, c));
		return this._supress[b] || (a.each(this._plugins, function(a, b) {
			b.onTrigger && b.onTrigger(g)
		}), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)),
		g
	},
	e.prototype.suppress = function(b) {
		a.each(b, a.proxy(function(a, b) {
			this._supress[b] = !0
		}, this))
	},
	e.prototype.release = function(b) {
		a.each(b, a.proxy(function(a, b) {
			delete this._supress[b]
		}, this))
	},
	e.prototype.browserSupport = function() {
		if (this.support3d = j(), this.support3d) {
			this.transformVendor = i();
			var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
			this.transitionEndVendor = a[h()],
			this.vendorName = this.transformVendor.replace(/Transform/i, ""),
			this.vendorName = "" !== this.vendorName
				? "-" + this.vendorName.toLowerCase() + "-"
				: ""
		}
		this.state.orientation = b.orientation
	},
	a.fn.owlCarousel = function(b) {
		return this.each(function() {
			a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
		})
	},
	a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
	var c = function(b) {
		this._core = b,
		this._loaded = [],
		this._handlers = {
			"initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
				if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
					for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
						this.load(b)
					}, this); e ++< d;)
						this.load(g / 2 + this._core.relative(f)),
						g && a.each(this._core.clones(this._core.relative(f++)), h)
			}, this)
		},
		this._core.options = a.extend({}, c.Defaults, this._core.options),
		this._core.$element.on(this._handlers)
	};
	c.Defaults = {
		lazyLoad: !1
	},
	c.prototype.load = function(c) {
		var d = this._core.$stage.children().eq(c),
			e = d && d.find(".owl-lazy");
		!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
			var e,
				f = a(d),
				g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
			this._core.trigger("load", {
				element: f,
				url: g
			}, "lazy"),
			f.is("img")
				? f.one("load.owl.lazy", a.proxy(function() {
					f.css("opacity", 1),
					this._core.trigger("loaded", {
						element: f,
						url: g
					}, "lazy")
				}, this)).attr("src", g)
				: (e = new Image, e.onload = a.proxy(function() {
					f.css({
						"background-image": "url(" + g + ")",
						opacity: "1"
					}),
					this._core.trigger("loaded", {
						element: f,
						url: g
					}, "lazy")
				}, this), e.src = g)
		}, this)), this._loaded.push(d.get(0)))
	},
	c.prototype.destroy = function() {
		var a,
			b;
		for (a in this.handlers)
			this._core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this))
			"function" != typeof this[b] && (this[b] = null)
	},
	a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
	var b = function(c) {
		this._core = c,
		this._handlers = {
			"initialized.owl.carousel": a.proxy(function() {
				this._core.settings.autoHeight && this.update()
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				this._core.settings.autoHeight && "position" == a.property.name && this.update()
			}, this),
			"loaded.owl.lazy": a.proxy(function(a) {
				this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
			}, this)
		},
		this._core.options = a.extend({}, b.Defaults, this._core.options),
		this._core.$element.on(this._handlers)
	};
	b.Defaults = {
		autoHeight: !1,
		autoHeightClass: "owl-height"
	},
	b.prototype.update = function() {
		this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
	},
	b.prototype.destroy = function() {
		var a,
			b;
		for (a in this._handlers)
			this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this))
			"function" != typeof this[b] && (this[b] = null)
	},
	a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
	var d = function(b) {
		this._core = b,
		this._videos = {},
		this._playing = null,
		this._fullscreen = !1,
		this._handlers = {
			"resize.owl.carousel": a.proxy(function(a) {
				this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
			}, this),
			"refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
				this._playing && this.stop()
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				var c = a(b.content).find(".owl-video");
				c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
			}, this)
		},
		this._core.options = a.extend({}, d.Defaults, this._core.options),
		this._core.$element.on(this._handlers),
		this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
			this.play(a)
		}, this))
	};
	d.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	},
	d.prototype.fetch = function(a, b) {
		var c = a.attr("data-vimeo-id")
				? "vimeo"
				: "youtube",
			d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
			e = a.attr("data-width") || this._core.settings.videoWidth,
			f = a.attr("data-height") || this._core.settings.videoHeight,
			g = a.attr("href");
		if (!g)
			throw new Error("Missing video URL.");
		if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1)
			c = "youtube";
		else {
			if (!(d[3].indexOf("vimeo") > -1))
				throw new Error("Video URL not supported.");
			c = "vimeo"
		}
		d = d[6],
		this._videos[g] = {
			type: c,
			id: d,
			width: e,
			height: f
		},
		b.attr("data-video", g),
		this.thumbnail(a, this._videos[g])
	},
	d.prototype.thumbnail = function(b, c) {
		var d,
			e,
			f,
			g = c.width && c.height
				? 'style="width:' + c.width + "px;height:" + c.height + 'px;"'
				: "",
			h = b.find("img"),
			i = "src",
			j = "",
			k = this._core.settings,
			l = function(a) {
				e = '<div class="owl-video-play-icon"></div>',
				d = k.lazyLoad
					? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>'
					: '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>',
				b.after(d),
				b.after(e)
			};
		return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
		this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"),
		h.length
			? (l(h.attr(i)), h.remove(), !1)
			: void("youtube" === c.type
				? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f))
				: "vimeo" === c.type && a.ajax({
					type: "GET",
					url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
					jsonp: "callback",
					dataType: "jsonp",
					success: function(a) {
						f = a[0].thumbnail_large,
						l(f)
					}
				}))
	},
	d.prototype.stop = function() {
		this._core.trigger("stop", null, "video"),
		this._playing.find(".owl-video-frame").remove(),
		this._playing.removeClass("owl-video-playing"),
		this._playing = null
	},
	d.prototype.play = function(b) {
		this._core.trigger("play", null, "video"),
		this._playing && this.stop();
		var c,
			d,
			e = a(b.target || b.srcElement),
			f = e.closest("." + this._core.settings.itemClass),
			g = this._videos[f.attr("data-video")],
			h = g.width || "100%",
			i = g.height || this._core.$stage.height();
		"youtube" === g.type
			? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>'
			: "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),
		f.addClass("owl-video-playing"),
		this._playing = f,
		d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"),
		e.after(d)
	},
	d.prototype.isInFullScreen = function() {
		var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
		return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0),
		d && this._fullscreen && this._playing
			? !1
			: this._fullscreen
				? (this._fullscreen = !1, !1)
				: this._playing && this._core.state.orientation !== b.orientation
					? (this._core.state.orientation = b.orientation, !1)
					: !0
	},
	d.prototype.destroy = function() {
		var a,
			b;
		this._core.$element.off("click.owl.video");
		for (a in this._handlers)
			this._core.$element.off(a, this._handlers[a]);
		for (b in Object.getOwnPropertyNames(this))
			"function" != typeof this[b] && (this[b] = null)
	},
	a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
	var e = function(b) {
		this.core = b,
		this.core.options = a.extend({}, e.Defaults, this.core.options),
		this.swapping = !0,
		this.previous = d,
		this.next = d,
		this.handlers = {
			"change.owl.carousel": a.proxy(function(a) {
				"position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
			}, this),
			"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
				this.swapping = "translated" == a.type
			}, this),
			"translate.owl.carousel": a.proxy(function() {
				this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
			}, this)
		},
		this.core.$element.on(this.handlers)
	};
	e.Defaults = {
		animateOut: !1,
		animateIn: !1
	},
	e.prototype.swap = function() {
		if (1 === this.core.settings.items && this.core.support3d) {
			this.core.speed(0);
			var b,
				c = a.proxy(this.clear, this),
				d = this.core.$stage.children().eq(this.previous),
				e = this.core.$stage.children().eq(this.next),
				f = this.core.settings.animateIn,
				g = this.core.settings.animateOut;
			this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
				left: b + "px"
			}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
		}
	},
	e.prototype.clear = function(b) {
		a(b.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
		this.core.transitionEnd()
	},
	e.prototype.destroy = function() {
		var a,
			b;
		for (a in this.handlers)
			this.core.$element.off(a, this.handlers[a]);
		for (b in Object.getOwnPropertyNames(this))
			"function" != typeof this[b] && (this[b] = null)
	},
	a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
	var d = function(b) {
		this.core = b,
		this.core.options = a.extend({}, d.Defaults, this.core.options),
		this.handlers = {
			"translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
				this.autoplay()
			}, this),
			"play.owl.autoplay": a.proxy(function(a, b, c) {
				this.play(b, c)
			}, this),
			"stop.owl.autoplay": a.proxy(function() {
				this.stop()
			}, this),
			"mouseover.owl.autoplay": a.proxy(function() {
				this.core.settings.autoplayHoverPause && this.pause()
			}, this),
			"mouseleave.owl.autoplay": a.proxy(function() {
				this.core.settings.autoplayHoverPause && this.autoplay()
			}, this)
		},
		this.core.$element.on(this.handlers)
	};
	d.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	},
	d.prototype.autoplay = function() {
		this.core.settings.autoplay && !this.core.state.videoPlay
			? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
				this.play()
			}, this), this.core.settings.autoplayTimeout))
			: b.clearInterval(this.interval)
	},
	d.prototype.play = function() {
		return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion
			? void 0
			: this.core.settings.autoplay === !1
				? void b.clearInterval(this.interval)
				: void this.core.next(this.core.settings.autoplaySpeed)
	},
	d.prototype.stop = function() {
		b.clearInterval(this.interval)
	},
	d.prototype.pause = function() {
		b.clearInterval(this.interval)
	},
	d.prototype.destroy = function() {
		var a,
			c;
		b.clearInterval(this.interval);
		for (a in this.handlers)
			this.core.$element.off(a, this.handlers[a]);
		for (c in Object.getOwnPropertyNames(this))
			"function" != typeof this[c] && (this[c] = null)
	},
	a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
	"use strict";
	var b = function(c) {
		this._core = c,
		this._initialized = !1,
		this._pages = [],
		this._controls = {},
		this._templates = [],
		this.$element = this._core.$element,
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		},
		this._handlers = {
			"prepared.owl.carousel": a.proxy(function(b) {
				this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
			}, this),
			"add.owl.carousel": a.proxy(function(b) {
				this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
			}, this),
			"remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
				this._core.settings.dotsData && this._templates.splice(a.position, 1)
			}, this),
			"change.owl.carousel": a.proxy(function(a) {
				if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
					var b = this._core.current(),
						c = this._core.maximum(),
						d = this._core.minimum();
					a.data = a.property.value > c
						? b >= c
							? d
							: c
						: a.property.value < d
							? c
							: a.property.value
				}
			}, this),
			"changed.owl.carousel": a.proxy(function(a) {
				"position" == a.property.name && this.draw()
			}, this),
			"refreshed.owl.carousel": a.proxy(function() {
				this._initialized || (this.initialize(), this._initialized = !0),
				this._core.trigger("refresh", null, "navigation"),
				this.update(),
				this.draw(),
				this._core.trigger("refreshed", null, "navigation")
			}, this)
		},
		this._core.options = a.extend({}, b.Defaults, this._core.options),
		this.$element.on(this._handlers)
	};
	b.Defaults = {
		nav: !1,
		navRewind: !0,
		navText: [
			"prev", "next"
		],
		navSpeed: !1,
		navElement: "div",
		navContainer: !1,
		navContainerClass: "owl-nav",
		navClass: [
			"owl-prev", "owl-next"
		],
		slideBy: 1,
		dotClass: "owl-dot",
		dotsClass: "owl-dots",
		dots: !0,
		dotsEach: !1,
		dotData: !1,
		dotsSpeed: !1,
		dotsContainer: !1,
		controlsClass: "owl-controls"
	},
	b.prototype.initialize = function() {
		var b,
			c,
			d = this._core.settings;
		d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),
		d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)),
		this._controls.$indicators = d.dotsContainer
			? a(d.dotsContainer)
			: a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),
		this._controls.$indicators.on("click", "div", a.proxy(function(b) {
			var c = a(b.target).parent().is(this._controls.$indicators)
				? a(b.target).index()
				: a(b.target).parent().index();
			b.preventDefault(),
			this.to(c, d.dotsSpeed)
		}, this)),
		b = d.navContainer
			? a(d.navContainer)
			: a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),
		this._controls.$next = a("<" + d.navElement + ">"),
		this._controls.$previous = this._controls.$next.clone(),
		this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
			this.prev(d.navSpeed)
		}, this)),
		this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
			this.next(d.navSpeed)
		}, this));
		for (c in this._overrides)
			this._core[c] = a.proxy(this[c], this)
	},
	b.prototype.destroy = function() {
		var a,
			b,
			c,
			d;
		for (a in this._handlers)
			this.$element.off(a, this._handlers[a]);
		for (b in this._controls)
			this._controls[b].remove();
		for (d in this.overides)
			this._core[d] = this._overrides[d];
		for (c in Object.getOwnPropertyNames(this))
			"function" != typeof this[c] && (this[c] = null)
	},
	b.prototype.update = function() {
		var a,
			b,
			c,
			d = this._core.settings,
			e = this._core.clones().length / 2,
			f = e + this._core.items().length,
			g = d.center || d.autoWidth || d.dotData
				? 1
				: d.dotsEach || d.items;
		if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
			for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)
				(b >= g || 0 === b) && (this._pages.push({
					start: a - e,
					end: a - e + g - 1
				}), b = 0, ++c),
				b += this._core.mergers(this._core.relative(a))
	},
	b.prototype.draw = function() {
		var b,
			c,
			d = "",
			e = this._core.settings,
			f = (this._core.$stage.children(), this._core.relative(this._core.current()));
		if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
			if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
				for (c = 0; c < this._controls.$indicators.children().length; c++)
					d += this._templates[this._core.relative(c)];
				this._controls.$indicators.html(d)
			} else
				b > 0
					? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d))
					: 0 > b && this._controls.$indicators.children().slice(b).remove();
			this._controls.$indicators.find(".active").removeClass("active"),
			this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
		}
		this._controls.$indicators.toggle(e.dots)
	},
	b.prototype.onTrigger = function(b) {
		var c = this._core.settings;
		b.page = {
			index: a.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: c && (c.center || c.autoWidth || c.dotData
				? 1
				: c.dotsEach || c.items)
		}
	},
	b.prototype.current = function() {
		var b = this._core.relative(this._core.current());
		return a.grep(this._pages, function(a) {
			return a.start <= b && a.end >= b
		}).pop()
	},
	b.prototype.getPosition = function(b) {
		var c,
			d,
			e = this._core.settings;
		return "page" == e.slideBy
			? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b
				? ++c
				: --c, c = this._pages[(c % d + d) % d].start)
			: (c = this._core.relative(this._core.current()), d = this._core.items().length, b
				? c += e.slideBy
				: c -= e.slideBy),
		c
	},
	b.prototype.next = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
	},
	b.prototype.prev = function(b) {
		a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
	},
	b.prototype.to = function(b, c, d) {
		var e;
		d
			? a.proxy(this._overrides.to, this._core)(b, c)
			: (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
	},
	a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
	"use strict";
	var c = function(d) {
		this._core = d,
		this._hashes = {},
		this.$element = this._core.$element,
		this._handlers = {
			"initialized.owl.carousel": a.proxy(function() {
				"URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": a.proxy(function(b) {
				var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
				this._hashes[c] = b.content
			}, this)
		},
		this._core.options = a.extend({}, c.Defaults, this._core.options),
		this.$element.on(this._handlers),
		a(b).on("hashchange.owl.navigation", a.proxy(function() {
			var a = b.location.hash.substring(1),
				c = this._core.$stage.children(),
				d = this._hashes[a] && c.index(this._hashes[a]) || 0;
			return a
				? void this._core.to(d, !1, !0)
				: !1
		}, this))
	};
	c.Defaults = {
		URLhashListener: !1
	},
	c.prototype.destroy = function() {
		var c,
			d;
		a(b).off("hashchange.owl.navigation");
		for (c in this._handlers)
			this._core.$element.off(c, this._handlers[c]);
		for (d in Object.getOwnPropertyNames(this))
			"function" != typeof this[d] && (this[d] = null)
	},
	a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);

/**
 * Swiper 3.3.1
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: February 7, 2016
 */
!function() {
	"use strict";
	function e(e) {
		e.fn.swiper = function(a) {
			var r;
			return e(this).each(function() {
				var e = new t(this, a);
				r || (r = e)
			}),
			r
		}
	}
	var a,
		t = function(e, i) {
			function s(e) {
				return Math.floor(e)
			}
			function n() {
				b.autoplayTimeoutId = setTimeout(function() {
					b.params.loop
						? (b.fixLoop(), b._slideNext(), b.emit("onAutoplay", b))
						: b.isEnd
							? i.autoplayStopOnLast
								? b.stopAutoplay()
								: (b._slideTo(0), b.emit("onAutoplay", b))
							: (b._slideNext(), b.emit("onAutoplay", b))
				}, b.params.autoplay)
			}
			function o(e, t) {
				var r = a(e.target);
				if (!r.is(t))
					if ("string" == typeof t)
						r = r.parents(t);
					else if (t.nodeType) {
						var i;
						return r.parents().each(function(e, a) {
							a === t && (i = t)
						}),
						i
							? t
							: void 0
					}
				if (0 !== r.length)
					return r[0]
			}
			function l(e, a) {
				a = a || {};
				var t = window.MutationObserver || window.WebkitMutationObserver,
					r = new t(function(e) {
						e.forEach(function(e) {
							b.onResize(!0),
							b.emit("onObserverUpdate", b, e)
						})
					});
				r.observe(e, {
					attributes: "undefined" == typeof a.attributes
						? !0
						: a.attributes,
					childList: "undefined" == typeof a.childList
						? !0
						: a.childList,
					characterData: "undefined" == typeof a.characterData
						? !0
						: a.characterData
				}),
				b.observers.push(r)
			}
			function p(e) {
				e.originalEvent && (e = e.originalEvent);
				var a = e.keyCode || e.charCode;
				if (!b.params.allowSwipeToNext && (b.isHorizontal() && 39 === a || !b.isHorizontal() && 40 === a))
					return !1;
				if (!b.params.allowSwipeToPrev && (b.isHorizontal() && 37 === a || !b.isHorizontal() && 38 === a))
					return !1;
				if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
					if (37 === a || 39 === a || 38 === a || 40 === a) {
						var t = !1;
						if (b.container.parents(".swiper-slide").length > 0 && 0 === b.container.parents(".swiper-slide-active").length)
							return;
						var r = {
								left: window.pageXOffset,
								top: window.pageYOffset
							},
							i = window.innerWidth,
							s = window.innerHeight,
							n = b.container.offset();
						b.rtl && (n.left = n.left - b.container[0].scrollLeft);
						for (var o = [
							[
								n.left, n.top
							],
							[
								n.left + b.width,
								n.top
							],
							[
								n.left, n.top + b.height
							],
							[
								n.left + b.width,
								n.top + b.height
							]
						], l = 0; l < o.length; l++) {
							var p = o[l];
							p[0] >= r.left && p[0] <= r.left + i && p[1] >= r.top && p[1] <= r.top + s && (t = !0)
						}
						if (!t)
							return
					}
					b.isHorizontal()
						? ((37 === a || 39 === a) && (e.preventDefault
							? e.preventDefault()
							: e.returnValue = !1), (39 === a && !b.rtl || 37 === a && b.rtl) && b.slideNext(), (37 === a && !b.rtl || 39 === a && b.rtl) && b.slidePrev())
						: ((38 === a || 40 === a) && (e.preventDefault
							? e.preventDefault()
							: e.returnValue = !1), 40 === a && b.slideNext(), 38 === a && b.slidePrev())
				}
			}
			function d(e) {
				e.originalEvent && (e = e.originalEvent);
				var a = b.mousewheel.event,
					t = 0,
					r = b.rtl
						? -1
						: 1;
				if ("mousewheel" === a)
					if (b.params.mousewheelForceToAxis)
						if (b.isHorizontal()) {
							if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)))
								return;
							t = e.wheelDeltaX * r
						}
					else {
						if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)))
							return;
				t = e.wheelDeltaY
				} else
					t = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)
						? -e.wheelDeltaX * r
						: -e.wheelDeltaY;
				else if ("DOMMouseScroll" === a)
					t = -e.detail;
				else if ("wheel" === a)
					if (b.params.mousewheelForceToAxis)
						if (b.isHorizontal()) {
							if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY)))
								return;
							t = -e.deltaX * r
						}
					else {
						if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX)))
							return;
				t = -e.deltaY
				} else
					t = Math.abs(e.deltaX) > Math.abs(e.deltaY)
						? -e.deltaX * r
						: -e.deltaY;
				if (0 !== t) {
					if (b.params.mousewheelInvert && (t = -t), b.params.freeMode) {
						var i = b.getWrapperTranslate() + t * b.params.mousewheelSensitivity,
							s = b.isBeginning,
							n = b.isEnd;
						if (i >= b.minTranslate() && (i = b.minTranslate()), i <= b.maxTranslate() && (i = b.maxTranslate()), b.setWrapperTransition(0), b.setWrapperTranslate(i), b.updateProgress(), b.updateActiveIndex(), (!s && b.isBeginning || !n && b.isEnd) && b.updateClasses(), b.params.freeModeSticky
							? (clearTimeout(b.mousewheel.timeout), b.mousewheel.timeout = setTimeout(function() {
								b.slideReset()
							}, 300))
							: b.params.lazyLoading && b.lazy && b.lazy.load(), 0 === i || i === b.maxTranslate())
							return
					} else {
						if ((new window.Date).getTime() - b.mousewheel.lastScrollTime > 60)
							if (0 > t)
								if (b.isEnd && !b.params.loop || b.animating) {
									if (b.params.mousewheelReleaseOnEdges)
										return !0
								}
							else
							b.slideNext();
						else if (b.isBeginning && !b.params.loop || b.animating) {
							if (b.params.mousewheelReleaseOnEdges)
								return !0
						} else
							b.slidePrev();
						b.mousewheel.lastScrollTime = (new window.Date).getTime()
					}
					return b.params.autoplay && b.stopAutoplay(),
					e.preventDefault
						? e.preventDefault()
						: e.returnValue = !1,
					!1
				}
			}
			function u(e, t) {
				e = a(e);
				var r,
					i,
					s,
					n = b.rtl
						? -1
						: 1;
				r = e.attr("data-swiper-parallax") || "0",
				i = e.attr("data-swiper-parallax-x"),
				s = e.attr("data-swiper-parallax-y"),
				i || s
					? (i = i || "0", s = s || "0")
					: b.isHorizontal()
						? (i = r, s = "0")
						: (s = r, i = "0"),
				i = i.indexOf("%") >= 0
					? parseInt(i, 10) * t * n + "%"
					: i * t * n + "px",
				s = s.indexOf("%") >= 0
					? parseInt(s, 10) * t + "%"
					: s * t + "px",
				e.transform("translate3d(" + i + ", " + s + ",0px)")
			}
			function c(e) {
				return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase()
					? "on" + e[0].toUpperCase() + e.substring(1)
					: "on" + e),
				e
			}
			if (!(this instanceof t))
				return new t(e, i);
			var m = {
					direction: "horizontal",
					touchEventsTarget: "container",
					initialSlide: 0,
					speed: 300,
					autoplay: !1,
					autoplayDisableOnInteraction: !0,
					autoplayStopOnLast: !1,
					iOSEdgeSwipeDetection: !1,
					iOSEdgeSwipeThreshold: 20,
					freeMode: !1,
					freeModeMomentum: !0,
					freeModeMomentumRatio: 1,
					freeModeMomentumBounce: !0,
					freeModeMomentumBounceRatio: 1,
					freeModeSticky: !1,
					freeModeMinimumVelocity: .02,
					autoHeight: !1,
					setWrapperSize: !1,
					virtualTranslate: !1,
					effect: "slide",
					coverflow: {
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: !0
					},
					flip: {
						slideShadows: !0,
						limitRotation: !0
					},
					cube: {
						slideShadows: !0,
						shadow: !0,
						shadowOffset: 20,
						shadowScale: .94
					},
					fade: {
						crossFade: !1
					},
					parallax: !1,
					scrollbar: null,
					scrollbarHide: !0,
					scrollbarDraggable: !1,
					scrollbarSnapOnRelease: !1,
					keyboardControl: !1,
					mousewheelControl: !1,
					mousewheelReleaseOnEdges: !1,
					mousewheelInvert: !1,
					mousewheelForceToAxis: !1,
					mousewheelSensitivity: 1,
					hashnav: !1,
					breakpoints: void 0,
					spaceBetween: 0,
					slidesPerView: 1,
					slidesPerColumn: 1,
					slidesPerColumnFill: "column",
					slidesPerGroup: 1,
					centeredSlides: !1,
					slidesOffsetBefore: 0,
					slidesOffsetAfter: 0,
					roundLengths: !1,
					touchRatio: 1,
					touchAngle: 45,
					simulateTouch: !0,
					shortSwipes: !0,
					longSwipes: !0,
					longSwipesRatio: .5,
					longSwipesMs: 300,
					followFinger: !0,
					onlyExternal: !1,
					threshold: 0,
					touchMoveStopPropagation: !0,
					uniqueNavElements: !0,
					pagination: null,
					paginationElement: "span",
					paginationClickable: !1,
					paginationHide: !1,
					paginationBulletRender: null,
					paginationProgressRender: null,
					paginationFractionRender: null,
					paginationCustomRender: null,
					paginationType: "bullets",
					resistance: !0,
					resistanceRatio: .85,
					nextButton: null,
					prevButton: null,
					watchSlidesProgress: !1,
					watchSlidesVisibility: !1,
					grabCursor: !1,
					preventClicks: !0,
					preventClicksPropagation: !0,
					slideToClickedSlide: !1,
					lazyLoading: !1,
					lazyLoadingInPrevNext: !1,
					lazyLoadingInPrevNextAmount: 1,
					lazyLoadingOnTransitionStart: !1,
					preloadImages: !0,
					updateOnImagesReady: !0,
					loop: !1,
					loopAdditionalSlides: 0,
					loopedSlides: null,
					control: void 0,
					controlInverse: !1,
					controlBy: "slide",
					allowSwipeToPrev: !0,
					allowSwipeToNext: !0,
					swipeHandler: null,
					noSwiping: !0,
					noSwipingClass: "swiper-no-swiping",
					slideClass: "swiper-slide",
					slideActiveClass: "swiper-slide-active",
					slideVisibleClass: "swiper-slide-visible",
					slideDuplicateClass: "swiper-slide-duplicate",
					slideNextClass: "swiper-slide-next",
					slidePrevClass: "swiper-slide-prev",
					wrapperClass: "swiper-wrapper",
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
					buttonDisabledClass: "swiper-button-disabled",
					paginationCurrentClass: "swiper-pagination-current",
					paginationTotalClass: "swiper-pagination-total",
					paginationHiddenClass: "swiper-pagination-hidden",
					paginationProgressbarClass: "swiper-pagination-progressbar",
					observer: !1,
					observeParents: !1,
					a11y: !1,
					prevSlideMessage: "Previous slide",
					nextSlideMessage: "Next slide",
					firstSlideMessage: "This is the first slide",
					lastSlideMessage: "This is the last slide",
					paginationBulletMessage: "Go to slide {{index}}",
					runCallbacksOnInit: !0
				},
				h = i && i.virtualTranslate;
			i = i || {};
			var f = {};
			for (var g in i)
				if ("object" != typeof i[g] || null === i[g] || (i[g].nodeType || i[g] === window || i[g] === document || "undefined" != typeof r && i[g]instanceof r || "undefined" != typeof jQuery && i[g]instanceof jQuery))
					f[g] = i[g];
				else {
					f[g] = {};
					for (var v in i[g])
						f[g][v] = i[g][v]
				}
			for (var w in m)
				if ("undefined" == typeof i[w])
					i[w] = m[w];
				else if ("object" == typeof i[w])
					for (var y in m[w])
						"undefined" == typeof i[w][y] && (i[w][y] = m[w][y]);
		var b = this;
			if (b.params = i, b.originalParams = f, b.classNames = [], "undefined" != typeof a && "undefined" != typeof r && (a = r), ("undefined" != typeof a || (a = "undefined" == typeof r
				? window.Dom7 || window.Zepto || window.jQuery
				: r)) && (b.$ = a, b.currentBreakpoint = void 0, b.getActiveBreakpoint = function() {
				if (!b.params.breakpoints)
					return !1;
				var e,
					a = !1,
					t = [];
				for (e in b.params.breakpoints)
					b.params.breakpoints.hasOwnProperty(e) && t.push(e);
				t.sort(function(e, a) {
					return parseInt(e, 10) > parseInt(a, 10)
				});
				for (var r = 0; r < t.length; r++)
					e = t[r],
					e >= window.innerWidth && !a && (a = e);
				return a || "max"
			},
			b.setBreakpoint = function() {
				var e = b.getActiveBreakpoint();
				if (e && b.currentBreakpoint !== e) {
					var a = e in b.params.breakpoints
							? b.params.breakpoints[e]
							: b.originalParams,
						t = b.params.loop && a.slidesPerView !== b.params.slidesPerView;
					for (var r in a)
						b.params[r] = a[r];
					b.currentBreakpoint = e,
					t && b.destroyLoop && b.reLoop(!0)
				}
			},
			b.params.breakpoints && b.setBreakpoint(),
			b.container = a(e),
			0 !== b.container.length)) {
				if (b.container.length > 1) {
					var x = [];
					return b.container.each(function() {
						x.push(new t(this, i))
					}),
					x
				}
				b.container[0].swiper = b,
				b.container.data("swiper", b),
				b.classNames.push("swiper-container-" + b.params.direction),
				b.params.freeMode && b.classNames.push("swiper-container-free-mode"),
				b.support.flexbox || (b.classNames.push("swiper-container-no-flexbox"), b.params.slidesPerColumn = 1),
				b.params.autoHeight && b.classNames.push("swiper-container-autoheight"),
				(b.params.parallax || b.params.watchSlidesVisibility) && (b.params.watchSlidesProgress = !0),
				["cube", "coverflow", "flip"].indexOf(b.params.effect) >= 0 && (b.support.transforms3d
					? (b.params.watchSlidesProgress = !0, b.classNames.push("swiper-container-3d"))
					: b.params.effect = "slide"),
				"slide" !== b.params.effect && b.classNames.push("swiper-container-" + b.params.effect),
				"cube" === b.params.effect && (b.params.resistanceRatio = 0, b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.centeredSlides = !1, b.params.spaceBetween = 0, b.params.virtualTranslate = !0, b.params.setWrapperSize = !1),
				("fade" === b.params.effect || "flip" === b.params.effect) && (b.params.slidesPerView = 1, b.params.slidesPerColumn = 1, b.params.slidesPerGroup = 1, b.params.watchSlidesProgress = !0, b.params.spaceBetween = 0, b.params.setWrapperSize = !1, "undefined" == typeof h && (b.params.virtualTranslate = !0)),
				b.params.grabCursor && b.support.touch && (b.params.grabCursor = !1),
				b.wrapper = b.container.children("." + b.params.wrapperClass),
				b.params.pagination && (b.paginationContainer = a(b.params.pagination), b.params.uniqueNavElements && "string" == typeof b.params.pagination && b.paginationContainer.length > 1 && 1 === b.container.find(b.params.pagination).length && (b.paginationContainer = b.container.find(b.params.pagination)), "bullets" === b.params.paginationType && b.params.paginationClickable
					? b.paginationContainer.addClass("swiper-pagination-clickable")
					: b.params.paginationClickable = !1, b.paginationContainer.addClass("swiper-pagination-" + b.params.paginationType)),
				(b.params.nextButton || b.params.prevButton) && (b.params.nextButton && (b.nextButton = a(b.params.nextButton), b.params.uniqueNavElements && "string" == typeof b.params.nextButton && b.nextButton.length > 1 && 1 === b.container.find(b.params.nextButton).length && (b.nextButton = b.container.find(b.params.nextButton))), b.params.prevButton && (b.prevButton = a(b.params.prevButton), b.params.uniqueNavElements && "string" == typeof b.params.prevButton && b.prevButton.length > 1 && 1 === b.container.find(b.params.prevButton).length && (b.prevButton = b.container.find(b.params.prevButton)))),
				b.isHorizontal = function() {
					return "horizontal" === b.params.direction
				},
				b.rtl = b.isHorizontal() && ("rtl" === b.container[0].dir.toLowerCase() || "rtl" === b.container.css("direction")),
				b.rtl && b.classNames.push("swiper-container-rtl"),
				b.rtl && (b.wrongRTL = "-webkit-box" === b.wrapper.css("display")),
				b.params.slidesPerColumn > 1 && b.classNames.push("swiper-container-multirow"),
				b.device.android && b.classNames.push("swiper-container-android"),
				b.container.addClass(b.classNames.join(" ")),
				b.translate = 0,
				b.progress = 0,
				b.velocity = 0,
				b.lockSwipeToNext = function() {
					b.params.allowSwipeToNext = !1
				},
				b.lockSwipeToPrev = function() {
					b.params.allowSwipeToPrev = !1
				},
				b.lockSwipes = function() {
					b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !1
				},
				b.unlockSwipeToNext = function() {
					b.params.allowSwipeToNext = !0
				},
				b.unlockSwipeToPrev = function() {
					b.params.allowSwipeToPrev = !0
				},
				b.unlockSwipes = function() {
					b.params.allowSwipeToNext = b.params.allowSwipeToPrev = !0
				},
				b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab"),
				b.imagesToLoad = [],
				b.imagesLoaded = 0,
				b.loadImage = function(e, a, t, r, i) {
					function s() {
						i && i()
					}
					var n;
					e.complete && r
						? s()
						: a
							? (n = new window.Image, n.onload = s, n.onerror = s, t && (n.srcset = t), a && (n.src = a))
							: s()
				},
				b.preloadImages = function() {
					function e() {
						"undefined" != typeof b && null !== b && (void 0 !== b.imagesLoaded && b.imagesLoaded++, b.imagesLoaded === b.imagesToLoad.length && (b.params.updateOnImagesReady && b.update(), b.emit("onImagesReady", b)))
					}
					b.imagesToLoad = b.container.find("img");
					for (var a = 0; a < b.imagesToLoad.length; a++)
						b.loadImage(b.imagesToLoad[a], b.imagesToLoad[a].currentSrc || b.imagesToLoad[a].getAttribute("src"), b.imagesToLoad[a].srcset || b.imagesToLoad[a].getAttribute("srcset"), !0, e)
				},
				b.autoplayTimeoutId = void 0,
				b.autoplaying = !1,
				b.autoplayPaused = !1,
				b.startAutoplay = function() {
					return "undefined" != typeof b.autoplayTimeoutId
						? !1
						: b.params.autoplay
							? b.autoplaying
								? !1
								: (b.autoplaying = !0, b.emit("onAutoplayStart", b), void n())
							: !1
				},
				b.stopAutoplay = function(e) {
					b.autoplayTimeoutId && (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplaying = !1, b.autoplayTimeoutId = void 0, b.emit("onAutoplayStop", b))
				},
				b.pauseAutoplay = function(e) {
					b.autoplayPaused || (b.autoplayTimeoutId && clearTimeout(b.autoplayTimeoutId), b.autoplayPaused = !0, 0 === e
						? (b.autoplayPaused = !1, n())
						: b.wrapper.transitionEnd(function() {
							b && (b.autoplayPaused = !1, b.autoplaying
								? n()
								: b.stopAutoplay())
						}))
				},
				b.minTranslate = function() {
					return -b.snapGrid[0]
				},
				b.maxTranslate = function() {
					return -b.snapGrid[b.snapGrid.length - 1]
				},
				b.updateAutoHeight = function() {
					var e = b.slides.eq(b.activeIndex)[0];
					if ("undefined" != typeof e) {
						var a = e.offsetHeight;
						a && b.wrapper.css("height", a + "px")
					}
				},
				b.updateContainerSize = function() {
					var e,
						a;
					e = "undefined" != typeof b.params.width
						? b.params.width
						: b.container[0].clientWidth,
					a = "undefined" != typeof b.params.height
						? b.params.height
						: b.container[0].clientHeight,
					0 === e && b.isHorizontal() || 0 === a && !b.isHorizontal() || (e = e - parseInt(b.container.css("padding-left"), 10) - parseInt(b.container.css("padding-right"), 10), a = a - parseInt(b.container.css("padding-top"), 10) - parseInt(b.container.css("padding-bottom"), 10), b.width = e, b.height = a, b.size = b.isHorizontal()
						? b.width
						: b.height)
				},
				b.updateSlidesSize = function() {
					b.slides = b.wrapper.children("." + b.params.slideClass),
					b.snapGrid = [],
					b.slidesGrid = [],
					b.slidesSizesGrid = [];
					var e,
						a = b.params.spaceBetween,
						t = -b.params.slidesOffsetBefore,
						r = 0,
						i = 0;
					if ("undefined" != typeof b.size) {
						"string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * b.size),
						b.virtualSize = -a,
						b.rtl
							? b.slides.css({marginLeft: "", marginTop: ""})
							: b.slides.css({marginRight: "", marginBottom: ""});
						var n;
						b.params.slidesPerColumn > 1 && (n = Math.floor(b.slides.length / b.params.slidesPerColumn) === b.slides.length / b.params.slidesPerColumn
							? b.slides.length
							: Math.ceil(b.slides.length / b.params.slidesPerColumn) * b.params.slidesPerColumn, "auto" !== b.params.slidesPerView && "row" === b.params.slidesPerColumnFill && (n = Math.max(n, b.params.slidesPerView * b.params.slidesPerColumn)));
						var o,
							l = b.params.slidesPerColumn,
							p = n / l,
							d = p - (b.params.slidesPerColumn * p - b.slides.length);
						for (e = 0; e < b.slides.length; e++) {
							o = 0;
							var u = b.slides.eq(e);
							if (b.params.slidesPerColumn > 1) {
								var c,
									m,
									h;
								"column" === b.params.slidesPerColumnFill
									? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * n / l, u.css({"-webkit-box-ordinal-group": c, "-moz-box-ordinal-group": c, "-ms-flex-order": c, "-webkit-order": c, order: c}))
									: (h = Math.floor(e / p), m = e - h * p),
								u.css({
									"margin-top": 0 !== h && b.params.spaceBetween && b.params.spaceBetween + "px"
								}).attr("data-swiper-column", m).attr("data-swiper-row", h)
							}
							"none" !== u.css("display") && ("auto" === b.params.slidesPerView
								? (o = b.isHorizontal()
									? u.outerWidth(!0)
									: u.outerHeight(!0), b.params.roundLengths && (o = s(o)))
								: (o = (b.size - (b.params.slidesPerView - 1) * a) / b.params.slidesPerView, b.params.roundLengths && (o = s(o)), b.isHorizontal()
									? b.slides[e].style.width = o + "px"
									: b.slides[e].style.height = o + "px"), b.slides[e].swiperSlideSize = o, b.slidesSizesGrid.push(o), b.params.centeredSlides
								? (t = t + o / 2 + r / 2 + a, 0 === e && (t = t - b.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % b.params.slidesPerGroup === 0 && b.snapGrid.push(t), b.slidesGrid.push(t))
								: (i % b.params.slidesPerGroup === 0 && b.snapGrid.push(t), b.slidesGrid.push(t), t = t + o + a), b.virtualSize += o + a, r = o, i++)
						}
						b.virtualSize = Math.max(b.virtualSize, b.size) + b.params.slidesOffsetAfter;
						var f;
						if (b.rtl && b.wrongRTL && ("slide" === b.params.effect || "coverflow" === b.params.effect) && b.wrapper.css({
							width: b.virtualSize + b.params.spaceBetween + "px"
						}), (!b.support.flexbox || b.params.setWrapperSize) && (b.isHorizontal()
							? b.wrapper.css({
								width: b.virtualSize + b.params.spaceBetween + "px"
							})
							: b.wrapper.css({
								height: b.virtualSize + b.params.spaceBetween + "px"
							})), b.params.slidesPerColumn > 1 && (b.virtualSize = (o + b.params.spaceBetween) * n, b.virtualSize = Math.ceil(b.virtualSize / b.params.slidesPerColumn) - b.params.spaceBetween, b.wrapper.css({
							width: b.virtualSize + b.params.spaceBetween + "px"
						}), b.params.centeredSlides)) {
							for (f = [], e = 0; e < b.snapGrid.length; e++)
								b.snapGrid[e] < b.virtualSize + b.snapGrid[0] && f.push(b.snapGrid[e]);
							b.snapGrid = f
						}
						if (!b.params.centeredSlides) {
							for (f = [], e = 0; e < b.snapGrid.length; e++)
								b.snapGrid[e] <= b.virtualSize - b.size && f.push(b.snapGrid[e]);
							b.snapGrid = f,
							Math.floor(b.virtualSize - b.size) - Math.floor(b.snapGrid[b.snapGrid.length - 1]) > 1 && b.snapGrid.push(b.virtualSize - b.size)
						}
						0 === b.snapGrid.length && (b.snapGrid = [0]),
						0 !== b.params.spaceBetween && (b.isHorizontal()
							? b.rtl
								? b.slides.css({
									marginLeft: a + "px"
								})
								: b.slides.css({
									marginRight: a + "px"
								})
							: b.slides.css({
								marginBottom: a + "px"
							})),
						b.params.watchSlidesProgress && b.updateSlidesOffset()
					}
				},
				b.updateSlidesOffset = function() {
					for (var e = 0; e < b.slides.length; e++)
						b.slides[e].swiperSlideOffset = b.isHorizontal()
							? b.slides[e].offsetLeft
							: b.slides[e].offsetTop
					},
				b.updateSlidesProgress = function(e) {
					if ("undefined" == typeof e && (e = b.translate || 0), 0 !== b.slides.length) {
						"undefined" == typeof b.slides[0].swiperSlideOffset && b.updateSlidesOffset();
						var a = -e;
						b.rtl && (a = e),
						b.slides.removeClass(b.params.slideVisibleClass);
						for (var t = 0; t < b.slides.length; t++) {
							var r = b.slides[t],
								i = (a - r.swiperSlideOffset) / (r.swiperSlideSize + b.params.spaceBetween);
							if (b.params.watchSlidesVisibility) {
								var s = -(a - r.swiperSlideOffset),
									n = s + b.slidesSizesGrid[t],
									o = s >= 0 && s < b.size || n > 0 && n <= b.size || 0 >= s && n >= b.size;
								o && b.slides.eq(t).addClass(b.params.slideVisibleClass)
							}
							r.progress = b.rtl
								? -i
								: i
						}
					}
				},
				b.updateProgress = function(e) {
					"undefined" == typeof e && (e = b.translate || 0);
					var a = b.maxTranslate() - b.minTranslate(),
						t = b.isBeginning,
						r = b.isEnd;
					0 === a
						? (b.progress = 0, b.isBeginning = b.isEnd = !0)
						: (b.progress = (e - b.minTranslate()) / a, b.isBeginning = b.progress <= 0, b.isEnd = b.progress >= 1),
					b.isBeginning && !t && b.emit("onReachBeginning", b),
					b.isEnd && !r && b.emit("onReachEnd", b),
					b.params.watchSlidesProgress && b.updateSlidesProgress(e),
					b.emit("onProgress", b, b.progress)
				},
				b.updateActiveIndex = function() {
					var e,
						a,
						t,
						r = b.rtl
							? b.translate
							: -b.translate;
					for (a = 0; a < b.slidesGrid.length; a++)
						"undefined" != typeof b.slidesGrid[a + 1]
							? r >= b.slidesGrid[a] && r < b.slidesGrid[a + 1] - (b.slidesGrid[a + 1] - b.slidesGrid[a]) / 2
								? e = a
								: r >= b.slidesGrid[a] && r < b.slidesGrid[a + 1] && (e = a + 1)
							: r >= b.slidesGrid[a] && (e = a);

					(0 > e || "undefined" == typeof e) && (e = 0),
					t = Math.floor(e / b.params.slidesPerGroup),
					t >= b.snapGrid.length && (t = b.snapGrid.length - 1),
					e !== b.activeIndex && (b.snapIndex = t, b.previousIndex = b.activeIndex, b.activeIndex = e, b.updateClasses())
				},
				b.updateClasses = function() {
					b.slides.removeClass(b.params.slideActiveClass + " " + b.params.slideNextClass + " " + b.params.slidePrevClass);
					var e = b.slides.eq(b.activeIndex);
					e.addClass(b.params.slideActiveClass);
					var t = e.next("." + b.params.slideClass).addClass(b.params.slideNextClass);
					b.params.loop && 0 === t.length && b.slides.eq(0).addClass(b.params.slideNextClass);
					var r = e.prev("." + b.params.slideClass).addClass(b.params.slidePrevClass);
					if (b.params.loop && 0 === r.length && b.slides.eq(-1).addClass(b.params.slidePrevClass), b.paginationContainer && b.paginationContainer.length > 0) {
						var i,
							s = b.params.loop
								? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup)
								: b.snapGrid.length;
						if (b.params.loop
							? (i = Math.ceil((b.activeIndex - b.loopedSlides) / b.params.slidesPerGroup), i > b.slides.length - 1 - 2 * b.loopedSlides && (i -= b.slides.length - 2 * b.loopedSlides), i > s - 1 && (i -= s), 0 > i && "bullets" !== b.params.paginationType && (i = s + i))
							: i = "undefined" != typeof b.snapIndex
								? b.snapIndex
								: b.activeIndex || 0, "bullets" === b.params.paginationType && b.bullets && b.bullets.length > 0 && (b.bullets.removeClass(b.params.bulletActiveClass), b.paginationContainer.length > 1
							? b.bullets.each(function() {
								a(this).index() === i && a(this).addClass(b.params.bulletActiveClass)
							})
							: b.bullets.eq(i).addClass(b.params.bulletActiveClass)), "fraction" === b.params.paginationType && (b.paginationContainer.find("." + b.params.paginationCurrentClass).text(i + 1), b.paginationContainer.find("." + b.params.paginationTotalClass).text(s)), "progress" === b.params.paginationType) {
							var n = (i + 1) / s,
								o = n,
								l = 1;
							b.isHorizontal() || (l = n, o = 1),
							b.paginationContainer.find("." + b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + o + ") scaleY(" + l + ")").transition(b.params.speed)
						}
						"custom" === b.params.paginationType && b.params.paginationCustomRender && (b.paginationContainer.html(b.params.paginationCustomRender(b, i + 1, s)), b.emit("onPaginationRendered", b, b.paginationContainer[0]))
					}
					b.params.loop || (b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.isBeginning
						? (b.prevButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.prevButton))
						: (b.prevButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.prevButton))), b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.isEnd
						? (b.nextButton.addClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.disable(b.nextButton))
						: (b.nextButton.removeClass(b.params.buttonDisabledClass), b.params.a11y && b.a11y && b.a11y.enable(b.nextButton))))
				},
				b.updatePagination = function() {
					if (b.params.pagination && b.paginationContainer && b.paginationContainer.length > 0) {
						var e = "";
						if ("bullets" === b.params.paginationType) {
							for (var a = b.params.loop
								? Math.ceil((b.slides.length - 2 * b.loopedSlides) / b.params.slidesPerGroup)
								: b.snapGrid.length, t = 0; a > t; t++)
								e += b.params.paginationBulletRender
									? b.params.paginationBulletRender(t, b.params.bulletClass)
									: "<" + b.params.paginationElement + ' class="' + b.params.bulletClass + '"></' + b.params.paginationElement + ">";
							b.paginationContainer.html(e),
							b.bullets = b.paginationContainer.find("." + b.params.bulletClass),
							b.params.paginationClickable && b.params.a11y && b.a11y && b.a11y.initPagination()
						}
						"fraction" === b.params.paginationType && (e = b.params.paginationFractionRender
							? b.params.paginationFractionRender(b, b.params.paginationCurrentClass, b.params.paginationTotalClass)
							: '<span class="' + b.params.paginationCurrentClass + '"></span> / <span class="' + b.params.paginationTotalClass + '"></span>', b.paginationContainer.html(e)),
						"progress" === b.params.paginationType && (e = b.params.paginationProgressRender
							? b.params.paginationProgressRender(b, b.params.paginationProgressbarClass)
							: '<span class="' + b.params.paginationProgressbarClass + '"></span>', b.paginationContainer.html(e)),
						"custom" !== b.params.paginationType && b.emit("onPaginationRendered", b, b.paginationContainer[0])
					}
				},
				b.update = function(e) {
					function a() {
						r = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate()),
						b.setWrapperTranslate(r),
						b.updateActiveIndex(),
						b.updateClasses()
					}
					if (b.updateContainerSize(), b.updateSlidesSize(), b.updateProgress(), b.updatePagination(), b.updateClasses(), b.params.scrollbar && b.scrollbar && b.scrollbar.set(), e) {
						var t,
							r;
						b.controller && b.controller.spline && (b.controller.spline = void 0),
						b.params.freeMode
							? (a(), b.params.autoHeight && b.updateAutoHeight())
							: (t = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides
								? b.slideTo(b.slides.length - 1, 0, !1, !0)
								: b.slideTo(b.activeIndex, 0, !1, !0), t || a())
					} else
						b.params.autoHeight && b.updateAutoHeight()
				},
				b.onResize = function(e) {
					b.params.breakpoints && b.setBreakpoint();
					var a = b.params.allowSwipeToPrev,
						t = b.params.allowSwipeToNext;
					b.params.allowSwipeToPrev = b.params.allowSwipeToNext = !0,
					b.updateContainerSize(),
					b.updateSlidesSize(),
					("auto" === b.params.slidesPerView || b.params.freeMode || e) && b.updatePagination(),
					b.params.scrollbar && b.scrollbar && b.scrollbar.set(),
					b.controller && b.controller.spline && (b.controller.spline = void 0);
					var r = !1;
					if (b.params.freeMode) {
						var i = Math.min(Math.max(b.translate, b.maxTranslate()), b.minTranslate());
						b.setWrapperTranslate(i),
						b.updateActiveIndex(),
						b.updateClasses(),
						b.params.autoHeight && b.updateAutoHeight()
					} else
						b.updateClasses(),
						r = ("auto" === b.params.slidesPerView || b.params.slidesPerView > 1) && b.isEnd && !b.params.centeredSlides
							? b.slideTo(b.slides.length - 1, 0, !1, !0)
							: b.slideTo(b.activeIndex, 0, !1, !0);
					b.params.lazyLoading && !r && b.lazy && b.lazy.load(),
					b.params.allowSwipeToPrev = a,
					b.params.allowSwipeToNext = t
				};
				var T = ["mousedown", "mousemove", "mouseup"];
				window.navigator.pointerEnabled
					? T = ["pointerdown", "pointermove", "pointerup"]
					: window.navigator.msPointerEnabled && (T = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
				b.touchEvents = {
					start: b.support.touch || !b.params.simulateTouch
						? "touchstart"
						: T[0],
					move: b.support.touch || !b.params.simulateTouch
						? "touchmove"
						: T[1],
					end: b.support.touch || !b.params.simulateTouch
						? "touchend"
						: T[2]
				},
				(window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === b.params.touchEventsTarget
					? b.container
					: b.wrapper).addClass("swiper-wp8-" + b.params.direction),
				b.initEvents = function(e) {
					var a = e
							? "off"
							: "on",
						t = e
							? "removeEventListener"
							: "addEventListener",
						r = "container" === b.params.touchEventsTarget
							? b.container[0]
							: b.wrapper[0],
						s = b.support.touch
							? r
							: document,
						n = b.params.nested
							? !0
							: !1;
					b.browser.ie
						? (r[t](b.touchEvents.start, b.onTouchStart, !1), s[t](b.touchEvents.move, b.onTouchMove, n), s[t](b.touchEvents.end, b.onTouchEnd, !1))
						: (b.support.touch && (r[t](b.touchEvents.start, b.onTouchStart, !1), r[t](b.touchEvents.move, b.onTouchMove, n), r[t](b.touchEvents.end, b.onTouchEnd, !1)), !i.simulateTouch || b.device.ios || b.device.android || (r[t]("mousedown", b.onTouchStart, !1), document[t]("mousemove", b.onTouchMove, n), document[t]("mouseup", b.onTouchEnd, !1))),
					window[t]("resize", b.onResize),
					b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.nextButton[a]("click", b.onClickNext), b.params.a11y && b.a11y && b.nextButton[a]("keydown", b.a11y.onEnterKey)),
					b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.prevButton[a]("click", b.onClickPrev), b.params.a11y && b.a11y && b.prevButton[a]("keydown", b.a11y.onEnterKey)),
					b.params.pagination && b.params.paginationClickable && (b.paginationContainer[a]("click", "." + b.params.bulletClass, b.onClickIndex), b.params.a11y && b.a11y && b.paginationContainer[a]("keydown", "." + b.params.bulletClass, b.a11y.onEnterKey)),
					(b.params.preventClicks || b.params.preventClicksPropagation) && r[t]("click", b.preventClicks, !0)
				},
				b.attachEvents = function() {
					b.initEvents()
				},
				b.detachEvents = function() {
					b.initEvents(!0)
				},
				b.allowClick = !0,
				b.preventClicks = function(e) {
					b.allowClick || (b.params.preventClicks && e.preventDefault(), b.params.preventClicksPropagation && b.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
				},
				b.onClickNext = function(e) {
					e.preventDefault(),
					(!b.isEnd || b.params.loop) && b.slideNext()
				},
				b.onClickPrev = function(e) {
					e.preventDefault(),
					(!b.isBeginning || b.params.loop) && b.slidePrev()
				},
				b.onClickIndex = function(e) {
					e.preventDefault();
					var t = a(this).index() * b.params.slidesPerGroup;
					b.params.loop && (t += b.loopedSlides),
					b.slideTo(t)
				},
				b.updateClickedSlide = function(e) {
					var t = o(e, "." + b.params.slideClass),
						r = !1;
					if (t)
						for (var i = 0; i < b.slides.length; i++)
							b.slides[i] === t && (r = !0);
				if (!t || !r)
						return b.clickedSlide = void 0,
						void(b.clickedIndex = void 0);
					if (b.clickedSlide = t, b.clickedIndex = a(t).index(), b.params.slideToClickedSlide && void 0 !== b.clickedIndex && b.clickedIndex !== b.activeIndex) {
						var s,
							n = b.clickedIndex;
						if (b.params.loop) {
							if (b.animating)
								return;
							s = a(b.clickedSlide).attr("data-swiper-slide-index"),
							b.params.centeredSlides
								? n < b.loopedSlides - b.params.slidesPerView / 2 || n > b.slides.length - b.loopedSlides + b.params.slidesPerView / 2
									? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
										b.slideTo(n)
									}, 0))
									: b.slideTo(n)
								: n > b.slides.length - b.params.slidesPerView
									? (b.fixLoop(), n = b.wrapper.children("." + b.params.slideClass + '[data-swiper-slide-index="' + s + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
										b.slideTo(n)
									}, 0))
									: b.slideTo(n)
						} else
							b.slideTo(n)
					}
				};
				var S,
					C,
					z,
					M,
					E,
					P,
					k,
					I,
					L,
					B,
					D = "input, select, textarea, button",
					H = Date.now(),
					A = [];
				b.animating = !1,
				b.touches = {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				};
				var G,
					O;
				if (b.onTouchStart = function(e) {
					if (e.originalEvent && (e = e.originalEvent), G = "touchstart" === e.type, G || !("which" in e) || 3 !== e.which) {
						if (b.params.noSwiping && o(e, "." + b.params.noSwipingClass))
							return void(b.allowClick = !0);
						if (!b.params.swipeHandler || o(e, b.params.swipeHandler)) {
							var t = b.touches.currentX = "touchstart" === e.type
									? e.targetTouches[0].pageX
									: e.pageX,
								r = b.touches.currentY = "touchstart" === e.type
									? e.targetTouches[0].pageY
									: e.pageY;
							if (!(b.device.ios && b.params.iOSEdgeSwipeDetection && t <= b.params.iOSEdgeSwipeThreshold)) {
								if (S = !0, C = !1, z = !0, E = void 0, O = void 0, b.touches.startX = t, b.touches.startY = r, M = Date.now(), b.allowClick = !0, b.updateContainerSize(), b.swipeDirection = void 0, b.params.threshold > 0 && (I = !1), "touchstart" !== e.type) {
									var i = !0;
									a(e.target).is(D) && (i = !1),
									document.activeElement && a(document.activeElement).is(D) && document.activeElement.blur(),
									i && e.preventDefault()
								}
								b.emit("onTouchStart", b, e)
							}
						}
					}
				},
				b.onTouchMove = function(e) {
					if (e.originalEvent && (e = e.originalEvent), !G || "mousemove" !== e.type) {
						if (e.preventedByNestedSwiper)
							return b.touches.startX = "touchmove" === e.type
								? e.targetTouches[0].pageX
								: e.pageX,
							void(b.touches.startY = "touchmove" === e.type
								? e.targetTouches[0].pageY
								: e.pageY);
						if (b.params.onlyExternal)
							return b.allowClick = !1,
							void(S && (b.touches.startX = b.touches.currentX = "touchmove" === e.type
								? e.targetTouches[0].pageX
								: e.pageX, b.touches.startY = b.touches.currentY = "touchmove" === e.type
								? e.targetTouches[0].pageY
								: e.pageY, M = Date.now()));
						if (G && document.activeElement && e.target === document.activeElement && a(e.target).is(D))
							return C = !0,
							void(b.allowClick = !1);
						if (z && b.emit("onTouchMove", b, e), !(e.targetTouches && e.targetTouches.length > 1)) {
							if (b.touches.currentX = "touchmove" === e.type
								? e.targetTouches[0].pageX
								: e.pageX, b.touches.currentY = "touchmove" === e.type
								? e.targetTouches[0].pageY
								: e.pageY, "undefined" == typeof E) {
								var t = 180 * Math.atan2(Math.abs(b.touches.currentY - b.touches.startY), Math.abs(b.touches.currentX - b.touches.startX)) / Math.PI;
								E = b.isHorizontal()
									? t > b.params.touchAngle
									: 90 - t > b.params.touchAngle
							}
							if (E && b.emit("onTouchMoveOpposite", b, e), "undefined" == typeof O && b.browser.ieTouch && (b.touches.currentX !== b.touches.startX || b.touches.currentY !== b.touches.startY) && (O = !0), S) {
								if (E)
									return void(S = !1);
								if (O || !b.browser.ieTouch) {
									b.allowClick = !1,
									b.emit("onSliderMove", b, e),
									e.preventDefault(),
									b.params.touchMoveStopPropagation && !b.params.nested && e.stopPropagation(),
									C || (i.loop && b.fixLoop(), k = b.getWrapperTranslate(), b.setWrapperTransition(0), b.animating && b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), b.params.autoplay && b.autoplaying && (b.params.autoplayDisableOnInteraction
										? b.stopAutoplay()
										: b.pauseAutoplay()), B = !1, b.params.grabCursor && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grabbing", b.container[0].style.cursor = "-moz-grabbin", b.container[0].style.cursor = "grabbing")),
									C = !0;
									var r = b.touches.diff = b.isHorizontal()
										? b.touches.currentX - b.touches.startX
										: b.touches.currentY - b.touches.startY;
									r *= b.params.touchRatio,
									b.rtl && (r = -r),
									b.swipeDirection = r > 0
										? "prev"
										: "next",
									P = r + k;
									var s = !0;
									if (r > 0 && P > b.minTranslate()
										? (s = !1, b.params.resistance && (P = b.minTranslate() - 1 + Math.pow(-b.minTranslate() + k + r, b.params.resistanceRatio)))
										: 0 > r && P < b.maxTranslate() && (s = !1, b.params.resistance && (P = b.maxTranslate() + 1 - Math.pow(b.maxTranslate() - k - r, b.params.resistanceRatio))), s && (e.preventedByNestedSwiper = !0), !b.params.allowSwipeToNext && "next" === b.swipeDirection && k > P && (P = k), !b.params.allowSwipeToPrev && "prev" === b.swipeDirection && P > k && (P = k), b.params.followFinger) {
										if (b.params.threshold > 0) {
											if (!(Math.abs(r) > b.params.threshold || I))
												return void(P = k);
											if (!I)
												return I = !0,
												b.touches.startX = b.touches.currentX,
												b.touches.startY = b.touches.currentY,
												P = k,
												void(b.touches.diff = b.isHorizontal()
													? b.touches.currentX - b.touches.startX
													: b.touches.currentY - b.touches.startY)
											}
										(b.params.freeMode || b.params.watchSlidesProgress) && b.updateActiveIndex(),
										b.params.freeMode && (0 === A.length && A.push({
											position: b.touches[b.isHorizontal()
													? "startX"
													: "startY"],
											time: M
										}), A.push({
											position: b.touches[b.isHorizontal()
													? "currentX"
													: "currentY"],
											time: (new window.Date).getTime()
										})),
										b.updateProgress(P),
										b.setWrapperTranslate(P)
									}
								}
							}
						}
					}
				},
				b.onTouchEnd = function(e) {
					if (e.originalEvent && (e = e.originalEvent), z && b.emit("onTouchEnd", b, e), z = !1, S) {
						b.params.grabCursor && C && S && (b.container[0].style.cursor = "move", b.container[0].style.cursor = "-webkit-grab", b.container[0].style.cursor = "-moz-grab", b.container[0].style.cursor = "grab");
						var t = Date.now(),
							r = t - M;
						if (b.allowClick && (b.updateClickedSlide(e), b.emit("onTap", b, e), 300 > r && t - H > 300 && (L && clearTimeout(L), L = setTimeout(function() {
							b && (b.params.paginationHide && b.paginationContainer.length > 0 && !a(e.target).hasClass(b.params.bulletClass) && b.paginationContainer.toggleClass(b.params.paginationHiddenClass), b.emit("onClick", b, e))
						}, 300)), 300 > r && 300 > t - H && (L && clearTimeout(L), b.emit("onDoubleTap", b, e))), H = Date.now(), setTimeout(function() {
							b && (b.allowClick = !0)
						}, 0), !S || !C || !b.swipeDirection || 0 === b.touches.diff || P === k)
							return void(S = C = !1);
						S = C = !1;
						var i;
						if (i = b.params.followFinger
							? b.rtl
								? b.translate
								: -b.translate
							: -P, b.params.freeMode) {
							if (i < -b.minTranslate())
								return void b.slideTo(b.activeIndex);
							if (i > -b.maxTranslate())
								return void(b.slides.length < b.snapGrid.length
									? b.slideTo(b.snapGrid.length - 1)
									: b.slideTo(b.slides.length - 1));
							if (b.params.freeModeMomentum) {
								if (A.length > 1) {
									var s = A.pop(),
										n = A.pop(),
										o = s.position - n.position,
										l = s.time - n.time;
									b.velocity = o / l,
									b.velocity = b.velocity / 2,
									Math.abs(b.velocity) < b.params.freeModeMinimumVelocity && (b.velocity = 0),
									(l > 150 || (new window.Date).getTime() - s.time > 300) && (b.velocity = 0)
								} else
									b.velocity = 0;
								A.length = 0;
								var p = 1e3 * b.params.freeModeMomentumRatio,
									d = b.velocity * p,
									u = b.translate + d;
								b.rtl && (u = -u);
								var c,
									m = !1,
									h = 20 * Math.abs(b.velocity) * b.params.freeModeMomentumBounceRatio;
								if (u < b.maxTranslate())
									b.params.freeModeMomentumBounce
										? (u + b.maxTranslate() < -h && (u = b.maxTranslate() - h), c = b.maxTranslate(), m = !0, B = !0)
										: u = b.maxTranslate();
								else if (u > b.minTranslate())
									b.params.freeModeMomentumBounce
										? (u - b.minTranslate() > h && (u = b.minTranslate() + h), c = b.minTranslate(), m = !0, B = !0)
										: u = b.minTranslate();
								else if (b.params.freeModeSticky) {
									var f,
										g = 0;
									for (g = 0; g < b.snapGrid.length; g += 1)
										if (b.snapGrid[g] > -u) {
											f = g;
											break
										}
									u = Math.abs(b.snapGrid[f] - u) < Math.abs(b.snapGrid[f - 1] - u) || "next" === b.swipeDirection
										? b.snapGrid[f]
										: b.snapGrid[f - 1],
									b.rtl || (u = -u)
								}
								if (0 !== b.velocity)
									p = b.rtl
										? Math.abs((-u - b.translate) / b.velocity)
										: Math.abs((u - b.translate) / b.velocity);
								else if (b.params.freeModeSticky)
									return void b.slideReset();
								b.params.freeModeMomentumBounce && m
									? (b.updateProgress(c), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating = !0, b.wrapper.transitionEnd(function() {
										b && B && (b.emit("onMomentumBounce", b), b.setWrapperTransition(b.params.speed), b.setWrapperTranslate(c), b.wrapper.transitionEnd(function() {
											b && b.onTransitionEnd()
										}))
									}))
									: b.velocity
										? (b.updateProgress(u), b.setWrapperTransition(p), b.setWrapperTranslate(u), b.onTransitionStart(), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
											b && b.onTransitionEnd()
										})))
										: b.updateProgress(u),
								b.updateActiveIndex()
							}
							return void((!b.params.freeModeMomentum || r >= b.params.longSwipesMs) && (b.updateProgress(), b.updateActiveIndex()))
						}
						var v,
							w = 0,
							y = b.slidesSizesGrid[0];
						for (v = 0; v < b.slidesGrid.length; v += b.params.slidesPerGroup)
							"undefined" != typeof b.slidesGrid[v + b.params.slidesPerGroup]
								? i >= b.slidesGrid[v] && i < b.slidesGrid[v + b.params.slidesPerGroup] && (w = v, y = b.slidesGrid[v + b.params.slidesPerGroup] - b.slidesGrid[v])
								: i >= b.slidesGrid[v] && (w = v, y = b.slidesGrid[b.slidesGrid.length - 1] - b.slidesGrid[b.slidesGrid.length - 2]);
						var x = (i - b.slidesGrid[w]) / y;
						if (r > b.params.longSwipesMs) {
							if (!b.params.longSwipes)
								return void b.slideTo(b.activeIndex);

							"next" === b.swipeDirection && (x >= b.params.longSwipesRatio
								? b.slideTo(w + b.params.slidesPerGroup)
								: b.slideTo(w)),
							"prev" === b.swipeDirection && (x > 1 - b.params.longSwipesRatio
								? b.slideTo(w + b.params.slidesPerGroup)
								: b.slideTo(w))
						} else {
							if (!b.params.shortSwipes)
								return void b.slideTo(b.activeIndex);

							"next" === b.swipeDirection && b.slideTo(w + b.params.slidesPerGroup),
							"prev" === b.swipeDirection && b.slideTo(w)
						}
					}
				},
				b._slideTo = function(e, a) {
					return b.slideTo(e, a, !0, !0)
				},
				b.slideTo = function(e, a, t, r) {
					"undefined" == typeof t && (t = !0),
					"undefined" == typeof e && (e = 0),
					0 > e && (e = 0),
					b.snapIndex = Math.floor(e / b.params.slidesPerGroup),
					b.snapIndex >= b.snapGrid.length && (b.snapIndex = b.snapGrid.length - 1);
					var i = -b.snapGrid[b.snapIndex];
					b.params.autoplay && b.autoplaying && (r || !b.params.autoplayDisableOnInteraction
						? b.pauseAutoplay(a)
						: b.stopAutoplay()),
					b.updateProgress(i);
					for (var s = 0; s < b.slidesGrid.length; s++) -Math.floor(100 * i) >= Math.floor(100 * b.slidesGrid[s]) && (e = s);
					return !b.params.allowSwipeToNext && i < b.translate && i < b.minTranslate()
						? !1
						: !b.params.allowSwipeToPrev && i > b.translate && i > b.maxTranslate() && (b.activeIndex || 0) !== e
							? !1
							: ("undefined" == typeof a && (a = b.params.speed), b.previousIndex = b.activeIndex || 0, b.activeIndex = e, b.rtl && -i === b.translate || !b.rtl && i === b.translate
								? (b.params.autoHeight && b.updateAutoHeight(), b.updateClasses(), "slide" !== b.params.effect && b.setWrapperTranslate(i), !1)
								: (b.updateClasses(), b.onTransitionStart(t), 0 === a
									? (b.setWrapperTranslate(i), b.setWrapperTransition(0), b.onTransitionEnd(t))
									: (b.setWrapperTranslate(i), b.setWrapperTransition(a), b.animating || (b.animating = !0, b.wrapper.transitionEnd(function() {
										b && b.onTransitionEnd(t)
									}))), !0))
				},
				b.onTransitionStart = function(e) {
					"undefined" == typeof e && (e = !0),
					b.params.autoHeight && b.updateAutoHeight(),
					b.lazy && b.lazy.onTransitionStart(),
					e && (b.emit("onTransitionStart", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeStart", b), b.activeIndex > b.previousIndex
						? b.emit("onSlideNextStart", b)
						: b.emit("onSlidePrevStart", b)))
				},
				b.onTransitionEnd = function(e) {
					b.animating = !1,
					b.setWrapperTransition(0),
					"undefined" == typeof e && (e = !0),
					b.lazy && b.lazy.onTransitionEnd(),
					e && (b.emit("onTransitionEnd", b), b.activeIndex !== b.previousIndex && (b.emit("onSlideChangeEnd", b), b.activeIndex > b.previousIndex
						? b.emit("onSlideNextEnd", b)
						: b.emit("onSlidePrevEnd", b))),
					b.params.hashnav && b.hashnav && b.hashnav.setHash()
				},
				b.slideNext = function(e, a, t) {
					if (b.params.loop) {
						if (b.animating)
							return !1;
						b.fixLoop();
						b.container[0].clientLeft;
						return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t)
					}
					return b.slideTo(b.activeIndex + b.params.slidesPerGroup, a, e, t)
				},
				b._slideNext = function(e) {
					return b.slideNext(!0, e, !0)
				},
				b.slidePrev = function(e, a, t) {
					if (b.params.loop) {
						if (b.animating)
							return !1;
						b.fixLoop();
						b.container[0].clientLeft;
						return b.slideTo(b.activeIndex - 1, a, e, t)
					}
					return b.slideTo(b.activeIndex - 1, a, e, t)
				},
				b._slidePrev = function(e) {
					return b.slidePrev(!0, e, !0)
				},
				b.slideReset = function(e, a, t) {
					return b.slideTo(b.activeIndex, a, e)
				},
				b.setWrapperTransition = function(e, a) {
					b.wrapper.transition(e),
					"slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTransition(e),
					b.params.parallax && b.parallax && b.parallax.setTransition(e),
					b.params.scrollbar && b.scrollbar && b.scrollbar.setTransition(e),
					b.params.control && b.controller && b.controller.setTransition(e, a),
					b.emit("onSetTransition", b, e)
				},
				b.setWrapperTranslate = function(e, a, t) {
					var r = 0,
						i = 0,
						n = 0;
					b.isHorizontal()
						? r = b.rtl
							? -e
							: e
						: i = e,
					b.params.roundLengths && (r = s(r), i = s(i)),
					b.params.virtualTranslate || (b.support.transforms3d
						? b.wrapper.transform("translate3d(" + r + "px, " + i + "px, " + n + "px)")
						: b.wrapper.transform("translate(" + r + "px, " + i + "px)")),
					b.translate = b.isHorizontal()
						? r
						: i;
					var o,
						l = b.maxTranslate() - b.minTranslate();
					o = 0 === l
						? 0
						: (e - b.minTranslate()) / l,
					o !== b.progress && b.updateProgress(e),
					a && b.updateActiveIndex(),
					"slide" !== b.params.effect && b.effects[b.params.effect] && b.effects[b.params.effect].setTranslate(b.translate),
					b.params.parallax && b.parallax && b.parallax.setTranslate(b.translate),
					b.params.scrollbar && b.scrollbar && b.scrollbar.setTranslate(b.translate),
					b.params.control && b.controller && b.controller.setTranslate(b.translate, t),
					b.emit("onSetTranslate", b, b.translate)
				},
				b.getTranslate = function(e, a) {
					var t,
						r,
						i,
						s;
					return "undefined" == typeof a && (a = "x"),
					b.params.virtualTranslate
						? b.rtl
							? -b.translate
							: b.translate
						: (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix
							? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
								return e.replace(",", ".")
							}).join(", ")), s = new window.WebKitCSSMatrix("none" === r
								? ""
								: r))
							: (s = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = s.toString().split(",")), "x" === a && (r = window.WebKitCSSMatrix
							? s.m41
							: 16 === t.length
								? parseFloat(t[12])
								: parseFloat(t[4])), "y" === a && (r = window.WebKitCSSMatrix
							? s.m42
							: 16 === t.length
								? parseFloat(t[13])
								: parseFloat(t[5])), b.rtl && r && (r = -r), r || 0)
				},
				b.getWrapperTranslate = function(e) {
					return "undefined" == typeof e && (e = b.isHorizontal()
						? "x"
						: "y"),
					b.getTranslate(b.wrapper[0], e)
				},
				b.observers = [],
				b.initObservers = function() {
					if (b.params.observeParents)
						for (var e = b.container.parents(), a = 0; a < e.length; a++)
							l(e[a]);
				l(b.container[0], {
						childList: !1
					}),
					l(b.wrapper[0], {
						attributes: !1
					})
				},
				b.disconnectObservers = function() {
					for (var e = 0; e < b.observers.length; e++)
						b.observers[e].disconnect();
					b.observers = []
				},
				b.createLoop = function() {
					b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove();
					var e = b.wrapper.children("." + b.params.slideClass);
					"auto" !== b.params.slidesPerView || b.params.loopedSlides || (b.params.loopedSlides = e.length),
					b.loopedSlides = parseInt(b.params.loopedSlides || b.params.slidesPerView, 10),
					b.loopedSlides = b.loopedSlides + b.params.loopAdditionalSlides,
					b.loopedSlides > e.length && (b.loopedSlides = e.length);
					var t,
						r = [],
						i = [];
					for (e.each(function(t, s) {
						var n = a(this);
						t < b.loopedSlides && i.push(s),
						t < e.length && t >= e.length - b.loopedSlides && r.push(s),
						n.attr("data-swiper-slide-index", t)
					}), t = 0; t < i.length; t++)
						b.wrapper.append(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));
					for (t = r.length - 1; t >= 0; t--)
						b.wrapper.prepend(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))
				},
				b.destroyLoop = function() {
					b.wrapper.children("." + b.params.slideClass + "." + b.params.slideDuplicateClass).remove(),
					b.slides.removeAttr("data-swiper-slide-index")
				},
				b.reLoop = function(e) {
					var a = b.activeIndex - b.loopedSlides;
					b.destroyLoop(),
					b.createLoop(),
					b.updateSlidesSize(),
					e && b.slideTo(a + b.loopedSlides, 0, !1)
				},
				b.fixLoop = function() {
					var e;
					b.activeIndex < b.loopedSlides
						? (e = b.slides.length - 3 * b.loopedSlides + b.activeIndex, e += b.loopedSlides, b.slideTo(e, 0, !1, !0))
						: ("auto" === b.params.slidesPerView && b.activeIndex >= 2 * b.loopedSlides || b.activeIndex > b.slides.length - 2 * b.params.slidesPerView) && (e = -b.slides.length + b.activeIndex + b.loopedSlides, e += b.loopedSlides, b.slideTo(e, 0, !1, !0))
				},
				b.appendSlide = function(e) {
					if (b.params.loop && b.destroyLoop(), "object" == typeof e && e.length)
						for (var a = 0; a < e.length; a++)
							e[a] && b.wrapper.append(e[a]);
				else
						b.wrapper.append(e);
					b.params.loop && b.createLoop(),
					b.params.observer && b.support.observer || b.update(!0)
				},
				b.prependSlide = function(e) {
					b.params.loop && b.destroyLoop();
					var a = b.activeIndex + 1;
					if ("object" == typeof e && e.length) {
						for (var t = 0; t < e.length; t++)
							e[t] && b.wrapper.prepend(e[t]);
						a = b.activeIndex + e.length
					} else
						b.wrapper.prepend(e);
					b.params.loop && b.createLoop(),
					b.params.observer && b.support.observer || b.update(!0),
					b.slideTo(a, 0, !1)
				},
				b.removeSlide = function(e) {
					b.params.loop && (b.destroyLoop(), b.slides = b.wrapper.children("." + b.params.slideClass));
					var a,
						t = b.activeIndex;
					if ("object" == typeof e && e.length) {
						for (var r = 0; r < e.length; r++)
							a = e[r],
							b.slides[a] && b.slides.eq(a).remove(),
							t > a && t--;
						t = Math.max(t, 0)
					} else
						a = e,
						b.slides[a] && b.slides.eq(a).remove(),
						t > a && t--,
						t = Math.max(t, 0);
					b.params.loop && b.createLoop(),
					b.params.observer && b.support.observer || b.update(!0),
					b.params.loop
						? b.slideTo(t + b.loopedSlides, 0, !1)
						: b.slideTo(t, 0, !1)
				},
				b.removeAllSlides = function() {
					for (var e = [], a = 0; a < b.slides.length; a++)
						e.push(a);
					b.removeSlide(e)
				},
				b.effects = {
					fade: {
						setTranslate: function() {
							for (var e = 0; e < b.slides.length; e++) {
								var a = b.slides.eq(e),
									t = a[0].swiperSlideOffset,
									r = -t;
								b.params.virtualTranslate || (r -= b.translate);
								var i = 0;
								b.isHorizontal() || (i = r, r = 0);
								var s = b.params.fade.crossFade
									? Math.max(1 - Math.abs(a[0].progress), 0)
									: 1 + Math.min(Math.max(a[0].progress, -1), 0);
								a.css({opacity: s}).transform("translate3d(" + r + "px, " + i + "px, 0px)")
							}
						},
						setTransition: function(e) {
							if (b.slides.transition(e), b.params.virtualTranslate && 0 !== e) {
								var a = !1;
								b.slides.transitionEnd(function() {
									if (!a && b) {
										a = !0,
										b.animating = !1;
										for (var e = [
											"webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"
										], t = 0; t < e.length; t++)
											b.wrapper.trigger(e[t])
									}
								})
							}
						}
					},
					flip: {
						setTranslate: function() {
							for (var e = 0; e < b.slides.length; e++) {
								var t = b.slides.eq(e),
									r = t[0].progress;
								b.params.flip.limitRotation && (r = Math.max(Math.min(t[0].progress, 1), -1));
								var i = t[0].swiperSlideOffset,
									s = -180 * r,
									n = s,
									o = 0,
									l = -i,
									p = 0;
								if (b.isHorizontal()
									? b.rtl && (n = -n)
									: (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(r)) + b.slides.length, b.params.flip.slideShadows) {
									var d = b.isHorizontal()
											? t.find(".swiper-slide-shadow-left")
											: t.find(".swiper-slide-shadow-top"),
										u = b.isHorizontal()
											? t.find(".swiper-slide-shadow-right")
											: t.find(".swiper-slide-shadow-bottom");
									0 === d.length && (d = a('<div class="swiper-slide-shadow-' + (b.isHorizontal()
										? "left"
										: "top") + '"></div>'), t.append(d)),
									0 === u.length && (u = a('<div class="swiper-slide-shadow-' + (b.isHorizontal()
										? "right"
										: "bottom") + '"></div>'), t.append(u)),
									d.length && (d[0].style.opacity = Math.max(-r, 0)),
									u.length && (u[0].style.opacity = Math.max(r, 0))
								}
								t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
							}
						},
						setTransition: function(e) {
							if (b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), b.params.virtualTranslate && 0 !== e) {
								var t = !1;
								b.slides.eq(b.activeIndex).transitionEnd(function() {
									if (!t && b && a(this).hasClass(b.params.slideActiveClass)) {
										t = !0,
										b.animating = !1;
										for (var e = [
											"webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"
										], r = 0; r < e.length; r++)
											b.wrapper.trigger(e[r])
									}
								})
							}
						}
					},
					cube: {
						setTranslate: function() {
							var e,
								t = 0;
							b.params.cube.shadow && (b.isHorizontal()
								? (e = b.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), b.wrapper.append(e)), e.css({
									height: b.width + "px"
								}))
								: (e = b.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), b.container.append(e))));
							for (var r = 0; r < b.slides.length; r++) {
								var i = b.slides.eq(r),
									s = 90 * r,
									n = Math.floor(s / 360);
								b.rtl && (s = -s, n = Math.floor(-s / 360));
								var o = Math.max(Math.min(i[0].progress, 1), -1),
									l = 0,
									p = 0,
									d = 0;
								r % 4 === 0
									? (l = 4 * -n * b.size, d = 0)
									: (r - 1) % 4 === 0
										? (l = 0, d = 4 * -n * b.size)
										: (r - 2) % 4 === 0
											? (l = b.size + 4 * n * b.size, d = b.size)
											: (r - 3) % 4 === 0 && (l = -b.size, d = 3 * b.size + 4 * b.size * n),
								b.rtl && (l = -l),
								b.isHorizontal() || (p = l, l = 0);
								var u = "rotateX(" + (b.isHorizontal()
									? 0
									: -s) + "deg) rotateY(" + (b.isHorizontal()
									? s
									: 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
								if (1 >= o && o > -1 && (t = 90 * r + 90 * o, b.rtl && (t = 90 * -r - 90 * o)), i.transform(u), b.params.cube.slideShadows) {
									var c = b.isHorizontal()
											? i.find(".swiper-slide-shadow-left")
											: i.find(".swiper-slide-shadow-top"),
										m = b.isHorizontal()
											? i.find(".swiper-slide-shadow-right")
											: i.find(".swiper-slide-shadow-bottom");
									0 === c.length && (c = a('<div class="swiper-slide-shadow-' + (b.isHorizontal()
										? "left"
										: "top") + '"></div>'), i.append(c)),
									0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (b.isHorizontal()
										? "right"
										: "bottom") + '"></div>'), i.append(m)),
									c.length && (c[0].style.opacity = Math.max(-o, 0)),
									m.length && (m[0].style.opacity = Math.max(o, 0))
								}
							}
							if (b.wrapper.css({
								"-webkit-transform-origin": "50% 50% -" + b.size / 2 + "px",
								"-moz-transform-origin": "50% 50% -" + b.size / 2 + "px",
								"-ms-transform-origin": "50% 50% -" + b.size / 2 + "px",
								"transform-origin": "50% 50% -" + b.size / 2 + "px"
							}), b.params.cube.shadow)
								if (b.isHorizontal())
									e.transform("translate3d(0px, " + (b.width / 2 + b.params.cube.shadowOffset) + "px, " + -b.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + b.params.cube.shadowScale + ")");
								else {
									var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
										f = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
										g = b.params.cube.shadowScale,
										v = b.params.cube.shadowScale / f,
										w = b.params.cube.shadowOffset;
									e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (b.height / 2 + w) + "px, " + -b.height / 2 / v + "px) rotateX(-90deg)")
								}
							var y = b.isSafari || b.isUiWebView
								? -b.size / 2
								: 0;
							b.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (b.isHorizontal()
								? 0
								: t) + "deg) rotateY(" + (b.isHorizontal()
								? -t
								: 0) + "deg)")
						},
						setTransition: function(e) {
							b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
							b.params.cube.shadow && !b.isHorizontal() && b.container.find(".swiper-cube-shadow").transition(e)
						}
					},
					coverflow: {
						setTranslate: function() {
							for (var e = b.translate, t = b.isHorizontal()
								? -e + b.width / 2
								: -e + b.height / 2, r = b.isHorizontal()
								? b.params.coverflow.rotate
								: -b.params.coverflow.rotate, i = b.params.coverflow.depth, s = 0, n = b.slides.length; n > s; s++) {
								var o = b.slides.eq(s),
									l = b.slidesSizesGrid[s],
									p = o[0].swiperSlideOffset,
									d = (t - p - l / 2) / l * b.params.coverflow.modifier,
									u = b.isHorizontal()
										? r * d
										: 0,
									c = b.isHorizontal()
										? 0
										: r * d,
									m = -i * Math.abs(d),
									h = b.isHorizontal()
										? 0
										: b.params.coverflow.stretch * d,
									f = b.isHorizontal()
										? b.params.coverflow.stretch * d
										: 0;
								Math.abs(f) < .001 && (f = 0),
								Math.abs(h) < .001 && (h = 0),
								Math.abs(m) < .001 && (m = 0),
								Math.abs(u) < .001 && (u = 0),
								Math.abs(c) < .001 && (c = 0);
								var g = "translate3d(" + f + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
								if (o.transform(g), o[0].style.zIndex = -Math.abs(Math.round(d)) + 1, b.params.coverflow.slideShadows) {
									var v = b.isHorizontal()
											? o.find(".swiper-slide-shadow-left")
											: o.find(".swiper-slide-shadow-top"),
										w = b.isHorizontal()
											? o.find(".swiper-slide-shadow-right")
											: o.find(".swiper-slide-shadow-bottom");
									0 === v.length && (v = a('<div class="swiper-slide-shadow-' + (b.isHorizontal()
										? "left"
										: "top") + '"></div>'), o.append(v)),
									0 === w.length && (w = a('<div class="swiper-slide-shadow-' + (b.isHorizontal()
										? "right"
										: "bottom") + '"></div>'), o.append(w)),
									v.length && (v[0].style.opacity = d > 0
										? d
										: 0),
									w.length && (w[0].style.opacity = -d > 0
										? -d
										: 0)
								}
							}
							if (b.browser.ie) {
								var y = b.wrapper[0].style;
								y.perspectiveOrigin = t + "px 50%"
							}
						},
						setTransition: function(e) {
							b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
						}
					}
				},
				b.lazy = {
					initialImageLoaded: !1,
					loadImageInSlide: function(e, t) {
						if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== b.slides.length)) {
							var r = b.slides.eq(e),
								i = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
							!r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || (i = i.add(r[0])),
							0 !== i.length && i.each(function() {
								var e = a(this);
								e.addClass("swiper-lazy-loading");
								var i = e.attr("data-background"),
									s = e.attr("data-src"),
									n = e.attr("data-srcset");
								b.loadImage(e[0], s || i, n, !1, function() {
									if (i
										? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background"))
										: (n && (e.attr("srcset", n), e.removeAttr("data-srcset")), s && (e.attr("src", s), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), b.params.loop && t) {
										var a = r.attr("data-swiper-slide-index");
										if (r.hasClass(b.params.slideDuplicateClass)) {
											var o = b.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + b.params.slideDuplicateClass + ")");
											b.lazy.loadImageInSlide(o.index(), !1)
										} else {
											var l = b.wrapper.children("." + b.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
											b.lazy.loadImageInSlide(l.index(), !1)
										}
									}
									b.emit("onLazyImageReady", b, r[0], e[0])
								}),
								b.emit("onLazyImageLoad", b, r[0], e[0])
							})
						}
					},
					load: function() {
						var e;
						if (b.params.watchSlidesVisibility)
							b.wrapper.children("." + b.params.slideVisibleClass).each(function() {
								b.lazy.loadImageInSlide(a(this).index())
							});
						else if (b.params.slidesPerView > 1)
							for (e = b.activeIndex; e < b.activeIndex + b.params.slidesPerView; e++)
								b.slides[e] && b.lazy.loadImageInSlide(e);
					else
							b.lazy.loadImageInSlide(b.activeIndex);
						if (b.params.lazyLoadingInPrevNext)
							if (b.params.slidesPerView > 1 || b.params.lazyLoadingInPrevNextAmount && b.params.lazyLoadingInPrevNextAmount > 1) {
								var t = b.params.lazyLoadingInPrevNextAmount,
									r = b.params.slidesPerView,
									i = Math.min(b.activeIndex + r + Math.max(t, r), b.slides.length),
									s = Math.max(b.activeIndex - Math.max(r, t), 0);
								for (e = b.activeIndex + b.params.slidesPerView; i > e; e++)
									b.slides[e] && b.lazy.loadImageInSlide(e);
								for (e = s; e < b.activeIndex; e++)
									b.slides[e] && b.lazy.loadImageInSlide(e)
							}
						else {
							var n = b.wrapper.children("." + b.params.slideNextClass);
							n.length > 0 && b.lazy.loadImageInSlide(n.index());
							var o = b.wrapper.children("." + b.params.slidePrevClass);
							o.length > 0 && b.lazy.loadImageInSlide(o.index())
						}
					},
					onTransitionStart: function() {
						b.params.lazyLoading && (b.params.lazyLoadingOnTransitionStart || !b.params.lazyLoadingOnTransitionStart && !b.lazy.initialImageLoaded) && b.lazy.load()
					},
					onTransitionEnd: function() {
						b.params.lazyLoading && !b.params.lazyLoadingOnTransitionStart && b.lazy.load()
					}
				},
				b.scrollbar = {
					isTouched: !1,
					setDragPosition: function(e) {
						var a = b.scrollbar,
							t = b.isHorizontal()
								? "touchstart" === e.type || "touchmove" === e.type
									? e.targetTouches[0].pageX
									: e.pageX || e.clientX
								: "touchstart" === e.type || "touchmove" === e.type
									? e.targetTouches[0].pageY
									: e.pageY || e.clientY,
							r = t - a.track.offset()[b.isHorizontal()
									? "left"
									: "top"] - a.dragSize / 2,
							i = -b.minTranslate() * a.moveDivider,
							s = -b.maxTranslate() * a.moveDivider;
						i > r
							? r = i
							: r > s && (r = s),
						r = -r / a.moveDivider,
						b.updateProgress(r),
						b.setWrapperTranslate(r, !0)
					},
					dragStart: function(e) {
						var a = b.scrollbar;
						a.isTouched = !0,
						e.preventDefault(),
						e.stopPropagation(),
						a.setDragPosition(e),
						clearTimeout(a.dragTimeout),
						a.track.transition(0),
						b.params.scrollbarHide && a.track.css("opacity", 1),
						b.wrapper.transition(100),
						a.drag.transition(100),
						b.emit("onScrollbarDragStart", b)
					},
					dragMove: function(e) {
						var a = b.scrollbar;
						a.isTouched && (e.preventDefault
							? e.preventDefault()
							: e.returnValue = !1, a.setDragPosition(e), b.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), b.emit("onScrollbarDragMove", b))
					},
					dragEnd: function(e) {
						var a = b.scrollbar;
						a.isTouched && (a.isTouched = !1, b.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function() {
							a.track.css("opacity", 0),
							a.track.transition(400)
						}, 1e3)), b.emit("onScrollbarDragEnd", b), b.params.scrollbarSnapOnRelease && b.slideReset())
					},
					enableDraggable: function() {
						var e = b.scrollbar,
							t = b.support.touch
								? e.track
								: document;
						a(e.track).on(b.touchEvents.start, e.dragStart),
						a(t).on(b.touchEvents.move, e.dragMove),
						a(t).on(b.touchEvents.end, e.dragEnd)
					},
					disableDraggable: function() {
						var e = b.scrollbar,
							t = b.support.touch
								? e.track
								: document;
						a(e.track).off(b.touchEvents.start, e.dragStart),
						a(t).off(b.touchEvents.move, e.dragMove),
						a(t).off(b.touchEvents.end, e.dragEnd)
					},
					set: function() {
						if (b.params.scrollbar) {
							var e = b.scrollbar;
							e.track = a(b.params.scrollbar),
							b.params.uniqueNavElements && "string" == typeof b.params.scrollbar && e.track.length > 1 && 1 === b.container.find(b.params.scrollbar).length && (e.track = b.container.find(b.params.scrollbar)),
							e.drag = e.track.find(".swiper-scrollbar-drag"),
							0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)),
							e.drag[0].style.width = "",
							e.drag[0].style.height = "",
							e.trackSize = b.isHorizontal()
								? e.track[0].offsetWidth
								: e.track[0].offsetHeight,
							e.divider = b.size / b.virtualSize,
							e.moveDivider = e.divider * (e.trackSize / b.size),
							e.dragSize = e.trackSize * e.divider,
							b.isHorizontal()
								? e.drag[0].style.width = e.dragSize + "px"
								: e.drag[0].style.height = e.dragSize + "px",
							e.divider >= 1
								? e.track[0].style.display = "none"
								: e.track[0].style.display = "",
							b.params.scrollbarHide && (e.track[0].style.opacity = 0)
						}
					},
					setTranslate: function() {
						if (b.params.scrollbar) {
							var e,
								a = b.scrollbar,
								t = (b.translate || 0, a.dragSize);
							e = (a.trackSize - a.dragSize) * b.progress,
							b.rtl && b.isHorizontal()
								? (e = -e, e > 0
									? (t = a.dragSize - e, e = 0)
									: -e + a.dragSize > a.trackSize && (t = a.trackSize + e))
								: 0 > e
									? (t = a.dragSize + e, e = 0)
									: e + a.dragSize > a.trackSize && (t = a.trackSize - e),
							b.isHorizontal()
								? (b.support.transforms3d
									? a.drag.transform("translate3d(" + e + "px, 0, 0)")
									: a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px")
								: (b.support.transforms3d
									? a.drag.transform("translate3d(0px, " + e + "px, 0)")
									: a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"),
							b.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
								a.track[0].style.opacity = 0,
								a.track.transition(400)
							}, 1e3))
						}
					},
					setTransition: function(e) {
						b.params.scrollbar && b.scrollbar.drag.transition(e)
					}
				},
				b.controller = {
					LinearSpline: function(e, a) {
						this.x = e,
						this.y = a,
						this.lastIndex = e.length - 1;
						var t,
							r;
						this.x.length;
						this.interpolate = function(e) {
							return e
								? (r = i(this.x, e), t = r - 1, (e - this.x[t]) * (this.y[r] - this.y[t]) / (this.x[r] - this.x[t]) + this.y[t])
								: 0
						};
						var i = function() {
							var e,
								a,
								t;
							return function(r, i) {
								for (a = -1, e = r.length; e - a > 1;)
									r[t = e + a >> 1] <= i
										? a = t
										: e = t;
								return e
							}
						}()
					},
					getInterpolateFunction: function(e) {
						b.controller.spline || (b.controller.spline = b.params.loop
							? new b.controller.LinearSpline(b.slidesGrid, e.slidesGrid)
							: new b.controller.LinearSpline(b.snapGrid, e.snapGrid))
					},
					setTranslate: function(e, a) {
						function r(a) {
							e = a.rtl && "horizontal" === a.params.direction
								? -b.translate
								: b.translate,
							"slide" === b.params.controlBy && (b.controller.getInterpolateFunction(a), s = -b.controller.spline.interpolate(-e)),
							s && "container" !== b.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (b.maxTranslate() - b.minTranslate()), s = (e - b.minTranslate()) * i + a.minTranslate()),
							b.params.controlInverse && (s = a.maxTranslate() - s),
							a.updateProgress(s),
							a.setWrapperTranslate(s, !1, b),
							a.updateActiveIndex()
						}
						var i,
							s,
							n = b.params.control;
						if (b.isArray(n))
							for (var o = 0; o < n.length; o++)
								n[o] !== a && n[o]instanceof t && r(n[o]);
					else
							n instanceof t && a !== n && r(n)
					},
					setTransition: function(e, a) {
						function r(a) {
							a.setWrapperTransition(e, b),
							0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
								s && (a.params.loop && "slide" === b.params.controlBy && a.fixLoop(), a.onTransitionEnd())
							}))
						}
						var i,
							s = b.params.control;
						if (b.isArray(s))
							for (i = 0; i < s.length; i++)
								s[i] !== a && s[i]instanceof t && r(s[i]);
					else
							s instanceof t && a !== s && r(s)
					}
				},
				b.hashnav = {
					init: function() {
						if (b.params.hashnav) {
							b.hashnav.initialized = !0;
							var e = document.location.hash.replace("#", "");
							if (e)
								for (var a = 0, t = 0, r = b.slides.length; r > t; t++) {
									var i = b.slides.eq(t),
										s = i.attr("data-hash");
									if (s === e && !i.hasClass(b.params.slideDuplicateClass)) {
										var n = i.index();
										b.slideTo(n, a, b.params.runCallbacksOnInit, !0)
									}
								}
							}
					},
					setHash: function() {
						b.hashnav.initialized && b.params.hashnav && (document.location.hash = b.slides.eq(b.activeIndex).attr("data-hash") || "")
					}
				},
				b.disableKeyboardControl = function() {
					b.params.keyboardControl = !1,
					a(document).off("keydown", p)
				},
				b.enableKeyboardControl = function() {
					b.params.keyboardControl = !0,
					a(document).on("keydown", p)
				},
				b.mousewheel = {
					event: !1,
					lastScrollTime: (new window.Date).getTime()
				},
				b.params.mousewheelControl) {
					try {
						new window.WheelEvent("wheel"),
						b.mousewheel.event = "wheel"
					} catch (N) {
						(window.WheelEvent || b.container[0] && "wheel" in b.container[0]) && (b.mousewheel.event = "wheel")
					}
					!b.mousewheel.event && window.WheelEvent,
					b.mousewheel.event || void 0 === document.onmousewheel || (b.mousewheel.event = "mousewheel"),
					b.mousewheel.event || (b.mousewheel.event = "DOMMouseScroll")
				}
				b.disableMousewheelControl = function() {
					return b.mousewheel.event
						? (b.container.off(b.mousewheel.event, d), !0)
						: !1
				},
				b.enableMousewheelControl = function() {
					return b.mousewheel.event
						? (b.container.on(b.mousewheel.event, d), !0)
						: !1
				},
				b.parallax = {
					setTranslate: function() {
						b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
							u(this, b.progress)
						}),
						b.slides.each(function() {
							var e = a(this);
							e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
								var a = Math.min(Math.max(e[0].progress, -1), 1);
								u(this, a)
							})
						})
					},
					setTransition: function(e) {
						"undefined" == typeof e && (e = b.params.speed),
						b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
							var t = a(this),
								r = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
							0 === e && (r = 0),
							t.transition(r)
						})
					}
				},
				b._plugins = [];
				for (var R in b.plugins) {
					var W = b.plugins[R](b, b.params[R]);
					W && b._plugins.push(W)
				}
				return b.callPlugins = function(e) {
					for (var a = 0; a < b._plugins.length; a++)
						e in b._plugins[a] && b._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
				},
				b.emitterEventListeners = {},
				b.emit = function(e) {
					b.params[e] && b.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
					var a;
					if (b.emitterEventListeners[e])
						for (a = 0; a < b.emitterEventListeners[e].length; a++)
							b.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
				b.callPlugins && b.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
				},
				b.on = function(e, a) {
					return e = c(e),
					b.emitterEventListeners[e] || (b.emitterEventListeners[e] = []),
					b.emitterEventListeners[e].push(a),
					b
				},
				b.off = function(e, a) {
					var t;
					if (e = c(e), "undefined" == typeof a)
						return b.emitterEventListeners[e] = [],
						b;
					if (b.emitterEventListeners[e] && 0 !== b.emitterEventListeners[e].length) {
						for (t = 0; t < b.emitterEventListeners[e].length; t++)
							b.emitterEventListeners[e][t] === a && b.emitterEventListeners[e].splice(t, 1);
						return b
					}
				},
				b.once = function(e, a) {
					e = c(e);
					var t = function() {
						a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
						b.off(e, t)
					};
					return b.on(e, t),
					b
				},
				b.a11y = {
					makeFocusable: function(e) {
						return e.attr("tabIndex", "0"),
						e
					},
					addRole: function(e, a) {
						return e.attr("role", a),
						e
					},
					addLabel: function(e, a) {
						return e.attr("aria-label", a),
						e
					},
					disable: function(e) {
						return e.attr("aria-disabled", !0),
						e
					},
					enable: function(e) {
						return e.attr("aria-disabled", !1),
						e
					},
					onEnterKey: function(e) {
						13 === e.keyCode && (a(e.target).is(b.params.nextButton)
							? (b.onClickNext(e), b.isEnd
								? b.a11y.notify(b.params.lastSlideMessage)
								: b.a11y.notify(b.params.nextSlideMessage))
							: a(e.target).is(b.params.prevButton) && (b.onClickPrev(e), b.isBeginning
								? b.a11y.notify(b.params.firstSlideMessage)
								: b.a11y.notify(b.params.prevSlideMessage)), a(e.target).is("." + b.params.bulletClass) && a(e.target)[0].click())
					},
					liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
					notify: function(e) {
						var a = b.a11y.liveRegion;
						0 !== a.length && (a.html(""), a.html(e))
					},
					init: function() {
						b.params.nextButton && b.nextButton && b.nextButton.length > 0 && (b.a11y.makeFocusable(b.nextButton), b.a11y.addRole(b.nextButton, "button"), b.a11y.addLabel(b.nextButton, b.params.nextSlideMessage)),
						b.params.prevButton && b.prevButton && b.prevButton.length > 0 && (b.a11y.makeFocusable(b.prevButton), b.a11y.addRole(b.prevButton, "button"), b.a11y.addLabel(b.prevButton, b.params.prevSlideMessage)),
						a(b.container).append(b.a11y.liveRegion)
					},
					initPagination: function() {
						b.params.pagination && b.params.paginationClickable && b.bullets && b.bullets.length && b.bullets.each(function() {
							var e = a(this);
							b.a11y.makeFocusable(e),
							b.a11y.addRole(e, "button"),
							b.a11y.addLabel(e, b.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
						})
					},
					destroy: function() {
						b.a11y.liveRegion && b.a11y.liveRegion.length > 0 && b.a11y.liveRegion.remove()
					}
				},
				b.init = function() {
					b.params.loop && b.createLoop(),
					b.updateContainerSize(),
					b.updateSlidesSize(),
					b.updatePagination(),
					b.params.scrollbar && b.scrollbar && (b.scrollbar.set(), b.params.scrollbarDraggable && b.scrollbar.enableDraggable()),
					"slide" !== b.params.effect && b.effects[b.params.effect] && (b.params.loop || b.updateProgress(), b.effects[b.params.effect].setTranslate()),
					b.params.loop
						? b.slideTo(b.params.initialSlide + b.loopedSlides, 0, b.params.runCallbacksOnInit)
						: (b.slideTo(b.params.initialSlide, 0, b.params.runCallbacksOnInit), 0 === b.params.initialSlide && (b.parallax && b.params.parallax && b.parallax.setTranslate(), b.lazy && b.params.lazyLoading && (b.lazy.load(), b.lazy.initialImageLoaded = !0))),
					b.attachEvents(),
					b.params.observer && b.support.observer && b.initObservers(),
					b.params.preloadImages && !b.params.lazyLoading && b.preloadImages(),
					b.params.autoplay && b.startAutoplay(),
					b.params.keyboardControl && b.enableKeyboardControl && b.enableKeyboardControl(),
					b.params.mousewheelControl && b.enableMousewheelControl && b.enableMousewheelControl(),
					b.params.hashnav && b.hashnav && b.hashnav.init(),
					b.params.a11y && b.a11y && b.a11y.init(),
					b.emit("onInit", b)
				},
				b.cleanupStyles = function() {
					b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),
					b.wrapper.removeAttr("style"),
					b.slides && b.slides.length && b.slides.removeClass([b.params.slideVisibleClass, b.params.slideActiveClass, b.params.slideNextClass, b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
					b.paginationContainer && b.paginationContainer.length && b.paginationContainer.removeClass(b.params.paginationHiddenClass),
					b.bullets && b.bullets.length && b.bullets.removeClass(b.params.bulletActiveClass),
					b.params.prevButton && a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),
					b.params.nextButton && a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),
					b.params.scrollbar && b.scrollbar && (b.scrollbar.track && b.scrollbar.track.length && b.scrollbar.track.removeAttr("style"), b.scrollbar.drag && b.scrollbar.drag.length && b.scrollbar.drag.removeAttr("style"))
				},
				b.destroy = function(e, a) {
					b.detachEvents(),
					b.stopAutoplay(),
					b.params.scrollbar && b.scrollbar && b.params.scrollbarDraggable && b.scrollbar.disableDraggable(),
					b.params.loop && b.destroyLoop(),
					a && b.cleanupStyles(),
					b.disconnectObservers(),
					b.params.keyboardControl && b.disableKeyboardControl && b.disableKeyboardControl(),
					b.params.mousewheelControl && b.disableMousewheelControl && b.disableMousewheelControl(),
					b.params.a11y && b.a11y && b.a11y.destroy(),
					b.emit("onDestroy"),
					e !== !1 && (b = null)
				},
				b.init(),
				b
			}
		};
	t.prototype = {
		isSafari: function() {
			var e = navigator.userAgent.toLowerCase();
			return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
		}(),
		isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
		isArray: function(e) {
			return "[object Array]" === Object.prototype.toString.apply(e)
		},
		browser: {
			ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
			ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
		},
		device: function() {
			var e = navigator.userAgent,
				a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				t = e.match(/(iPad).*OS\s([\d_]+)/),
				r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				i = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
			return {
				ios: t || i || r,
				android: a
			}
		}(),
		support: {
			touch: window.Modernizr && Modernizr.touch === !0 || function() {
				return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
			}(),
			transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
				var e = document.createElement("div").style;
				return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
			}(),
			flexbox: function() {
				for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
					if (a[t] in e)
						return !0
			}(),
			observer: function() {
				return "MutationObserver" in window || "WebkitMutationObserver" in window
			}()
		},
		plugins: {}
	};
	for (var r = (function() {
		var e = function(e) {
				var a = this,
					t = 0;
				for (t = 0; t < e.length; t++)
					a[t] = e[t];
				return a.length = e.length,
				this
			},
			a = function(a, t) {
				var r = [],
					i = 0;
				if (a && !t && a instanceof e)
					return a;
				if (a)
					if ("string" == typeof a) {
						var s,
							n,
							o = a.trim();
						if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
							var l = "div";
							for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), (0 === o.indexOf("<td") || 0 === o.indexOf("<th")) && (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = a, i = 0; i < n.childNodes.length; i++)
								r.push(n.childNodes[i])
						} else
							for (s = t || "#" !== a[0] || a.match(/[ .<>:~]/)
								? (t || document).querySelectorAll(a)
								: [document.getElementById(a.split("#")[1])], i = 0; i < s.length; i++)
								s[i] && r.push(s[i])
					}
				else if (a.nodeType || a === window || a === document)
					r.push(a);
				else if (a.length > 0 && a[0].nodeType)
					for (i = 0; i < a.length; i++)
						r.push(a[i]);
			return new e(r)
			};
		return e.prototype = {
			addClass: function(e) {
				if ("undefined" == typeof e)
					return this;
				for (var a = e.split(" "), t = 0; t < a.length; t++)
					for (var r = 0; r < this.length; r++)
						this[r].classList.add(a[t]);
			return this
			},
			removeClass: function(e) {
				for (var a = e.split(" "), t = 0; t < a.length; t++)
					for (var r = 0; r < this.length; r++)
						this[r].classList.remove(a[t]);
			return this
			},
			hasClass: function(e) {
				return this[0]
					? this[0].classList.contains(e)
					: !1
			},
			toggleClass: function(e) {
				for (var a = e.split(" "), t = 0; t < a.length; t++)
					for (var r = 0; r < this.length; r++)
						this[r].classList.toggle(a[t]);
			return this
			},
			attr: function(e, a) {
				if (1 === arguments.length && "string" == typeof e)
					return this[0]
						? this[0].getAttribute(e)
						: void 0;
				for (var t = 0; t < this.length; t++)
					if (2 === arguments.length)
						this[t].setAttribute(e, a);
					else
						for (var r in e)
							this[t][r] = e[r],
							this[t].setAttribute(r, e[r]);
			return this
			},
			removeAttr: function(e) {
				for (var a = 0; a < this.length; a++)
					this[a].removeAttribute(e);
				return this
			},
			data: function(e, a) {
				if ("undefined" != typeof a) {
					for (var t = 0; t < this.length; t++) {
						var r = this[t];
						r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
						r.dom7ElementDataStorage[e] = a
					}
					return this
				}
				if (this[0]) {
					var i = this[0].getAttribute("data-" + e);
					return i
						? i
						: this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage
							? this[0].dom7ElementDataStorage[e]
							: void 0
				}
			},
			transform: function(e) {
				for (var a = 0; a < this.length; a++) {
					var t = this[a].style;
					t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
				}
				return this
			},
			transition: function(e) {
				"string" != typeof e && (e += "ms");
				for (var a = 0; a < this.length; a++) {
					var t = this[a].style;
					t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
				}
				return this
			},
			on: function(e, t, r, i) {
				function s(e) {
					var i = e.target;
					if (a(i).is(t))
						r.call(i, e);
					else
						for (var s = a(i).parents(), n = 0; n < s.length; n++)
							a(s[n]).is(t) && r.call(s[n], e)
				}
				var n,
					o,
					l = e.split(" ");
				for (n = 0; n < this.length; n++)
					if ("function" == typeof t || t === !1)
						for ("function" == typeof t && (r = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++)
							this[n].addEventListener(l[o], r, i);
			else
					for (o = 0; o < l.length; o++)
						this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []),
						this[n].dom7LiveListeners.push({listener: r, liveListener: s}),
						this[n].addEventListener(l[o], s, i);
			return this
			},
			off: function(e, a, t, r) {
				for (var i = e.split(" "), s = 0; s < i.length; s++)
					for (var n = 0; n < this.length; n++)
						if ("function" == typeof a || a === !1)
							"function" == typeof a && (t = arguments[1], r = arguments[2] || !1),
							this[n].removeEventListener(i[s], t, r);
						else if (this[n].dom7LiveListeners)
							for (var o = 0; o < this[n].dom7LiveListeners.length; o++)
								this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[s], this[n].dom7LiveListeners[o].liveListener, r);
			return this
			},
			once: function(e, a, t, r) {
				function i(n) {
					t(n),
					s.off(e, a, i, r)
				}
				var s = this;
				"function" == typeof a && (a = !1, t = arguments[1], r = arguments[2]),
				s.on(e, a, i, r)
			},
			trigger: function(e, a) {
				for (var t = 0; t < this.length; t++) {
					var r;
					try {
						r = new window.CustomEvent(e, {
							detail: a,
							bubbles: !0,
							cancelable: !0
						})
					} catch (i) {
						r = document.createEvent("Event"),
						r.initEvent(e, !0, !0),
						r.detail = a
					}
					this[t].dispatchEvent(r)
				}
				return this
			},
			transitionEnd: function(e) {
				function a(s) {
					if (s.target === this)
						for (e.call(this, s), t = 0; t < r.length; t++)
							i.off(r[t], a)
				}
				var t,
					r = [
						"webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"
					],
					i = this;
				if (e)
					for (t = 0; t < r.length; t++)
						i.on(r[t], a);
			return this
			},
			width: function() {
				return this[0] === window
					? window.innerWidth
					: this.length > 0
						? parseFloat(this.css("width"))
						: null
			},
			outerWidth: function(e) {
				return this.length > 0
					? e
						? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left"))
						: this[0].offsetWidth
					: null
			},
			height: function() {
				return this[0] === window
					? window.innerHeight
					: this.length > 0
						? parseFloat(this.css("height"))
						: null
			},
			outerHeight: function(e) {
				return this.length > 0
					? e
						? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom"))
						: this[0].offsetHeight
					: null
			},
			offset: function() {
				if (this.length > 0) {
					var e = this[0],
						a = e.getBoundingClientRect(),
						t = document.body,
						r = e.clientTop || t.clientTop || 0,
						i = e.clientLeft || t.clientLeft || 0,
						s = window.pageYOffset || e.scrollTop,
						n = window.pageXOffset || e.scrollLeft;
					return {
						top: a.top + s - r,
						left: a.left + n - i
					}
				}
				return null
			},
			css: function(e, a) {
				var t;
				if (1 === arguments.length) {
					if ("string" != typeof e) {
						for (t = 0; t < this.length; t++)
							for (var r in e)
								this[t].style[r] = e[r];
					return this
					}
					if (this[0])
						return window.getComputedStyle(this[0], null).getPropertyValue(e)
				}
				if (2 === arguments.length && "string" == typeof e) {
					for (t = 0; t < this.length; t++)
						this[t].style[e] = a;
					return this
				}
				return this
			},
			each: function(e) {
				for (var a = 0; a < this.length; a++)
					e.call(this[a], a, this[a]);
				return this
			},
			html: function(e) {
				if ("undefined" == typeof e)
					return this[0]
						? this[0].innerHTML
						: void 0;
				for (var a = 0; a < this.length; a++)
					this[a].innerHTML = e;
				return this
			},
			text: function(e) {
				if ("undefined" == typeof e)
					return this[0]
						? this[0].textContent.trim()
						: null;
				for (var a = 0; a < this.length; a++)
					this[a].textContent = e;
				return this
			},
			is: function(t) {
				if (!this[0])
					return !1;
				var r,
					i;
				if ("string" == typeof t) {
					var s = this[0];
					if (s === document)
						return t === document;
					if (s === window)
						return t === window;
					if (s.matches)
						return s.matches(t);
					if (s.webkitMatchesSelector)
						return s.webkitMatchesSelector(t);
					if (s.mozMatchesSelector)
						return s.mozMatchesSelector(t);
					if (s.msMatchesSelector)
						return s.msMatchesSelector(t);
					for (r = a(t), i = 0; i < r.length; i++)
						if (r[i] === this[0])
							return !0;
				return !1
				}
				if (t === document)
					return this[0] === document;
				if (t === window)
					return this[0] === window;
				if (t.nodeType || t instanceof e) {
					for (r = t.nodeType
						? [t]
						: t, i = 0; i < r.length; i++)
						if (r[i] === this[0])
							return !0;
				return !1
				}
				return !1
			},
			index: function() {
				if (this[0]) {
					for (var e = this[0], a = 0; null !== (e = e.previousSibling);)
						1 === e.nodeType && a++;
					return a
				}
			},
			eq: function(a) {
				if ("undefined" == typeof a)
					return this;
				var t,
					r = this.length;
				return a > r - 1
					? new e([])
					: 0 > a
						? (t = r + a, new e(0 > t
							? []
							: [this[t]]))
						: new e([this[a]])
			},
			append: function(a) {
				var t,
					r;
				for (t = 0; t < this.length; t++)
					if ("string" == typeof a) {
						var i = document.createElement("div");
						for (i.innerHTML = a; i.firstChild;)
							this[t].appendChild(i.firstChild)
					}
				else if (a instanceof e)
					for (r = 0; r < a.length; r++)
						this[t].appendChild(a[r]);
			else
					this[t].appendChild(a);
				return this
			},
			prepend: function(a) {
				var t,
					r;
				for (t = 0; t < this.length; t++)
					if ("string" == typeof a) {
						var i = document.createElement("div");
						for (i.innerHTML = a, r = i.childNodes.length - 1; r >= 0; r--)
							this[t].insertBefore(i.childNodes[r], this[t].childNodes[0])
					}
				else if (a instanceof e)
					for (r = 0; r < a.length; r++)
						this[t].insertBefore(a[r], this[t].childNodes[0]);
			else
					this[t].insertBefore(a, this[t].childNodes[0]);
				return this
			},
			insertBefore: function(e) {
				for (var t = a(e), r = 0; r < this.length; r++)
					if (1 === t.length)
						t[0].parentNode.insertBefore(this[r], t[0]);
					else if (t.length > 1)
						for (var i = 0; i < t.length; i++)
							t[i].parentNode.insertBefore(this[r].cloneNode(!0), t[i])
			},
			insertAfter: function(e) {
				for (var t = a(e), r = 0; r < this.length; r++)
					if (1 === t.length)
						t[0].parentNode.insertBefore(this[r], t[0].nextSibling);
					else if (t.length > 1)
						for (var i = 0; i < t.length; i++)
							t[i].parentNode.insertBefore(this[r].cloneNode(!0), t[i].nextSibling)
			},
			next: function(t) {
				return new e(this.length > 0
					? t
						? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t)
							? [this[0].nextElementSibling]
							: []
						: this[0].nextElementSibling
							? [this[0].nextElementSibling]
							: []
					: [])
			},
			nextAll: function(t) {
				var r = [],
					i = this[0];
				if (!i)
					return new e([]);
				for (; i.nextElementSibling;) {
					var s = i.nextElementSibling;
					t
						? a(s).is(t) && r.push(s)
						: r.push(s),
					i = s
				}
				return new e(r)
			},
			prev: function(t) {
				return new e(this.length > 0
					? t
						? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t)
							? [this[0].previousElementSibling]
							: []
						: this[0].previousElementSibling
							? [this[0].previousElementSibling]
							: []
					: [])
			},
			prevAll: function(t) {
				var r = [],
					i = this[0];
				if (!i)
					return new e([]);
				for (; i.previousElementSibling;) {
					var s = i.previousElementSibling;
					t
						? a(s).is(t) && r.push(s)
						: r.push(s),
					i = s
				}
				return new e(r)
			},
			parent: function(e) {
				for (var t = [], r = 0; r < this.length; r++)
					e
						? a(this[r].parentNode).is(e) && t.push(this[r].parentNode)
						: t.push(this[r].parentNode);
				return a(a.unique(t))
			},
			parents: function(e) {
				for (var t = [], r = 0; r < this.length; r++)
					for (var i = this[r].parentNode; i;)
						e
							? a(i).is(e) && t.push(i)
							: t.push(i),
						i = i.parentNode;
			return a(a.unique(t))
			},
			find: function(a) {
				for (var t = [], r = 0; r < this.length; r++)
					for (var i = this[r].querySelectorAll(a), s = 0; s < i.length; s++)
						t.push(i[s]);
			return new e(t)
			},
			children: function(t) {
				for (var r = [], i = 0; i < this.length; i++)
					for (var s = this[i].childNodes, n = 0; n < s.length; n++)
						t
							? 1 === s[n].nodeType && a(s[n]).is(t) && r.push(s[n])
							: 1 === s[n].nodeType && r.push(s[n]);
				return new e(a.unique(r))
			},
			remove: function() {
				for (var e = 0; e < this.length; e++)
					this[e].parentNode && this[e].parentNode.removeChild(this[e]);
				return this
			},
			add: function() {
				var e,
					t,
					r = this;
				for (e = 0; e < arguments.length; e++) {
					var i = a(arguments[e]);
					for (t = 0; t < i.length; t++)
						r[r.length] = i[t],
						r.length++
					}
				return r
			}
		},
		a.fn = e.prototype,
		a.unique = function(e) {
			for (var a = [], t = 0; t < e.length; t++)
				-1 === a.indexOf(e[t]) && a.push(e[t]);
			return a
		},
		a
	}()), i = [
		"jQuery", "Zepto", "Dom7"
	], s = 0; s < i.length; s++)
		window[i[s]] && e(window[i[s]]);
	var n;
	n = "undefined" == typeof r
		? window.Dom7 || window.Zepto || window.jQuery
		: r,
	n && ("transitionEnd" in n.fn || (n.fn.transitionEnd = function(e) {
		function a(s) {
			if (s.target === this)
				for (e.call(this, s), t = 0; t < r.length; t++)
					i.off(r[t], a)
		}
		var t,
			r = [
				"webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"
			],
			i = this;
		if (e)
			for (t = 0; t < r.length; t++)
				i.on(r[t], a);
	return this
	}), "transform" in n.fn || (n.fn.transform = function(e) {
		for (var a = 0; a < this.length; a++) {
			var t = this[a].style;
			t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
		}
		return this
	}), "transition" in n.fn || (n.fn.transition = function(e) {
		"string" != typeof e && (e += "ms");
		for (var a = 0; a < this.length; a++) {
			var t = this[a].style;
			t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
		}
		return this
	})),
	window.Swiper = t
}(),
"undefined" != typeof module
	? module.exports = window.Swiper
	: "function" == typeof define && define.amd && define([], function() {
		"use strict";
		return window.Swiper
	});

/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!function(a) {
	function b() {}
	function c(a) {
		function c(b) {
			b.prototype.option || (b.prototype.option = function(b) {
				a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
			})
		}
		function e(b, c) {
			a.fn[b] = function(e) {
				if ("string" == typeof e) {
					for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
						var j = this[h],
							k = a.data(j, b);
						if (k)
							if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
								var l = k[e].apply(k, g);
								if (void 0 !== l)
									return l
							} else
								f("no such method '" + e + "' for " + b + " instance");
					else
							f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
					}
					return this
				}
				return this.each(function() {
					var d = a.data(this, b);
					d
						? (d.option(e), d._init())
						: (d = new c(this, e), a.data(this, b, d))
				})
			}
		}
		if (a) {
			var f = "undefined" == typeof console
				? b
				: function(a) {
					console.error(a)
				};
			return a.bridget = function(a, b) {
				c(b),
				e(a, b)
			},
			a.bridget
		}
	}
	var d = Array.prototype.slice;
	"function" == typeof define && define.amd
		? define("jquery-bridget/jquery.bridget", ["jquery"], c)
		: c("object" == typeof exports
			? require("jquery")
			: a.jQuery)
}(window),
function(a) {
	function b(b) {
		var c = a.event;
		return c.target = c.target || c.srcElement || b,
		c
	}
	var c = document.documentElement,
		d = function() {};
	c.addEventListener
		? d = function(a, b, c) {
			a.addEventListener(b, c, !1)
		}
		: c.attachEvent && (d = function(a, c, d) {
			a[c + d] = d.handleEvent
				? function() {
					var c = b(a);
					d.handleEvent.call(d, c)
				}
				: function() {
					var c = b(a);
					d.call(a, c)
				},
			a.attachEvent("on" + c, a[c + d])
		});
	var e = function() {};
	c.removeEventListener
		? e = function(a, b, c) {
			a.removeEventListener(b, c, !1)
		}
		: c.detachEvent && (e = function(a, b, c) {
			a.detachEvent("on" + b, a[b + c]);
			try {
				delete a[b + c]
			} catch (d) {
				a[b + c] = void 0
			}
		});
	var f = {
		bind: d,
		unbind: e
	};
	"function" == typeof define && define.amd
		? define("eventie/eventie", f)
		: "object" == typeof exports
			? module.exports = f
			: a.eventie = f
}(window),
function() {
	"use strict";
	function a() {}
	function b(a, b) {
		for (var c = a.length; c--;)
			if (a[c].listener === b)
				return c;
	return -1
	}
	function c(a) {
		return function() {
			return this[a].apply(this, arguments)
		}
	}
	var d = a.prototype,
		e = this,
		f = e.EventEmitter;
	d.getListeners = function(a) {
		var b,
			c,
			d = this._getEvents();
		if (a instanceof RegExp) {
			b = {};
			for (c in d)
				d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
		} else
			b = d[a] || (d[a] = []);
		return b
	},
	d.flattenListeners = function(a) {
		var b,
			c = [];
		for (b = 0; b < a.length; b += 1)
			c.push(a[b].listener);
		return c
	},
	d.getListenersAsObject = function(a) {
		var b,
			c = this.getListeners(a);
		return c instanceof Array && (b = {}, b[a] = c),
		b || c
	},
	d.addListener = function(a, c) {
		var d,
			e = this.getListenersAsObject(a),
			f = "object" == typeof c;
		for (d in e)
			e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f
				? c
				: {
					listener: c,
					once: !1
				});
		return this
	},
	d.on = c("addListener"),
	d.addOnceListener = function(a, b) {
		return this.addListener(a, {
			listener: b,
			once: !0
		})
	},
	d.once = c("addOnceListener"),
	d.defineEvent = function(a) {
		return this.getListeners(a),
		this
	},
	d.defineEvents = function(a) {
		for (var b = 0; b < a.length; b += 1)
			this.defineEvent(a[b]);
		return this
	},
	d.removeListener = function(a, c) {
		var d,
			e,
			f = this.getListenersAsObject(a);
		for (e in f)
			f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
		return this
	},
	d.off = c("removeListener"),
	d.addListeners = function(a, b) {
		return this.manipulateListeners(!1, a, b)
	},
	d.removeListeners = function(a, b) {
		return this.manipulateListeners(!0, a, b)
	},
	d.manipulateListeners = function(a, b, c) {
		var d,
			e,
			f = a
				? this.removeListener
				: this.addListener,
			g = a
				? this.removeListeners
				: this.addListeners;
		if ("object" != typeof b || b instanceof RegExp)
			for (d = c.length; d--;)
				f.call(this, b, c[d]);
	else
			for (d in b)
				b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e
					? f.call(this, d, e)
					: g.call(this, d, e));
		return this
	},
	d.removeEvent = function(a) {
		var b,
			c = typeof a,
			d = this._getEvents();
		if ("string" === c)
			delete d[a];
		else if (a instanceof RegExp)
			for (b in d)
				d.hasOwnProperty(b) && a.test(b) && delete d[b];
	else
			delete this._events;
		return this
	},
	d.removeAllListeners = c("removeEvent"),
	d.emitEvent = function(a, b) {
		var c,
			d,
			e,
			f,
			g = this.getListenersAsObject(a);
		for (e in g)
			if (g.hasOwnProperty(e))
				for (d = g[e].length; d--;)
					c = g[e][d],
					c.once === !0 && this.removeListener(a, c.listener),
					f = c.listener.apply(this, b || []),
					f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
	return this
	},
	d.trigger = c("emitEvent"),
	d.emit = function(a) {
		var b = Array.prototype.slice.call(arguments, 1);
		return this.emitEvent(a, b)
	},
	d.setOnceReturnValue = function(a) {
		return this._onceReturnValue = a,
		this
	},
	d._getOnceReturnValue = function() {
		return this.hasOwnProperty("_onceReturnValue")
			? this._onceReturnValue
			: !0
	},
	d._getEvents = function() {
		return this._events || (this._events = {})
	},
	a.noConflict = function() {
		return e.EventEmitter = f,
		a
	},
	"function" == typeof define && define.amd
		? define("eventEmitter/EventEmitter", [], function() {
			return a
		})
		: "object" == typeof module && module.exports
			? module.exports = a
			: e.EventEmitter = a
}.call(this),
function(a) {
	function b(a) {
		if (a) {
			if ("string" == typeof d[a])
				return a;
			a = a.charAt(0).toUpperCase() + a.slice(1);
			for (var b, e = 0, f = c.length; f > e; e++)
				if (b = c[e] + a, "string" == typeof d[b])
					return b
		}
	}
	var c = "Webkit Moz ms Ms O".split(" "),
		d = document.documentElement.style;
	"function" == typeof define && define.amd
		? define("get-style-property/get-style-property", [], function() {
			return b
		})
		: "object" == typeof exports
			? module.exports = b
			: a.getStyleProperty = b
}(window),
function(a, b) {
	function c(a) {
		var b = parseFloat(a),
			c = -1 === a.indexOf("%") && !isNaN(b);
		return c && b
	}
	function d() {}
	function e() {
		for (var a = {
			width: 0,
			height: 0,
			innerWidth: 0,
			innerHeight: 0,
			outerWidth: 0,
			outerHeight: 0
		}, b = 0, c = h.length; c > b; b++) {
			var d = h[b];
			a[d] = 0
		}
		return a
	}
	function f(b) {
		function d() {
			if (!m) {
				m = !0;
				var d = a.getComputedStyle;
				if (j = function() {
					var a = d
						? function(a) {
							return d(a, null)
						}
						: function(a) {
							return a.currentStyle
						};
					return function(b) {
						var c = a(b);
						return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
						c
					}
				}(),
				k = b("boxSizing")) {
					var e = document.createElement("div");
					e.style.width = "200px",
					e.style.padding = "1px 2px 3px 4px",
					e.style.borderStyle = "solid",
					e.style.borderWidth = "1px 2px 3px 4px",
					e.style[k] = "border-box";
					var f = document.body || document.documentElement;
					f.appendChild(e);
					var h = j(e);
					l = 200 === c(h.width),
					f.removeChild(e)
				}
			}
		}
		function f(a) {
			if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
				var b = j(a);
				if ("none" === b.display)
					return e();
				var f = {};
				f.width = a.offsetWidth,
				f.height = a.offsetHeight;
				for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
					var o = h[m],
						p = b[o];
					p = i(a, p);
					var q = parseFloat(p);
					f[o] = isNaN(q)
						? 0
						: q
				}
				var r = f.paddingLeft + f.paddingRight,
					s = f.paddingTop + f.paddingBottom,
					t = f.marginLeft + f.marginRight,
					u = f.marginTop + f.marginBottom,
					v = f.borderLeftWidth + f.borderRightWidth,
					w = f.borderTopWidth + f.borderBottomWidth,
					x = g && l,
					y = c(b.width);
				y !== !1 && (f.width = y + (x
					? 0
					: r + v));
				var z = c(b.height);
				return z !== !1 && (f.height = z + (x
					? 0
					: s + w)),
				f.innerWidth = f.width - (r + v),
				f.innerHeight = f.height - (s + w),
				f.outerWidth = f.width + t,
				f.outerHeight = f.height + u,
				f
			}
		}
		function i(b, c) {
			if (a.getComputedStyle || -1 === c.indexOf("%"))
				return c;
			var d = b.style,
				e = d.left,
				f = b.runtimeStyle,
				g = f && f.left;
			return g && (f.left = b.currentStyle.left),
			d.left = c,
			c = d.pixelLeft,
			d.left = e,
			g && (f.left = g),
			c
		}
		var j,
			k,
			l,
			m = !1;
		return f
	}
	var g = "undefined" == typeof console
			? d
			: function(a) {
				console.error(a)
			},
		h = [
			"paddingLeft",
			"paddingRight",
			"paddingTop",
			"paddingBottom",
			"marginLeft",
			"marginRight",
			"marginTop",
			"marginBottom",
			"borderLeftWidth",
			"borderRightWidth",
			"borderTopWidth",
			"borderBottomWidth"
		];
	"function" == typeof define && define.amd
		? define("get-size/get-size", ["get-style-property/get-style-property"], f)
		: "object" == typeof exports
			? module.exports = f(require("desandro-get-style-property"))
			: a.getSize = f(a.getStyleProperty)
}(window),
function(a) {
	function b(a) {
		"function" == typeof a && (b.isReady
			? a()
			: g.push(a))
	}
	function c(a) {
		var c = "readystatechange" === a.type && "complete" !== f.readyState;
		b.isReady || c || d()
	}
	function d() {
		b.isReady = !0;
		for (var a = 0, c = g.length; c > a; a++) {
			var d = g[a];
			d()
		}
	}
	function e(e) {
		return "complete" === f.readyState
			? d()
			: (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)),
		b
	}
	var f = a.document,
		g = [];
	b.isReady = !1,
	"function" == typeof define && define.amd
		? define("doc-ready/doc-ready", ["eventie/eventie"], e)
		: "object" == typeof exports
			? module.exports = e(require("eventie"))
			: a.docReady = e(a.eventie)
}(window),
function(a) {
	"use strict";
	function b(a, b) {
		return a[g](b)
	}
	function c(a) {
		if (!a.parentNode) {
			var b = document.createDocumentFragment();
			b.appendChild(a)
		}
	}
	function d(a, b) {
		c(a);
		for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
			if (d[e] === a)
				return !0;
	return !1
	}
	function e(a, d) {
		return c(a),
		b(a, d)
	}
	var f,
		g = function() {
			if (a.matches)
				return "matches";
			if (a.matchesSelector)
				return "matchesSelector";
			for (var b = [
				"webkit", "moz", "ms", "o"
			], c = 0, d = b.length; d > c; c++) {
				var e = b[c],
					f = e + "MatchesSelector";
				if (a[f])
					return f
			}
		}();
	if (g) {
		var h = document.createElement("div"),
			i = b(h, "div");
		f = i
			? b
			: e
	} else
		f = d;

	"function" == typeof define && define.amd
		? define("matches-selector/matches-selector", [], function() {
			return f
		})
		: "object" == typeof exports
			? module.exports = f
			: window.matchesSelector = f
}(Element.prototype),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("fizzy-ui-utils/utils", [
			"doc-ready/doc-ready", "matches-selector/matches-selector"
		], function(c, d) {
			return b(a, c, d)
		})
		: "object" == typeof exports
			? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector"))
			: a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
}(window, function(a, b, c) {
	var d = {};
	d.extend = function(a, b) {
		for (var c in b)
			a[c] = b[c];
		return a
	},
	d.modulo = function(a, b) {
		return (a % b + b) % b
	};
	var e = Object.prototype.toString;
	d.isArray = function(a) {
		return "[object Array]" == e.call(a)
	},
	d.makeArray = function(a) {
		var b = [];
		if (d.isArray(a))
			b = a;
		else if (a && "number" == typeof a.length)
			for (var c = 0, e = a.length; e > c; c++)
				b.push(a[c]);
	else
			b.push(a);
		return b
	},
	d.indexOf = Array.prototype.indexOf
		? function(a, b) {
			return a.indexOf(b)
		}
		: function(a, b) {
			for (var c = 0, d = a.length; d > c; c++)
				if (a[c] === b)
					return c;
		return -1
		},
	d.removeFrom = function(a, b) {
		var c = d.indexOf(a, b);
		-1 != c && a.splice(c, 1)
	},
	d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement
		? function(a) {
			return a instanceof HTMLElement
		}
		: function(a) {
			return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
		},
	d.setText = function() {
		function a(a, c) {
			b = b || (void 0 !== document.documentElement.textContent
				? "textContent"
				: "innerText"),
			a[b] = c
		}
		var b;
		return a
	}(),
	d.getParent = function(a, b) {
		for (; a != document.body;)
			if (a = a.parentNode, c(a, b))
				return a
	},
	d.getQueryElement = function(a) {
		return "string" == typeof a
			? document.querySelector(a)
			: a
	},
	d.handleEvent = function(a) {
		var b = "on" + a.type;
		this[b] && this[b](a)
	},
	d.filterFindElements = function(a, b) {
		a = d.makeArray(a);
		for (var e = [], f = 0, g = a.length; g > f; f++) {
			var h = a[f];
			if (d.isElement(h))
				if (b) {
					c(h, b) && e.push(h);
					for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++)
						e.push(i[j])
				} else
					e.push(h)
		}
		return e
	},
	d.debounceMethod = function(a, b, c) {
		var d = a.prototype[b],
			e = b + "Timeout";
		a.prototype[b] = function() {
			var a = this[e];
			a && clearTimeout(a);
			var b = arguments,
				f = this;
			this[e] = setTimeout(function() {
				d.apply(f, b),
				delete f[e]
			}, c || 100)
		}
	},
	d.toDashed = function(a) {
		return a.replace(/(.)([A-Z])/g, function(a, b, c) {
			return b + "-" + c
		}).toLowerCase()
	};
	var f = a.console;
	return d.htmlInit = function(c, e) {
		b(function() {
			for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
				var k,
					l = g[i],
					m = l.getAttribute(h);
				try {
					k = m && JSON.parse(m)
				} catch (n) {
					f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id
						? "#" + l.id
						: "") + ": " + n);
					continue
				}
				var o = new c(l, k),
					p = a.jQuery;
				p && p.data(l, e, o)
			}
		})
	},
	d
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("outlayer/item", [
			"eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"
		], function(c, d, e, f) {
			return b(a, c, d, e, f)
		})
		: "object" == typeof exports
			? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils"))
			: (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
}(window, function(a, b, c, d, e) {
	"use strict";
	function f(a) {
		for (var b in a)
			return !1;
		return b = null,
		!0
	}
	function g(a, b) {
		a && (this.element = a, this.layout = b, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}
	function h(a) {
		return a.replace(/([A-Z])/g, function(a) {
			return "-" + a.toLowerCase()
		})
	}
	var i = a.getComputedStyle,
		j = i
			? function(a) {
				return i(a, null)
			}
			: function(a) {
				return a.currentStyle
			},
		k = d("transition"),
		l = d("transform"),
		m = k && l,
		n = !!d("perspective"),
		o = {
			WebkitTransition: "webkitTransitionEnd",
			MozTransition: "transitionend",
			OTransition: "otransitionend",
			transition: "transitionend"
		}[k],
		p = [
			"transform", "transition", "transitionDuration", "transitionProperty"
		],
		q = function() {
			for (var a = {}, b = 0, c = p.length; c > b; b++) {
				var e = p[b],
					f = d(e);
				f && f !== e && (a[e] = f)
			}
			return a
		}();
	e.extend(g.prototype, b.prototype),
	g.prototype._create = function() {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		},
		this.css({position: "absolute"})
	},
	g.prototype.handleEvent = function(a) {
		var b = "on" + a.type;
		this[b] && this[b](a)
	},
	g.prototype.getSize = function() {
		this.size = c(this.element)
	},
	g.prototype.css = function(a) {
		var b = this.element.style;
		for (var c in a) {
			var d = q[c] || c;
			b[d] = a[c]
		}
	},
	g.prototype.getPosition = function() {
		var a = j(this.element),
			b = this.layout.options,
			c = b.isOriginLeft,
			d = b.isOriginTop,
			e = a[c
					? "left"
					: "right"],
			f = a[d
					? "top"
					: "bottom"],
			g = this.layout.size,
			h = -1 != e.indexOf("%")
				? parseFloat(e) / 100 * g.width
				: parseInt(e, 10),
			i = -1 != f.indexOf("%")
				? parseFloat(f) / 100 * g.height
				: parseInt(f, 10);
		h = isNaN(h)
			? 0
			: h,
		i = isNaN(i)
			? 0
			: i,
		h -= c
			? g.paddingLeft
			: g.paddingRight,
		i -= d
			? g.paddingTop
			: g.paddingBottom,
		this.position.x = h,
		this.position.y = i
	},
	g.prototype.layoutPosition = function() {
		var a = this.layout.size,
			b = this.layout.options,
			c = {},
			d = b.isOriginLeft
				? "paddingLeft"
				: "paddingRight",
			e = b.isOriginLeft
				? "left"
				: "right",
			f = b.isOriginLeft
				? "right"
				: "left",
			g = this.position.x + a[d];
		c[e] = this.getXValue(g),
		c[f] = "";
		var h = b.isOriginTop
				? "paddingTop"
				: "paddingBottom",
			i = b.isOriginTop
				? "top"
				: "bottom",
			j = b.isOriginTop
				? "bottom"
				: "top",
			k = this.position.y + a[h];
		c[i] = this.getYValue(k),
		c[j] = "",
		this.css(c),
		this.emitEvent("layout", [this])
	},
	g.prototype.getXValue = function(a) {
		var b = this.layout.options;
		return b.percentPosition && !b.isHorizontal
			? a / this.layout.size.width * 100 + "%"
			: a + "px"
	},
	g.prototype.getYValue = function(a) {
		var b = this.layout.options;
		return b.percentPosition && b.isHorizontal
			? a / this.layout.size.height * 100 + "%"
			: a + "px"
	},
	g.prototype._transitionTo = function(a, b) {
		this.getPosition();
		var c = this.position.x,
			d = this.position.y,
			e = parseInt(a, 10),
			f = parseInt(b, 10),
			g = e === this.position.x && f === this.position.y;
		if (this.setPosition(a, b), g && !this.isTransitioning)
			return void this.layoutPosition();
		var h = a - c,
			i = b - d,
			j = {};
		j.transform = this.getTranslate(h, i),
		this.transition({
			to: j,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})
	},
	g.prototype.getTranslate = function(a, b) {
		var c = this.layout.options;
		return a = c.isOriginLeft
			? a
			: -a,
		b = c.isOriginTop
			? b
			: -b,
		n
			? "translate3d(" + a + "px, " + b + "px, 0)"
			: "translate(" + a + "px, " + b + "px)"
	},
	g.prototype.goTo = function(a, b) {
		this.setPosition(a, b),
		this.layoutPosition()
	},
	g.prototype.moveTo = m
		? g.prototype._transitionTo
		: g.prototype.goTo,
	g.prototype.setPosition = function(a, b) {
		this.position.x = parseInt(a, 10),
		this.position.y = parseInt(b, 10)
	},
	g.prototype._nonTransition = function(a) {
		this.css(a.to),
		a.isCleaning && this._removeStyles(a.to);
		for (var b in a.onTransitionEnd)
			a.onTransitionEnd[b].call(this)
	},
	g.prototype._transition = function(a) {
		if (!parseFloat(this.layout.options.transitionDuration))
			return void this._nonTransition(a);
		var b = this._transn;
		for (var c in a.onTransitionEnd)
			b.onEnd[c] = a.onTransitionEnd[c];
		for (c in a.to)
			b.ingProperties[c] = !0,
			a.isCleaning && (b.clean[c] = !0);
		if (a.from) {
			this.css(a.from);
			var d = this.element.offsetHeight;
			d = null
		}
		this.enableTransition(a.to),
		this.css(a.to),
		this.isTransitioning = !0
	};
	var r = "opacity," + h(q.transform || "transform");
	g.prototype.enableTransition = function() {
		this.isTransitioning || (this.css({transitionProperty: r, transitionDuration: this.layout.options.transitionDuration}), this.element.addEventListener(o, this, !1))
	},
	g.prototype.transition = g.prototype[k
			? "_transition"
			: "_nonTransition"],
	g.prototype.onwebkitTransitionEnd = function(a) {
		this.ontransitionend(a)
	},
	g.prototype.onotransitionend = function(a) {
		this.ontransitionend(a)
	};
	var s = {
		"-webkit-transform": "transform",
		"-moz-transform": "transform",
		"-o-transform": "transform"
	};
	g.prototype.ontransitionend = function(a) {
		if (a.target === this.element) {
			var b = this._transn,
				c = s[a.propertyName] || a.propertyName;
			if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
				var d = b.onEnd[c];
				d.call(this),
				delete b.onEnd[c]
			}
			this.emitEvent("transitionEnd", [this])
		}
	},
	g.prototype.disableTransition = function() {
		this.removeTransitionStyles(),
		this.element.removeEventListener(o, this, !1),
		this.isTransitioning = !1
	},
	g.prototype._removeStyles = function(a) {
		var b = {};
		for (var c in a)
			b[c] = "";
		this.css(b)
	};
	var t = {
		transitionProperty: "",
		transitionDuration: ""
	};
	return g.prototype.removeTransitionStyles = function() {
		this.css(t)
	},
	g.prototype.removeElem = function() {
		this.element.parentNode.removeChild(this.element),
		this.css({display: ""}),
		this.emitEvent("remove", [this])
	},
	g.prototype.remove = function() {
		if (!k || !parseFloat(this.layout.options.transitionDuration))
			return void this.removeElem();
		var a = this;
		this.once("transitionEnd", function() {
			a.removeElem()
		}),
		this.hide()
	},
	g.prototype.reveal = function() {
		delete this.isHidden,
		this.css({display: ""});
		var a = this.layout.options,
			b = {},
			c = this.getHideRevealTransitionEndProperty("visibleStyle");
		b[c] = this.onRevealTransitionEnd,
		this.transition({
			from: a.hiddenStyle,
			to: a.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: b
		})
	},
	g.prototype.onRevealTransitionEnd = function() {
		this.isHidden || this.emitEvent("reveal")
	},
	g.prototype.getHideRevealTransitionEndProperty = function(a) {
		var b = this.layout.options[a];
		if (b.opacity)
			return "opacity";
		for (var c in b)
			return c
	},
	g.prototype.hide = function() {
		this.isHidden = !0,
		this.css({display: ""});
		var a = this.layout.options,
			b = {},
			c = this.getHideRevealTransitionEndProperty("hiddenStyle");
		b[c] = this.onHideTransitionEnd,
		this.transition({
			from: a.visibleStyle,
			to: a.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: b
		})
	},
	g.prototype.onHideTransitionEnd = function() {
		this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
	},
	g.prototype.destroy = function() {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	},
	g
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("outlayer/outlayer", [
			"eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"
		], function(c, d, e, f, g) {
			return b(a, c, d, e, f, g)
		})
		: "object" == typeof exports
			? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item"))
			: a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
}(window, function(a, b, c, d, e, f) {
	"use strict";
	function g(a, b) {
		var c = e.getQueryElement(a);
		if (!c)
			return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
		this.element = c,
		i && (this.$element = i(this.element)),
		this.options = e.extend({}, this.constructor.defaults),
		this.option(b);
		var d = ++k;
		this.element.outlayerGUID = d,
		l[d] = this,
		this._create(),
		this.options.isInitLayout && this.layout()
	}
	var h = a.console,
		i = a.jQuery,
		j = function() {},
		k = 0,
		l = {};
	return g.namespace = "outlayer",
	g.Item = f,
	g.defaults = {
		containerStyle: {
			position: "relative"
		},
		isInitLayout: !0,
		isOriginLeft: !0,
		isOriginTop: !0,
		isResizeBound: !0,
		isResizingContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	},
	e.extend(g.prototype, c.prototype),
	g.prototype.option = function(a) {
		e.extend(this.options, a)
	},
	g.prototype._create = function() {
		this.reloadItems(),
		this.stamps = [],
		this.stamp(this.options.stamp),
		e.extend(this.element.style, this.options.containerStyle),
		this.options.isResizeBound && this.bindResize()
	},
	g.prototype.reloadItems = function() {
		this.items = this._itemize(this.element.children)
	},
	g.prototype._itemize = function(a) {
		for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
			var g = b[e],
				h = new c(g, this);
			d.push(h)
		}
		return d
	},
	g.prototype._filterFindItemElements = function(a) {
		return e.filterFindElements(a, this.options.itemSelector)
	},
	g.prototype.getItemElements = function() {
		for (var a = [], b = 0, c = this.items.length; c > b; b++)
			a.push(this.items[b].element);
		return a
	},
	g.prototype.layout = function() {
		this._resetLayout(),
		this._manageStamps();
		var a = void 0 !== this.options.isLayoutInstant
			? this.options.isLayoutInstant
			: !this._isLayoutInited;
		this.layoutItems(this.items, a),
		this._isLayoutInited = !0
	},
	g.prototype._init = g.prototype.layout,
	g.prototype._resetLayout = function() {
		this.getSize()
	},
	g.prototype.getSize = function() {
		this.size = d(this.element)
	},
	g.prototype._getMeasurement = function(a, b) {
		var c,
			f = this.options[a];
		f
			? ("string" == typeof f
				? c = this.element.querySelector(f)
				: e.isElement(f) && (c = f), this[a] = c
				? d(c)[b]
				: f)
			: this[a] = 0
	},
	g.prototype.layoutItems = function(a, b) {
		a = this._getItemsForLayout(a),
		this._layoutItems(a, b),
		this._postLayout()
	},
	g.prototype._getItemsForLayout = function(a) {
		for (var b = [], c = 0, d = a.length; d > c; c++) {
			var e = a[c];
			e.isIgnored || b.push(e)
		}
		return b
	},
	g.prototype._layoutItems = function(a, b) {
		if (this._emitCompleteOnItems("layout", a), a && a.length) {
			for (var c = [], d = 0, e = a.length; e > d; d++) {
				var f = a[d],
					g = this._getItemLayoutPosition(f);
				g.item = f,
				g.isInstant = b || f.isLayoutInstant,
				c.push(g)
			}
			this._processLayoutQueue(c)
		}
	},
	g.prototype._getItemLayoutPosition = function() {
		return {x: 0, y: 0}
	},
	g.prototype._processLayoutQueue = function(a) {
		for (var b = 0, c = a.length; c > b; b++) {
			var d = a[b];
			this._positionItem(d.item, d.x, d.y, d.isInstant)
		}
	},
	g.prototype._positionItem = function(a, b, c, d) {
		d
			? a.goTo(b, c)
			: a.moveTo(b, c)
	},
	g.prototype._postLayout = function() {
		this.resizeContainer()
	},
	g.prototype.resizeContainer = function() {
		if (this.options.isResizingContainer) {
			var a = this._getContainerSize();
			a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
		}
	},
	g.prototype._getContainerSize = j,
	g.prototype._setContainerMeasure = function(a, b) {
		if (void 0 !== a) {
			var c = this.size;
			c.isBorderBox && (a += b
				? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth
				: c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
			a = Math.max(a, 0),
			this.element.style[b
					? "width"
					: "height"] = a + "px"
		}
	},
	g.prototype._emitCompleteOnItems = function(a, b) {
		function c() {
			e.dispatchEvent(a + "Complete", null, [b])
		}
		function d() {
			g++,
			g === f && c()
		}
		var e = this,
			f = b.length;
		if (!b || !f)
			return void c();
		for (var g = 0, h = 0, i = b.length; i > h; h++) {
			var j = b[h];
			j.once(a, d)
		}
	},
	g.prototype.dispatchEvent = function(a, b, c) {
		var d = b
			? [b].concat(c)
			: c;
		if (this.emitEvent(a, d), i)
			if (this.$element = this.$element || i(this.element), b) {
				var e = i.Event(b);
				e.type = a,
				this.$element.trigger(e, c)
			} else
				this.$element.trigger(a, c)
	},
	g.prototype.ignore = function(a) {
		var b = this.getItem(a);
		b && (b.isIgnored = !0)
	},
	g.prototype.unignore = function(a) {
		var b = this.getItem(a);
		b && delete b.isIgnored
	},
	g.prototype.stamp = function(a) {
		if (a = this._find(a)) {
			this.stamps = this.stamps.concat(a);
			for (var b = 0, c = a.length; c > b; b++) {
				var d = a[b];
				this.ignore(d)
			}
		}
	},
	g.prototype.unstamp = function(a) {
		if (a = this._find(a))
			for (var b = 0, c = a.length; c > b; b++) {
				var d = a[b];
				e.removeFrom(this.stamps, d),
				this.unignore(d)
			}
		},
	g.prototype._find = function(a) {
		return a
			? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a))
			: void 0
	},
	g.prototype._manageStamps = function() {
		if (this.stamps && this.stamps.length) {
			this._getBoundingRect();
			for (var a = 0, b = this.stamps.length; b > a; a++) {
				var c = this.stamps[a];
				this._manageStamp(c)
			}
		}
	},
	g.prototype._getBoundingRect = function() {
		var a = this.element.getBoundingClientRect(),
			b = this.size;
		this._boundingRect = {
			left: a.left + b.paddingLeft + b.borderLeftWidth,
			top: a.top + b.paddingTop + b.borderTopWidth,
			right: a.right - (b.paddingRight + b.borderRightWidth),
			bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
		}
	},
	g.prototype._manageStamp = j,
	g.prototype._getElementOffset = function(a) {
		var b = a.getBoundingClientRect(),
			c = this._boundingRect,
			e = d(a),
			f = {
				left: b.left - c.left - e.marginLeft,
				top: b.top - c.top - e.marginTop,
				right: c.right - b.right - e.marginRight,
				bottom: c.bottom - b.bottom - e.marginBottom
			};
		return f
	},
	g.prototype.handleEvent = function(a) {
		var b = "on" + a.type;
		this[b] && this[b](a)
	},
	g.prototype.bindResize = function() {
		this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
	},
	g.prototype.unbindResize = function() {
		this.isResizeBound && b.unbind(a, "resize", this),
		this.isResizeBound = !1
	},
	g.prototype.onresize = function() {
		function a() {
			b.resize(),
			delete b.resizeTimeout
		}
		this.resizeTimeout && clearTimeout(this.resizeTimeout);
		var b = this;
		this.resizeTimeout = setTimeout(a, 100)
	},
	g.prototype.resize = function() {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	},
	g.prototype.needsResizeLayout = function() {
		var a = d(this.element),
			b = this.size && a;
		return b && a.innerWidth !== this.size.innerWidth
	},
	g.prototype.addItems = function(a) {
		var b = this._itemize(a);
		return b.length && (this.items = this.items.concat(b)),
		b
	},
	g.prototype.appended = function(a) {
		var b = this.addItems(a);
		b.length && (this.layoutItems(b, !0), this.reveal(b))
	},
	g.prototype.prepended = function(a) {
		var b = this._itemize(a);
		if (b.length) {
			var c = this.items.slice(0);
			this.items = b.concat(c),
			this._resetLayout(),
			this._manageStamps(),
			this.layoutItems(b, !0),
			this.reveal(b),
			this.layoutItems(c)
		}
	},
	g.prototype.reveal = function(a) {
		this._emitCompleteOnItems("reveal", a);
		for (var b = a && a.length, c = 0; b && b > c; c++) {
			var d = a[c];
			d.reveal()
		}
	},
	g.prototype.hide = function(a) {
		this._emitCompleteOnItems("hide", a);
		for (var b = a && a.length, c = 0; b && b > c; c++) {
			var d = a[c];
			d.hide()
		}
	},
	g.prototype.revealItemElements = function(a) {
		var b = this.getItems(a);
		this.reveal(b)
	},
	g.prototype.hideItemElements = function(a) {
		var b = this.getItems(a);
		this.hide(b)
	},
	g.prototype.getItem = function(a) {
		for (var b = 0, c = this.items.length; c > b; b++) {
			var d = this.items[b];
			if (d.element === a)
				return d
		}
	},
	g.prototype.getItems = function(a) {
		a = e.makeArray(a);
		for (var b = [], c = 0, d = a.length; d > c; c++) {
			var f = a[c],
				g = this.getItem(f);
			g && b.push(g)
		}
		return b
	},
	g.prototype.remove = function(a) {
		var b = this.getItems(a);
		if (this._emitCompleteOnItems("remove", b), b && b.length)
			for (var c = 0, d = b.length; d > c; c++) {
				var f = b[c];
				f.remove(),
				e.removeFrom(this.items, f)
			}
		},
	g.prototype.destroy = function() {
		var a = this.element.style;
		a.height = "",
		a.position = "",
		a.width = "";
		for (var b = 0, c = this.items.length; c > b; b++) {
			var d = this.items[b];
			d.destroy()
		}
		this.unbindResize();
		var e = this.element.outlayerGUID;
		delete l[e],
		delete this.element.outlayerGUID,
		i && i.removeData(this.element, this.constructor.namespace)
	},
	g.data = function(a) {
		a = e.getQueryElement(a);
		var b = a && a.outlayerGUID;
		return b && l[b]
	},
	g.create = function(a, b) {
		function c() {
			g.apply(this, arguments)
		}
		return Object.create
			? c.prototype = Object.create(g.prototype)
			: e.extend(c.prototype, g.prototype),
		c.prototype.constructor = c,
		c.defaults = e.extend({}, g.defaults),
		e.extend(c.defaults, b),
		c.prototype.settings = {},
		c.namespace = a,
		c.data = g.data,
		c.Item = function() {
			f.apply(this, arguments)
		},
		c.Item.prototype = new f,
		e.htmlInit(c, a),
		i && i.bridget && i.bridget(a, c),
		c
	},
	g.Item = f,
	g
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("isotope/js/item", ["outlayer/outlayer"], b)
		: "object" == typeof exports
			? module.exports = b(require("outlayer"))
			: (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
}(window, function(a) {
	"use strict";
	function b() {
		a.Item.apply(this, arguments)
	}
	b.prototype = new a.Item,
	b.prototype._create = function() {
		this.id = this.layout.itemGUID++,
		a.Item.prototype._create.call(this),
		this.sortData = {}
	},
	b.prototype.updateSortData = function() {
		if (!this.isIgnored) {
			this.sortData.id = this.id,
			this.sortData["original-order"] = this.id,
			this.sortData.random = Math.random();
			var a = this.layout.options.getSortData,
				b = this.layout._sorters;
			for (var c in a) {
				var d = b[c];
				this.sortData[c] = d(this.element, this)
			}
		}
	};
	var c = b.prototype.destroy;
	return b.prototype.destroy = function() {
		c.apply(this, arguments),
		this.css({display: ""})
	},
	b
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("isotope/js/layout-mode", [
			"get-size/get-size", "outlayer/outlayer"
		], b)
		: "object" == typeof exports
			? module.exports = b(require("get-size"), require("outlayer"))
			: (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
}(window, function(a, b) {
	"use strict";
	function c(a) {
		this.isotope = a,
		a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
	}
	return function() {
		function a(a) {
			return function() {
				return b.prototype[a].apply(this.isotope, arguments)
			}
		}
		for (var d = [
			"_resetLayout",
			"_getItemLayoutPosition",
			"_manageStamp",
			"_getContainerSize",
			"_getElementOffset",
			"needsResizeLayout"
		], e = 0, f = d.length; f > e; e++) {
			var g = d[e];
			c.prototype[g] = a(g)
		}
	}(),
	c.prototype.needsVerticalResizeLayout = function() {
		var b = a(this.isotope.element),
			c = this.isotope.size && b;
		return c && b.innerHeight != this.isotope.size.innerHeight
	},
	c.prototype._getMeasurement = function() {
		this.isotope._getMeasurement.apply(this, arguments)
	},
	c.prototype.getColumnWidth = function() {
		this.getSegmentSize("column", "Width")
	},
	c.prototype.getRowHeight = function() {
		this.getSegmentSize("row", "Height")
	},
	c.prototype.getSegmentSize = function(a, b) {
		var c = a + b,
			d = "outer" + b;
		if (this._getMeasurement(c, d), !this[c]) {
			var e = this.getFirstItemSize();
			this[c] = e && e[d] || this.isotope.size["inner" + b]
		}
	},
	c.prototype.getFirstItemSize = function() {
		var b = this.isotope.filteredItems[0];
		return b && b.element && a(b.element)
	},
	c.prototype.layout = function() {
		this.isotope.layout.apply(this.isotope, arguments)
	},
	c.prototype.getSize = function() {
		this.isotope.getSize(),
		this.size = this.isotope.size
	},
	c.modes = {},
	c.create = function(a, b) {
		function d() {
			c.apply(this, arguments)
		}
		return d.prototype = new c,
		b && (d.options = b),
		d.prototype.namespace = a,
		c.modes[a] = d,
		d
	},
	c
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("masonry/masonry", [
			"outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"
		], b)
		: "object" == typeof exports
			? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils"))
			: a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
}(window, function(a, b, c) {
	var d = a.create("masonry");
	return d.prototype._resetLayout = function() {
		this.getSize(),
		this._getMeasurement("columnWidth", "outerWidth"),
		this._getMeasurement("gutter", "outerWidth"),
		this.measureColumns();
		var a = this.cols;
		for (this.colYs = []; a--;)
			this.colYs.push(0);
		this.maxY = 0
	},
	d.prototype.measureColumns = function() {
		if (this.getContainerWidth(), !this.columnWidth) {
			var a = this.items[0],
				c = a && a.element;
			this.columnWidth = c && b(c).outerWidth || this.containerWidth
		}
		var d = this.columnWidth += this.gutter,
			e = this.containerWidth + this.gutter,
			f = e / d,
			g = d - e % d,
			h = g && 1 > g
				? "round"
				: "floor";
		f = Math[h](f),
		this.cols = Math.max(f, 1)
	},
	d.prototype.getContainerWidth = function() {
		var a = this.options.isFitWidth
				? this.element.parentNode
				: this.element,
			c = b(a);
		this.containerWidth = c && c.innerWidth
	},
	d.prototype._getItemLayoutPosition = function(a) {
		a.getSize();
		var b = a.size.outerWidth % this.columnWidth,
			d = b && 1 > b
				? "round"
				: "ceil",
			e = Math[d](a.size.outerWidth / this.columnWidth);
		e = Math.min(e, this.cols);
		for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
			x: this.h,
			y: g
		}, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++)
			this.colYs[h + l] = j;
		return i
	},
	d.prototype._getColGroup = function(a) {
		if (2 > a)
			return this.colYs;
		for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
			var e = this.colYs.slice(d, d + a);
			b[d] = Math.max.apply(Math, e)
		}
		return b
	},
	d.prototype._manageStamp = function(a) {
		var c = b(a),
			d = this._getElementOffset(a),
			e = this.options.isOriginLeft
				? d.left
				: d.right,
			f = e + c.outerWidth,
			g = Math.floor(e / this.columnWidth);
		g = Math.max(0, g);
		var h = Math.floor(f / this.columnWidth);
		h -= f % this.columnWidth
			? 0
			: 1,
		h = Math.min(this.cols - 1, h);
		for (var i = (this.options.isOriginTop
			? d.top
			: d.bottom) + c.outerHeight, j = g; h >= j; j++)
			this.colYs[j] = Math.max(i, this.colYs[j])
	},
	d.prototype._getContainerSize = function() {
		this.maxY = Math.max.apply(Math, this.colYs);
		var a = {
			height: this.maxY
		};
		return this.options.isFitWidth && (a.width = this._getContainerFitWidth()),
		a
	},
	d.prototype._getContainerFitWidth = function() {
		for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];)
			a++;
		return (this.cols - a) * this.columnWidth - this.gutter
	},
	d.prototype.needsResizeLayout = function() {
		var a = this.containerWidth;
		return this.getContainerWidth(),
		a !== this.containerWidth
	},
	d
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("isotope/js/layout-modes/masonry", [
			"../layout-mode", "masonry/masonry"
		], b)
		: "object" == typeof exports
			? module.exports = b(require("../layout-mode"), require("masonry-layout"))
			: b(a.Isotope.LayoutMode, a.Masonry)
}(window, function(a, b) {
	"use strict";
	function c(a, b) {
		for (var c in b)
			a[c] = b[c];
		return a
	}
	var d = a.create("masonry"),
		e = d.prototype._getElementOffset,
		f = d.prototype.layout,
		g = d.prototype._getMeasurement;
	c(d.prototype, b.prototype),
	d.prototype._getElementOffset = e,
	d.prototype.layout = f,
	d.prototype._getMeasurement = g;
	var h = d.prototype.measureColumns;
	d.prototype.measureColumns = function() {
		this.items = this.isotope.filteredItems,
		h.call(this)
	};
	var i = d.prototype._manageStamp;
	return d.prototype._manageStamp = function() {
		this.options.isOriginLeft = this.isotope.options.isOriginLeft,
		this.options.isOriginTop = this.isotope.options.isOriginTop,
		i.apply(this, arguments)
	},
	d
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b)
		: "object" == typeof exports
			? module.exports = b(require("../layout-mode"))
			: b(a.Isotope.LayoutMode)
}(window, function(a) {
	"use strict";
	var b = a.create("fitRows");
	return b.prototype._resetLayout = function() {
		this.x = 0,
		this.y = 0,
		this.maxY = 0,
		this._getMeasurement("gutter", "outerWidth")
	},
	b.prototype._getItemLayoutPosition = function(a) {
		a.getSize();
		var b = a.size.outerWidth + this.gutter,
			c = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
		var d = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight),
		this.x += b,
		d
	},
	b.prototype._getContainerSize = function() {
		return {height: this.maxY}
	},
	b
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b)
		: "object" == typeof exports
			? module.exports = b(require("../layout-mode"))
			: b(a.Isotope.LayoutMode)
}(window, function(a) {
	"use strict";
	var b = a.create("vertical", {horizontalAlignment: 0});
	return b.prototype._resetLayout = function() {
		this.y = 0
	},
	b.prototype._getItemLayoutPosition = function(a) {
		a.getSize();
		var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
			c = this.y;
		return this.y += a.size.outerHeight, {
			x: b,
			y: c
		}
	},
	b.prototype._getContainerSize = function() {
		return {height: this.y}
	},
	b
}),
function(a, b) {
	"use strict";
	"function" == typeof define && define.amd
		? define([
			"outlayer/outlayer",
			"get-size/get-size",
			"matches-selector/matches-selector",
			"fizzy-ui-utils/utils",
			"isotope/js/item",
			"isotope/js/layout-mode",
			"isotope/js/layout-modes/masonry",
			"isotope/js/layout-modes/fit-rows",
			"isotope/js/layout-modes/vertical"
		], function(c, d, e, f, g, h) {
			return b(a, c, d, e, f, g, h)
		})
		: "object" == typeof exports
			? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical"))
			: a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function(a, b, c, d, e, f, g) {
	function h(a, b) {
		return function(c, d) {
			for (var e = 0, f = a.length; f > e; e++) {
				var g = a[e],
					h = c.sortData[g],
					i = d.sortData[g];
				if (h > i || i > h) {
					var j = void 0 !== b[g]
							? b[g]
							: b,
						k = j
							? 1
							: -1;
					return (h > i
						? 1
						: -1) * k
				}
			}
			return 0
		}
	}
	var i = a.jQuery,
		j = String.prototype.trim
			? function(a) {
				return a.trim()
			}
			: function(a) {
				return a.replace(/^\s+|\s+$/g, "")
			},
		k = document.documentElement,
		l = k.textContent
			? function(a) {
				return a.textContent
			}
			: function(a) {
				return a.innerText
			},
		m = b.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	m.Item = f,
	m.LayoutMode = g,
	m.prototype._create = function() {
		this.itemGUID = 0,
		this._sorters = {},
		this._getSorters(),
		b.prototype._create.call(this),
		this.modes = {},
		this.filteredItems = this.items,
		this.sortHistory = ["original-order"];
		for (var a in g.modes)
			this._initLayoutMode(a)
	},
	m.prototype.reloadItems = function() {
		this.itemGUID = 0,
		b.prototype.reloadItems.call(this)
	},
	m.prototype._itemize = function() {
		for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
			var e = a[c];
			e.id = this.itemGUID++
		}
		return this._updateItemsSortData(a),
		a
	},
	m.prototype._initLayoutMode = function(a) {
		var b = g.modes[a],
			c = this.options[a] || {};
		this.options[a] = b.options
			? e.extend(b.options, c)
			: c,
		this.modes[a] = new b(this)
	},
	m.prototype.layout = function() {
		return !this._isLayoutInited && this.options.isInitLayout
			? void this.arrange()
			: void this._layout()
	},
	m.prototype._layout = function() {
		var a = this._getIsInstant();
		this._resetLayout(),
		this._manageStamps(),
		this.layoutItems(this.filteredItems, a),
		this._isLayoutInited = !0
	},
	m.prototype.arrange = function(a) {
		function b() {
			d.reveal(c.needReveal),
			d.hide(c.needHide)
		}
		this.option(a),
		this._getIsInstant();
		var c = this._filter(this.items);
		this.filteredItems = c.matches;
		var d = this;
		this._bindArrangeComplete(),
		this._isInstant
			? this._noTransition(b)
			: b(),
		this._sort(),
		this._layout()
	},
	m.prototype._init = m.prototype.arrange,
	m.prototype._getIsInstant = function() {
		var a = void 0 !== this.options.isLayoutInstant
			? this.options.isLayoutInstant
			: !this._isLayoutInited;
		return this._isInstant = a,
		a
	},
	m.prototype._bindArrangeComplete = function() {
		function a() {
			b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
		}
		var b,
			c,
			d,
			e = this;
		this.once("layoutComplete", function() {
			b = !0,
			a()
		}),
		this.once("hideComplete", function() {
			c = !0,
			a()
		}),
		this.once("revealComplete", function() {
			d = !0,
			a()
		})
	},
	m.prototype._filter = function(a) {
		var b = this.options.filter;
		b = b || "*";
		for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
			var i = a[g];
			if (!i.isIgnored) {
				var j = f(i);
				j && c.push(i),
				j && i.isHidden
					? d.push(i)
					: j || i.isHidden || e.push(i)
			}
		}
		return {matches: c, needReveal: d, needHide: e}
	},
	m.prototype._getFilterTest = function(a) {
		return i && this.options.isJQueryFiltering
			? function(b) {
				return i(b.element).is(a)
			}
			: "function" == typeof a
				? function(b) {
					return a(b.element)
				}
				: function(b) {
					return d(b.element, a)
				}
	},
	m.prototype.updateSortData = function(a) {
		var b;
		a
			? (a = e.makeArray(a), b = this.getItems(a))
			: b = this.items,
		this._getSorters(),
		this._updateItemsSortData(b)
	},
	m.prototype._getSorters = function() {
		var a = this.options.getSortData;
		for (var b in a) {
			var c = a[b];
			this._sorters[b] = n(c)
		}
	},
	m.prototype._updateItemsSortData = function(a) {
		for (var b = a && a.length, c = 0; b && b > c; c++) {
			var d = a[c];
			d.updateSortData()
		}
	};
	var n = function() {
		function a(a) {
			if ("string" != typeof a)
				return a;
			var c = j(a).split(" "),
				d = c[0],
				e = d.match(/^\[(.+)\]$/),
				f = e && e[1],
				g = b(f, d),
				h = m.sortDataParsers[c[1]];
			return a = h
				? function(a) {
					return a && h(g(a))
				}
				: function(a) {
					return a && g(a)
				}
		}
		function b(a, b) {
			var c;
			return c = a
				? function(b) {
					return b.getAttribute(a)
				}
				: function(a) {
					var c = a.querySelector(b);
					return c && l(c)
				}
		}
		return a
	}();
	m.sortDataParsers = {
		parseInt: function(a) {
			return parseInt(a, 10)
		},
		parseFloat: function(a) {
			return parseFloat(a)
		}
	},
	m.prototype._sort = function() {
		var a = this.options.sortBy;
		if (a) {
			var b = [].concat.apply(a, this.sortHistory),
				c = h(b, this.options.sortAscending);
			this.filteredItems.sort(c),
			a != this.sortHistory[0] && this.sortHistory.unshift(a)
		}
	},
	m.prototype._mode = function() {
		var a = this.options.layoutMode,
			b = this.modes[a];
		if (!b)
			throw new Error("No layout mode: " + a);
		return b.options = this.options[a],
		b
	},
	m.prototype._resetLayout = function() {
		b.prototype._resetLayout.call(this),
		this._mode()._resetLayout()
	},
	m.prototype._getItemLayoutPosition = function(a) {
		return this._mode()._getItemLayoutPosition(a)
	},
	m.prototype._manageStamp = function(a) {
		this._mode()._manageStamp(a)
	},
	m.prototype._getContainerSize = function() {
		return this._mode()._getContainerSize()
	},
	m.prototype.needsResizeLayout = function() {
		return this._mode().needsResizeLayout()
	},
	m.prototype.appended = function(a) {
		var b = this.addItems(a);
		if (b.length) {
			var c = this._filterRevealAdded(b);
			this.filteredItems = this.filteredItems.concat(c)
		}
	},
	m.prototype.prepended = function(a) {
		var b = this._itemize(a);
		if (b.length) {
			this._resetLayout(),
			this._manageStamps();
			var c = this._filterRevealAdded(b);
			this.layoutItems(this.filteredItems),
			this.filteredItems = c.concat(this.filteredItems),
			this.items = b.concat(this.items)
		}
	},
	m.prototype._filterRevealAdded = function(a) {
		var b = this._filter(a);
		return this.hide(b.needHide),
		this.reveal(b.matches),
		this.layoutItems(b.matches, !0),
		b.matches
	},
	m.prototype.insert = function(a) {
		var b = this.addItems(a);
		if (b.length) {
			var c,
				d,
				e = b.length;
			for (c = 0; e > c; c++)
				d = b[c],
				this.element.appendChild(d.element);
			var f = this._filter(b).matches;
			for (c = 0; e > c; c++)
				b[c].isLayoutInstant = !0;
			for (this.arrange(), c = 0; e > c; c++)
				delete b[c].isLayoutInstant;
			this.reveal(f)
		}
	};
	var o = m.prototype.remove;
	return m.prototype.remove = function(a) {
		a = e.makeArray(a);
		var b = this.getItems(a);
		o.call(this, a);
		var c = b && b.length;
		if (c)
			for (var d = 0; c > d; d++) {
				var f = b[d];
				e.removeFrom(this.filteredItems, f)
			}
		},
	m.prototype.shuffle = function() {
		for (var a = 0, b = this.items.length; b > a; a++) {
			var c = this.items[a];
			c.sortData.random = Math.random()
		}
		this.options.sortBy = "random",
		this._sort(),
		this._layout()
	},
	m.prototype._noTransition = function(a) {
		var b = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var c = a.call(this);
		return this.options.transitionDuration = b,
		c
	},
	m.prototype.getFilteredItemElements = function() {
		for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++)
			a.push(this.filteredItems[b].element);
		return a
	},
	m
});

// Remove WhiteSpace
(function(a) {
	a.fn.removeWhitespace = function() {
		this.contents().filter(function() {
			return this.nodeType == 3 && !/\S/.test(this.nodeValue)
		}).remove();
		return this
	}
})(jQuery)

/*!
 *
 * jQuery collagePlus Plugin v0.3.3
 * https://github.com/ed-lea/jquery-collagePlus
 *
 * Copyright 2012, Ed Lea twitter.com/ed_lea
 *
 * built for http://qiip.me
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 *
 */;
(function(e) {
	e.fn.collagePlus = function(t) {
		function n(t, n, i, s) {
			var o = i.padding * (t.length - 1) + t.length * t[0][3],
				u = i.albumWidth - o,
				a = u / (n - o),
				f = o,
				l = n < i.albumWidth
					? true
					: false;
			for (var c = 0; c < t.length; c++) {
				var h = e(t[c][0]),
					p = Math.floor(t[c][1] * a),
					d = Math.floor(t[c][2] * a),
					v = !!(c < t.length - 1);
				if (i.allowPartialLastRow === true && l === true) {
					p = t[c][1];
					d = t[c][2]
				}
				f += p;
				if (!v && f < i.albumWidth) {
					if (i.allowPartialLastRow === true && l === true) {
						p = p
					} else {
						p = p + (i.albumWidth - f)
					}
				}
				p--;
				var m = h.is("img")
					? h
					: h.find("img");
				m.width(p);
				if (!h.is("img")) {
					h.width(p + t[c][3])
				}
				m.height(d);
				if (!h.is("img")) {
					h.height(d + t[c][4])
				}
				r(h, v, i);
				m.one("load", function(e) {
					return function() {
						if (i.effect == "default") {
							e.animate({
								opacity: "1"
							}, {duration: i.fadeSpeed})
						} else {
							if (i.direction == "vertical") {
								var t = s <= 10
									? s
									: 10
							} else {
								var t = c <= 9
									? c + 1
									: 10
							}
							e.removeClass(function(e, t) {
								return (t.match(/\beffect-\S+/g) || []).join(" ")
							});
							e.addClass(i.effect);
							e.addClass("effect-duration-" + t)
						}
					}
				}(h)).each(function() {
					if (this.complete)
						e(this).trigger("load")
				})
			}
		}
		function r(e, t, n) {
			var r = {
				"margin-bottom": n.padding + "px",
				"margin-right": t
					? n.padding + "px"
					: "0px",
				display: n.display,
				"vertical-align": "bottom",
				overflow: "hidden"
			};
			return e.css(r)
		}
		function i(t) {
			$img = e(t);
			var n = new Array;
			n["w"] = parseFloat($img.css("border-left-width")) + parseFloat($img.css("border-right-width"));
			n["h"] = parseFloat($img.css("border-top-width")) + parseFloat($img.css("border-bottom-width"));
			return n
		}
		return this.each(function() {
			var r = 0,
				s = [],
				o = 1,
				u = e(this);
			e.fn.collagePlus.defaults.albumWidth = u.width();
			e.fn.collagePlus.defaults.padding = parseFloat(u.css("padding-left"));
			e.fn.collagePlus.defaults.images = u.children();
			var a = e.extend({}, e.fn.collagePlus.defaults, t);
			a.images.each(function(t) {
				var u = e(this),
					f = u.is("img")
						? u
						: e(this).find("img");
				var l = typeof f.data("width") != "undefined"
						? f.data("width")
						: f.width(),
					c = typeof f.data("height") != "undefined"
						? f.data("height")
						: f.height();
				var h = i(f);
				f.data("width", l);
				f.data("height", c);
				var p = Math.ceil(l / c * a.targetHeight),
					d = Math.ceil(a.targetHeight);
				s.push([this, p, d, h["w"], h["h"]]);
				r += p + h["w"] + a.padding;
				if (r > a.albumWidth && s.length != 0) {
					n(s, r - a.padding, a, o);
					delete r;
					delete s;
					r = 0;
					s = [];
					o += 1
				}
				if (a.images.length - 1 == t && s.length != 0) {
					n(s, r, a, o);
					delete r;
					delete s;
					r = 0;
					s = [];
					o += 1
				}
			})
		})
	};
	e.fn.collagePlus.defaults = {
		targetHeight: 400,
		fadeSpeed: "fast",
		display: "inline-block",
		effect: "default",
		direction: "vertical",
		allowPartialLastRow: false
	}
})(jQuery);

/**
* jquery.matchHeight-min.js master
* http://brm.io/jquery-match-height/
* License: MIT
*/
// (function(c) {
// 	var n = -1,
// 		f = -1,
// 		g = function(a) {
// 			return parseFloat(a) || 0
// 		},
// 		r = function(a) {
// 			var b = null,
// 				d = [];
// 			c(a).each(function() {
// 				var a = c(this),
// 					k = a.offset().top - g(a.css("margin-top")),
// 					l = 0 < d.length
// 						? d[d.length - 1]
// 						: null;
// 				null === l
// 					? d.push(a)
// 					: 1 >= Math.floor(Math.abs(b - k))
// 						? d[d.length - 1] = l.add(a)
// 						: d.push(a);
// 				b = k
// 			});
// 			return d
// 		},
// 		p = function(a) {
// 			var b = {
// 				byRow: !0,
// 				property: "height",
// 				target: null,
// 				remove: !1
// 			};
// 			if ("object" === typeof a)
// 				return c.extend(b, a);
//
// 			"boolean" === typeof a
// 				? b.byRow = a
// 				: "remove" === a && (b.remove = !0);
// 			return b
// 		},
// 		b = c.fn.matchHeight = function(a) {
// 			a = p(a);
// 			if (a.remove) {
// 				var e = this;
// 				this.css(a.property, "");
// 				c.each(b._groups, function(a, b) {
// 					b.elements = b.elements.not(e)
// 				});
// 				return this
// 			}
// 			if (1 >= this.length && !a.target)
// 				return this;
// 			b._groups.push({elements: this, options: a});
// 			b._apply(this, a);
// 			return this
// 		};
// 	b._groups = [];
// 	b._throttle = 80;
// 	b._maintainScroll = !1;
// 	b._beforeUpdate = null;
// 	b._afterUpdate = null;
// 	b._apply = function(a, e) {
// 		var d = p(e),
// 			h = c(a),
// 			k = [h],
// 			l = c(window).scrollTop(),
// 			f = c("html").outerHeight(!0),
// 			m = h.parents().filter(":hidden");
// 		m.each(function() {
// 			var a = c(this);
// 			a.data("style-cache", a.attr("style"))
// 		});
// 		m.css("display", "block");
// 		d.byRow && !d.target && (h.each(function() {
// 			var a = c(this),
// 				b = "inline-block" === a.css("display")
// 					? "inline-block"
// 					: "block";
// 			a.data("style-cache", a.attr("style"));
// 			a.css({
// 				display: b,
// 				"padding-top": "0",
// 				"padding-bottom": "0",
// 				"margin-top": "0",
// 				"margin-bottom": "0",
// 				"border-top-width": "0",
// 				"border-bottom-width": "0",
// 				height: "100px"
// 			})
// 		}), k = r(h), h.each(function() {
// 			var a = c(this);
// 			a.attr("style", a.data("style-cache") || "")
// 		}));
// 		c.each(k, function(a, b) {
// 			var e = c(b),
// 				f = 0;
// 			if (d.target)
// 				f = d.target.outerHeight(!1);
// 			else {
// 				if (d.byRow && 1 >= e.length) {
// 					e.css(d.property, "");
// 					return
// 				}
// 				e.each(function() {
// 					var a = c(this),
// 						b = {
// 							display: "inline-block" === a.css("display")
// 								? "inline-block"
// 								: "block"
// 						};
// 					b[d.property] = "";
// 					a.css(b);
// 					a.outerHeight(!1) > f && (f = a.outerHeight(!1));
// 					a.css("display", "")
// 				})
// 			}
// 			e.each(function() {
// 				var a = c(this),
// 					b = 0;
// 				d.target && a.is(d.target) || ("border-box" !== a.css("box-sizing") && (b += g(a.css("border-top-width")) + g(a.css("border-bottom-width")), b += g(a.css("padding-top")) + g(a.css("padding-bottom"))), a.css(d.property, f - b))
// 			})
// 		});
// 		m.each(function() {
// 			var a = c(this);
// 			a.attr("style", a.data("style-cache") || null)
// 		});
// 		b._maintainScroll && c(window).scrollTop(l / f * c("html").outerHeight(!0));
// 		return this
// 	};
// 	b._applyDataApi = function() {
// 		var a = {};
// 		c("[data-match-height], [data-mh]").each(function() {
// 			var b = c(this),
// 				d = b.attr("data-mh") || b.attr("data-match-height");
// 			a[d] = d in a
// 				? a[d].add(b)
// 				: b
// 		});
// 		c.each(a, function() {
// 			this.matchHeight(!0)
// 		})
// 	};
// 	var q = function(a) {
// 		b._beforeUpdate && b._beforeUpdate(a, b._groups);
// 		c.each(b._groups, function() {
// 			b._apply(this.elements, this.options)
// 		});
// 		b._afterUpdate && b._afterUpdate(a, b._groups)
// 	};
// 	b._update = function(a, e) {
// 		if (e && "resize" === e.type) {
// 			var d = c(window).width();
// 			if (d === n)
// 				return;
// 			n = d
// 		}
// 		a
// 			? -1 === f && (f = setTimeout(function() {
// 				q(e);
// 				f = -1
// 			}, b._throttle))
// 			: q(e)
// 	};
// 	c(b._applyDataApi);
// 	c(window).bind("load", function(a) {
// 		b._update(!1, a)
// 	});
// 	c(window).bind("resize orientationchange", function(a) {
// 		b._update(!0, a)
// 	})
// })(jQuery);

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
!function(a, b, c, d) {
	function e(b, c) {
		this.element = b,
		this.options = a.extend({}, g, c),
		this._defaults = g,
		this._name = f,
		this.init()
	}
	var f = "stellar",
		g = {
			scrollProperty: "scroll",
			positionProperty: "position",
			horizontalScrolling: !0,
			verticalScrolling: !0,
			horizontalOffset: 0,
			verticalOffset: 0,
			responsive: !1,
			parallaxBackgrounds: !0,
			parallaxElements: !0,
			hideDistantElements: !0,
			hideElement: function(a) {
				a.hide()
			},
			showElement: function(a) {
				a.show()
			}
		},
		h = {
			scroll: {
				getLeft: function(a) {
					return a.scrollLeft()
				},
				setLeft: function(a, b) {
					a.scrollLeft(b)
				},
				getTop: function(a) {
					return a.scrollTop()
				},
				setTop: function(a, b) {
					a.scrollTop(b)
				}
			},
			position: {
				getLeft: function(a) {
					return -1 * parseInt(a.css("left"), 10)
				},
				getTop: function(a) {
					return -1 * parseInt(a.css("top"), 10)
				}
			},
			margin: {
				getLeft: function(a) {
					return -1 * parseInt(a.css("margin-left"), 10)
				},
				getTop: function(a) {
					return -1 * parseInt(a.css("margin-top"), 10)
				}
			},
			transform: {
				getLeft: function(a) {
					var b = getComputedStyle(a[0])[k];
					return "none" !== b
						? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10)
						: 0
				},
				getTop: function(a) {
					var b = getComputedStyle(a[0])[k];
					return "none" !== b
						? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10)
						: 0
				}
			}
		},
		i = {
			position: {
				setLeft: function(a, b) {
					a.css("left", b)
				},
				setTop: function(a, b) {
					a.css("top", b)
				}
			},
			transform: {
				setPosition: function(a, b, c, d, e) {
					a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
				}
			}
		},
		j = function() {
			var b,
				c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
				d = a("script")[0].style,
				e = "";
			for (b in d)
				if (c.test(b)) {
					e = b.match(c)[0];
					break
				}
			return "WebkitOpacity" in d && (e = "Webkit"),
			"KhtmlOpacity" in d && (e = "Khtml"),
			function(a) {
				return e + (e.length > 0
					? a.charAt(0).toUpperCase() + a.slice(1)
					: a)
			}
		}(),
		k = j("transform"),
		l = a("<div />", {style: "background:#fff"}).css("background-position-x") !== d,
		m = l
			? function(a, b, c) {
				a.css({"background-position-x": b, "background-position-y": c})
			}
			: function(a, b, c) {
				a.css("background-position", b + " " + c)
			},
		n = l
			? function(a) {
				return [a.css("background-position-x"), a.css("background-position-y")]
			}
			: function(a) {
				return a.css("background-position").split(" ")
			},
		o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
			setTimeout(a, 1e3 / 60)
		};
	e.prototype = {
		init: function() {
			this.options.name = f + "_" + Math.floor(1e9 * Math.random()),
			this._defineElements(),
			this._defineGetters(),
			this._defineSetters(),
			this._handleWindowLoadAndResize(),
			this._detectViewport(),
			this.refresh({
				firstLoad: !0
			}),
			"scroll" === this.options.scrollProperty
				? this._handleScrollEvent()
				: this._startAnimationLoop()
		},
		_defineElements: function() {
			this.element === c.body && (this.element = b),
			this.$scrollElement = a(this.element),
			this.$element = this.element === b
				? a("body")
				: this.$scrollElement,
			this.$viewportElement = this.options.viewportElement !== d
				? a(this.options.viewportElement)
				: this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty
					? this.$scrollElement
					: this.$scrollElement.parent()
		},
		_defineGetters: function() {
			var a = this,
				b = h[a.options.scrollProperty];
			this._getScrollLeft = function() {
				return b.getLeft(a.$scrollElement)
			},
			this._getScrollTop = function() {
				return b.getTop(a.$scrollElement)
			}
		},
		_defineSetters: function() {
			var b = this,
				c = h[b.options.scrollProperty],
				d = i[b.options.positionProperty],
				e = c.setLeft,
				f = c.setTop;
			this._setScrollLeft = "function" == typeof e
				? function(a) {
					e(b.$scrollElement, a)
				}
				: a.noop,
			this._setScrollTop = "function" == typeof f
				? function(a) {
					f(b.$scrollElement, a)
				}
				: a.noop,
			this._setPosition = d.setPosition || function(a, c, e, f, g) {
				b.options.horizontalScrolling && d.setLeft(a, c, e),
				b.options.verticalScrolling && d.setTop(a, f, g)
			}
		},
		_handleWindowLoadAndResize: function() {
			var c = this,
				d = a(b);
			c.options.responsive && d.bind("load." + this.name, function() {
				c.refresh()
			}),
			d.bind("resize." + this.name, function() {
				c._detectViewport(),
				c.options.responsive && c.refresh()
			})
		},
		refresh: function(c) {
			var d = this,
				e = d._getScrollLeft(),
				f = d._getScrollTop();
			c && c.firstLoad || this._reset(),
			this._setScrollLeft(0),
			this._setScrollTop(0),
			this._setOffsets(),
			this._findParticles(),
			this._findBackgrounds(),
			c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function() {
				var a = d._getScrollLeft(),
					b = d._getScrollTop();
				d._setScrollLeft(a + 1),
				d._setScrollTop(b + 1),
				d._setScrollLeft(a),
				d._setScrollTop(b)
			}),
			this._setScrollLeft(e),
			this._setScrollTop(f)
		},
		_detectViewport: function() {
			var a = this.$viewportElement.offset(),
				b = null !== a && a !== d;
			this.viewportWidth = this.$viewportElement.width(),
			this.viewportHeight = this.$viewportElement.height(),
			this.viewportOffsetTop = b
				? a.top
				: 0,
			this.viewportOffsetLeft = b
				? a.left
				: 0
		},
// 		_findParticles: function(){{var b=this;this._getScrollLeft(),this._getScrollTop()}if(this.particles!==d)for(var c=this.particles.length-1;c>=0;c--)this.particles[c].$element.data("stellar-elementIsActive",d);this.particles=[],this.options.parallaxElements&&this.$element.find("[data-stellar-ratio]").each(function(){var c,e,f,g,h,i,j,k,l,m=a(this),n=0,o=0,p=0,q=0;if(m.data("stellar-elementIsActive")){if(m.data("stellar-elementIsActive")!==this)return}else m.data("stellar-elementIsActive",this);b.options.showElement(m),m.data("stellar-startingLeft")?(m.css("left",m.data("stellar-startingLeft")),m.css("top",m.data("stellar-startingTop"))):(m.data("stellar-startingLeft",m.css("left")),m.data("stellar-startingTop",m.css("top"))),f=m.position().left,g=m.position().top,h="auto"===m.css("margin-left")?0:parseInt(m.css("margin-left"),10),i="auto"===m.css("margin-top")?0:parseInt(m.css("margin-top"),10),k=m.offset().left-h,l=m.offset().top-i,m.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(n=p,o=q,j=b,!1):(p+=b.position().left,void(q+=b.position().top))}),c=m.data("stellar-horizontal-offset")!==d?m.data("stellar-horizontal-offset"):j!==d&&j.data("stellar-horizontal-offset")!==d?j.data("stellar-horizontal-offset"):b.horizontalOffset,e=m.data("stellar-vertical-offset")!==d?m.data("stellar-vertical-offset"):j!==d&&j.data("stellar-vertical-offset")!==d?j.data("stellar-vertical-offset"):b.verticalOffset,b.particles.push({$element:m,$offsetParent:j,isFixed:"fixed"===m.css("position"),horizontalOffset:c,verticalOffset:e,startingPositionLeft:f,startingPositionTop:g,startingOffsetLeft:k,startingOffsetTop:l,parentOffsetLeft:n,parentOffsetTop:o,stellarRatio:m.data("stellar-ratio")!==d?m.data("stellar-ratio"):1,width:m.outerWidth(!0),height:m.outerHeight(!0),isHidden:!1})})},_findBackgrounds:function(){var b,c=this,e=this._getScrollLeft(),f=this._getScrollTop();this.backgrounds=[],this.options.parallaxBackgrounds&&(b=this.$element.find("[data-stellar-background-ratio]"),this.$element.data("stellar-background-ratio")&&(b=b.add(this.$element)),b.each(function(){var b,g,h,i,j,k,l,o=a(this),p=n(o),q=0,r=0,s=0,t=0;if(o.data("stellar-backgroundIsActive")){if(o.data("stellar-backgroundIsActive")!==this)return}else o.data("stellar-backgroundIsActive",this);o.data("stellar-backgroundStartingLeft")?m(o,o.data("stellar-backgroundStartingLeft"),o.data("stellar-backgroundStartingTop")):(o.data("stellar-backgroundStartingLeft",p[0]),o.data("stellar-backgroundStartingTop",p[1])),h="auto"===o.css("margin-left")?0:parseInt(o.css("margin-left"),10),i="auto"===o.css("margin-top")?0:parseInt(o.css("margin-top"),10),j=o.offset().left-h-e,k=o.offset().top-i-f,o.parents().each(function(){var b=a(this);return b.data("stellar-offset-parent")===!0?(q=s,r=t,l=b,!1):(s+=b.position().left,void(t+=b.position().top))}),b=o.data("stellar-horizontal-offset")!==d?o.data("stellar-horizontal-offset"):l!==d&&l.data("stellar-horizontal-offset")!==d?l.data("stellar-horizontal-offset"):c.horizontalOffset,g=o.data("stellar-vertical-offset")!==d?o.data("stellar-vertical-offset"):l!==d&&l.data("stellar-vertical-offset")!==d?l.data("stellar-vertical-offset"):c.verticalOffset,c.backgrounds.push({$element:o,$offsetParent:l,isFixed:"fixed"===o.css("background-attachment"),horizontalOffset:b,verticalOffset:g,startingValueLeft:p[0],startingValueTop:p[1],startingBackgroundPositionLeft:isNaN(parseInt(p[0],10))?0:parseInt(p[0],10),startingBackgroundPositionTop:isNaN(parseInt(p[1],10))?0:parseInt(p[1],10),startingPositionLeft:o.position().left,startingPositionTop:o.position().top,startingOffsetLeft:j,startingOffsetTop:k,parentOffsetLeft:q,parentOffsetTop:r,stellarRatio:o.data("stellar-background-ratio")===d?1:o.data("stellar-background-ratio")})}))},_reset:function(){var a,b,c,d,e;for(e=this.particles.length-1;e>=0;e--)a=this.particles[e],b=a.$element.data("stellar-startingLeft"),c=a.$element.data("stellar-startingTop"),this._setPosition(a.$element,b,b,c,c),this.options.showElement(a.$element),a.$element.data("stellar-startingLeft",null).data("stellar-elementIsActive",null).data("stellar-backgroundIsActive",null);for(e=this.backgrounds.length-1;e>=0;e--)d=this.backgrounds[e],d.$element.data("stellar-backgroundStartingLeft",null).data("stellar-backgroundStartingTop",null),m(d.$element,d.startingValueLeft,d.startingValueTop)},destroy:function(){this._reset(),this.$scrollElement.unbind("resize."+this.name).unbind("scroll."+this.name),this._animationLoop=a.noop,a(b).unbind("load."+this.name).unbind("resize."+this.name)},_setOffsets:function(){var c=this,d=a(b);d.unbind("resize.horizontal-"+this.name).unbind("resize.vertical-"+this.name),"function"==typeof this.options.horizontalOffset?(this.horizontalOffset=this.options.horizontalOffset(),d.bind("resize.horizontal-"+this.name,function(){c.horizontalOffset=c.options.horizontalOffset()})):this.horizontalOffset=this.options.horizontalOffset,"function"==typeof this.options.verticalOffset?(this.verticalOffset=this.options.verticalOffset(),d.bind("resize.vertical-"+this.name,function(){c.verticalOffset=c.options.verticalOffset()})):this.verticalOffset=this.options.verticalOffset},_repositionElements:function(){var a,b,c,d,e,f,g,h,i,j,k=this._getScrollLeft(),l=this._getScrollTop(),n=!0,o=!0;if(this.currentScrollLeft!==k||this.currentScrollTop!==l||this.currentWidth!==this.viewportWidth||this.currentHeight!==this.viewportHeight){for(this.currentScrollLeft=k,this.currentScrollTop=l,this.currentWidth=this.viewportWidth,this.currentHeight=this.viewportHeight,j=this.particles.length-1;j>=0;j--)a=this.particles[j],b=a.isFixed?1:0,this.options.horizontalScrolling?(f=(k+a.horizontalOffset+this.viewportOffsetLeft+a.startingPositionLeft-a.startingOffsetLeft+a.parentOffsetLeft)*-(a.stellarRatio+b-1)+a.startingPositionLeft,h=f-a.startingPositionLeft+a.startingOffsetLeft):(f=a.startingPositionLeft,h=a.startingOffsetLeft),this.options.verticalScrolling?(g=(l+a.verticalOffset+this.viewportOffsetTop+a.startingPositionTop-a.startingOffsetTop+a.parentOffsetTop)*-(a.stellarRatio+b-1)+a.startingPositionTop,i=g-a.startingPositionTop+a.startingOffsetTop):(g=a.startingPositionTop,i=a.startingOffsetTop),this.options.hideDistantElements&&(o=!this.options.horizontalScrolling||h+a.width>(a.isFixed?0:k)&&h<(a.isFixed?0:k)+this.viewportWidth+this.viewportOffsetLeft,n=!this.options.verticalScrolling||i+a.height>(a.isFixed?0:l)&&i<(a.isFixed?0:l)+this.viewportHeight+this.viewportOffsetTop),o&&n?(a.isHidden&&(this.options.showElement(a.$element),a.isHidden=!1),this._setPosition(a.$element,f,a.startingPositionLeft,g,a.startingPositionTop)):a.isHidden||(this.options.hideElement(a.$element),a.isHidden=!0);for(j=this.backgrounds.length-1;j>=0;j--)c=this.backgrounds[j],b=c.isFixed?0:1,d=this.options.horizontalScrolling?(k+c.horizontalOffset-this.viewportOffsetLeft-c.startingOffsetLeft+c.parentOffsetLeft-c.startingBackgroundPositionLeft)*(b-c.stellarRatio)+"px":c.startingValueLeft,e=this.options.verticalScrolling?(l+c.verticalOffset-this.viewportOffsetTop-c.startingOffsetTop+c.parentOffsetTop-c.startingBackgroundPositionTop)*(b-c.stellarRatio)+"px":c.startingValueTop,m(c.$element,d,e)}},
// 		_handleScrollEvent: function() {
// 			var a = this,
// 				b = !1,
// 				c = function() {
// 					a._repositionElements(),
// 					b = !1
// 				},
// 				d = function() {
// 					b || (o(c), b = !0)
// 				};
// 			this.$scrollElement.bind("scroll." + this.name, d),
// 			d()
// 		},
// 		_startAnimationLoop: function() {
// 			var a = this;
// 			this._animationLoop = function() {
// 				o(a._animationLoop),
// 				a._repositionElements()
// 			},
// 			this._animationLoop()
// 		}
// 	},
// 	a.fn[f] = function(b) {
// 		var c = arguments;
// 		return b === d || "object" == typeof b
// 			? this.each(function() {
// 				a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
// 			})
// 			: "string" == typeof b && "_" !== b[0] && "init" !== b
// 				? this.each(function() {
// 					var d = a.data(this, "plugin_" + f);
// 					d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)),
// 					"destroy" === b && a.data(this, "plugin_" + f, null)
// 				})
// 				: void 0
// 	},
// 	a[f] = function() {
// 		var c = a(b);
// 		return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
// 	},
// 	a[f].scrollProperty = h,
// 	a[f].positionProperty = i,
// 	b.Stellar = e
// }(jQuery, this, document);
//
// //IntenseImages (Tim Holman ~ timothy.w.holman@gmail.com)
// window.requestAnimFrame = function() {
// 	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
// 		window.setTimeout(a, 1e3 / 60)
// 	}
// }(),
// window.cancelRequestAnimFrame = function() {
// 	return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
// }();
// var Intense = function() {
// 	"use strict";
// 	function p(a, b) {
// 		for (var c in b)
// 			c in a || (a[c] = b[c]);
// 		return a
// 	}
// 	function q(a, b) {
// 		for (var c in b)
// 			a.style[c] = b[c]
// 	}
// 	function r(a) {
// 		var b = window.innerHeight / a.h;
// 		if (a.w * b > window.innerWidth)
// 			return {
// 				w: a.*b,
// 				h: a.*b,
// 				fit: !0
// 			};
// 		var c = window.innerWidth / a.w;
// 		return {
// 			w: a.*c,
// 			h: a.*c,
// 			fit: !1
// 		}
// 	}
// 	function s(a) {
// 		var b;
// 		if (a.length)
// 			for (b = 0; b < a.length; b++)
// 				t(a[b]);
// 	else
// 			t(a)
// 	}
// 	function t(a) {
// 		(a.getAttribute("data-image") || a.src || a.href) && a.addEventListener("click", function(b) {
// 			"A" === a.tagName && b.preventDefault(),
// 			o || D(this)
// 		}, !1)
// 	}
// 	function u() {
// 		w()
// 	}
// 	function v() {
// 		cancelRequestAnimFrame(e)
// 	}
// 	function w() {
// 		e = requestAnimFrame(w),
// 		J()
// 	}
// 	function x() {
// 		n = document.body.style.overflow,
// 		document.body.style.overflow = "hidden"
// 	}
// 	function y() {
// 		document.body.style.overflow = n
// 	}
// 	function z(a, b) {
// 		if (a)
// 			a.className = a.className.replace("intense--loading", ""),
// 			a.className = a.className.replace("intense--viewing", ""),
// 			a.className += " " + b;
// 		else {
// 			var c = document.querySelectorAll(".intense--viewing");
// 			[].forEach.call(c, function(a) {
// 				a.className = a.className.replace("intense--viewing", "").trim()
// 			})
// 		}
// 	}
	function A(a, c) {
		var d = {
			backgroundColor: "rgba(0,0,0,0.8)",
			width: "100%",
			height: "100%",
			position: "fixed",
			top: "0px",
			left: "0px",
			overflow: "hidden",
			zIndex: "999999",
			margin: "0px",
			webkitTransition: "opacity 150ms cubic-bezier( 0, 0, .26, 1 )",
			MozTransition: "opacity 150ms cubic-bezier( 0, 0, .26, 1 )",
			transition: "opacity 150ms cubic-bezier( 0, 0, .26, 1 )",
			webkitBackfaceVisibility: "hidden",
			opacity: "0"
		};
		k = document.createElement("figure"),
		k.appendChild(i),
		q(k, d);
		var e = {
			cursor: 'url( "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3Q0IyNDI3M0FFMkYxMUUzOEQzQUQ5NTMxMDAwQjJGRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3Q0IyNDI3NEFFMkYxMUUzOEQzQUQ5NTMxMDAwQjJGRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdDQjI0MjcxQUUyRjExRTM4RDNBRDk1MzEwMDBCMkZEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdDQjI0MjcyQUUyRjExRTM4RDNBRDk1MzEwMDBCMkZEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+soZ1WgAABp5JREFUeNrcWn9MlVUY/u4dogIapV0gQ0SUO4WAXdT8B5ULc6uFgK3MLFxzFrQFZMtaed0oKTPj1x8EbbZZK5fNCdLWcvxQ+EOHyAQlBgiIVFxAJuUF7YrQ81zOtU+8F+Pe78K1d3s5537f+fE8nPec7z3vOSpJIRkbGwtEEgtdBdVCl0AXQr2hKqgJeg16BdoCrYNWqVSqbif7VQT8YqgB2jTmuDSJNoIcJUJVOVg5EsmH0Oehaj4bGRkZ6uvra2xvb29oamrqbGxs7K2vrx/s7Oy8yffBwcFzdTqdb0REhF9YWFhwSEhIpEajifDw8PAWzY5Cj0GzMUoNUx0R1RQJaJAcgKaw7ujo6O2urq7qysrKioyMjHNDQ0OjU2nP29tbnZ+fv1qv18cFBQWtU6vVs9gN9BvobhDqU5wIKryA5CuoLwj83dzc/NOePXuOlpSUXFNijiUlJS3ct2/fiytWrHgOhGbj0SD0dZD5UREiKOiJJA+axt9Go7F2165deUeOHOmVXCBbt271y8nJyfD3939aPCqCZoCQ2WEiKOQj7HYjzejUqVNFcXFxJdI0SEVFRdKGDRtShbmd5HwEGZM9IupJSHiJBjaazebr2dnZmdNFgsK+2Cf7JgZiEZhsimoSc/oZqh8eHjamp6fvPnTo0O/SDMiOHTsWFRQUHPDy8vLnQEGflZvZpKaFl4WcE7du3epPTU19+/Dhwz3SDMr27dsDioqKcufMmfM45wyIpD3QtPBiC0lgTowcPHgwa6ZJUIiBWIgJP1OB8aVJTQsFnkDSxCUWk60gPj6+VHIjKS8vT8TcSRdLcxhG5g+bpoWH3yF5ube3tw7L33uSGwqW/8/8/Pzoz30PItvuMy080HEZx/CZDQZDgeSmQmzESKwC870jgodcWhPhJx0LDw8vlNxYLl269Cb8Nfp5NP2kuyMiPM8EfvTodkhuLsQoJn4C/VG5ab3CfHd3d41SvpMrhRiBtVrgf01OZBv/nIRID4nIsG6xzBGxs7vK/YSvr2/SVF3xiYL55bVgwYJZp0+f/nOycuvXr38E+xczvOibjvTDLcDg4OBx7GfoD4ZwRPR8gUYbnCUBF3wuHMtPy8rKcmJjY33tleM7lqmpqdnPOo70RazAfNHapFrssaWOjo6Lzg43vj2zPT09febNm7ektLT0C1tk+IzvWIZlWcfR/oC5UWSjSCSUudbW1qvOEqmqqhrcvHnzOzdu3Lhii4ycBMuwLOs42t/ly5etmLUkEsJcbW3tbwq5ETbJ2CLBss70dfbsWSvmpZzsnJTzo6KiEhoaGoaVWlXkwE0mkyXk4+PjE6gUCUpMTMz86urq48gOkIjFWYHfEqf0EkkyJ06cyCMB/iah5OTkTCVIUDQajQf8wl+QNaune/2/c+eOS9olkb+YiYyM9FJ6NGhaHA2OBJV5e6uZI6LVaq2YTSTSz9zatWsfc8X84JzYtGlTJtXeauaorFy5cr7IXieRdubWrFnzpCtIJCYmWpZYKvNKksE/34q5g0RamQsNDV3sKhLy74ySZJYtW2bF3EIidZaFeOnSp5wl0t/fb4aYbJGwRYZlWcfR/mSYL8idRhOcxuTpdBoHBgZuY5Pk0LfrPqdRnE8080Fubm60Aru34QeRoLCMoyQoxCpItFnnCIVBB2kj5GHZj8iw/iDfWJHIaGBgYAyj4u5OghiBdZ00fqby9V0iMK8rSMoYMGZo392JECOwehAztHNipPFjxiGw0UnYuXPnInclQWzEKI0fCH1kL9JoCdAZjcZzAQEB77sjkZ6env3YjK22G6AT8i7DkSzI8KS7kSAmQWJQYL3HabwrjKVK4mQKX9w0g8EQ6i4k9u7dqyUm8TNNYJVsmpbMxL5EkuouxwopKSn+xcXFeeJYoRgkUmVYJyXirgc9ldBnbB302NxYiYJcGc6wgcLCwvysrCztTJgT+xYkzhCTvUPR//9hqBgZkxiZYjao1+vf4vLH4XalKbEP9iVIFIuRME2K9b92MOHCAEOdZS66MJAAAp5iiX0DBI4+ANfUiIhKvMLxOfRVSXaFA2ZQnpmZWefIFY68vLxVMNf4CVc4vuV3wiVXOCZUjkLygXTvpRoTL9Uw9NrS0tJVX1/fc/78+ettbW2WIPXy5cvnRkdHP6rT6QK0Wm0QNkXhGo0mUrjikvTvpZpPQODCFLA4bw6ya06/OnHNqXnGrjnZIyWNXzyjC0GPYIk0fvHM+h+XXzxjnOCcNH7x7KqT/VrSfwQYAOAcX9HTDttYAAAAAElFTkSuQmCC" ) 25 25, no-drop'
		};
		q(i, e);
		var f = {
				fontFamily: 'Georgia, Times, "Times New Roman", serif',
				position: "fixed",
				bottom: "0px",
				left: "0px",
				padding: "20px",
				color: "#fff",
				wordSpacing: "0.2px",
				webkitFontSmoothing: "antialiased",
				textShadow: "-1px 0px 1px rgba(0,0,0,0.4)"
			},
			g = document.createElement("figcaption");
		if (q(g, f), a) {
			var h = {
					margin: "0px",
					padding: "0px",
					fontWeight: "normal",
					fontSize: "40px",
					letterSpacing: "0.5px",
					lineHeight: "35px",
					textAlign: "left"
				},
				j = document.createElement("h1");
			q(j, h),
			j.innerHTML = a,
			g.appendChild(j)
		}
		if (c) {
			var l = {
					margin: "0px",
					padding: "0px",
					fontWeight: "normal",
					fontSize: "20px",
					letterSpacing: "0.1px",
					maxWidth: "500px",
					textAlign: "left",
					background: "none",
					marginTop: "5px"
				},
				m = document.createElement("h2");
			q(m, l),
			m.innerHTML = c,
			g.appendChild(m)
		}
		k.appendChild(g),
		C(),
		b.xCurr = b.xDest = window.innerWidth / 2,
		b.yCurr = b.yDest = window.innerHeight / 2,
		document.body.appendChild(k),
		setTimeout(function() {
			k.style.opacity = "1"
		}, 10)
	}
	function B() {
		y(),
		F(),
		v(),
		document.body.removeChild(k),
		o = !1,
		z(!1)
	}
	function C() {
		var a = r(h);
		i.width = a.w,
		i.height = a.h,
		c = a.fit,
		j = {
			w: i.width,
			h: i.height
		},
		l = {
			w: window.innerWidth,
			h: window.innerHeight
		},
		m = {
			x: l.w - j.w,
			y: l.h - j.h
		}
	}
	function D(a) {
		z(a, "intense--loading");
		var b = a.getAttribute("data-image") || a.src || a.href,
			c = a.getAttribute("data-title") || a.title,
			d = a.getAttribute("data-caption"),
			e = new Image;
		e.onload = function() {
			h = {
				w: e.width,
				h: e.height
			},
			i = this,
			A(c, d),
			x(),
			E(),
			w(),
			z(a, "intense--viewing")
		},
		e.src = b
	}
	function E() {
		k.addEventListener("mousemove", G, !1),
		k.addEventListener("touchmove", H, !1),
		window.addEventListener("resize", C, !1),
		window.addEventListener("keyup", I, !1),
		i.addEventListener("click", B, !1)
	}
	function F() {
		k.removeEventListener("mousemove", G, !1),
		k.removeEventListener("touchmove", H, !1),
		window.removeEventListener("resize", C, !1),
		window.removeEventListener("keyup", I, !1),
		i.removeEventListener("click", B, !1)
	}
	function G(a) {
		b.xDest = a.clientX,
		b.yDest = a.clientY
	}
	function H(a) {
		a.preventDefault(),
		b.xDest = a.touches[0].clientX,
		b.yDest = a.touches[0].clientY
	}
	function I(b) {
		b.preventDefault(),
		b.keyCode === a && B()
	}
	function J() {
		function e(a, b) {
			return d
				? (b - a) / b
				: a / b
		}
		if (b.xCurr += .05 * (b.xDest - b.xCurr), b.yCurr += .05 * (b.yDest - b.yCurr), c === !0) {
			if (g += b.xCurr - g, b.xCurr !== f) {
				var a = parseFloat(e(g, l.w));
				a = m.x * a,
				i.style.webkitTransform = "translate(" + a + "px, 0px)",
				i.style.MozTransform = "translate(" + a + "px, 0px)",
				i.style.msTransform = "translate(" + a + "px, 0px)",
				f = b.xCurr
			}
		} else if (c === !1 && (g += b.yCurr - g, b.yCurr !== f)) {
			var a = parseFloat(e(g, l.h));
			a = m.y * a,
			i.style.webkitTransform = "translate( 0px, " + a + "px)",
			i.style.MozTransform = "translate( 0px, " + a + "px)",
			i.style.msTransform = "translate( 0px, " + a + "px)",
			f = b.yCurr
		}
	}
	function K(a) {
		"invertInteractionDirection" in a && (d = a.invertInteractionDirection)
	}
	function L(a, b) {
		if (!a)
			throw "You need to pass an element!";
		b && K(b),
		s(a)
	}
	var e,
		f,
		h,
		i,
		k,
		n,
		a = 27,
		b = {
			xCurr: 0,
			yCurr: 0,
			xDest: 0,
			yDest: 0
		},
		c = !0,
		d = !1,
		g = 0,
		j = {
			w: 0,
			h: 0
		},
		l = {
			w: 0,
			h: 0
		},
		m = {
			x: 0,
			y: 0
		},
		o = !1;
	return p(L, {
		resize: C,
		start: u,
		stop: v,
		config: K
	})
}();
"undefined" != typeof module && module.exports && (module.exports = Intense);

/*
 * Lightcase - jQuery Plugin
 * The smart and flexible Lightbox Plugin.
 *
 * @author		Cornel Boppart <cornel@bopp-art.com>
 * @copyright	Author
 *
 * @version		2.3.4 (29/12/2015)
 */
!function(t) {
	"use strict";
	var e = {
		cache: {},
		support: {},
		objects: {},
		init: function(e) {
			return this.each(function() {
				t(this).unbind("click.lightcase").bind("click.lightcase", function(i) {
					i.preventDefault(),
					t(this).lightcase("start", e)
				})
			})
		},
		start: function(i) {
			e.origin = lightcase.origin = this,
			e.settings = lightcase.settings = t.extend(!0, {
				idPrefix: "lightcase-",
				classPrefix: "lightcase-",
				attrPrefix: "lc-",
				transition: "elastic",
				transitionIn: null,
				transitionOut: null,
				cssTransitions: !0,
				speedIn: 250,
				speedOut: 250,
				maxWidth: 800,
				maxHeight: 500,
				forceWidth: !1,
				forceHeight: !1,
				liveResize: !0,
				fullScreenModeForMobile: !0,
				mobileMatchExpression: /(iphone|ipod|ipad|android|blackberry|symbian)/,
				disableShrink: !1,
				shrinkFactor: .75,
				overlayOpacity: .9,
				slideshow: !1,
				timeout: 5e3,
				swipe: !0,
				useKeys: !0,
				useCategories: !0,
				navigateEndless: !0,
				closeOnOverlayClick: !0,
				title: null,
				caption: null,
				showTitle: !0,
				showCaption: !0,
				showSequenceInfo: !0,
				inline: {
					width: "auto",
					height: "auto"
				},
				ajax: {
					width: "auto",
					height: "auto",
					type: "get",
					dataType: "html",
					data: {}
				},
				iframe: {
					width: 800,
					height: 500,
					frameborder: 0
				},
				flash: {
					width: 400,
					height: 205,
					wmode: "transparent"
				},
				video: {
					width: 400,
					height: 225,
					poster: "",
					preload: "auto",
					controls: !0,
					autobuffer: !0,
					autoplay: !0,
					loop: !1
				},
				attr: "data-rel",
				href: null,
				type: null,
				typeMapping: {
					image: "jpg,jpeg,gif,png,bmp",
					flash: "swf",
					video: "mp4,mov,ogv,ogg,webm",
					iframe: "html,php",
					ajax: "json,txt",
					inline: "#"
				},
				errorMessage: function() {
					return '<p class="' + e.settings.classPrefix + 'error">' + e.settings.labels.errorMessage + "</p>"
				},
				labels: {
					errorMessage: "Source could not be found...",
					"sequenceInfo.of": " of ",
					close: "Close",
					"navigator.prev": "Prev",
					"navigator.next": "Next",
					"navigator.play": "Play",
					"navigator.pause": "Pause"
				},
				markup: function() {
					t("body").append(e.objects.overlay = t('<div id="' + e.settings.idPrefix + 'overlay"></div>'), e.objects.loading = t('<div id="' + e.settings.idPrefix + 'loading" class="' + e.settings.classPrefix + 'icon-spin"></div>'), e.objects["case"] = t('<div id="' + e.settings.idPrefix + 'case" aria-hidden="true" role="dialog"></div>')),
					e.objects["case"].after(e.objects.nav = t('<div id="' + e.settings.idPrefix + 'nav"></div>')),
					e.objects.nav.append(e.objects.close = t('<a href="#" class="' + e.settings.classPrefix + 'icon-close"><span>' + e.settings.labels.close + "</span></a>"), e.objects.prev = t('<a href="#" class="' + e.settings.classPrefix + 'icon-prev"><span>' + e.settings.labels["navigator.prev"] + "</span></a>").hide(), e.objects.next = t('<a href="#" class="' + e.settings.classPrefix + 'icon-next"><span>' + e.settings.labels["navigator.next"] + "</span></a>").hide(), e.objects.play = t('<a href="#" class="' + e.settings.classPrefix + 'icon-play"><span>' + e.settings.labels["navigator.play"] + "</span></a>").hide(), e.objects.pause = t('<a href="#" class="' + e.settings.classPrefix + 'icon-pause"><span>' + e.settings.labels["navigator.pause"] + "</span></a>").hide()),
					e.objects["case"].append(e.objects.content = t('<div id="' + e.settings.idPrefix + 'content"></div>'), e.objects.info = t('<div id="' + e.settings.idPrefix + 'info"></div>')),
					e.objects.content.append(e.objects.contentInner = t('<div class="' + e.settings.classPrefix + 'contentInner"></div>')),
					e.objects.info.append(e.objects.sequenceInfo = t('<div id="' + e.settings.idPrefix + 'sequenceInfo"></div>'), e.objects.title = t('<h4 id="' + e.settings.idPrefix + 'title"></h4>'), e.objects.caption = t('<p id="' + e.settings.idPrefix + 'caption"></p>'))
				},
				onInit: {},
				onStart: {},
				onFinish: {},
				onClose: {},
				onCleanup: {}
			}, i),
			e._callHooks(e.settings.onInit),
			e.objectData = e._setObjectData(this),
			e._cacheScrollPosition(),
			e._watchScrollInteraction(),
			e._addElements(),
			e._open(),
			e.dimensions = e.getViewportDimensions()
		},
		get: function(t) {
			return e.objects[t]
		},
		getObjectData: function() {
			return e.objectData
		},
		_setObjectData: function(i) {
			var s = t(i),
				n = {
					title: e.settings.title || s.attr(e._prefixAttributeName("title")) || s.attr("title"),
					caption: e.settings.caption || s.attr(e._prefixAttributeName("caption")) || s.children("img").attr("alt"),
					url: e._determineUrl(),
					requestType: e.settings.ajax.type,
					requestData: e.settings.ajax.data,
					requestDataType: e.settings.ajax.dataType,
					rel: s.attr(e._determineAttributeSelector()),
					type: e.settings.type || e._verifyDataType(e._determineUrl()),
					isPartOfSequence: e._isPartOfSequence(s.attr(e.settings.attr), ":"),
					isPartOfSequenceWithSlideshow: e._isPartOfSequence(s.attr(e.settings.attr), ":slideshow"),
					currentIndex: t(e._determineAttributeSelector()).index(s),
					sequenceLength: t(e._determineAttributeSelector()).length
				};
			return n.sequenceInfo = n.currentIndex + 1 + e.settings.labels["sequenceInfo.of"] + n.sequenceLength,
			n.prevIndex = n.currentIndex - 1,
			n.nextIndex = n.currentIndex + 1,
			n
		},
		_prefixAttributeName: function(t) {
			return "data-" + e.settings.attrPrefix + t
		},
		_determineLinkTarget: function() {
			return e.settings.href || t(e.origin).attr(e._prefixAttributeName("href")) || t(e.origin).attr("href")
		},
		_determineAttributeSelector: function() {
			var i = t(e.origin),
				s = "";
			if ("undefined" != typeof e.cache.selector)
				s = e.cache.selector;
			else if (e.settings.useCategories === !0 && i.attr(e._prefixAttributeName("categories"))) {
				var n = i.attr(e._prefixAttributeName("categories")).split(" ");
				t.each(n, function(t, i) {
					t > 0 && (s += ","),
					s += "[" + e._prefixAttributeName("categories") + '~="' + i + '"]'
				})
			} else
				s = "[" + e.settings.attr + '="' + i.attr(e.settings.attr) + '"]';
			return e.cache.selector = s,
			s
		},
		_determineUrl: function() {
			var i,
				s = e._verifyDataUrl(e._determineLinkTarget()),
				n = 0,
				a = 0;
			return t.each(s, function(t, s) {
				e._devicePixelRatio() >= s.density && s.density >= a && e._matchMedia()("screen and (min-width:" + s.width + "px)") && s.width >= n && (n = s.width, a = s.density, i = s.url)
			}),
			i
		},
		_normalizeUrl: function(t) {
			var e = /^\d+$/;
			return t.split(",").map(function(t) {
				var i = {
					width: 0,
					density: 0
				};
				return t.trim().split(/\s+/).forEach(function(t, s) {
					if (0 === s)
						return i.url = t;
					var n = t.substring(0, t.length - 1),
						a = t[t.length - 1],
						o = parseInt(n, 10),
						c = parseFloat(n);
					"w" === a && e.test(n)
						? i.width = o
						: "h" === a && e.test(n)
							? i.height = o
							: "x" !== a || isNaN(c) || (i.density = c)
				}),
				i
			})
		},
		_isPartOfSequence: function(i, s) {
			var n = t("[" + e.settings.attr + '="' + i + '"]'),
				a = new RegExp(s);
			return a.test(i) && n.length > 1
		},
		isSlideshowEnabled: function() {
			return e.objectData.isPartOfSequence && (e.settings.slideshow === !0 || e.objectData.isPartOfSequenceWithSlideshow === !0)
		},
		_loadContent: function() {
			e.cache.originalObject && e._restoreObject(),
			e._createObject()
		},
		_createObject: function() {
			var i;
			switch (e.objectData.type) {
				case "image":
					i = t(new Image),
					i.attr({src: e.objectData.url, alt: e.objectData.title});
					break;
				case "inline":
					i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>'),
					i.html(e._cloneObject(t(e.objectData.url))),
					t.each(e.settings.inline, function(t, s) {
						i.attr(e._prefixAttributeName(t), s)
					});
					break;
				case "ajax":
					i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>'),
					t.each(e.settings.ajax, function(t, s) {
						"data" !== t && i.attr(e._prefixAttributeName(t), s)
					});
					break;
				case "flash":
					i = t('<embed src="' + e.objectData.url + '" type="application/x-shockwave-flash"></embed>'),
					t.each(e.settings.flash, function(t, e) {
						i.attr(t, e)
					});
					break;
				case "video":
					i = t("<video></video>"),
					i.attr("src", e.objectData.url),
					t.each(e.settings.video, function(t, e) {
						i.attr(t, e)
					});
					break;
				default:
					i = t("<iframe></iframe>"),
					i.attr({src: e.objectData.url}),
					t.each(e.settings.iframe, function(t, e) {
						i.attr(t, e)
					})
			}
			e._addObject(i),
			e._loadObject(i)
		},
		_addObject: function(t) {
			e.objects.contentInner.html(t),
			e._loading("start"),
			e._callHooks(e.settings.onStart),
			e.settings.showSequenceInfo === !0 && e.objectData.isPartOfSequence
				? (e.objects.sequenceInfo.html(e.objectData.sequenceInfo), e.objects.sequenceInfo.show())
				: (e.objects.sequenceInfo.empty(), e.objects.sequenceInfo.hide()),
			e.settings.showTitle === !0 && void 0 !== e.objectData.title && "" !== e.objectData.title
				? (e.objects.title.html(e.objectData.title), e.objects.title.show())
				: (e.objects.title.empty(), e.objects.title.hide()),
			e.settings.showCaption === !0 && void 0 !== e.objectData.caption && "" !== e.objectData.caption
				? (e.objects.caption.html(e.objectData.caption), e.objects.caption.show())
				: (e.objects.caption.empty(), e.objects.caption.hide())
		},
		_loadObject: function(i) {
			switch (e.objectData.type) {
				case "inline":
					t(e.objectData.url)
						? e._showContent(i)
						: e.error();
					break;
				case "ajax":
					t.ajax(t.extend({}, e.settings.ajax, {
						url: e.objectData.url,
						type: e.objectData.requestType,
						dataType: e.objectData.requestDataType,
						data: e.objectData.requestData,
						success: function(t, s, n) {
							"json" === e.objectData.requestDataType
								? e.objectData.data = t
								: i.html(t),
							e._showContent(i)
						},
						error: function(t, i, s) {
							e.error()
						}
					}));
					break;
				case "flash":
					e._showContent(i);
					break;
				case "video":
					"function" == typeof i.get(0).canPlayType || 0 === e.objects["case"].find("video").length
						? e._showContent(i)
						: e.error();
					break;
				default:
					e.objectData.url
						? (i.load(function() {
							e._showContent(i)
						}), i.error(function() {
							e.error()
						}))
						: e.error()
			}
		},
		error: function() {
			e.objectData.type = "error";
			var i = t('<div class="' + e.settings.classPrefix + 'inlineWrap"></div>');
			i.html(e.settings.errorMessage),
			e.objects.contentInner.html(i),
			e._showContent(e.objects.contentInner)
		},
		_calculateDimensions: function(t) {
			e._cleanupDimensions();
			var i = {
				objectWidth: t.attr("width")
					? t.attr("width")
					: t.attr(e._prefixAttributeName("width")),
				objectHeight: t.attr("height")
					? t.attr("height")
					: t.attr(e._prefixAttributeName("height"))
			};
			if (!e.settings.disableShrink)
				switch (i.maxWidth = parseInt(e.dimensions.windowWidth * e.settings.shrinkFactor), i.maxHeight = parseInt(e.dimensions.windowHeight * e.settings.shrinkFactor), i.maxWidth > e.settings.maxWidth && (i.maxWidth = e.settings.maxWidth), i.maxHeight > e.settings.maxHeight && (i.maxHeight = e.settings.maxHeight), i.differenceWidthAsPercent = parseInt(100 / i.maxWidth * i.objectWidth), i.differenceHeightAsPercent = parseInt(100 / i.maxHeight * i.objectHeight), e.objectData.type) {
					case "image":
					case "flash":
					case "video":
						i.differenceWidthAsPercent > 100 && i.differenceWidthAsPercent > i.differenceHeightAsPercent && (i.objectWidth = i.maxWidth, i.objectHeight = parseInt(i.objectHeight / i.differenceWidthAsPercent * 100)),
						i.differenceHeightAsPercent > 100 && i.differenceHeightAsPercent > i.differenceWidthAsPercent && (i.objectWidth = parseInt(i.objectWidth / i.differenceHeightAsPercent * 100), i.objectHeight = i.maxHeight),
						i.differenceHeightAsPercent > 100 && i.differenceWidthAsPercent < i.differenceHeightAsPercent && (i.objectWidth = parseInt(i.maxWidth / i.differenceHeightAsPercent * i.differenceWidthAsPercent), i.objectHeight = i.maxHeight);
						break;
					case "error":
						!isNaN(i.objectWidth) && i.objectWidth > i.maxWidth && (i.objectWidth = i.maxWidth);
						break;
					default:
						(isNaN(i.objectWidth) || i.objectWidth > i.maxWidth) && !e.settings.forceWidth && (i.objectWidth = i.maxWidth),
						(isNaN(i.objectHeight) && "auto" !== i.objectHeight || i.objectHeight > i.maxHeight) && !e.settings.forceHeight && (i.objectHeight = i.maxHeight)
				}
			e.settings.forceWidth
				? i.maxWidth = i.objectWidth
				: t.attr(e._prefixAttributeName("max-width")) && (i.maxWidth = t.attr(e._prefixAttributeName("max-width"))),
			e.settings.forceHeight
				? i.maxHeight = i.objectHeight
				: t.attr(e._prefixAttributeName("max-height")) && (i.maxHeight = t.attr(e._prefixAttributeName("max-height"))),
			e._adjustDimensions(t, i)
		},
		_adjustDimensions: function(t, i) {
			t.css({width: i.objectWidth, height: i.objectHeight, "max-width": i.maxWidth, "max-height": i.maxHeight}),
			e.objects.contentInner.css({width: t.outerWidth(), height: t.outerHeight(), "max-width": "100%"}),
			e.objects["case"].css({width: e.objects.contentInner.outerWidth()}),
			e.objects["case"].css({
				"margin-top": parseInt(-(e.objects["case"].outerHeight() / 2)),
				"margin-left": parseInt(-(e.objects["case"].outerWidth() / 2))
			})
		},
		_loading: function(t) {
			"start" === t
				? (e.objects["case"].addClass(e.settings.classPrefix + "loading"), e.objects.loading.show())
				: "end" === t && (e.objects["case"].removeClass(e.settings.classPrefix + "loading"), e.objects.loading.hide())
		},
		getViewportDimensions: function() {
			return {windowWidth: t(window).innerWidth(), windowHeight: t(window).innerHeight()}
		},
		_verifyDataUrl: function(t) {
			return t && void 0 !== t && "" !== t
				? (t.indexOf("#") > -1 && (t = t.split("#"), t = "#" + t[t.length - 1]), e._normalizeUrl(t.toString()))
				: !1
		},
		_verifyDataType: function(t) {
			var i = e.settings.typeMapping;
			if (!t)
				return !1;
			for (var s in i)
				if (i.hasOwnProperty(s))
					for (var n = i[s].split(","), a = 0; a < n.length; a++) {
						var o = n[a].toLowerCase(),
							c = new RegExp(".(" + o + ")$", "i"),
							r = t.toLowerCase().split("?")[0].substr(-5);
						if (c.test(r) === !0 || "inline" === s && t.indexOf(o) > -1)
							return s
					}
				return "iframe"
		},
		_addElements: function() {
			"undefined" != typeof e.objects["case"] && t("#" + e.objects["case"].attr("id")).length || e.settings.markup()
		},
		_showContent: function(t) {
			switch (e.objects["case"].attr(e._prefixAttributeName("type"), e.objectData.type), e.cache.object = t, e._calculateDimensions(t), e._callHooks(e.settings.onFinish), e.settings.transitionIn) {
				case "scrollTop":
				case "scrollRight":
				case "scrollBottom":
				case "scrollLeft":
				case "scrollHorizontal":
				case "scrollVertical":
					e.transition.scroll(e.objects["case"], "in", e.settings.speedIn),
					e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn);
					break;
				case "elastic":
					e.objects["case"].css("opacity") < 1 && (e.transition.zoom(e.objects["case"], "in", e.settings.speedIn), e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn));
				case "fade":
				case "fadeInline":
					e.transition.fade(e.objects["case"], "in", e.settings.speedIn),
					e.transition.fade(e.objects.contentInner, "in", e.settings.speedIn);
					break;
				default:
					e.transition.fade(e.objects["case"], "in", 0)
			}
			e._loading("end"),
			e.isBusy = !1
		},
		_processContent: function() {
			switch (e.isBusy = !0, e.settings.transitionOut) {
				case "scrollTop":
				case "scrollRight":
				case "scrollBottom":
				case "scrollLeft":
				case "scrollVertical":
				case "scrollHorizontal":
					e.objects["case"].is(":hidden")
						? (e.transition.fade(e.objects["case"], "out", 0, 0, function() {
							e._loadContent()
						}), e.transition.fade(e.objects.contentInner, "out", 0))
						: e.transition.scroll(e.objects["case"], "out", e.settings.speedOut, function() {
							e._loadContent()
						});
					break;
				case "fade":
					e.objects["case"].is(":hidden")
						? e.transition.fade(e.objects["case"], "out", 0, 0, function() {
							e._loadContent()
						})
						: e.transition.fade(e.objects["case"], "out", e.settings.speedOut, 0, function() {
							e._loadContent()
						});
					break;
				case "fadeInline":
				case "elastic":
					e.objects["case"].is(":hidden")
						? e.transition.fade(e.objects["case"], "out", 0, 0, function() {
							e._loadContent()
						})
						: e.transition.fade(e.objects.contentInner, "out", e.settings.speedOut, 0, function() {
							e._loadContent()
						});
					break;
				default:
					e.transition.fade(e.objects["case"], "out", 0, 0, function() {
						e._loadContent()
					})
			}
		},
		_handleEvents: function() {
			e._unbindEvents(),
			e.objects.nav.children().not(e.objects.close).hide(),
			e.isSlideshowEnabled() && (e.objects.nav.hasClass(e.settings.classPrefix + "paused")
				? e._stopTimeout()
				: e._startTimeout()),
			e.settings.liveResize && e._watchResizeInteraction(),
			e.objects.close.click(function(t) {
				t.preventDefault(),
				e.close()
			}),
			e.settings.closeOnOverlayClick === !0 && e.objects.overlay.css("cursor", "pointer").click(function(t) {
				t.preventDefault(),
				e.close()
			}),
			e.settings.useKeys === !0 && e._addKeyEvents(),
			e.objectData.isPartOfSequence && (e.objects.nav.attr(e._prefixAttributeName("ispartofsequence"), !0), e.objects.nav.data("items", e._setNavigation()), e.objects.prev.click(function(t) {
				t.preventDefault(),
				e.settings.navigateEndless !== !0 && e.item.isFirst() || (e.objects.prev.unbind("click"), e.cache.action = "prev", e.objects.nav.data("items").prev.click(), e.isSlideshowEnabled() && e._stopTimeout())
			}), e.objects.next.click(function(t) {
				t.preventDefault(),
				e.settings.navigateEndless !== !0 && e.item.isLast() || (e.objects.next.unbind("click"), e.cache.action = "next", e.objects.nav.data("items").next.click(), e.isSlideshowEnabled() && e._stopTimeout())
			}), e.isSlideshowEnabled() && (e.objects.play.click(function(t) {
				t.preventDefault(),
				e._startTimeout()
			}), e.objects.pause.click(function(t) {
				t.preventDefault(),
				e._stopTimeout()
			})), e.settings.swipe === !0 && (t.isPlainObject(t.event.special.swipeleft) && e.objects["case"].on("swipeleft", function(t) {
				t.preventDefault(),
				e.objects.next.click(),
				e.isSlideshowEnabled() && e._stopTimeout()
			}), t.isPlainObject(t.event.special.swiperight) && e.objects["case"].on("swiperight", function(t) {
				t.preventDefault(),
				e.objects.prev.click(),
				e.isSlideshowEnabled() && e._stopTimeout()
			})))
		},
		_addKeyEvents: function() {
			t(document).bind("keyup.lightcase", function(t) {
				if (!e.isBusy)
					switch (t.keyCode) {
						case 27:
							e.objects.close.click();
							break;
						case 37:
							e.objectData.isPartOfSequence && e.objects.prev.click();
							break;
						case 39:
							e.objectData.isPartOfSequence && e.objects.next.click()
					}
				})
		},
		_startTimeout: function() {
			e.objects.play.hide(),
			e.objects.pause.show(),
			e.cache.action = "next",
			e.objects.nav.removeClass(e.settings.classPrefix + "paused"),
			e.timeout = setTimeout(function() {
				e.objects.nav.data("items").next.click()
			}, e.settings.timeout)
		},
		_stopTimeout: function() {
			e.objects.play.show(),
			e.objects.pause.hide(),
			e.objects.nav.addClass(e.settings.classPrefix + "paused"),
			clearTimeout(e.timeout)
		},
		_setNavigation: function() {
			var i = t(e.cache.selector || e.settings.attr),
				s = e.objectData.sequenceLength - 1,
				n = {
					prev: i.eq(e.objectData.prevIndex),
					next: i.eq(e.objectData.nextIndex)
				};
			return e.objectData.currentIndex > 0
				? e.objects.prev.show()
				: n.prevItem = i.eq(s),
			e.objectData.nextIndex <= s
				? e.objects.next.show()
				: n.next = i.eq(0),
			e.settings.navigateEndless === !0 && (e.objects.prev.show(), e.objects.next.show()),
			n
		},
		item: {
			isFirst: function() {
				return 0 === e.objectData.currentIndex
			},
			isLast: function() {
				return e.objectData.currentIndex === e.objectData.sequenceLength - 1
			}
		},
		_cloneObject: function(t) {
			var i = t.clone(),
				s = t.attr("id");
			return t.is(":hidden")
				? (e._cacheObjectData(t), t.attr("id", e.settings.idPrefix + "temp-" + s).empty())
				: i.removeAttr("id"),
			i.show()
		},
		isMobileDevice: function() {
			var t = navigator.userAgent.toLowerCase(),
				i = t.match(e.settings.mobileMatchExpression);
			return i
				? !0
				: !1
		},
		isTransitionSupported: function() {
			var i = t("body").get(0),
				s = !1,
				n = {
					transition: "",
					WebkitTransition: "-webkit-",
					MozTransition: "-moz-",
					OTransition: "-o-",
					MsTransition: "-ms-"
				};
			for (var a in n)
				n.hasOwnProperty(a) && a in i.style && (e.support.transition = n[a], s = !0);
			return s
		},
		transition: {
			fade: function(t, i, s, n, a) {
				var o = "in" === i,
					c = {},
					r = t.css("opacity"),
					l = {},
					d = n
						? n
						: o
							? 1
							: 0;
				(e.isOpen || !o) && (c.opacity = r, l.opacity = d, t.css(c).show(), e.support.transitions
					? (l[e.support.transition + "transition"] = s + "ms ease", setTimeout(function() {
						t.css(l),
						setTimeout(function() {
							t.css(e.support.transition + "transition", ""),
							!a || !e.isOpen && o || a()
						}, s)
					}, 15))
					: (t.stop(), t.animate(l, s, a)))
			},
			scroll: function(t, i, s, n) {
				var a = "in" === i,
					o = a
						? e.settings.transitionIn
						: e.settings.transitionOut,
					c = "left",
					r = {},
					l = a
						? 0
						: 1,
					d = a
						? "-50%"
						: "50%",
					u = {},
					h = a
						? 1
						: 0,
					f = a
						? "50%"
						: "-50%";
				if (e.isOpen || !a) {
					switch (o) {
						case "scrollTop":
							c = "top";
							break;
						case "scrollRight":
							d = a
								? "150%"
								: "50%",
							f = a
								? "50%"
								: "150%";
							break;
						case "scrollBottom":
							c = "top",
							d = a
								? "150%"
								: "50%",
							f = a
								? "50%"
								: "150%";
							break;
						case "scrollHorizontal":
							d = a
								? "150%"
								: "50%",
							f = a
								? "50%"
								: "-50%";
							break;
						case "scrollVertical":
							c = "top",
							d = a
								? "-50%"
								: "50%",
							f = a
								? "50%"
								: "150%"
					}
					if ("prev" === e.cache.action)
						switch (o) {
							case "scrollHorizontal":
								d = a
									? "-50%"
									: "50%",
								f = a
									? "50%"
									: "150%";
								break;
							case "scrollVertical":
								d = a
									? "150%"
									: "50%",
								f = a
									? "50%"
									: "-50%"
						}
					r.opacity = l,
					r[c] = d,
					u.opacity = h,
					u[c] = f,
					t.css(r).show(),
					e.support.transitions
						? (u[e.support.transition + "transition"] = s + "ms ease", setTimeout(function() {
							t.css(u),
							setTimeout(function() {
								t.css(e.support.transition + "transition", ""),
								!n || !e.isOpen && a || n()
							}, s)
						}, 15))
						: (t.stop(), t.animate(u, s, n))
				}
			},
			zoom: function(t, i, s, n) {
				var a = "in" === i,
					o = {},
					c = t.css("opacity"),
					r = a
						? "scale(0.75)"
						: "scale(1)",
					l = {},
					d = a
						? 1
						: 0,
					u = a
						? "scale(1)"
						: "scale(0.75)";
				(e.isOpen || !a) && (o.opacity = c, o[e.support.transition + "transform"] = r, l.opacity = d, t.css(o).show(), e.support.transitions
					? (l[e.support.transition + "transform"] = u, l[e.support.transition + "transition"] = s + "ms ease", setTimeout(function() {
						t.css(l),
						setTimeout(function() {
							t.css(e.support.transition + "transform", ""),
							t.css(e.support.transition + "transition", ""),
							!n || !e.isOpen && a || n()
						}, s)
					}, 15))
					: (t.stop(), t.animate(l, s, n)))
			}
		},
		_callHooks: function(i) {
			"object" == typeof i && t.each(i, function(t, i) {
				"function" == typeof i && i.call(e.origin)
			})
		},
		_cacheObjectData: function(i) {
			t.data(i, "cache", {
				id: i.attr("id"),
				content: i.html()
			}),
			e.cache.originalObject = i
		},
		_restoreObject: function() {
			var i = t('[id^="' + e.settings.idPrefix + 'temp-"]');
			i.attr("id", t.data(e.cache.originalObject, "cache").id),
			i.html(t.data(e.cache.originalObject, "cache").content)
		},
		resize: function() {
			e.isOpen && (e.isSlideshowEnabled() && e._stopTimeout(), e.dimensions = e.getViewportDimensions(), e._calculateDimensions(e.cache.object))
		},
		_cacheScrollPosition: function() {
			var i = t(window),
				s = t(document),
				n = {
					top: i.scrollTop(),
					left: i.scrollLeft()
				};
			e.cache.scrollPosition = e.cache.scrollPosition || {},
			s.width() > i.width() && (e.cache.scrollPosition.left = n.left),
			s.height() > i.height() && (e.cache.scrollPosition.top = n.top)
		},
		_watchResizeInteraction: function() {
			t(window).resize(e.resize)
		},
		_unwatchResizeInteraction: function() {
			t(window).off("resize", e.resize)
		},
		_watchScrollInteraction: function() {
			t(window).scroll(e._cacheScrollPosition)
		},
		_unwatchScrollInteraction: function() {
			t(window).off("scroll", e._cacheScrollPosition)
		},
		_restoreScrollPosition: function() {
			t(window).scrollTop(parseInt(e.cache.scrollPosition.top)).scrollLeft(parseInt(e.cache.scrollPosition.left)).resize()
		},
		_switchToFullScreenMode: function() {
			e.settings.shrinkFactor = 1,
			e.settings.overlayOpacity = 1,
			t("html").addClass(e.settings.classPrefix + "fullScreenMode")
		},
		_open: function() {
			switch (e.isOpen = !0, e.support.transitions = e.settings.cssTransitions
				? e.isTransitionSupported()
				: !1, e.support.mobileDevice = e.isMobileDevice(), e.support.mobileDevice && (t("html").addClass(e.settings.classPrefix + "isMobileDevice"), e.settings.fullScreenModeForMobile && e._switchToFullScreenMode()), e.settings.transitionIn || (e.settings.transitionIn = e.settings.transition), e.settings.transitionOut || (e.settings.transitionOut = e.settings.transition), e.settings.transitionIn) {
				case "fade":
				case "fadeInline":
				case "elastic":
				case "scrollTop":
				case "scrollRight":
				case "scrollBottom":
				case "scrollLeft":
				case "scrollVertical":
				case "scrollHorizontal":
					e.objects["case"].is(":hidden") && (e.objects.close.css("opacity", 0), e.objects.overlay.css("opacity", 0), e.objects["case"].css("opacity", 0), e.objects.contentInner.css("opacity", 0)),
					e.transition.fade(e.objects.overlay, "in", e.settings.speedIn, e.settings.overlayOpacity, function() {
						e.transition.fade(e.objects.close, "in", e.settings.speedIn),
						e._handleEvents(),
						e._processContent()
					});
					break;
				default:
					e.transition.fade(e.objects.overlay, "in", 0, e.settings.overlayOpacity, function() {
						e.transition.fade(e.objects.close, "in", 0),
						e._handleEvents(),
						e._processContent()
					})
			}
			t("html").addClass(e.settings.classPrefix + "open"),
			e.objects["case"].attr("aria-hidden", "false")
		},
		close: function() {
			switch (e.isOpen = !1, e.isSlideshowEnabled() && (e._stopTimeout(), e.objects.nav.removeClass(e.settings.classPrefix + "paused")), e.objects.loading.hide(), e._unbindEvents(), e._unwatchResizeInteraction(), e._unwatchScrollInteraction(), t("html").removeClass(e.settings.classPrefix + "open"), e.objects["case"].attr("aria-hidden", "true"), e.objects.nav.children().hide(), e._restoreScrollPosition(), e._callHooks(e.settings.onClose), e.settings.transitionOut) {
				case "fade":
				case "fadeInline":
				case "scrollTop":
				case "scrollRight":
				case "scrollBottom":
				case "scrollLeft":
				case "scrollHorizontal":
				case "scrollVertical":
					e.transition.fade(e.objects["case"], "out", e.settings.speedOut, 0, function() {
						e.transition.fade(e.objects.overlay, "out", e.settings.speedOut, 0, function() {
							e.cleanup()
						})
					});
					break;
				case "elastic":
					e.transition.zoom(e.objects["case"], "out", e.settings.speedOut, function() {
						e.transition.fade(e.objects.overlay, "out", e.settings.speedOut, 0, function() {
							e.cleanup()
						})
					});
					break;
				default:
					e.cleanup()
			}
		},
		_unbindEvents: function() {
			e.objects.overlay.unbind("click"),
			t(document).unbind("keyup.lightcase"),
			e.objects["case"].unbind("swipeleft").unbind("swiperight"),
			e.objects.prev.unbind("click"),
			e.objects.next.unbind("click"),
			e.objects.play.unbind("click"),
			e.objects.pause.unbind("click"),
			e.objects.close.unbind("click")
		},
		_cleanupDimensions: function() {
			var t = e.objects.contentInner.css("opacity");
			e.objects["case"].css({
				width: "",
				height: "",
				top: "",
				left: "",
				"margin-top": "",
				"margin-left": ""
			}),
			e.objects.contentInner.removeAttr("style").css("opacity", t),
			e.objects.contentInner.children().removeAttr("style")
		},
		cleanup: function() {
			e._cleanupDimensions(),
			e.objects.loading.hide(),
			e.objects.overlay.hide(),
			e.objects["case"].hide(),
			e.objects.prev.hide(),
			e.objects.next.hide(),
			e.objects.play.hide(),
			e.objects.pause.hide(),
			e.objects["case"].removeAttr(e._prefixAttributeName("type")),
			e.objects.nav.removeAttr(e._prefixAttributeName("ispartofsequence")),
			e.objects.contentInner.empty().hide(),
			e.objects.info.children().empty(),
			e.cache.originalObject && e._restoreObject(),
			e._callHooks(e.settings.onCleanup),
			e.cache = {}
		},
		_matchMedia: function() {
			return window.matchMedia || window.msMatchMedia
		},
		_devicePixelRatio: function() {
			return window.devicePixelRatio || 1
		},
		_isPublicMethod: function(t) {
			return "function" == typeof e[t] && "_" !== t.charAt(0)
		},
		_export: function() {
			window.lightcase = {},
			t.each(e, function(t) {
				e._isPublicMethod(t) && (lightcase[t] = e[t])
			})
		}
	};
	e._export(),
	t.fn.lightcase = function(i) {
		return e._isPublicMethod(i)
			? e[i].apply(this, Array.prototype.slice.call(arguments, 1))
			: "object" != typeof i && i
				? void t.error("Method " + i + " does not exist on jQuery.lightcase")
				: e.init.apply(this, arguments)
	}
}(jQuery);

/*jquery.mb.YTPlayer 08-01-2016
 _ jquery.mb.components
 _ email: matteo@open-lab.com
 _ Copyright (c) 2001-2016. Matteo Bicocchi (Pupunzi);
 _ blog: http://pupunzi.open-lab.com
 _ Open Lab s.r.l., Florence - Italy
 */
function onYouTubeIframeAPIReady() {
	ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
function uncamel(a) {
	return a.replace(/([A-Z])/g, function(a) {
		return "-" + a.toLowerCase()
	})
}
function setUnit(a, b) {
	return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/)
		? "" + a + b
		: a
}
function setFilter(a, b, c) {
	var d = uncamel(b),
		e = jQuery.browser.mozilla
			? ""
			: jQuery.CSS.sfx;
	a[e + "filter"] = a[e + "filter"] || "",
	c = setUnit(c > jQuery.CSS.filters[b].max
		? jQuery.CSS.filters[b].max
		: c, jQuery.CSS.filters[b].unit),
	a[e + "filter"] += d + "(" + c + ") ",
	delete a[b]
}
var ytp = ytp || {},
	getYTPVideoID = function(a) {
		var b,
			c;
		return a.indexOf("youtu.be") > 0
			? (b = a.substr(a.lastIndexOf("/") + 1, a.length), c = b.indexOf("?list=") > 0
				? b.substr(b.lastIndexOf("="), b.length)
				: null, b = c
				? b.substr(0, b.lastIndexOf("?"))
				: b)
			: a.indexOf("http") > -1
				? (b = a.match(/[\\?&]v=([^&#]*)/)[1],
				c = a.indexOf("list=") > 0
					? a.match(/[\\?&]list=([^&#]*)/)[1]
					: null)
				: (b = a.length > 15
					? null
					: a, c = b
					? null
					: a), {
			videoID: b,
			playlistID: c
		}
	};
!function(jQuery, ytp) {
	jQuery.mbYTPlayer = {
		name: "jquery.mb.YTPlayer",
		version: "2.9.10",
		build: "5797",
		author: "Matteo Bicocchi",
		apiKey: "",
		defaults: {
			containment: "body",
			ratio: "auto",
			videoURL: null,
			playlistURL: null,
			startAt: 0,
			stopAt: 0,
			autoPlay: !0,
			vol: 50,
			addRaster: !1,
			opacity: 1,
			quality: "default",
			mute: !1,
			loop: !0,
			showControls: !0,
			showAnnotations: !1,
			showYTLogo: !0,
			stopMovieOnBlur: !0,
			realfullscreen: !0,
			gaTrack: !0,
			optimizeDisplay: !0,
			onReady: function(a) {}
		},
		controls: {
			play: "P",
			pause: "p",
			mute: "M",
			unmute: "A",
			onlyYT: "O",
			showSite: "R",
			ytLogo: "Y"
		},
		locationProtocol: "https:",
		buildPlayer: function(options) {
			return this.each(function() {
				var YTPlayer = this,
					$YTPlayer = jQuery(YTPlayer);
				YTPlayer.loop = 0,
				YTPlayer.opt = {},
				YTPlayer.state = {},
				YTPlayer.filtersEnabled = !0,
				YTPlayer.filters = {
					grayscale: {
						value: 0,
						unit: "%"
					},
					hue_rotate: {
						value: 0,
						unit: "deg"
					},
					invert: {
						value: 0,
						unit: "%"
					},
					opacity: {
						value: 0,
						unit: "%"
					},
					saturate: {
						value: 0,
						unit: "%"
					},
					sepia: {
						value: 0,
						unit: "%"
					},
					brightness: {
						value: 0,
						unit: "%"
					},
					contrast: {
						value: 0,
						unit: "%"
					},
					blur: {
						value: 0,
						unit: "px"
					}
				},
				$YTPlayer.addClass("mb_YTPlayer");
				var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property")
					? eval("(" + $YTPlayer.data("property") + ")")
					: $YTPlayer.data("property");
				"undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol
					? property.vol = 1
					: property.vol),
				jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property),
				YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options)),
				"true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999),
				YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
				var isIframe = function() {
					var a = !1;
					try {
						self.location.href != top.location.href && (a = !0)
					} catch (b) {
						a = !0
					}
					return a
				};
				YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()),
				YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1),
				$YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
				var playerID = "mbYTP_" + YTPlayer.id;
				YTPlayer.isAlone = !1,
				YTPlayer.hasFocus = !0;
				var videoID = this.opt.videoURL
						? getYTPVideoID(this.opt.videoURL).videoID
						: $YTPlayer.attr("href")
							? getYTPVideoID($YTPlayer.attr("href")).videoID
							: !1,
					playlistID = this.opt.videoURL
						? getYTPVideoID(this.opt.videoURL).playlistID
						: $YTPlayer.attr("href")
							? getYTPVideoID($YTPlayer.attr("href")).playlistID
							: !1;
				YTPlayer.videoID = videoID,
				YTPlayer.playlistID = playlistID,
				YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations
					? "0"
					: "3";
				var playerVars = {
					autoplay: 0,
					modestbranding: 1,
					controls: 0,
					showinfo: 0,
					rel: 0,
					enablejsapi: 1,
					version: 3,
					playerapiid: playerID,
					origin: "*",
					allowfullscreen: !0,
					wmode: "transparent",
					iv_load_policy: YTPlayer.opt.showAnnotations
				};
				document.createElement("video").canPlayType && jQuery.extend(playerVars, {html5: 1}),
				jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
				var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"),
					overlay = jQuery("<div/>").css({position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}).addClass("YTPOverlay");
				if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment
					? this
					: YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
					var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
					if (YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, isPlayer
						? YTPlayer.isPlayer = !0
						: $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile)
						return void $YTPlayer.remove();
					var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
					if (wrapper.css({
						position: "absolute",
						zIndex: 0,
						minWidth: "100%",
						minHeight: "100%",
						left: 0,
						top: 0,
						overflow: "hidden",
						opacity: 0
					}), playerBox.css({
						position: "absolute",
						zIndex: 0,
						width: "100%",
						height: "100%",
						top: 0,
						left: 0,
						overflow: "hidden"
					}), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function() {
						"static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
					}), YTPlayer.isBackground
						? (jQuery("body").css({boxSizing: "border-box"}), wrapper.css({position: "fixed", top: 0, left: 0, zIndex: 0}), $YTPlayer.hide())
						: "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({position: "relative"}), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({opacity: 1}), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function() {
						YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
					}).on("mouseleave", function() {
						YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
					}), ytp.YTAPIReady)
						setTimeout(function() {
							jQuery(document).trigger("YTAPIReady")
						}, 100);
					else {
						jQuery("#YTAPI").remove();
						var tag = jQuery("<script></script>").attr({
							src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
							id: "YTAPI"
						});
						jQuery("head").prepend(tag)
					}
					jQuery(document).on("YTAPIReady", function() {
						YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay
							? YTPlayer.isBackground
								? !0
								: !1
							: YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol
							? YTPlayer.opt.vol
							: 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function() {
							if (!YTPlayer.isInit) {
								if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
									if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
										YTPlayer.opt.containment.css({maxWidth: "100%"});
										var h = .6 * YTPlayer.opt.containment.outerWidth();
										YTPlayer.opt.containment.css({maxHeight: h})
									}
									return void new YT.Player(playerID, {
										videoId: YTPlayer.videoID.toString(),
										height: "100%",
										width: "100%",
										events: {
											onReady: function(a) {
												YTPlayer.player = a.target,
												playerBox.css({opacity: 1}),
												YTPlayer.wrapper.css({opacity: 1})
											}
										}
									})
								}
								new YT.Player(playerID, {
									videoId: YTPlayer.videoID.toString(),
									playerVars: playerVars,
									events: {
										onReady: function(a) {
											YTPlayer.player = a.target,
											YTPlayer.isReady || (YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay
												? !1
												: !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).off("resize.YTP").on("resize.YTP", function() {
												$YTPlayer.optimizeDisplay()
											}), jQuery.mbYTPlayer.checkForState(YTPlayer))
										},
										onStateChange: function(event) {
											if ("function" == typeof event.target.getPlayerState) {
												var state = event.target.getPlayerState();
												if (YTPlayer.state != state) {
													if (YTPlayer.preventTrigger)
														return void(YTPlayer.preventTrigger = !1);
													YTPlayer.state = state;
													var eventType;
													switch (state) {
														case - 1:
															eventType = "YTPUnstarted";
															break;
														case 0:
															eventType = "YTPEnd";
															break;
														case 1:
															eventType = "YTPPlay",
															YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause),
															"undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push([
																"_trackEvent", "YTPlayer", "Play", YTPlayer.hasData
																	? YTPlayer.videoData.title
																	: YTPlayer.videoID.toString()
															]),
															"undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData
																? YTPlayer.videoData.title
																: YTPlayer.videoID.toString());
															break;
														case 2:
															eventType = "YTPPause",
															YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
															break;
														case 3:
															YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality),
															eventType = "YTPBuffering",
															YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
															break;
														case 5:
															eventType = "YTPCued"
													}
													var YTPEvent = jQuery.Event(eventType);
													YTPEvent.time = YTPlayer.player.time,
													YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
												}
											}
										},
										onPlaybackQualityChange: function(a) {
											var b = a.target.getPlaybackQuality(),
												c = jQuery.Event("YTPQualityChange");
											c.quality = b,
											jQuery(YTPlayer).trigger(c)
										},
										onError: function(a) {
											150 == a.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()),
											2 == a.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(),
											"function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, a)
										}
									}
								})
							}
						}))
					})
				}
			})
		},
		getDataFromAPI: function(a) {
			if (a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID), jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
				if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
					var b = a.videoData.thumb_max || a.videoData.thumb_high || a.videoData.thumb_medium;
					a.opt.containment.css({
						background: "rgba(0,0,0,0.5) url(" + b + ") center center",
						backgroundSize: "cover"
					}),
					a.opt.backgroundUrl = b
				}
			}), a.videoData)
				setTimeout(function() {
					a.opt.ratio = "auto" == a.opt.ratio
						? "16/9"
						: a.opt.ratio,
					a.dataReceived = !0,
					jQuery(a).trigger("YTPChanged");
					var b = jQuery.Event("YTPData");
					b.prop = {};
					for (var c in a.videoData)
						b.prop[c] = a.videoData[c];
					jQuery(a).trigger(b)
				}, 500),
				a.hasData = !0;
			else if (jQuery.mbYTPlayer.apiKey)
				jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(b) {
					function c(b) {
						a.videoData = {},
						a.videoData.id = a.videoID,
						a.videoData.channelTitle = b.channelTitle,
						a.videoData.title = b.title,
						a.videoData.description = b.description.length < 400
							? b.description
							: b.description.substring(0, 400) + " ...",
						a.videoData.aspectratio = "auto" == a.opt.ratio
							? "16/9"
							: a.opt.ratio,
						a.opt.ratio = a.videoData.aspectratio,
						a.videoData.thumb_max = b.thumbnails.maxres
							? b.thumbnails.maxres.url
							: null,
						a.videoData.thumb_high = b.thumbnails.high
							? b.thumbnails.high.url
							: null,
						a.videoData.thumb_medium = b.thumbnails.medium
							? b.thumbnails.medium.url
							: null,
						jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData)
					}
					a.dataReceived = !0,
					jQuery(a).trigger("YTPChanged"),
					c(b.items[0].snippet),
					a.hasData = !0;
					var d = jQuery.Event("YTPData");
					d.prop = {};
					for (var e in a.videoData)
						d.prop[e] = a.videoData[e];
					jQuery(a).trigger(d)
				});
			else {
				if (setTimeout(function() {
					jQuery(a).trigger("YTPChanged")
				}, 50), a.isPlayer && !a.opt.autoPlay) {
					var b = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + a.videoID + "/hqdefault.jpg";
					a.opt.containment.css({
						background: "rgba(0,0,0,0.5) url(" + b + ") center center",
						backgroundSize: "cover"
					}),
					a.opt.backgroundUrl = b
				}
				a.videoData = null,
				a.opt.ratio = "auto" == a.opt.ratio
					? "16/9"
					: a.opt.ratio
			}
			a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(a).append(a.loading), a.loading.fadeIn())
		},
		removeStoredData: function() {
			jQuery.mbStorage.remove()
		},
		getVideoData: function() {
			var a = this.get(0);
			return a.videoData
		},
		getVideoID: function() {
			var a = this.get(0);
			return a.videoID || !1
		},
		setVideoQuality: function(a) {
			var b = this.get(0);
			b.player.setPlaybackQuality(a)
		},
		playlist: function(a, b, c) {
			var d = this,
				e = d.get(0);
			return e.isPlayList = !0,
			b && (a = jQuery.shuffle(a)),
			e.videoID || (e.videos = a, e.videoCounter = 0, e.videoLength = a.length, jQuery(e).data("property", a[0]), jQuery(e).mb_YTPlayer()),
			"function" == typeof c && jQuery(e).one("YTPChanged", function() {
				c(e)
			}),
			jQuery(e).on("YTPEnd", function() {
				jQuery(e).playNext()
			}),
			d
		},
		playNext: function() {
			var a = this.get(0);
			return a.videoCounter++,
			a.videoCounter >= a.videoLength && (a.videoCounter = 0),
			jQuery(a).changeMovie(a.videos[a.videoCounter]),
			this
		},
		playPrev: function() {
			var a = this.get(0);
			return a.videoCounter--,
			a.videoCounter < 0 && (a.videoCounter = a.videoLength - 1),
			jQuery(a).changeMovie(a.videos[a.videoCounter]),
			this
		},
		changeMovie: function(a) {
			var b = this.get(0);
			b.opt.startAt = 0,
			b.opt.stopAt = 0,
			b.opt.mute = !0,
			b.hasData = !1,
			b.hasChanged = !0,
			b.player.loopTime = void 0,
			a && jQuery.extend(b.opt, b.defaultOpt, a),
			b.videoID = getYTPVideoID(b.opt.videoURL).videoID,
			"true" == b.opt.loop && (b.opt.loop = 9999),
			jQuery(b.playerEl).CSSAnimate({
				opacity: 0
			}, 200, function() {
				var a = jQuery.Event("YTPChangeMovie");
				return a.time = b.player.time,
				a.videoId = b.videoID,
				jQuery(b).trigger(a),
				jQuery(b).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + b.videoID), 1, b.opt.quality),
				jQuery(b).optimizeDisplay(),
				jQuery.mbYTPlayer.checkForState(b),
				jQuery.mbYTPlayer.getDataFromAPI(b),
				this
			})
		},
		getPlayer: function() {
			return jQuery(this).get(0).player
		},
		playerDestroy: function() {
			var a = this.get(0);
			ytp.YTAPIReady = !1,
			ytp.backgroundIsInited = !1,
			a.isInit = !1,
			a.videoID = null;
			var b = a.wrapper;
			return b.remove(),
			jQuery("#controlBar_" + a.id).remove(),
			clearInterval(a.checkForStartAt),
			clearInterval(a.getState),
			this
		},
		fullscreen: function(real) {
			function hideMouse() {
				YTPlayer.overlay.css({cursor: "none"})
			}
			function RunPrefixMethod(a, b) {
				for (var c, d, e = [
					"webkit", "moz", "ms", "o", ""
				], f = 0; f < e.length && !a[c];) {
					if (c = b, "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)), c = e[f] + c, d = typeof a[c], "undefined" != d)
						return e = [e[f]],
						"function" == d
							? a[c]()
							: a[c];
					f++
				}
			}
			function launchFullscreen(a) {
				RunPrefixMethod(a, "RequestFullScreen")
			}
			function cancelFullscreen() {
				(RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
			}
			var YTPlayer = this.get(0);
			"undefined" == typeof real && (real = YTPlayer.opt.realfullscreen),
			real = eval(real);
			var controls = jQuery("#controlBar_" + YTPlayer.id),
				fullScreenBtn = controls.find(".mb_OnlyYT"),
				videoWrapper = YTPlayer.isSelf
					? YTPlayer.opt.containment
					: YTPlayer.wrapper;
			if (real) {
				var fullscreenchange = jQuery.browser.mozilla
					? "mozfullscreenchange"
					: jQuery.browser.webkit
						? "webkitfullscreenchange"
						: "fullscreenchange";
				jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
					var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
					a
						? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart"))
						: (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({
							opacity: YTPlayer.opt.opacity
						}, 500), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground
							? jQuery("body").after(controls)
							: YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
				})
			}
			return YTPlayer.isAlone
				? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({cursor: "auto"}), real
					? cancelFullscreen()
					: (videoWrapper.CSSAnimate({
						opacity: YTPlayer.opt.opacity
					}, 500), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1)
				: (jQuery(document).on("mousemove.YTPlayer", function(a) {
					YTPlayer.overlay.css({cursor: "auto"}),
					clearTimeout(YTPlayer.hideCursor),
					jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
				}), hideMouse(), real
					? (videoWrapper.css({opacity: 0}), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function() {
						videoWrapper.CSSAnimate({
							opacity: 1
						}, 1e3),
						YTPlayer.wrapper.append(controls),
						jQuery(YTPlayer).optimizeDisplay(),
						YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
					}, 500))
					: videoWrapper.css({zIndex: 1e4}).CSSAnimate({
						opacity: 1
					}, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0),
			this
		},
		toggleLoops: function() {
			var a = this.get(0),
				b = a.opt;
			return 1 == b.loop
				? b.loop = 0
				: (b.startAt
					? a.player.seekTo(b.startAt)
					: a.player.playVideo(), b.loop = 1),
			this
		},
		play: function() {
			var a = this.get(0);
			if (a.isReady)
				return a.player.playVideo(),
				a.wrapper.CSSAnimate({
					opacity: a.isAlone
						? 1
						: a.opt.opacity
				}, 2e3),
				jQuery(a.playerEl).CSSAnimate({
					opacity: 1
				}, 1e3),
				jQuery(a).css("background-image", "none"),
				this
		},
		togglePlay: function(a) {
			var b = this.get(0);
			return 1 == b.state
				? this.YTPPause()
				: this.YTPPlay(),
			"function" == typeof a && a(b.state),
			this
		},
		stop: function() {
			var a = this.get(0),
				b = jQuery("#controlBar_" + a.id),
				c = b.find(".mb_YTPPlaypause");
			return c.html(jQuery.mbYTPlayer.controls.play),
			a.player.stopVideo(),
			this
		},
		pause: function() {
			var a = this.get(0);
			return a.player.pauseVideo(),
			this
		},
		seekTo: function(a) {
			var b = this.get(0);
			return b.player.seekTo(a, !0),
			this
		},
		setVolume: function(a) {
			var b = this.get(0);
			return a || b.opt.vol || 0 != b.player.getVolume()
				? !a && b.player.getVolume() > 0 || a && b.opt.vol == a
					? b.isMute
						? jQuery(b).YTPUnmute()
						: jQuery(b).YTPMute()
					: (b.opt.vol = a, b.player.setVolume(b.opt.vol), b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a))
				: jQuery(b).YTPUnmute(),
			this
		},
		mute: function() {
			var a = this.get(0);
			if (!a.isMute) {
				a.player.mute(),
				a.isMute = !0,
				a.player.setVolume(0),
				a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
				var b = jQuery("#controlBar_" + a.id),
					c = b.find(".mb_YTPMuteUnmute");
				c.html(jQuery.mbYTPlayer.controls.unmute),
				jQuery(a).addClass("isMuted"),
				a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
				var d = jQuery.Event("YTPMuted");
				return d.time = a.player.time,
				a.canTrigger && jQuery(a).trigger(d),
				this
			}
		},
		unmute: function() {
			var a = this.get(0);
			if (a.isMute) {
				a.player.unMute(),
				a.isMute = !1,
				a.player.setVolume(a.opt.vol),
				a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10
					? a.opt.vol
					: 10);
				var b = jQuery("#controlBar_" + a.id),
					c = b.find(".mb_YTPMuteUnmute");
				c.html(jQuery.mbYTPlayer.controls.mute),
				jQuery(a).removeClass("isMuted"),
				a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
				var d = jQuery.Event("YTPUnmuted");
				return d.time = a.player.time,
				a.canTrigger && jQuery(a).trigger(d),
				this
			}
		},
		applyFilter: function(a, b) {
			var c = this.get(0);
			return c.filters[a].value = b,
			c.filtersEnabled && this.YTPEnableFilters(),
			this
		},
		applyFilters: function(a) {
			var b = this.get(0);
			return this.on("YTPReady", function() {
				for (var c in a)
					b.filters[c].value = a[c],
					jQuery(b).YTPApplyFilter(c, a[c]);
				jQuery(b).trigger("YTPFiltersApplied")
			}),
			this
		},
		toggleFilter: function(a, b) {
			return this.each(function() {
				var c = this;
				c.filters[a].value
					? c.filters[a].value = 0
					: c.filters[a].value = b,
				c.filtersEnabled && jQuery(this).YTPEnableFilters()
			})
		},
		toggleFilters: function(a) {
			return this.each(function() {
				var b = this;
				b.filtersEnabled
					? (jQuery(b).trigger("YTPDisableFilters"), jQuery(b).YTPDisableFilters())
					: (jQuery(b).YTPEnableFilters(), jQuery(b).trigger("YTPEnableFilters")),
				"function" == typeof a && a(b.filtersEnabled)
			})
		},
		disableFilters: function() {
			return this.each(function() {
				var a = this,
					b = jQuery(a.playerEl);
				b.css("-webkit-filter", ""),
				b.css("filter", ""),
				a.filtersEnabled = !1
			})
		},
		enableFilters: function() {
			return this.each(function() {
				var a = this,
					b = jQuery(a.playerEl),
					c = "";
				for (var d in a.filters)
					a.filters[d].value && (c += d.replace("_", "-") + "(" + a.filters[d].value + a.filters[d].unit + ") ");
				b.css("-webkit-filter", c),
				b.css("filter", c),
				a.filtersEnabled = !0
			})
		},
		removeFilter: function(a, b) {
			return this.each(function() {
				"function" == typeof a && (b = a, a = null);
				var c = this;
				if (a)
					jQuery(this).YTPApplyFilter(a, 0),
					"function" == typeof b && b(a);
				else
					for (var d in c.filters)
						jQuery(this).YTPApplyFilter(d, 0),
						"function" == typeof b && b(d)
			})
		},
		manageProgress: function() {
			var a = this.get(0),
				b = jQuery("#controlBar_" + a.id),
				c = b.find(".mb_YTPProgress"),
				d = b.find(".mb_YTPLoaded"),
				e = b.find(".mb_YTPseekbar"),
				f = c.outerWidth(),
				g = Math.floor(a.player.getCurrentTime()),
				h = Math.floor(a.player.getDuration()),
				i = g * f / h,
				j = 0,
				k = 100 * a.player.getVideoLoadedFraction();
			return d.css({
				left: j,
				width: k + "%"
			}),
			e.css({left: 0, width: i}), {
				totalTime: h,
				currentTime: g
			}
		},
		buildControls: function(YTPlayer) {
			var data = YTPlayer.opt;
			if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
				YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
					whiteSpace: "noWrap",
					position: YTPlayer.isBackground
						? "fixed"
						: "absolute",
					zIndex: YTPlayer.isBackground
						? 1e4
						: 1e3
				}).hide();
				var buttonBar = jQuery("<div/>").addClass("buttonBar"),
					playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function() {
						1 == YTPlayer.player.getPlayerState()
							? jQuery(YTPlayer).YTPPause()
							: jQuery(YTPlayer).YTPPlay()
					}),
					MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function() {
						0 == YTPlayer.player.getVolume()
							? jQuery(YTPlayer).YTPUnmute()
							: jQuery(YTPlayer).YTPMute()
					}),
					volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display: "inline-block"});
				YTPlayer.volumeBar = volumeBar;
				var idx = jQuery("<span/>").addClass("mb_YTPTime"),
					vURL = data.videoURL
						? data.videoURL
						: "";
				vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
				var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
						window.open(vURL, "viewOnYT")
					}),
					onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function() {
						jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
					}),
					progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function(a) {
						timeBar.css({
							width: a.clientX - timeBar.offset().left
						}),
						YTPlayer.timeW = a.clientX - timeBar.offset().left,
						YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0});
						var b = Math.floor(YTPlayer.player.getDuration());
						YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(),
						YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0),
						YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0})
					}),
					loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
					timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
				progressBar.append(loadedBar).append(timeBar),
				buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),
				data.showYTLogo && buttonBar.append(movieUrl),
				(YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo),
				YTPlayer.controlBar.append(buttonBar).append(progressBar),
				YTPlayer.isBackground
					? jQuery("body").after(YTPlayer.controlBar)
					: (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)),
				volumeBar.simpleSlider({
					initialval: YTPlayer.opt.vol,
					scale: 100,
					orientation: "h",
					callback: function(a) {
						0 == a.value
							? jQuery(YTPlayer).YTPMute()
							: jQuery(YTPlayer).YTPUnmute(),
						YTPlayer.player.setVolume(a.value),
						YTPlayer.isMute || (YTPlayer.opt.vol = a.value)
					}
				})
			}
		},
		checkForState: function(YTPlayer) {
			var interval = YTPlayer.opt.showControls
				? 100
				: 400;
			return clearInterval(YTPlayer.getState),
			jQuery.contains(document, YTPlayer)
				? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function() {
					var prog = jQuery(YTPlayer).YTPManageProgress(),
						$YTPlayer = jQuery(YTPlayer),
						data = YTPlayer.opt,
						startAt = YTPlayer.opt.startAt
							? YTPlayer.opt.startAt
							: 1,
						stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt
							? YTPlayer.opt.stopAt
							: 0;
					if (stopAt = stopAt < YTPlayer.player.getDuration()
						? stopAt
						: 0, YTPlayer.player.time != prog.currentTime) {
						var YTPEvent = jQuery.Event("YTPTime");
						YTPEvent.time = YTPlayer.player.time,
						jQuery(YTPlayer).trigger(YTPEvent)
					}
					if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume()
						? $YTPlayer.addClass("isMuted")
						: $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime
						? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime))
						: YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus()
						? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay())
						: 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact
						? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol))
						: YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
						if (YTPlayer.isEnded)
							return;
						if (YTPlayer.isEnded = !0, setTimeout(function() {
							YTPlayer.isEnded = !1
						}, 1e3), YTPlayer.isPlayList) {
							if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
								YTPlayer.player.loopTime = void 0,
								clearInterval(YTPlayer.getState);
								var YTPEnd = jQuery.Event("YTPEnd");
								return YTPEnd.time = YTPlayer.player.time,
								void jQuery(YTPlayer).trigger(YTPEnd)
							}
						} else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1)
							return YTPlayer.player.loopTime = void 0,
							YTPlayer.preventTrigger = !0,
							jQuery(YTPlayer).YTPPause(),
							void YTPlayer.wrapper.CSSAnimate({
								opacity: 0
							}, 1e3, function() {
								var a = jQuery.Event("YTPEnd");
								a.time = YTPlayer.player.time,
								jQuery(YTPlayer).trigger(a),
								YTPlayer.player.seekTo(startAt, !0),
								YTPlayer.isBackground || YTPlayer.opt.containment.css({
									background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
									backgroundSize: "cover"
								})
							});
						YTPlayer.player.loopTime = YTPlayer.player.loopTime
							? ++YTPlayer.player.loopTime
							: 1,
						startAt = startAt || 1,
						YTPlayer.preventTrigger = !0,
						jQuery(YTPlayer).YTPPause(),
						YTPlayer.player.seekTo(startAt, !0),
						$YTPlayer.YTPPlay()
					}
				}, interval)))
				: (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
		},
		checkForStart: function(a) {
			var b = jQuery(a);
			if (!jQuery.contains(document, a))
				return void jQuery(a).YTPPlayerDestroy();
			if (a.preventTrigger = !0, jQuery(a).YTPPause(), jQuery(a).muteYTPVolume(), jQuery("#controlBar_" + a.id).remove(), a.opt.showControls && jQuery.mbYTPlayer.buildControls(a), a.opt.addRaster) {
				var c = "dot" == a.opt.addRaster
					? "raster-dot"
					: "raster";
				a.overlay.addClass(a.isRetina
					? c + " retina"
					: c)
			} else
				a.overlay.removeClass(function(a, b) {
					var c = b.split(" "),
						d = [];
					return jQuery.each(c, function(a, b) {
						/raster.*/.test(b) && d.push(b)
					}),
					d.push("retina"),
					d.join(" ")
				});
			var d = a.opt.startAt
				? a.opt.startAt
				: 1;
			a.player.playVideo(),
			a.player.seekTo(d, !0),
			a.checkForStartAt = setInterval(function() {
				jQuery(a).YTPMute();
				var c = a.player.getVideoLoadedFraction() >= d / a.player.getDuration();
				if (a.player.getDuration() > 0 && a.player.getCurrentTime() >= d && c) {
					clearInterval(a.checkForStartAt),
					a.isReady = !0,
					"function" == typeof a.opt.onReady && a.opt.onReady(a);
					var e = jQuery.Event("YTPReady");
					if (e.time = a.player.time, jQuery(a).trigger(e), a.preventTrigger = !0, jQuery(a).YTPPause(), a.opt.mute || jQuery(a).YTPUnmute(), a.canTrigger = !0, a.opt.autoPlay) {
						b.YTPPlay();
						var f = jQuery.Event("YTPStart");
						f.time = a.player.time,
						jQuery(a).trigger(f),
						b.css("background-image", "none"),
						jQuery(a.playerEl).CSSAnimate({
							opacity: 1
						}, 1e3),
						a.wrapper.CSSAnimate({
							opacity: a.isAlone
								? 1
								: a.opt.opacity
						}, 1e3)
					} else
						b.YTPPause(),
						a.isPlayer || (jQuery(a.playerEl).CSSAnimate({
							opacity: 1
						}, 500), a.wrapper.CSSAnimate({
							opacity: a.isAlone
								? 1
								: a.opt.opacity
						}, 500));
					a.isPlayer && !a.opt.autoPlay && (a.loading.html("Ready"), setTimeout(function() {
						a.loading.fadeOut()
					}, 100)),
					a.controlBar && a.controlBar.slideDown(1e3)
				} else
					jQuery.browser.safari
			}, 1)
		},
		formatTime: function(a) {
			var b = Math.floor(a / 60),
				c = Math.floor(a - 60 * b);
			return (9 >= b
				? "0" + b
				: b) + " : " + (9 >= c
				? "0" + c
				: c)
		}
	},
	jQuery.fn.toggleVolume = function() {
		var a = this.get(0);
		if (a)
			return a.player.isMuted()
				? (jQuery(a).YTPUnmute(), !0)
				: (jQuery(a).YTPMute(), !1)
		},
	jQuery.fn.optimizeDisplay = function() {
		var a = this.get(0),
			b = a.opt,
			c = jQuery(a.playerEl),
			d = {},
			e = a.wrapper;
		d.width = e.outerWidth(),
		d.height = e.outerHeight();
		var f = 24,
			g = 100,
			h = {};
		b.optimizeDisplay
			? (h.width = d.width + d.width * f / 100, h.height = "16/9" == b.ratio
				? Math.ceil(9 * d.width / 16)
				: Math.ceil(3 * d.width / 4), h.marginTop = -((h.height - d.height) / 2), h.marginLeft = -(d.width * (f / 2) / 100), h.height < d.height && (h.height = d.height + d.height * f / 100, h.width = "16/9" == b.ratio
				? Math.floor(16 * d.height / 9)
				: Math.floor(4 * d.height / 3), h.marginTop = -(d.height * (f / 2) / 100), h.marginLeft = -((h.width - d.width) / 2)), h.width += g, h.height += g, h.marginTop -= g / 2, h.marginLeft -= g / 2)
			: (h.width = "100%", h.height = "100%", h.marginTop = 0, h.marginLeft = 0),
		c.css({width: h.width, height: h.height, marginTop: h.marginTop, marginLeft: h.marginLeft})
	},
	jQuery.shuffle = function(a) {
		for (var b = a.slice(), c = b.length, d = c; d--;) {
			var e = parseInt(Math.random() * c),
				f = b[d];
			b[d] = b[e],
			b[e] = f
		}
		return b
	},
	jQuery.fn.unselectable = function() {
		return this.each(function() {
			jQuery(this).css({"-moz-user-select": "none", "-webkit-user-select": "none", "user-select": "none"}).attr("unselectable", "on")
		})
	},
	jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer,
	jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer,
	jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID,
	jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie,
	jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy,
	jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play,
	jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay,
	jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop,
	jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause,
	jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo,
	jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist,
	jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext,
	jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev,
	jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute,
	jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute,
	jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume,
	jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume,
	jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData,
	jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen,
	jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops,
	jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
	jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress,
	jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter,
	jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters,
	jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter,
	jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters,
	jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter,
	jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters,
	jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters,
	jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer,
	jQuery.fn.playNext = jQuery.mbYTPlayer.playNext,
	jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev,
	jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie,
	jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID,
	jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer,
	jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy,
	jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen,
	jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls,
	jQuery.fn.playYTP = jQuery.mbYTPlayer.play,
	jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops,
	jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop,
	jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause,
	jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo,
	jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute,
	jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute,
	jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume,
	jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
	jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress,
	jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp),
jQuery.support.CSStransition = function() {
	var a = document.body || document.documentElement,
		b = a.style;
	return void 0 !== b.transition || void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.MsTransition || void 0 !== b.OTransition
}(),
jQuery.CSS = {
	name: "mb.CSSAnimate",
	author: "Matteo Bicocchi",
	version: "2.0.0",
	transitionEnd: "transitionEnd",
	sfx: "",
	filters: {
		blur: {
			min: 0,
			max: 100,
			unit: "px"
		},
		brightness: {
			min: 0,
			max: 400,
			unit: "%"
		},
		contrast: {
			min: 0,
			max: 400,
			unit: "%"
		},
		grayscale: {
			min: 0,
			max: 100,
			unit: "%"
		},
		hueRotate: {
			min: 0,
			max: 360,
			unit: "deg"
		},
		invert: {
			min: 0,
			max: 100,
			unit: "%"
		},
		saturate: {
			min: 0,
			max: 400,
			unit: "%"
		},
		sepia: {
			min: 0,
			max: 100,
			unit: "%"
		}
	},
	normalizeCss: function(a) {
		var b = jQuery.extend(!0, {}, a);
		jQuery.browser.webkit || jQuery.browser.opera
			? jQuery.CSS.sfx = "-webkit-"
			: jQuery.browser.mozilla
				? jQuery.CSS.sfx = "-moz-"
				: jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
		for (var c in b) {
			"transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c], delete b[c]),
			"transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c], delete b[c]),
			"filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c], delete b[c]),
			"blur" === c && setFilter(b, "blur", a[c]),
			"brightness" === c && setFilter(b, "brightness", a[c]),
			"contrast" === c && setFilter(b, "contrast", a[c]),
			"grayscale" === c && setFilter(b, "grayscale", a[c]),
			"hueRotate" === c && setFilter(b, "hueRotate", a[c]),
			"invert" === c && setFilter(b, "invert", a[c]),
			"saturate" === c && setFilter(b, "saturate", a[c]),
			"sepia" === c && setFilter(b, "sepia", a[c]);
			var d = "";
			"x" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateX(" + setUnit(a[c], "px") + ")", delete b[c]),
			"y" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateY(" + setUnit(a[c], "px") + ")", delete b[c]),
			"z" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " translateZ(" + setUnit(a[c], "px") + ")", delete b[c]),
			"rotate" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotate(" + setUnit(a[c], "deg") + ")", delete b[c]),
			"rotateX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateX(" + setUnit(a[c], "deg") + ")", delete b[c]),
			"rotateY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateY(" + setUnit(a[c], "deg") + ")", delete b[c]),
			"rotateZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")", delete b[c]),
			"scale" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scale(" + setUnit(a[c], "") + ")", delete b[c]),
			"scaleX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleX(" + setUnit(a[c], "") + ")", delete b[c]),
			"scaleY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleY(" + setUnit(a[c], "") + ")", delete b[c]),
			"scaleZ" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " scaleZ(" + setUnit(a[c], "") + ")", delete b[c]),
			"skew" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skew(" + setUnit(a[c], "deg") + ")", delete b[c]),
			"skewX" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewX(" + setUnit(a[c], "deg") + ")", delete b[c]),
			"skewY" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " skewY(" + setUnit(a[c], "deg") + ")", delete b[c]),
			"perspective" === c && (d = jQuery.CSS.sfx + "transform", b[d] = b[d] || "", b[d] += " perspective(" + setUnit(a[c], "px") + ")", delete b[c])
		}
		return b
	},
	getProp: function(a) {
		var b = [];
		for (var c in a)
			b.indexOf(c) < 0 && b.push(uncamel(c));
		return b.join(",")
	},
	animate: function(a, b, c, d, e) {
		return this.each(function() {
			function f() {
				g.called = !0,
				g.CSSAIsRunning = !1,
				h.off(jQuery.CSS.transitionEnd + "." + g.id),
				clearTimeout(g.timeout),
				h.css(jQuery.CSS.sfx + "transition", ""),
				"function" == typeof e && e.apply(g),
				"function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)
			}
			var g = this,
				h = jQuery(this);
			g.id = g.id || "CSSA_" + (new Date).getTime();
			var i = i || {
				type: "noEvent"
			};
			if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && jQuery.browser.version <= 9)
				return void(g.CSSqueue = function() {
					h.CSSAnimate(a, b, c, d, e)
				});
			if (g.CSSqueue = null, g.eventType = i.type, 0 !== h.length && a) {
				if (a = jQuery.normalizeCss(a), g.CSSAIsRunning = !0, "function" == typeof b && (e = b, b = jQuery.fx.speeds._default), "function" == typeof c && (d = c, c = 0), "string" == typeof c && (e = c, c = 0), "function" == typeof d && (e = d, d = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof b)
					for (var j in jQuery.fx.speeds) {
						if (b == j) {
							b = jQuery.fx.speeds[j];
							break
						}
						b = jQuery.fx.speeds._default
					}
				if (b || (b = jQuery.fx.speeds._default), "string" == typeof e && (d = e, e = null), !jQuery.support.CSStransition) {
					for (var k in a) {
						if ("transform" === k && delete a[k], "filter" === k && delete a[k], "transform-origin" === k && delete a[k], "auto" === a[k] && delete a[k], "x" === k) {
							var l = a[k],
								m = "left";
							a[m] = l,
							delete a[k]
						}
						if ("y" === k) {
							var l = a[k],
								m = "top";
							a[m] = l,
							delete a[k]
						}
						("-ms-transform" === k || "-ms-filter" === k) && delete a[k]
					}
					return void h.delay(c).animate(a, b, e)
				}
				var n = {
					"default": "ease",
					"in": "ease-in",
					out: "ease-out",
					"in-out": "ease-in-out",
					snap: "cubic-bezier(0,1,.5,1)",
					easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
					easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
					easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
					easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
					easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
					easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
					easeOutExpo: "cubic-bezier(.19,1,.22,1)",
					easeInOutExpo: "cubic-bezier(1,0,0,1)",
					easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
					easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
					easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
					easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
					easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
					easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
					easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
					easeOutQuint: "cubic-bezier(.23,1,.32,1)",
					easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
					easeInSine: "cubic-bezier(.47,0,.745,.715)",
					easeOutSine: "cubic-bezier(.39,.575,.565,1)",
					easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
					easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
					easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
					easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
				};
				n[d] && (d = n[d]),
				h.off(jQuery.CSS.transitionEnd + "." + g.id);
				var o = jQuery.CSS.getProp(a),
					p = {};
				jQuery.extend(p, a),
				p[jQuery.CSS.sfx + "transition-property"] = o,
				p[jQuery.CSS.sfx + "transition-duration"] = b + "ms",
				p[jQuery.CSS.sfx + "transition-delay"] = c + "ms",
				p[jQuery.CSS.sfx + "transition-timing-function"] = d,
				setTimeout(function() {
					h.one(jQuery.CSS.transitionEnd + "." + g.id, f),
					h.css(p)
				}, 1),
				g.timeout = setTimeout(function() {
					return g.called || !e
						? (g.called = !1, void(g.CSSAIsRunning = !1))
						: (h.css(jQuery.CSS.sfx + "transition", ""), e.apply(g), g.CSSAIsRunning = !1, void("function" == typeof g.CSSqueue && (g.CSSqueue(), g.CSSqueue = null)))
				}, b + c + 10)
			}
		})
	}
},
jQuery.fn.CSSAnimate = jQuery.CSS.animate,
jQuery.normalizeCss = jQuery.CSS.normalizeCss,
jQuery.fn.css3 = function(a) {
	return this.each(function() {
		var b = jQuery(this),
			c = jQuery.normalizeCss(a);
		b.css(c)
	})
};
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
	jQuery.browser = {},
	jQuery.browser.mozilla = !1,
	jQuery.browser.webkit = !1,
	jQuery.browser.opera = !1,
	jQuery.browser.safari = !1,
	jQuery.browser.chrome = !1,
	jQuery.browser.msie = !1,
	jQuery.browser.ua = nAgt,
	jQuery.browser.name = navigator.appName,
	jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
	jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset,
		verOffset,
		ix;
	if (-1 != (verOffset = nAgt.indexOf("Opera")))
		jQuery.browser.opera = !0,
		jQuery.browser.name = "Opera",
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
		-1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
	else if (-1 != (verOffset = nAgt.indexOf("OPR")))
		jQuery.browser.opera = !0,
		jQuery.browser.name = "Opera",
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
	else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
		jQuery.browser.msie = !0,
		jQuery.browser.name = "Microsoft Internet Explorer",
		jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
	else if (-1 != nAgt.indexOf("Trident")) {
		jQuery.browser.msie = !0,
		jQuery.browser.name = "Microsoft Internet Explorer";
		var start = nAgt.indexOf("rv:") + 3,
			end = start + 4;
		jQuery.browser.fullVersion = nAgt.substring(start, end)
	} else - 1 != (verOffset = nAgt.indexOf("Chrome"))
			? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7))
			: -1 != (verOffset = nAgt.indexOf("Safari"))
				? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
				: -1 != (verOffset = nAgt.indexOf("AppleWebkit"))
					? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)))
					: -1 != (verOffset = nAgt.indexOf("Firefox"))
						? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))
						: (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));

- 1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
	-1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
	jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
	isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
	jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt),
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
jQuery.isMobile = jQuery.browser.mobile,
jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765,
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),
!function(a) {
	/iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());
	var b = "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1;
	a.simpleSlider = {
		defaults: {
			initialval: 0,
			scale: 100,
			orientation: "h",
			readonly: !1,
			callback: !1
		},
		events: {
			start: b
				? "touchstart"
				: "mousedown",
			end: b
				? "touchend"
				: "mouseup",
			move: b
				? "touchmove"
				: "mousemove"
		},
		init: function(c) {
			return this.each(function() {
				var d = this,
					e = a(d);
				e.addClass("simpleSlider"),
				d.opt = {},
				a.extend(d.opt, a.simpleSlider.defaults, c),
				a.extend(d.opt, e.data());
				var f = "h" == d.opt.orientation
						? "horizontal"
						: "vertical",
					g = a("<div/>").addClass("level").addClass(f);
				e.prepend(g),
				d.level = g,
				e.css({cursor: "default"}),
				"auto" == d.opt.scale && (d.opt.scale = a(d).outerWidth()),
				e.updateSliderVal(),
				d.opt.readonly || (e.on(a.simpleSlider.events.start, function(a) {
					b && (a = a.changedTouches[0]),
					d.canSlide = !0,
					e.updateSliderVal(a),
					e.css({cursor: "col-resize"}),
					a.preventDefault(),
					a.stopPropagation()
				}), a(document).on(a.simpleSlider.events.move, function(c) {
					b && (c = c.changedTouches[0]),
					d.canSlide && (a(document).css({cursor: "default"}), e.updateSliderVal(c), c.preventDefault(), c.stopPropagation())
				}).on(a.simpleSlider.events.end, function() {
					a(document).css({cursor: "auto"}),
					d.canSlide = !1,
					e.css({cursor: "auto"})
				}))
			})
		},
		updateSliderVal: function(b) {
			function c(a, b) {
				return Math.floor(100 * a / b)
			}
			var d = this,
				e = d.get(0);
			e.opt.initialval = "number" == typeof e.opt.initialval
				? e.opt.initialval
				: e.opt.initialval(e);
			var f = a(e).outerWidth(),
				g = a(e).outerHeight();
			e.x = "object" == typeof b
				? b.clientX + document.body.scrollLeft - d.offset().left
				: "number" == typeof b
					? b * f / e.opt.scale
					: e.opt.initialval * f / e.opt.scale,
			e.y = "object" == typeof b
				? b.clientY + document.body.scrollTop - d.offset().top
				: "number" == typeof b
					? (e.opt.scale - e.opt.initialval - b) * g / e.opt.scale
					: e.opt.initialval * g / e.opt.scale,
			e.y = d.outerHeight() - e.y,
			e.scaleX = e.x * e.opt.scale / f,
			e.scaleY = e.y * e.opt.scale / g,
			e.outOfRangeX = e.scaleX > e.opt.scale
				? e.scaleX - e.opt.scale
				: e.scaleX < 0
					? e.scaleX
					: 0,
			e.outOfRangeY = e.scaleY > e.opt.scale
				? e.scaleY - e.opt.scale
				: e.scaleY < 0
					? e.scaleY
					: 0,
			e.outOfRange = "h" == e.opt.orientation
				? e.outOfRangeX
				: e.outOfRangeY,
			e.value = "undefined" != typeof b
				? "h" == e.opt.orientation
					? e.x >= d.outerWidth()
						? e.opt.scale
						: e.x <= 0
							? 0
							: e.scaleX
					: e.y >= d.outerHeight()
						? e.opt.scale
						: e.y <= 0
							? 0
							: e.scaleY
				: "h" == e.opt.orientation
						? e.scaleX
						: e.scaleY,
			"h" == e.opt.orientation
				? e.level.width(c(e.x, f) + "%")
				: e.level.height(c(e.y, g)),
			"function" == typeof e.opt.callback && e.opt.callback(e)
		}
	},
	a.fn.simpleSlider = a.simpleSlider.init,
	a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
}(jQuery),
!function(a) {
	a.mbCookie = {
		set: function(a, b, c, d) {
			b = JSON.stringify(b),
			c || (c = 7),
			d = d
				? "; domain=" + d
				: "";
			var e,
				f = new Date;
			f.setTime(f.getTime() + 864e5 * c),
			e = "; expires=" + f.toGMTString(),
			document.cookie = a + "=" + b + e + "; path=/" + d
		},
		get: function(a) {
			for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
				for (var e = c[d]; " " == e.charAt(0);)
					e = e.substring(1, e.length);
				if (0 == e.indexOf(b))
					return JSON.parse(e.substring(b.length, e.length))
			}
			return null
		},
		remove: function(b) {
			a.mbCookie.set(b, "", -1)
		}
	},
	a.mbStorage = {
		set: function(a, b) {
			b = JSON.stringify(b),
			localStorage.setItem(a, b)
		},
		get: function(a) {
			return localStorage[a]
				? JSON.parse(localStorage[a])
				: null
		},
		remove: function(a) {
			a
				? localStorage.removeItem(a)
				: localStorage.clear()
		}
	}
}(jQuery);

/*global jQuery */
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/;
(function($) {

	'use strict';

	$.fn.fitVids = function(options) {
		var settings = {
			customSelector: null,
			ignore: null
		};

		if (!document.getElementById('fit-vids-style')) {
			// appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
			var head = document.head || document.getElementsByTagName('head')[0];
			var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
			var div = document.createElement("div");
			div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
			head.appendChild(div.childNodes[1]);
		}

		if (options) {
			$.extend(settings, options);
		}

		return this.each(function() {
			var selectors = [
				'iframe[src*="player.vimeo.com"]',
				'iframe[src*="youtube.com"]',
				'iframe[src*="youtube-nocookie.com"]',
				'iframe[src*="kickstarter.com"][src*="video.html"]',
				'object',
				'embed'
			];

			if (settings.customSelector) {
				selectors.push(settings.customSelector);
			}

			var ignoreList = '.fitvidsignore';

			if (settings.ignore) {
				ignoreList = ignoreList + ', ' + settings.ignore;
			}

			var $allVideos = $(this).find(selectors.join(','));
			$allVideos = $allVideos.not('object object'); // SwfObj conflict patch
			$allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

			$allVideos.each(function() {
				var $this = $(this);
				if ($this.parents(ignoreList).length > 0) {
					return; // Disable FitVids on this video.
				}
				if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) {
					return;
				}
				if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width')))) {
					$this.attr('height', 9);
					$this.attr('width', 16);
				}
				var height = (this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))))
						? parseInt($this.attr('height'), 10)
						: $this.height(),
					width = !isNaN(parseInt($this.attr('width'), 10))
						? parseInt($this.attr('width'), 10)
						: $this.width(),
					aspectRatio = height / width;
				if (!$this.attr('id')) {
					var videoID = 'fitvid' + Math.floor(Math.random() * 999999);
					$this.attr('id', videoID);
				}
				$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100) + '%');
				$this.removeAttr('height').removeAttr('width');
			});
		});
	};
	// Works with either jQuery or Zepto
})(window.jQuery || window.Zepto);
