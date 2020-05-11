const DOM1 = {};
DOM1.svg = document.querySelector('#morph1');
DOM1.shapeEl = DOM1.svg.querySelector('path');

const DOM2 = {};
DOM2.svg = document.querySelector('#morph2');
DOM2.shapeEl = DOM2.svg.querySelector('path');

const DOM3 = {};
DOM3.svg = document.querySelector('#morph3');
DOM3.shapeEl = DOM3.svg.querySelector('path');

const DOM4 = {};
DOM4.svg = document.querySelector('#morph4');
DOM4.shapeEl = DOM4.svg.querySelector('path');

const DOM5 = {};
DOM5.svg = document.querySelector('#morph5');
DOM5.shapeEl = DOM5.svg.querySelector('path');

const DOM6 = {};
DOM6.svg = document.querySelector('#morph6');
DOM6.shapeEl = DOM6.svg.querySelector('path');

const DOMS = [DOM1, DOM2, DOM3, DOM4, DOM5, DOM6];


const initShapeLoop = function(shape, DOM, duration, easing) {
    var dur = duration || 5000;
    var ease = easing || 'easeInOutQuad'; //'linear', 'easeInOutSine'
    anime.remove(DOM.shapeEl);
    anime({
        targets: DOM.shapeEl,
        easing: ease,
        d: [{value: shape.pathAlt, duration:dur}, {value: shape.path, duration:dur}],
        loop: true,
        fill: {
            value: shape.fill.color,
            duration: shape.fill.duration,
            easing: shape.fill.easing
        },
        direction: 'alternate'
    });
};

const initShapeEl = function(shape, DOM, duration) {
    anime.remove(DOM.svg);
    anime({
        targets: DOM.svg,
        duration: 1,
        easing: 'linear',
        scaleX: shape.scaleX,
        scaleY: shape.scaleY,
        translateX: shape.tx+'px',
        translateY: shape.ty+'px',
        rotate: shape.rotate+'deg'
    });

    initShapeLoop(shape, DOM, duration);

};

const init = function() {
    imagesLoaded(document.body, () => {
        initShapeEl(shapesArray[0][0], DOM1, 4500);
        initShapeEl(shapesArray[1][0], DOM2, 4000);
        initShapeEl(shapesArray[2][0], DOM3, 5500);
        initShapeEl(shapesArray[3][0], DOM4, 4500, 'easeInOutSine');
        initShapeEl(shapesArray[4][0], DOM5, 5500, 'easeInOutSine');
        initShapeEl(shapesArray[5][0], DOM6, 4000, 'easeInOutSine');
    });
};

$(document).ready(function() {
    init();
    $('#fullpage').fullpage({
        scrollOverflow:true,
        paddingTop:'50px',
        paddingBottom:'50px',});
});
