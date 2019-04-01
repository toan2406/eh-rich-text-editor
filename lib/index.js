'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var slate = require('slate');
var slateReact = require('slate-react');
var styled = _interopDefault(require('styled-components'));

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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var ACTIVE_BUTTON_COLOR = '#000';
var INACTIVE_BUTTON_COLOR = '#aaa';
var BORDER_COLOR = '#e0e0e0';
var TEXT_COLOR = '#333';
var LIGHT_TEXT_COLOR = '#d0d0d0';

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border: solid thin ", ";\n  border-radius: 4px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Container = styled.div(_templateObject(), BORDER_COLOR);

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: solid thin ", ";\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Toolbar = styled.div(_templateObject$1(), BORDER_COLOR);

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n  box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.1);\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Content = styled.div(_templateObject$2());

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  min-width: 100px;\n  height: 40px;\n  line-height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  border-bottom: ", ";\n  font-size: 0.85em;\n  color: ", ";\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.03);\n  }\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 40px;\n  left: -1px;\n  display: none;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  border: solid thin ", ";\n  background: white;\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}

var getBorderByProp = function getBorderByProp(_ref) {
  var isSeparated = _ref.isSeparated;
  return isSeparated ? "solid thin ".concat(BORDER_COLOR) : 'none';
};

var disabledItemStyle = "\n  pointer-events: none;\n  color: ".concat(LIGHT_TEXT_COLOR, ";\n");
var Menu = styled.ul(_templateObject$3(), BORDER_COLOR);
var MenuItem = styled.li(_templateObject2(), getBorderByProp, TEXT_COLOR, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? disabledItemStyle : '';
});

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  vertical-align: middle;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 40px;\n  min-height: 40px;\n  border-right: ", ";\n  color: ", ";\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(0, 0, 0, 0.03);\n\n    ", " {\n      display: block;\n    }\n  }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}

var getColorByStatus = function getColorByStatus(_ref) {
  var active = _ref.active;
  return active ? ACTIVE_BUTTON_COLOR : INACTIVE_BUTTON_COLOR;
};

var getBorderByProp$1 = function getBorderByProp(_ref2) {
  var isSeparated = _ref2.isSeparated;
  return isSeparated ? "solid thin ".concat(BORDER_COLOR) : 'none';
};

styled.div(_templateObject$4(), getBorderByProp$1, getColorByStatus, Menu);

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 18px;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
styled.span.attrs({
  className: 'material-icons'
})(_templateObject$5());

var noop = function noop() {};

var fromJSON = slate.Value.fromJSON;

var RichTextEditor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(RichTextEditor, _React$Component);

  function RichTextEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, RichTextEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RichTextEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      editor: null
    });

    _defineProperty(_assertThisInitialized(_this), "ref", function (editor) {
      return _this.setState({
        editor: editor
      });
    });

    return _this;
  }

  _createClass(RichTextEditor, [{
    key: "render",
    value: function render() {
      var editor = this.state.editor;

      var _this$props = this.props,
          value = _this$props.value,
          onChange = _this$props.onChange,
          _this$props$plugins = _this$props.plugins,
          plugins = _this$props$plugins === void 0 ? [] : _this$props$plugins,
          otherProps = _objectWithoutProperties(_this$props, ["value", "onChange", "plugins"]);

      var buttons = editor && plugins.map(function (_ref, index) {
        var _ref$renderButton = _ref.renderButton,
            renderButton = _ref$renderButton === void 0 ? noop : _ref$renderButton;
        return renderButton({
          key: index
        }, editor);
      });
      return React.createElement(Container, null, React.createElement(Toolbar, null, buttons), React.createElement(Content, null, React.createElement(slateReact.Editor, _extends({
        ref: this.ref,
        plugins: plugins,
        value: value,
        onChange: onChange,
        style: {
          padding: 20
        }
      }, otherProps))));
    }
  }]);

  return RichTextEditor;
}(React.Component);

exports.default = RichTextEditor;
exports.fromJSON = fromJSON;
