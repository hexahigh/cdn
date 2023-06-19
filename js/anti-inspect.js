// This simple script fills the network tab with empty requests causing the page to crash if the user tries opening the inspect element tools.
// I wouldnt recommend using this during development unless you want to make it impossible to debug.

// How to use
// 1. Import the code
// import{delay, spamnettab, clearconsole, disableKeys, debugProtection} from '/data/js/EXAMPLE'
// Replace the url at the end with the url to the script.

// When you have done that you can simply call the functions from another javascript file.


// Set delay to ms
export function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });
}
//Spam network tab script
export async function spamnettab() {
    while (enabled == true) {
        await delay(10);
        fetch('https://hexahigh.github.io/cdn/other/main.mp3')
        await delay(10);
        fetch('https://hexahigh.github.io/cdn/other/main.png')
        await delay(10);
        fetch('https://hexahigh.github.io/cdn/other/main.mp4')
    }
}

// Attempt to clear console
export async function clearconsole() {
    while (true) {
        clear();
        console.clear();
        await delay(50)
    }
}

// Disable keys
export async function disableKeys() {
    document.onkeydown = function (e) {
        // disable f12
        if (event.keyCode == 123) {
            return false;
        }
        // disable ctrl+shift+I
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
        }
        // disable ctrl+shift+C
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
        }
        // disable ctrl+shift+j
        if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
        }
        // disable ctrl+shift+U
        if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
        }
    }
}

export function debugProtection() {
            // debug protection (crashes the browser completely)
            (function () {
                var _0xf487d2 = function () {
                    var _0x32885d;
                    try {
                        _0x32885d = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                    } catch (_0x4bc38c) {
                        _0x32885d = window;
                    }
                    return _0x32885d;
                };
                var _0x265b5d = _0xf487d2();
                _0x265b5d['setInterval'](_0x4921c6, 0x9c4);
            }());
        var _0x36cd18 = (function () {
            var _0xf92e75 = !![];
            return function (_0x2515bd, _0x525582) {
                var _0x492e4b = _0xf92e75 ? function () {
                    if (_0x525582) {
                        var _0x298729 = _0x525582['apply'](_0x2515bd, arguments);
                        _0x525582 = null;
                        return _0x298729;
                    }
                } : function () {
                };
                _0xf92e75 = ![];
                return _0x492e4b;
            };
        }());
        (function () {
            _0x36cd18(this, function () {
                var _0x27cb8f = new RegExp('function\x20*\x5c(\x20*\x5c)');
                var _0x40c5ef = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
                var _0xd25d0e = _0x4921c6('init');
                if (!_0x27cb8f['test'](_0xd25d0e + 'chain') || !_0x40c5ef['test'](_0xd25d0e + 'input')) {
                    _0xd25d0e('0');
                } else {
                    _0x4921c6();
                }
            })();
        }());
        function _0x4921c6(_0xc4e964) {
            function _0x22f9e3(_0x6ac874) {
                if (typeof _0x6ac874 === 'string') {
                    return function (_0x5381f4) {
                    }['constructor']('while\x20(true)\x20{}')['apply']('counter');
                } else {
                    if (('' + _0x6ac874 / _0x6ac874)['length'] !== 0x1 || _0x6ac874 % 0x14 === 0x0) {
                        (function () {
                            return !![];
                        }['constructor']('debu' + 'gger')['call']('action'));
                    } else {
                        (function () {
                            return ![];
                        }['constructor']('debu' + 'gger')['apply']('stateObject'));
                    }
                }
                _0x22f9e3(++_0x6ac874);
            }
            try {
                if (_0xc4e964) {
                    return _0x22f9e3;
                } else {
                    _0x22f9e3(0x0);
                }
            } catch (_0x114d7f) {
            }
        }
}
