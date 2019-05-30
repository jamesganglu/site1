"use strict";

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend(jQuery.easing, {
  def: 'easeOutQuad',
  swing: function swing(x, t, b, c, d) {
    //alert(jQuery.easing.default);
    return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
  },
  easeInQuad: function easeInQuad(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function easeInCubic(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function easeOutCubic(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function easeInQuart(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function easeOutQuart(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function easeInQuint(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function easeOutQuint(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function easeInSine(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function easeOutExpo(x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function easeInCirc(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function easeInElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function easeOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function easeInBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function easeOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function easeInBounce(x, t, b, c, d) {
    return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function easeOutBounce(x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  },
  easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
    if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
});
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * jQuery Scrollify
 * Version 1.0.20
 *
 * Requires:
 * - jQuery 1.7 or higher
 *
 * https://github.com/lukehaas/Scrollify
 *
 * Copyright 2016, Luke Haas
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



if touchScroll is false - update index

 */
(function (global, factory) {
  "use strict";

  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], function ($) {
      return factory($, global, global.document);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // Node/CommonJS
    module.exports = factory(require('jquery'), global, global.document);
  } else {
    // Browser globals
    factory(jQuery, global, global.document);
  }
})(typeof window !== 'undefined' ? window : void 0, function ($, window, document, undefined) {
  "use strict";

  var heights = [],
      names = [],
      elements = [],
      overflow = [],
      index = 0,
      currentIndex = 0,
      interstitialIndex = 1,
      hasLocation = false,
      timeoutId,
      timeoutId2,
      $window = $(window),
      portHeight,
      top = $window.scrollTop(),
      scrollable = false,
      locked = false,
      scrolled = false,
      manualScroll,
      swipeScroll,
      util,
      disabled = false,
      scrollSamples = [],
      scrollTime = new Date().getTime(),
      firstLoad = true,
      initialised = false,
      destination = 0,
      wheelEvent = 'onwheel' in document ? 'wheel' : document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll',
      settings = {
    //section should be an identifier that is the same for each section
    section: ".section",
    sectionName: "section-name",
    interstitialSection: "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    target: "html,body",
    standardScrollElements: false,
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function before() {},
    after: function after() {},
    afterResize: function afterResize() {},
    afterRender: function afterRender() {}
  };

  function getportHeight() {
    return $window.height() + settings.offset;
  }

  function animateScroll(index, instant, callbacks, toTop) {
    if (currentIndex === index) {
      callbacks = false;
    }

    if (disabled === true) {
      return true;
    }

    if (names[index]) {
      scrollable = false;

      if (firstLoad === true) {
        firstLoad = false;
        settings.afterRender();
      }

      if (callbacks) {
        if (typeof settings.before == 'function' && settings.before(index, elements) === false) {
          return true;
        }
      }

      interstitialIndex = 1;
      destination = !index ? 0 : heights[index];

      if (firstLoad === false && currentIndex > index && toTop === false) {
        //We're going backwards
        if (overflow[index]) {
          portHeight = getportHeight();
          interstitialIndex = parseInt(elements[index].outerHeight() / portHeight);
          destination = parseInt(heights[index]) + (elements[index].outerHeight() - portHeight);
        }
      }

      if (settings.updateHash && settings.sectionName && !(firstLoad === true && index === 0)) {
        if (history.pushState) {
          try {
            history.replaceState(null, null, names[index]);
          } catch (e) {
            if (window.console) {
              console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.");
            }
          }
        } else {
          window.location.hash = names[index];
        }
      }

      currentIndex = index;

      if (instant) {
        $(settings.target).stop().scrollTop(destination);

        if (callbacks) {
          settings.after(index, elements);
        }
      } else {
        locked = true;

        if ($().velocity) {
          $(settings.target).stop().velocity('scroll', {
            duration: settings.scrollSpeed,
            easing: settings.easing,
            offset: destination,
            mobileHA: false
          });
        } else {
          $(settings.target).stop().animate({
            scrollTop: destination
          }, settings.scrollSpeed, settings.easing);
        }

        if (window.location.hash.length && settings.sectionName && window.console) {
          try {
            if ($(window.location.hash).length) {
              console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.");
            }
          } catch (e) {}
        }

        $(settings.target).promise().done(function () {
          locked = false;
          firstLoad = false;

          if (callbacks) {
            settings.after(index, elements);
          }
        });
      }
    }
  }

  function isAccelerating(samples) {
    function average(num) {
      var sum = 0;
      var lastElements = samples.slice(Math.max(samples.length - num, 1));

      for (var i = 0; i < lastElements.length; i++) {
        sum += lastElements[i];
      }

      return Math.ceil(sum / num);
    }

    var avEnd = average(10);
    var avMiddle = average(70);

    if (avEnd >= avMiddle) {
      return true;
    } else {
      return false;
    }
  }

  var scrollify = function scrollify(options) {
    initialised = true;

    $.easing['easeOutExpo'] = function (x, t, b, c, d) {
      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };

    manualScroll = {
      handleMousedown: function handleMousedown() {
        if (disabled === true) {
          return true;
        }

        scrollable = false;
        scrolled = false;
      },
      handleMouseup: function handleMouseup() {
        if (disabled === true) {
          return true;
        }

        scrollable = true;

        if (scrolled) {
          //instant,callbacks
          manualScroll.calculateNearest(false, true);
        }
      },
      handleScroll: function handleScroll() {
        if (disabled === true) {
          return true;
        }

        if (timeoutId) {
          clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(function () {
          scrolled = true;

          if (scrollable === false) {
            return false;
          }

          scrollable = false; //instant,callbacks

          manualScroll.calculateNearest(false, true);
        }, 200);
      },
      calculateNearest: function calculateNearest(instant, callbacks) {
        top = $window.scrollTop();
        var i = 1,
            max = heights.length,
            closest = 0,
            prev = Math.abs(heights[0] - top),
            diff;

        for (; i < max; i++) {
          diff = Math.abs(heights[i] - top);

          if (diff < prev) {
            prev = diff;
            closest = i;
          }
        }

        if (atBottom() && closest > index || atTop()) {
          index = closest; //index, instant, callbacks, toTop

          animateScroll(closest, instant, callbacks, false);
        }
      },
      wheelHandler: function wheelHandler(e) {
        if (disabled === true) {
          return true;
        } else if (settings.standardScrollElements) {
          if ($(e.target).is(settings.standardScrollElements) || $(e.target).closest(settings.standardScrollElements).length) {
            return true;
          }
        }

        if (!overflow[index]) {
          e.preventDefault();
        }

        var currentScrollTime = new Date().getTime();
        e = e || window.event;
        var value;

        if (e.originalEvent) {
          value = e.originalEvent.wheelDelta || -e.originalEvent.deltaY || -e.originalEvent.detail;
        } else {
          value = e.wheelDelta || -e.deltaY || -e.detail;
        }

        var delta = Math.max(-1, Math.min(1, value)); //delta = delta || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;

        if (scrollSamples.length > 149) {
          scrollSamples.shift();
        } //scrollSamples.push(Math.abs(delta*10));


        scrollSamples.push(Math.abs(value));

        if (currentScrollTime - scrollTime > 200) {
          scrollSamples = [];
        }

        scrollTime = currentScrollTime;

        if (locked) {
          return false;
        }

        if (delta < 0) {
          if (index < heights.length - 1) {
            if (atBottom()) {
              if (isAccelerating(scrollSamples)) {
                e.preventDefault();
                index++;
                locked = true; //index, instant, callbacks, toTop

                animateScroll(index, false, true, false);
              } else {
                return false;
              }
            }
          }
        } else if (delta > 0) {
          if (index > 0) {
            if (atTop()) {
              if (isAccelerating(scrollSamples)) {
                e.preventDefault();
                index--;
                locked = true; //index, instant, callbacks, toTop

                animateScroll(index, false, true, false);
              } else {
                return false;
              }
            }
          }
        }
      },
      keyHandler: function keyHandler(e) {
        if (disabled === true || document.activeElement.readOnly === false) {
          return true;
        } else if (settings.standardScrollElements) {
          if ($(e.target).is(settings.standardScrollElements) || $(e.target).closest(settings.standardScrollElements).length) {
            return true;
          }
        }

        if (locked === true) {
          return false;
        }

        if (e.keyCode == 38 || e.keyCode == 33) {
          if (index > 0) {
            if (atTop()) {
              e.preventDefault();
              index--; //index, instant, callbacks, toTop

              animateScroll(index, false, true, false);
            }
          }
        } else if (e.keyCode == 40 || e.keyCode == 34) {
          if (index < heights.length - 1) {
            if (atBottom()) {
              e.preventDefault();
              index++; //index, instant, callbacks, toTop

              animateScroll(index, false, true, false);
            }
          }
        }
      },
      init: function init() {
        if (settings.scrollbars) {
          $window.on('mousedown', manualScroll.handleMousedown);
          $window.on('mouseup', manualScroll.handleMouseup);
          $window.on('scroll', manualScroll.handleScroll);
        } else {
          $("body").css({
            "overflow": "hidden"
          });
        }

        window.addEventListener(wheelEvent, manualScroll.wheelHandler, {
          passive: false
        }); //$(document).bind(wheelEvent,manualScroll.wheelHandler);

        $window.on('keydown', manualScroll.keyHandler);
      }
    };
    swipeScroll = {
      touches: {
        "touchstart": {
          "y": -1,
          "x": -1
        },
        "touchmove": {
          "y": -1,
          "x": -1
        },
        "touchend": false,
        "direction": "undetermined"
      },
      options: {
        "distance": 30,
        "timeGap": 800,
        "timeStamp": new Date().getTime()
      },
      touchHandler: function touchHandler(event) {
        if (disabled === true) {
          return true;
        } else if (settings.standardScrollElements) {
          if ($(event.target).is(settings.standardScrollElements) || $(event.target).closest(settings.standardScrollElements).length) {
            return true;
          }
        }

        var touch;

        if (typeof event !== 'undefined') {
          if (typeof event.touches !== 'undefined') {
            touch = event.touches[0];

            switch (event.type) {
              case 'touchstart':
                swipeScroll.touches.touchstart.y = touch.pageY;
                swipeScroll.touches.touchmove.y = -1;
                swipeScroll.touches.touchstart.x = touch.pageX;
                swipeScroll.touches.touchmove.x = -1;
                swipeScroll.options.timeStamp = new Date().getTime();
                swipeScroll.touches.touchend = false;

              case 'touchmove':
                swipeScroll.touches.touchmove.y = touch.pageY;
                swipeScroll.touches.touchmove.x = touch.pageX;

                if (swipeScroll.touches.touchstart.y !== swipeScroll.touches.touchmove.y && Math.abs(swipeScroll.touches.touchstart.y - swipeScroll.touches.touchmove.y) > Math.abs(swipeScroll.touches.touchstart.x - swipeScroll.touches.touchmove.x)) {
                  //if(!overflow[index]) {
                  event.preventDefault(); //}

                  swipeScroll.touches.direction = "y";

                  if (swipeScroll.options.timeStamp + swipeScroll.options.timeGap < new Date().getTime() && swipeScroll.touches.touchend == false) {
                    swipeScroll.touches.touchend = true;

                    if (swipeScroll.touches.touchstart.y > -1) {
                      if (Math.abs(swipeScroll.touches.touchmove.y - swipeScroll.touches.touchstart.y) > swipeScroll.options.distance) {
                        if (swipeScroll.touches.touchstart.y < swipeScroll.touches.touchmove.y) {
                          swipeScroll.up();
                        } else {
                          swipeScroll.down();
                        }
                      }
                    }
                  }
                }

                break;

              case 'touchend':
                if (swipeScroll.touches[event.type] === false) {
                  swipeScroll.touches[event.type] = true;

                  if (swipeScroll.touches.touchstart.y > -1 && swipeScroll.touches.touchmove.y > -1 && swipeScroll.touches.direction === "y") {
                    if (Math.abs(swipeScroll.touches.touchmove.y - swipeScroll.touches.touchstart.y) > swipeScroll.options.distance) {
                      if (swipeScroll.touches.touchstart.y < swipeScroll.touches.touchmove.y) {
                        swipeScroll.up();
                      } else {
                        swipeScroll.down();
                      }
                    }

                    swipeScroll.touches.touchstart.y = -1;
                    swipeScroll.touches.touchstart.x = -1;
                    swipeScroll.touches.direction = "undetermined";
                  }
                }

              default:
                break;
            }
          }
        }
      },
      down: function down() {
        if (index < heights.length) {
          if (atBottom() && index < heights.length - 1) {
            index++; //index, instant, callbacks, toTop

            animateScroll(index, false, true, false);
          } else {
            portHeight = getportHeight();

            if (Math.floor(elements[index].height() / portHeight) > interstitialIndex) {
              interstitialScroll(parseInt(heights[index]) + portHeight * interstitialIndex);
              interstitialIndex += 1;
            } else {
              interstitialScroll(parseInt(heights[index]) + (elements[index].outerHeight() - portHeight));
            }
          }
        }
      },
      up: function up() {
        if (index >= 0) {
          if (atTop() && index > 0) {
            index--; //index, instant, callbacks, toTop

            animateScroll(index, false, true, false);
          } else {
            if (interstitialIndex > 2) {
              portHeight = getportHeight();
              interstitialIndex -= 1;
              interstitialScroll(parseInt(heights[index]) + portHeight * interstitialIndex);
            } else {
              interstitialIndex = 1;
              interstitialScroll(parseInt(heights[index]));
            }
          }
        }
      },
      init: function init() {
        if (document.addEventListener && settings.touchScroll) {
          var eventListenerOptions = {
            passive: false
          };
          document.addEventListener('touchstart', swipeScroll.touchHandler, eventListenerOptions);
          document.addEventListener('touchmove', swipeScroll.touchHandler, eventListenerOptions);
          document.addEventListener('touchend', swipeScroll.touchHandler, eventListenerOptions);
        }
      }
    };
    util = {
      refresh: function refresh(withCallback, scroll) {
        clearTimeout(timeoutId2);
        timeoutId2 = setTimeout(function () {
          //retain position
          sizePanels(true); //scroll, firstLoad

          calculatePositions(scroll, false);

          if (withCallback) {
            settings.afterResize();
          }
        }, 400);
      },
      handleUpdate: function handleUpdate() {
        //callbacks, scroll
        //changed from false,true to false,false
        util.refresh(false, false);
      },
      handleResize: function handleResize() {
        //callbacks, scroll
        util.refresh(true, false);
      },
      handleOrientation: function handleOrientation() {
        //callbacks, scroll
        util.refresh(true, true);
      }
    };
    settings = $.extend(settings, options); //retain position

    sizePanels(false);
    calculatePositions(false, true);

    if (true === hasLocation) {
      //index, instant, callbacks, toTop
      animateScroll(index, false, true, true);
    } else {
      setTimeout(function () {
        //instant,callbacks
        manualScroll.calculateNearest(true, false);
      }, 200);
    }

    if (heights.length) {
      manualScroll.init();
      swipeScroll.init();
      $window.on("resize", util.handleResize);

      if (document.addEventListener) {
        window.addEventListener("orientationchange", util.handleOrientation, false);
      }
    }

    function interstitialScroll(pos) {
      if ($().velocity) {
        $(settings.target).stop().velocity('scroll', {
          duration: settings.scrollSpeed,
          easing: settings.easing,
          offset: pos,
          mobileHA: false
        });
      } else {
        $(settings.target).stop().animate({
          scrollTop: pos
        }, settings.scrollSpeed, settings.easing);
      }
    }

    function sizePanels(keepPosition) {
      if (keepPosition) {
        top = $window.scrollTop();
      }

      var selector = settings.section;
      overflow = [];

      if (settings.interstitialSection.length) {
        selector += "," + settings.interstitialSection;
      }

      if (settings.scrollbars === false) {
        settings.overflowScroll = false;
      }

      portHeight = getportHeight();
      $(selector).each(function (i) {
        var $this = $(this);

        if (settings.setHeights) {
          if ($this.is(settings.interstitialSection)) {
            overflow[i] = false;
          } else {
            if ($this.css("height", "auto").outerHeight() < portHeight || $this.css("overflow") === "hidden") {
              $this.css({
                "height": portHeight
              });
              overflow[i] = false;
            } else {
              $this.css({
                "height": $this.outerHeight()
              });

              if (settings.overflowScroll) {
                overflow[i] = true;
              } else {
                overflow[i] = false;
              }
            }
          }
        } else {
          if ($this.outerHeight() < portHeight || settings.overflowScroll === false) {
            overflow[i] = false;
          } else {
            overflow[i] = true;
          }
        }
      });

      if (keepPosition) {
        $window.scrollTop(top);
      }
    }

    function calculatePositions(scroll, firstLoad) {
      var selector = settings.section;

      if (settings.interstitialSection.length) {
        selector += "," + settings.interstitialSection;
      }

      heights = [];
      names = [];
      elements = [];
      $(selector).each(function (i) {
        var $this = $(this);

        if (i > 0) {
          heights[i] = parseInt($this.offset().top) + settings.offset;
        } else {
          heights[i] = parseInt($this.offset().top);
        }

        if (settings.sectionName && $this.data(settings.sectionName)) {
          names[i] = "#" + $this.data(settings.sectionName).toString().replace(/ /g, "-");
        } else {
          if ($this.is(settings.interstitialSection) === false) {
            names[i] = "#" + (i + 1);
          } else {
            names[i] = "#";

            if (i === $(selector).length - 1 && i > 1) {
              heights[i] = heights[i - 1] + (parseInt($($(selector)[i - 1]).outerHeight()) - parseInt($(window).height())) + parseInt($this.outerHeight());
            }
          }
        }

        elements[i] = $this;

        try {
          if ($(names[i]).length && window.console) {
            console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.");
          }
        } catch (e) {}

        if (window.location.hash === names[i]) {
          index = i;
          hasLocation = true;
        }
      });

      if (true === scroll) {
        //index, instant, callbacks, toTop
        animateScroll(index, false, false, false);
      }
    }

    function atTop() {
      if (!overflow[index]) {
        return true;
      }

      top = $window.scrollTop();

      if (top > parseInt(heights[index])) {
        return false;
      } else {
        return true;
      }
    }

    function atBottom() {
      if (!overflow[index]) {
        return true;
      }

      top = $window.scrollTop();
      portHeight = getportHeight();

      if (top < parseInt(heights[index]) + (elements[index].outerHeight() - portHeight) - 28) {
        return false;
      } else {
        return true;
      }
    }
  };

  function move(panel, instant) {
    var z = names.length;

    for (; z >= 0; z--) {
      if (typeof panel === 'string') {
        if (names[z] === panel) {
          index = z; //index, instant, callbacks, toTop

          animateScroll(z, instant, true, true);
        }
      } else {
        if (z === panel) {
          index = z; //index, instant, callbacks, toTop

          animateScroll(z, instant, true, true);
        }
      }
    }
  }

  scrollify.move = function (panel) {
    if (panel === undefined) {
      return false;
    }

    if (panel.originalEvent) {
      panel = $(this).attr("href");
    }

    move(panel, false);
  };

  scrollify.instantMove = function (panel) {
    if (panel === undefined) {
      return false;
    }

    move(panel, true);
  };

  scrollify.next = function () {
    if (index < names.length) {
      index += 1; //index, instant, callbacks, toTop

      animateScroll(index, false, true, true);
    }
  };

  scrollify.previous = function () {
    if (index > 0) {
      index -= 1; //index, instant, callbacks, toTop

      animateScroll(index, false, true, true);
    }
  };

  scrollify.instantNext = function () {
    if (index < names.length) {
      index += 1; //index, instant, callbacks, toTop

      animateScroll(index, true, true, true);
    }
  };

  scrollify.instantPrevious = function () {
    if (index > 0) {
      index -= 1; //index, instant, callbacks, toTop

      animateScroll(index, true, true, true);
    }
  };

  scrollify.destroy = function () {
    if (!initialised) {
      return false;
    }

    if (settings.setHeights) {
      $(settings.section).each(function () {
        $(this).css("height", "auto");
      });
    }

    $window.off("resize", util.handleResize);

    if (settings.scrollbars) {
      $window.off('mousedown', manualScroll.handleMousedown);
      $window.off('mouseup', manualScroll.handleMouseup);
      $window.off('scroll', manualScroll.handleScroll);
    } // $window.off(wheelEvent,manualScroll.wheelHandler);


    window.removeEventListener(wheelEvent, manualScroll.wheelHandler);
    $window.off('keydown', manualScroll.keyHandler);

    if (document.addEventListener && settings.touchScroll) {
      document.removeEventListener('touchstart', swipeScroll.touchHandler, false);
      document.removeEventListener('touchmove', swipeScroll.touchHandler, false);
      document.removeEventListener('touchend', swipeScroll.touchHandler, false);
    }

    heights = [];
    names = [];
    elements = [];
    overflow = [];
  };

  scrollify.update = function () {
    if (!initialised) {
      return false;
    }

    util.handleUpdate();
  };

  scrollify.current = function () {
    return elements[index];
  };

  scrollify.currentIndex = function () {
    return index;
  };

  scrollify.disable = function () {
    disabled = true;
  };

  scrollify.enable = function () {
    disabled = false;

    if (initialised) {
      //instant,callbacks
      manualScroll.calculateNearest(false, false);
    }
  };

  scrollify.isDisabled = function () {
    return disabled;
  };

  scrollify.setOptions = function (updatedOptions) {
    if (!initialised) {
      return false;
    }

    if (_typeof(updatedOptions) === "object") {
      settings = $.extend(settings, updatedOptions);
      util.handleUpdate();
    } else if (window.console) {
      console.warn("Scrollify warning: setOptions expects an object.");
    }
  };

  $.scrollify = scrollify;
  return scrollify;
});
"use strict";

console.log('init');
"use strict";

var appsMenuItems = document.querySelectorAll('#appmenu > li');
var subMenuItems = document.querySelectorAll('#appmenu > li li');
var keys = {
  tab: 9,
  enter: 13,
  esc: 27,
  space: 32,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};
var currentIndex, subIndex;

var gotoIndex = function gotoIndex(idx) {
  if (idx == appsMenuItems.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = appsMenuItems.length - 1;
  }

  appsMenuItems[idx].focus();
  currentIndex = idx;
};

var gotoSubIndex = function gotoSubIndex(menu, idx) {
  var items = menu.querySelectorAll('li');

  if (idx == items.length) {
    idx = 0;
  } else if (idx < 0) {
    idx = items.length - 1;
  }

  items[idx].focus();
  subIndex = idx;
};

Array.prototype.forEach.call(appsMenuItems, function (el, i) {
  if (0 == i) {
    el.setAttribute('tabindex', '0');
    el.addEventListener("focus", function () {
      currentIndex = 0;
    });
  } else {
    el.setAttribute('tabindex', '-1');
  }

  el.addEventListener("focus", function () {
    subIndex = 0;
    Array.prototype.forEach.call(appsMenuItems, function (el, i) {
      el.setAttribute('aria-expanded', "false");
    });
  });
  el.addEventListener("click", function (event) {
    if (this.getAttribute('aria-expanded') == 'false' || this.getAttribute('aria-expanded') == null) {
      this.setAttribute('aria-expanded', "true");
    } else {
      this.setAttribute('aria-expanded', "false");
    }

    event.preventDefault();
    return false;
  });
  el.addEventListener("keydown", function (event) {
    var prevdef = false;

    switch (event.keyCode) {
      case keys.right:
        gotoIndex(currentIndex + 1);
        prevdef = true;
        break;

      case keys.left:
        gotoIndex(currentIndex - 1);
        prevdef = true;
        break;

      case keys.tab:
        if (event.shiftKey) {
          gotoIndex(currentIndex - 1);
        } else {
          gotoIndex(currentIndex + 1);
        }

        prevdef = true;
        break;

      case keys.enter:
      case keys.down:
        this.click();
        subindex = 0;
        gotoSubIndex(this.querySelector('ul'), 0);
        prevdef = true;
        break;

      case keys.up:
        this.click();
        var submenu = this.querySelector('ul');
        subindex = submenu.querySelectorAll('li').length - 1;
        gotoSubIndex(submenu, subindex);
        prevdef = true;
        break;

      case keys.esc:
        document.querySelector('#escape').setAttribute('tabindex', '-1');
        document.querySelector('#escape').focus();
        prevdef = true;
    }

    if (prevdef) {
      event.preventDefault();
    }
  });
});
Array.prototype.forEach.call(subMenuItems, function (el, i) {
  el.setAttribute('tabindex', '-1');
  el.addEventListener("keydown", function (event) {
    switch (event.keyCode) {
      case keys.tab:
        if (event.shiftKey) {
          gotoIndex(currentIndex - 1);
        } else {
          gotoIndex(currentIndex + 1);
        }

        prevdef = true;
        break;

      case keys.right:
        gotoIndex(currentIndex + 1);
        prevdef = true;
        break;

      case keys.left:
        gotoIndex(currentIndex - 1);
        prevdef = true;
        break;

      case keys.esc:
        gotoIndex(currentIndex);
        prevdef = true;
        break;

      case keys.down:
        gotoSubIndex(this.parentNode, subIndex + 1);
        prevdef = true;
        break;

      case keys.up:
        gotoSubIndex(this.parentNode, subIndex - 1);
        prevdef = true;
        break;

      case keys.enter:
      case keys.space:
        alert(this.innerText);
        prevdef = true;
        break;
    }

    if (prevdef) {
      event.preventDefault();
      event.stopPropagation();
    }

    return false;
  });
  el.addEventListener("click", function (event) {
    alert(this.innerHTML);
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
});
"use strict";

$(function () {
  var canvas = document.querySelector('#animations-section canvas');
  var c = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  /*
  	1. retangles
  	2. lines
  	3. arcs/circles
  	4. bezier curves
  	5. images
  	6. text
   */

  /*c.fillStyle = "#DA3A3F";
  c.fillRect(100,100,100,100);
  //line
  c.beginPath();
  c.moveTo(50, 300);
  c.lineTo(300, 100);
  c.lineTo(400,300);
  c.strokeStyle = "#127075";
  c.stroke();
  
  //arc
  c.beginPath(); //otherwise, the line will continue the previous lines
  c.arc(300,300, 30, 0, Math.PI, false);
  c.stroke();*/

  function animate() {
    requestAnimationFrame(animate);
  }

  $.scrollify({
    section: ".panel",
    sectionName: "section-name",
    interstitialSection: "",
    scrollSpeed: 1100,
    offset: 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: true,
    overflowScroll: true,
    updateHash: true,
    touchScroll: true,
    before: function before() {},
    after: function after(index, sections) {
      $(sections[index]).addClass('visited');
    },
    afterResize: function afterResize() {},
    afterRender: function afterRender() {}
  });
  $('.next-panel-link').on('click', function (e) {
    e.preventDefault();
    $.scrollify.next();
  });
  var skills = ['HTML', 'HTML 5', 'CSS', 'CSS3', 'XML', 'JSON', 'JavaScript', 'ES6', 'JSX', 'PHP', 'ASP', 'JSP', 'MySQL', 'Node.js', 'Sass', 'Less', 'Grunt', 'Gulp', 'Webpack', 'NPM', 'Responsive Web Design', 'WCAG 2.0', 'Git', 'SVN', 'Bootstrap', 'Foundation Framework', 'Cordova', 'Backbone', 'Underscore', 'jQuery', 'React', 'SQL Server', 'MySQL'];
  var backgroundTextColors = ['#00ff00', '#fff', '#ffff00'];
  /*
  backgroundAnimation({
  	container:'#words-drop-section',
  	speed:10000,
  	density:60,
  	text:skills,
  	colors:backgroundTextColors
  });*/
});

function backgroundAnimation(obj) {
  var container = document.querySelector(obj.container);

  if (container != null) {
    var containerWidth = container.clientWidth;
    var skillsCount = obj.text.length;
    var skillsDom = [];
    var colorsCount = obj.colors.length;

    for (var i = 0; i < skillsCount; i++) {
      var dom = document.createElement('span');
      var domText = document.createTextNode(obj.text[i]);
      dom.appendChild(domText);
      dom.className = "text";
      skillsDom.push(dom);
    }

    setInterval(function () {
      var dom = skillsDom[Math.floor(Math.random() * skillsCount)];
      var domStyle = {
        left: Math.random(),
        color: obj.colors[Math.floor(Math.random() * colorsCount)],
        duration: parseInt(obj.speed / 1000),
        deep: Math.floor(Math.random() * 200)
      };
      dom.setAttribute('style', "left:".concat(domStyle.left * 100, "%; color:").concat(domStyle.color, "; animation-duration:").concat(domStyle.duration, "s; transform: translateZ(").concat(domStyle.deep, "px);"));
      container.appendChild(dom);
      var removeIt = setTimeout(function () {
        dom.remove();
        clearTimeout(removeIt);
      }, obj.speed);
    }, obj.speed / obj.density);
  }
}