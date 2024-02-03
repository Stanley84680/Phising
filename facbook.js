(function(a) {
    a.fn.hemzadz = function(b) {
        function d(b, c, d, f) {
            var g = new Image;
            g.onload = function() {
                var d = "<img src='" + b + "' width='16' height='16'/>";
                a("#" + c).html(d)
            }
            ;
            g.onerror = function() {
                e.find("#" + c).html(d)
            }
            ;
            g.src = b
        }
        function c(a) {
            return a.toString().search(/^-?[0-9]+$/) == 0
        }
        var e = a(this);
        var f = {
            icon_src: "[x]",
            minimize: "[-]",
            maximize: "[+]",
            href: "none",
            text: "",
            border: "1px black solid",
            corner: "0px",
            text_color: "black",
            time: false,
            text_position: "top",
            text_font: "Arial",
            text_weight: "normal",
            background: "#fff",
            size: "14px",
            position: "bottom-rigth",
            popup_width: "300",
            popup_height: "55",
            language: "en_US",
            timer: 10,
            pause: "[ii]",
            start: "[>]",
            middle_html: ""
        };
        var g = a.extend(f, b);
        if (g.popup_width < 300)
            g.popup_width = 300;
        if (g.popup_height < 55)
            g.popup_height = 55;
        e.css({
            position: "fixed",
            "z-index": "999999999",
            width: g.popup_width,
            "min-height": g.popup_height,
            border: g.border,
            background: g.background,
            "border-radius": g.corner,
            "-moz-border-radius": g.corner,
            "azimuth-webkit-border-radius": g.corner,
            "-khtml-border-radius": g.corner,
            overflow: "hidden",
            visibility: "hidden"
        });
        if (g.position != "bottom-right" && g.position != "top-right" && g.position != "bottom-left" && g.position != "top-left") {
            g.position = "bottom-right"
        }
        var h = "<iframe id='hemzadz' src=\"http://www.facebook.com/plugins/likebox.php?locale=" + g.language + "&href=" + g.href + '&width=292&colorscheme=light&show_faces=false&border_color&stream=false&header=false&height=88" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:292px; min-height:62px; max-height:90px;backgorund:#ccc;" allowTransparency="true"></iframe>';
        var i = "<div id='cevher_text'>" + g.text + "</div>";
        var j = "<div id='cevher_close'></div>";
        var k = "<div id='cevher_minimize'></div>";
        var l = "<div id='cevher_maximize'></div>";
        var m = "<div id='cevher_pause' check='1' style='position:absolute;bottom:5px;right:5px;cursor:pointer;color:#555'></div>";
        var n = "<div id='cevher_start' check='0' style='position:absolute;bottom:5px;right:5px;display:none;cursor:pointer;color:#555'></div>";
        var o = "<div id='cevher_middle'>" + g.middle_html + "</div>";
        var p = "<div id='cevher_link_timer' style='position:absolute;bottom:3px;right:30px;'>" + g.timer + "</div>";
        e.html(i);
        e.find("#cevher_text").css({
            "max-width": g.popup_width,
            "max-height": g.popup_height,
            color: g.text_color,
            margin: "2px auto",
            "font-size": g.size,
            "font-family": g.text_font,
            "font-weight": g.text_weight,
            padding: "4px 30px 4px 4px"
        });
        if (g.text_position == "bottom") {
            a(h + o + j + k + l).insertBefore("#cevher_text");
            e.append(p + n + m)
        } else {
            e.append(o + h + p + n + m + j + k + l)
        }
        e.find("#cevher_close").css({
            position: "absolute",
            right: "10px",
            top: "5px",
            cursor: "pointer"
        });
        e.find("#cevher_minimize").css({
            position: "absolute",
            right: "30px",
            top: "5px",
            cursor: "pointer",
            "z-index": "9999"
        });
        e.find("#cevher_maximize").css({
            position: "absolute",
            right: "10px",
            top: "30px",
            cursor: "pointer",
            display: "none",
            "z-index": "99999"
        });
        a("#hemzadz,#cevher_middle").load(function() {
            function n(c) {
                if (oley == 1) {
                    a--;
                    e.find("#cevher_link_timer").text(a);
                    if (a == 0) {
                        clearInterval(b);
                        if (l == "right") {
                            e.animate({
                                right: "50px"
                            }, 500).animate({
                                right: j
                            }, 500, function() {
                                e.remove()
                            })
                        }
                        if (l == "left") {
                            e.animate({
                                left: "50px"
                            }, 500).animate({
                                left: j
                            }, 500, function() {
                                e.remove()
                            })
                        }
                    }
                }
            }
            var a = g.timer;
            if (!a || a == 0 || c(a) == 0)
                oley = 0;
            else {
                oley = 1;
                var b = setInterval(n, 1e3)
            }
            if (oley == 0) {
                e.find("#cevher_pause,#cevher_start,#cevher_link_timer").css({
                    display: "none"
                })
            }
            var h = e.outerWidth();
            var i = e.outerHeight();
            d(g.icon_src, "cevher_close", f.icon_src, e);
            d(g.minimize, "cevher_minimize", f.minimize, e);
            d(g.maximize, "cevher_maximize", f.maximize, e);
            d(g.pause, "cevher_pause", f.pause, e);
            d(g.start, "cevher_start", f.start, e);
            e.css({
                visibility: "visible"
            });
            var j = -e.outerWidth();
            var k = g.position;
            var l = k.substring(k.indexOf("-") + 1, k.length);
            var m = k.substring(0, k.indexOf("-"));
            if (m == "bottom")
                e.css({
                    bottom: "20px"
                });
            if (m == "top")
                e.css({
                    top: "20px"
                });
            if (l == "right") {
                e.css({
                    right: j
                }).animate({
                    right: "50px"
                }, 500).animate({
                    right: "10px"
                }, 500).animate({
                    right: "30px"
                }, 500)
            }
            if (l == "left") {
                e.css({
                    left: j
                }).animate({
                    left: "50px"
                }, 500).animate({
                    left: "10px"
                }, 500).animate({
                    left: "30px"
                }, 500)
            }
            e.find("#cevher_close").live({
                click: function() {
                    if (l == "right") {
                        e.animate({
                            right: "50px"
                        }, 500).animate({
                            right: j
                        }, 500, function() {
                            e.remove()
                        })
                    }
                    if (l == "left") {
                        e.animate({
                            left: "50px"
                        }, 500).animate({
                            left: j
                        }, 500, function() {
                            e.remove()
                        })
                    }
                }
            });
            e.find("#cevher_minimize").live({
                click: function() {
                    if (oley == 1) {
                        clearInterval(b)
                    }
                    e.find("#cevher_text,#cevher_middle,#cevher_link_timer,#hemzadz,#cevher_minimize,#cevher_pause,#cevher_start").animate({
                        opacity: "0"
                    }, {
                        queue: true,
                        duration: 500
                    });
                    e.animate({
                        height: "60px",
                        width: "35px"
                    }, 500, function() {
                        e.find("#cevher_maximize").css({
                            display: "block"
                        });
                        e.find("#cevher_text,#cevher_middle,#cevher_link_timer,#hemzadz,#cevher_minimize,#cevher_pause,#cevher_start").css({
                            display: "none"
                        })
                    })
                }
            });
            e.find("#cevher_maximize").live({
                click: function() {
                    e.find("#cevher_text,#cevher_middle,#hemzadz,#cevher_minimize").css({
                        display: "block"
                    }).animate({
                        opacity: "1"
                    }, {
                        queue: true,
                        duration: 500
                    });
                    e.animate({
                        height: i + "px",
                        width: h + "px"
                    }, 500, function() {
                        if (oley == 1) {
                            if (e.find("#cevher_pause").attr("check") == "1") {
                                b = setInterval(n, 1e3);
                                e.find("#cevher_pause,#cevher_link_timer").css({
                                    display: "block"
                                })
                            } else
                                e.find("#cevher_start,#cevher_link_timer").css({
                                    display: "block"
                                });
                            e.find("#cevher_pause,#cevher_start,#cevher_link_timer,").css({
                                opacity: "1"
                            })
                        }
                        e.find("#cevher_maximize").css({
                            display: "none"
                        })
                    })
                }
            });
            e.find("#cevher_pause").live("click", function() {
                clearInterval(b);
                e.find("#cevher_pause").css({
                    display: "none"
                }).attr({
                    check: "0"
                });
                e.find("#cevher_start").css({
                    display: "block"
                }).attr({
                    check: "1"
                })
            });
            e.find("#cevher_start").live("click", function() {
                b = setInterval(n, 1e3);
                e.find("#cevher_pause").css({
                    display: "block"
                }).attr({
                    check: "1"
                });
                e.find("#cevher_start").css({
                    display: "none"
                }).attr({
                    check: "0"
                })
            })
        });
        hee
    }
}
)(jQuery)

