!function(s) {
	var i = s(".carousel").attr("data-duration");
	isNaN(i) || 0 >= i
		? (s.fn.carousel.Constructor.TRANSITION_DURATION = 1e3, s(".carousel-inner > .item").css({
			"-webkit-transition-duration": i + "1000ms",
			"-moz-transition-duration": i + "1000ms",
			"transition-duration": i + "1000ms"
		}))
		: (s.fn.carousel.Constructor.TRANSITION_DURATION = i, s(".carousel-inner > .item").css({
			"-webkit-transition-duration": i + "ms",
			"-moz-transition-duration": i + "ms",
			"transition-duration": i + "ms"
		}));
	var o = s(".carousel").find("[class=mouse_wheel_y]"),
		t = s(".carousel").find("[class=mouse_wheel_xy]");
	t && s(".mouse_wheel_xy").bind("mousewheel", function(i) {
		i.originalEvent.wheelDelta / 120 > 0
			? s(this).carousel("prev")
			: s(this).carousel("next")
	}),
	o && s(".mouse_wheel_y").bind("mousewheel", function(i) {
		i.originalEvent.wheelDelta / 120 > 0 && s(this).carousel("next")
	});
	var l = 0,
		r = 0,
		e = s(".carousel").find("[class=thumb_scroll_y]"),
		a = s(".carousel").find("[class=thumb_scroll_x]");
	e && s(".thumb_scroll_y").on("slid.bs.carousel", function() {
		var i = -1 * s(".thumb_scroll_y .carousel-indicators li:first").position().top + s(".thumb_scroll_y .carousel-indicators li:last").position().top + s(".thumb_scroll_y .carousel-indicators li:last").height(),
			o = s(".thumb_scroll_y .carousel-indicators li.active").position().top + s(".thumb_scroll_y .carousel-indicators li.active").height() / 1,
			t = o + l,
			r = t - s(".thumb_scroll_y .carousel-indicators").height() / 2;
		0 > r && (r = 0),
		r > i - s(".thumb_scroll_y .carousel-indicators").height() && (r = i - s(".thumb_scroll_y .carousel-indicators").height()),
		s(".thumb_scroll_y .carousel-indicators").animate({
			scrollTop: r
		}, 800),
		l = r
	}),
	a && s(".thumb_scroll_x").on("slid.bs.carousel", function() {
		var i = -1 * s(".thumb_scroll_x .carousel-indicators li:first").position().left + s(".thumb_scroll_x .carousel-indicators li:last").position().left + s(".thumb_scroll_x .carousel-indicators li:last").width(),
			o = s(".thumb_scroll_x .carousel-indicators li.active").position().left + s(".thumb_scroll_x .carousel-indicators li.active").width() / 1,
			t = o + r,
			l = t - s(".thumb_scroll_x .carousel-indicators").width() / 1;
		0 > l && (l = 0),
		l > i - s(".thumb_scroll_x .carousel-indicators").width() && (l = i - s(".thumb_scroll_x .carousel-indicators").width()),
		s(".thumb_scroll_x .carousel-indicators").animate({
			scrollLeft: l
		}, 800),
		r = l
	}),
	s(".selfPauseVids").on("slide.bs.carousel", function() {
		s("video").each(function() {
			this.pause()
		})
	}),
	s(".selfPauseVidm").on("hide.bs.modal", function() {
		s("video").each(function() {
			this.pause()
		})
	}),
	s(".onlinePauseVideos").on("slide.bs.carousel", function(i) {
		var o = s(i.target).find("iframe");
		o.each(function(i, o) {
			s(o).attr("src", s(o).attr("src"))
		})
	}),
	s(".onlinePauseVideom").on("hide.bs.modal", function(i) {
		var o = s(i.target).find("iframe");
		o.each(function(i, o) {
			s(o).attr("src", s(o).attr("src"))
		})
	}),
	s(".carousel").swipe({
		swipe: function(i, o, t, l, r, e) {
			"left" == o && s(this).carousel("next"),
			"right" == o && s(this).carousel("prev")
		},
		allowPageScroll: "vertical",
		threshold: 0
	})
}(jQuery);
