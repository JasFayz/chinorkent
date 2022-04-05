$(document).ready(function () {
    svg4everybody({
        fallback: function (src, svg, use) {
            return 'fallback.png'; // ok, always return fallback.png
        }
    });

    

    $("#my_nanogallery2").nanogallery2({
        thumbnailHeight: 369,
        thumbnailWidth: 414,
        thumbnailBorderHorizontal: 0,
        thumbnailBorderVertical: 0,
        thumbnailGutterWidth: 20,
        thumbnailGutterHeight: 20,
        thumbnailHoverEffect2: 'imageScale150',
        galleryMosaicXL: [
            { "c": 1, "r": 1, "w": 2, "h": 2 },
            { "c": 3, "r": 1, "w": 1, "h": 1 },
            { "c": 4, "r": 1, "w": 1, "h": 1 },
            { "c": 3, "r": 2, "w": 1, "h": 1 },
            { "c": 4, "r": 2, "w": 1, "h": 1 },
            { "c": 1, "r": 3, "w": 1, "h": 1 },
            { "c": 2, "r": 3, "w": 1, "h": 1 },
            { "c": 3, "r": 3, "w": 1, "h": 1 },
            { "c": 4, "r": 3, "w": 1, "h": 1 },
        ],
        galleryMosaicLA: [
            { "c": 1, "r": 1, "w": 2, "h": 2 },
            { "c": 3, "r": 1, "w": 1, "h": 1 },
            { "c": 4, "r": 1, "w": 1, "h": 1 },
            { "c": 3, "r": 2, "w": 1, "h": 1 },
            { "c": 4, "r": 2, "w": 1, "h": 1 },
            { "c": 1, "r": 3, "w": 1, "h": 1 },
            { "c": 2, "r": 3, "w": 1, "h": 1 },
            { "c": 3, "r": 3, "w": 1, "h": 1 },
            { "c": 4, "r": 3, "w": 1, "h": 1 },
        ],
        galleryMosaicME: [
            { "c": 1, "r": 1, "w": 2, "h": 2 },
            { "c": 3, "r": 1, "w": 1, "h": 1 },
            { "c": 4, "r": 1, "w": 1, "h": 1 },
            { "c": 3, "r": 2, "w": 1, "h": 1 },
            { "c": 4, "r": 2, "w": 1, "h": 1 },
            { "c": 1, "r": 3, "w": 1, "h": 1 },
            { "c": 2, "r": 3, "w": 1, "h": 1 },
            { "c": 3, "r": 3, "w": 1, "h": 1 },
            { "c": 4, "r": 3, "w": 1, "h": 1 },
        ],
        galleryMosaicSM: [
            { "c": 1, "r": 1, "w": 4, "h": 2 },
            { "c": 1, "r": 3, "w": 1, "h": 1 },
            { "c": 2, "r": 3, "w": 1, "h": 1 },
            { "c": 3, "r": 3, "w": 1, "h": 1 },
            { "c": 4, "r": 3, "w": 1, "h": 1 },
            { "c": 1, "r": 4, "w": 1, "h": 1 },
            { "c": 2, "r": 4, "w": 1, "h": 1 },
            { "c": 3, "r": 4, "w": 1, "h": 1 },
            { "c": 4, "r": 4, "w": 1, "h": 1 },
        ],
       

    });
  
    AOS.init();
  
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}

