function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var ScrollProgress =
/*#__PURE__*/
function () {
  function ScrollProgress(options) {
    _classCallCheck(this, ScrollProgress);

    this.options = {
      height: '3px',
      color: '#2980B9',
      onReachBottom: function onReachBottom() {},
      onReachTop: function onReachTop() {}
    };
    this.generate();
    this.listen();
  }

  _createClass(ScrollProgress, [{
    key: "generate",
    value: function generate() {
      var _this$options = this.options,
          height = _this$options.height,
          color = _this$options.color;
      this.el = document.createElement('div');
      this.el.className = this.className;
      this.el.style.position = 'fixed';
      this.el.style.height = height;
      this.el.style.background = color;
      this.el.style.borderRadius = '2px';
      this.el.style.top = 0;
      this.el.style.left = 0;
      document.body.appendChild(this.el);
    }
  }, {
    key: "listen",
    value: function listen() {
      var _this = this;

      window.addEventListener('scroll', function () {
        if (document.documentElement.scrollTop === document.documentElement.scrollHeight - document.documentElement.clientHeight) {
          _this.options.onReachBottom();
        }

        if (document.documentElement.scrollTop === 0) {
          _this.options.onReachTop();
        }

        _this.calc();
      });
      window.addEventListener('resize', this.calc.bind(this));
    }
  }, {
    key: "calc",
    value: function calc() {
      var totalHeight = document.documentElement.scrollHeight;
      var availableHeight = document.documentElement.clientHeight;
      var ratio = document.documentElement.scrollTop / (totalHeight - availableHeight) * 100 + '%';
      this.el.style.width = ratio;
    }
  }]);

  return ScrollProgress;
}();

export default ScrollProgress;
