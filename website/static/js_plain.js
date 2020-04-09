// colors:
// türkis      : #29F6D3
// yellow      : #FDEF59
// purple      : #6644FD
// pink        : #FFBBFC
// grey bright : #CBCBCB
// grey dark   : #868A81
{
    const shapesArray = [
        [
            {
                path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
                pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
                scaleX: 1,
                scaleY: 1,
                rotate: 0,
                tx: 0,
                ty: 0,
                fill: {
                    color: '#29F6D3',
                    duration: 500,
                    easing: 'linear'
                },
                animation: {
                    path: {
                        duration: 3000,
                        easing: 'easeOutElastic',
                        elasticity: 600
                    },
                    svg: {
                        duration: 2000,
                        easing: 'easeOutElastic'
                    }
                }
            },
        ],

        [
            {
                path: "M190.882318,422.991582 C291.540494,373.409903 334.32884,348.516665 409.756717,311.643319 C485.184595,274.769974 547.619128,225.338087 665.102251,319.059696 C782.585373,412.781305 890.419268,464.832506 951.200371,484.180475 C1011.98147,503.528444 1155.27001,567.809044 1134.89949,394.603386 C1114.52897,221.397728 1084.22053,36.0591414 1059.78997,1.43587113 C1057.18246,-2.25952259 965.990181,-119.066861 847.448106,-115.938264 C693.678755,-111.879939 284.285495,-111.879939 -8.93242202,-28.340559 C-158.81077,14.3605981 -188.319274,123.266041 -201.017035,195.105912 C-227.608602,345.552491 -69.2882898,467.279781 -8.93242202,467.279781 C51.4234458,467.279781 90.2241416,472.573261 190.882318,422.991582 Z",
                pathAlt:"M190.882318,422.991582 C291.540494,373.409903 334.32884,348.516665 409.756717,311.643319 C485.184595,274.769974 547.619128,225.338087 665.102251,319.059696 C782.585373,412.781305 890.419268,464.832506 951.200371,484.180475 C1011.98147,503.528444 1155.27001,567.809044 1134.89949,394.603386 C1114.52897,221.397728 1084.22053,36.0591414 1059.78997,1.43587113 C1057.18246,-2.25952259 965.990181,-119.066861 847.448106,-115.938264 C693.678755,-111.879939 284.285495,-111.879939 -8.93242202,-28.340559 C-158.81077,14.3605981 -188.319274,123.266041 -201.017035,195.105912 C-227.608602,345.552491 -69.2882898,467.279781 -8.93242202,467.279781 C51.4234458,467.279781 90.2241416,472.573261 190.882318,422.991582 Z",
                scaleX: 1,
                scaleY: 1,
                rotate: 0,
                tx: 0,
                ty: 0,
                fill: {
                    color: '#FDEF59',
                    duration: 500,
                    easing: 'linear'
                },
                animation: {
                    path: {
                        duration: 1000,
                        easing: 'easeInOutQuad'
                    },
                    svg: {
                        duration: 1000,
                        easing: 'easeInOutQuad'
                    }
                }
            }
        ],

        [
            {
                path: "m543.08 289.17c0 55.9-44 108.5-90.3 108.5-46.4 0-95-52.6-95-108.5 0-55.8 48.6-114.8 95-114.8 46.3 0 90.3 59 90.3 114.8z",
                pathAlt: "m517.66 261.21c50.884 23.144 1.8544 71.897-78.224 90.068-34.987 7.9391-69.471-91.492-95-109.77-45.369-32.485 13.645-74.598 60.042-74.122 44.974 0.46138 43.663 62.206 113.18 93.825z",
                scaleX: 1,
                scaleY: 1,
                rotate: 0,
                tx: 0,
                ty: 0,
                fill: {
                    color: '#6644FD',
                    duration: 500,
                    easing: 'linear'
                },
                animation: {
                    path: {
                        duration: 1000,
                        easing: 'easeInOutQuad'
                    },
                    svg: {
                        duration: 1000,
                        easing: 'easeInOutQuad'
                    }
                }
            }]
    ];

    const DOM1 = {};
    DOM1.svg = document.querySelector('#morph1');
    DOM1.shapeEl = DOM1.svg.querySelector('path');

    const DOM2 = {};
    DOM2.svg = document.querySelector('#morph2');
    DOM2.shapeEl = DOM2.svg.querySelector('path');

    const DOM3 = {};
    DOM3.svg = document.querySelector('#morph3');
    DOM3.shapeEl = DOM3.svg.querySelector('path');

    const DOMS = [DOM1, DOM2, DOM3];


    const initShapeLoop = function(shape, DOM, duration) {
        var dur = duration || 3500;
        anime.remove(DOM.shapeEl);
        anime({
            targets: DOM.shapeEl,
            easing: 'linear',
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
            initShapeEl(shapesArray[0][0], DOM1, 3500);
            initShapeEl(shapesArray[1][0], DOM2, 4000);
            initShapeEl(shapesArray[2][0], DOM3, 5500);
        });
    };

    $(document).ready(function() {
        init();
    });



};
