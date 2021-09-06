function _typeof(obj) {
    '@babel/helpers - typeof';

    if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj;
        };
    }
    return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
    value: true,
});
exports.Comment = void 0;

const _react = _interopRequireWildcard(require('react'));

const _propTypes = _interopRequireDefault(require('prop-types'));

const _core = require('@material-ui/core');

const _moment = _interopRequireDefault(require('moment'));

const _useSafeIntl = require('../../../utils/useSafeIntl');

const _messages = require('./messages');

const _styles = require('../styles');

const _utils = require('../../../utils');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    const cacheBabelInterop = new WeakMap();
    const cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(
        nodeInterop,
    ) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (
        obj === null ||
        (_typeof(obj) !== 'object' && typeof obj !== 'function')
    ) {
        return { default: obj };
    }
    const cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    const newObj = {};
    const hasPropertyDescriptor =
        Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (const key in obj) {
        if (
            key !== 'default' &&
            Object.prototype.hasOwnProperty.call(obj, key)
        ) {
            const desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}

function _slicedToArray(arr, i) {
    return (
        _arrayWithHoles(arr) ||
        _iterableToArrayLimit(arr, i) ||
        _unsupportedIterableToArray(arr, i) ||
        _nonIterableRest()
    );
}

function _nonIterableRest() {
    throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
    let n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === 'Object' && o.constructor) n = o.constructor.name;
    if (n === 'Map' || n === 'Set') return Array.from(o);
    if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
        return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

function _iterableToArrayLimit(arr, i) {
    let _i =
        arr == null
            ? null
            : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
              arr['@@iterator'];
    if (_i == null) return;
    const _arr = [];
    let _n = true;
    let _d = false;
    let _s;
    let _e;
    try {
        for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally {
        try {
            if (!_n && _i.return != null) _i.return();
        } finally {
            if (_d) throw _e;
        }
    }
    return _arr;
}

function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}

const MAX_TEXT_LENGTH = 150;

const CommentText = function CommentText(_ref) {
    const { text } = _ref;
    const { hideOverflow } = _ref;
    const { toggle } = _ref;
    const { maxLength } = _ref;
    const { textExpand } = _ref;
    const { textCollapse } = _ref;
    const classes = (0, _styles.useStyles)();
    const intl = (0, _useSafeIntl.useSafeIntl)();
    return /* #__PURE__ */ _react.default.createElement(
        'div',
        {
            className: classes.commentText,
        },
        /* #__PURE__ */ _react.default.createElement(
            'p',
            null,
            hideOverflow && text.length > maxLength
                ? (0, _utils.truncateText)(text, MAX_TEXT_LENGTH)
                : text,
            ' ',
        ),
        hideOverflow &&
            /* #__PURE__ */ _react.default.createElement(
                'span',
                {
                    onClick: toggle,
                    className: classes.toggleCommentText,
                    role: 'button',
                    tabIndex: 0,
                },
                textExpand !== null && textExpand !== void 0
                    ? textExpand
                    : intl.formatMessage(_messages.MESSAGES.textExpand),
            ),
        !hideOverflow &&
            text.length > maxLength &&
            /* #__PURE__ */ _react.default.createElement(
                'span',
                {
                    onClick: toggle,
                    className: classes.toggleCommentText,
                    role: 'button',
                    tabIndex: 0,
                },
                textCollapse !== null && textCollapse !== void 0
                    ? textCollapse
                    : intl.formatMessage(_messages.MESSAGES.textCollapse),
            ),
    );
};

CommentText.propTypes = {
    text: _propTypes.default.string.isRequired,
    hideOverflow: _propTypes.default.bool.isRequired,
    toggle: _propTypes.default.func.isRequired,
    maxLength: _propTypes.default.number.isRequired,
    textExpand: _propTypes.default.string,
    textCollapse: _propTypes.default.string,
};
CommentText.defaultProps = {
    textExpand: null,
    textCollapse: null,
}; // credit: https://codesandbox.io/s/comment-box-with-material-ui-10p3c?file=/src/index.js:2810-4030

const Comment = function Comment(_ref2) {
    const { avatar } = _ref2;
    const { author } = _ref2;
    const { content } = _ref2;
    const { postingTime } = _ref2;
    const { classNames } = _ref2;
    const intl = (0, _useSafeIntl.useSafeIntl)();
    const defaultClasses = (0, _styles.useStyles)();

    const _useState = (0, _react.useState)(content.length > MAX_TEXT_LENGTH);
    const _useState2 = _slicedToArray(_useState, 2);
    const hideTextOverflow = _useState2[0];
    const setHideTextOverflow = _useState2[1];

    const toggleOverflowDisplay = (0, _react.useCallback)(
        () => setHideTextOverflow(!hideTextOverflow),
        [hideTextOverflow],
    );
    const classes =
        classNames !== null && classNames !== void 0
            ? classNames
            : defaultClasses;
    const formattedPostingTime = ''
        .concat(intl.formatMessage(_messages.MESSAGES.postingTime), '  ')
        .concat((0, _moment.default)(postingTime).fromNow());
    return /* #__PURE__ */ _react.default.createElement(
        _core.Grid,
        {
            container: true,
            wrap: 'nowrap',
            spacing: 4,
        },
        /* #__PURE__ */ _react.default.createElement(
            _core.Grid,
            {
                item: true,
            },
            /* #__PURE__ */ _react.default.createElement(_core.Avatar, {
                alt: author,
                src: avatar,
            }),
        ),
        /* #__PURE__ */ _react.default.createElement(
            _core.Grid,
            {
                className: classes.commentGrid,
                item: true,
                xs: true,
                zeroMinWidth: true,
            },
            /* #__PURE__ */ _react.default.createElement(
                'h4',
                {
                    className: classes.commentAuthor,
                },
                author,
            ),
            /* #__PURE__ */ _react.default.createElement(CommentText, {
                text: content,
                hideOverflow: hideTextOverflow,
                toggle: toggleOverflowDisplay,
                maxLength: MAX_TEXT_LENGTH,
            }),
            /* #__PURE__ */ _react.default.createElement(
                _core.Typography,
                {
                    variant: 'body2',
                    className: classes.commentPostingTime,
                    component: 'div',
                },
                formattedPostingTime,
            ),
        ),
    );
};

exports.Comment = Comment;
Comment.propTypes = {
    avatar: _propTypes.default.string,
    author: _propTypes.default.string.isRequired,
    content: _propTypes.default.string.isRequired,
    postingTime: _propTypes.default.string,
    classNames: _propTypes.default.arrayOf(_propTypes.default.string),
};
Comment.defaultProps = {
    avatar: null,
    postingTime: '',
    classNames: null,
};
