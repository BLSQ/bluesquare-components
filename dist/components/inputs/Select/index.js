"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Select = void 0;
Object.defineProperty(exports, "baseRenderTagsWithTooltip", {
  enumerable: true,
  get: function get() {
    return _utils.baseRenderTagsWithTooltip;
  }
});
Object.defineProperty(exports, "renderTags", {
  enumerable: true,
  get: function get() {
    return _utils.baseRenderTags;
  }
});
Object.defineProperty(exports, "renderTagsWithTooltip", {
  enumerable: true,
  get: function get() {
    return _utils.renderTagsWithTooltip;
  }
});
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _messages = require("./messages");
var _multi = require("./multi");
var _single = require("./single");
var _utils = require("./utils");
/**
 * Select Component - A versatile dropdown selector with single and multi-select modes
 *
 * ## Key Customization Props
 *
 * ### renderOption vs renderTags - What's the difference?
 *
 * **renderOption**: Controls how options appear in the DROPDOWN LIST (when opened)
 * - Applies to: Both single and multi-select
 * - Use when: You want to customize how items look in the dropdown menu
 * - Example: Add icons, colors, or custom styling to dropdown items
 *
 * **renderTags**: Controls how SELECTED items appear as chips in the INPUT FIELD (multi-select only)
 * - Applies to: Multi-select only
 * - Use when: You want to customize the appearance of selected chips/tags
 * - Example: Change chip colors, add tooltips, or custom chip styling
 *
 * ## Visual Guide
 * ```
 * ┌─────────────────────────┐
 * │ [Tag1] [Tag2]      ▼    │ ← renderTags controls these chips
 * └─────────────────────────┘
 * ┌─────────────────────────┐
 * │ ✓ Option 1              │ ← renderOption controls these items
 * │   Option 2              │
 * │   Option 3              │
 * └─────────────────────────┘
 * ```
 *
 * @component
 * @example
 * // Single select
 * <Select
 *   keyValue="country"
 *   options={[{ value: 'fr', label: 'France' }, { value: 'us', label: 'USA' }]}
 *   value="fr"
 *   onChange={(value) => console.log(value)}
 * />
 *
 * @example
 * // Multi select with custom renderTags
 * <Select
 *   multi
 *   keyValue="tags"
 *   options={[{ value: 1, label: 'Tag 1', color: '#ff0000' }, { value: 2, label: 'Tag 2', color: '#00ff00' }]}
 *   value="1,2"
 *   onChange={(value) => console.log(value)}
 *   renderTags={(tagValue, getTagProps) =>
 *     tagValue.map((option, index) => (
 *       <Chip
 *         label={option.label}
 *         style={{ backgroundColor: option.color }}
 *         {...getTagProps({ index })}
 *       />
 *     ))
 *   }
 * />
 *
 * @example
 * // Custom renderOption for dropdown items
 * <Select
 *   keyValue="status"
 *   options={[{ value: 1, label: 'Active', icon: '✓' }, { value: 2, label: 'Inactive', icon: '✗' }]}
 *   value={1}
 *   onChange={(value) => console.log(value)}
 *   renderOption={(props, option) => (
 *     <li {...props}>
 *       <span>{option.icon} {option.label}</span>
 *     </li>
 *   )}
 * />
 */
var SelectCustom = exports.Select = function SelectCustom(_ref) {
  var _ref$multi = _ref.multi,
    multi = _ref$multi === void 0 ? false : _ref$multi,
    _ref$errors = _ref.errors,
    errors = _ref$errors === void 0 ? [] : _ref$errors,
    keyValue = _ref.keyValue,
    label = _ref.label,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$clearable = _ref.clearable,
    clearable = _ref$clearable === void 0 ? true : _ref$clearable,
    value = _ref.value,
    _ref$onBlur = _ref.onBlur,
    onBlur = _ref$onBlur === void 0 ? function () {} : _ref$onBlur,
    _ref$loadingText = _ref.loadingText,
    loadingText = _ref$loadingText === void 0 ? _messages.MESSAGES.loadingOptions : _ref$loadingText,
    _ref$noOptionsText = _ref.noOptionsText,
    noOptionsText = _ref$noOptionsText === void 0 ? _messages.MESSAGES.noOptions : _ref$noOptionsText,
    helperText = _ref.helperText,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    onChange = _ref.onChange,
    _ref$getOptionLabel = _ref.getOptionLabel,
    getOptionLabel = _ref$getOptionLabel === void 0 ? null : _ref$getOptionLabel,
    _ref$getOptionSelecte = _ref.getOptionSelected,
    getOptionSelected = _ref$getOptionSelecte === void 0 ? null : _ref$getOptionSelecte,
    _ref$renderOption = _ref.renderOption,
    renderOption = _ref$renderOption === void 0 ? null : _ref$renderOption,
    _ref$renderTags = _ref.renderTags,
    renderTags = _ref$renderTags === void 0 ? _utils.defaultRenderTags : _ref$renderTags,
    _ref$returnFullObject = _ref.returnFullObject,
    returnFullObject = _ref$returnFullObject === void 0 ? false : _ref$returnFullObject,
    placeholder = _ref.placeholder,
    _ref$freeSolo = _ref.freeSolo,
    freeSolo = _ref$freeSolo === void 0 ? false : _ref$freeSolo,
    dataTestId = _ref.dataTestId,
    _ref$useBuiltInErrors = _ref.useBuiltInErrors,
    useBuiltInErrors = _ref$useBuiltInErrors === void 0 ? true : _ref$useBuiltInErrors;
  if (multi) {
    return /*#__PURE__*/_react["default"].createElement(_multi.MultiSelect, {
      errors: errors,
      keyValue: keyValue,
      label: label,
      required: required,
      disabled: disabled,
      clearable: clearable,
      value: value,
      onBlur: onBlur,
      loadingText: loadingText,
      noOptionsText: noOptionsText,
      helperText: helperText,
      options: options,
      loading: loading,
      onChange: onChange,
      getOptionLabel: getOptionLabel,
      getOptionSelected: getOptionSelected,
      renderOption: renderOption,
      renderTags: renderTags,
      returnFullObject: returnFullObject,
      placeholder: placeholder,
      freeSolo: freeSolo,
      dataTestId: dataTestId,
      useBuiltInErrors: useBuiltInErrors
    });
  }
  return /*#__PURE__*/_react["default"].createElement(_single.SingleSelect, {
    errors: errors,
    keyValue: keyValue,
    label: label,
    required: required,
    disabled: disabled,
    clearable: clearable,
    value: value,
    onBlur: onBlur,
    loadingText: loadingText,
    noOptionsText: noOptionsText,
    helperText: helperText,
    options: options,
    loading: loading,
    onChange: onChange,
    getOptionLabel: getOptionLabel,
    getOptionSelected: getOptionSelected,
    renderOption: renderOption,
    renderTags: renderTags,
    returnFullObject: returnFullObject,
    placeholder: placeholder,
    freeSolo: freeSolo,
    dataTestId: dataTestId,
    useBuiltInErrors: useBuiltInErrors
  });
};
SelectCustom.propTypes = {
  multi: _propTypes["default"].bool,
  errors: _propTypes["default"].arrayOf(_propTypes["default"].string),
  keyValue: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string,
  required: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  clearable: _propTypes["default"].bool,
  value: _propTypes["default"].any,
  onBlur: _propTypes["default"].func,
  loadingText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  noOptionsText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  helperText: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]),
  options: _propTypes["default"].array,
  loading: _propTypes["default"].bool,
  onChange: _propTypes["default"].func.isRequired,
  getOptionLabel: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  getOptionSelected: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  /**
   * Customizes how each option appears in the dropdown menu when opened.
   * This affects the list items that appear when you click to open the select.
   *
   * @param {object} props - The props to spread on the <li> element
   * @param {object} option - The option object from the options array
   * @param {function} getOptionLabel - Function to get the label from an option
   * @returns {React.ReactElement} The rendered option element
   *
   * @example
   * renderOption={(props, option) => (
   *   <li {...props}>
   *     <span style={{ color: option.color }}>{option.label}</span>
   *   </li>
   * )}
   */
  renderOption: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func]),
  /**
   * Customizes how selected items are displayed as chips/tags (multi-select only).
   * This affects the visual representation of selected values in the input field.
   *
   * @param {Array} tagValue - Array of selected option objects
   * @param {function} getTagProps - Function that returns props for each tag (includes onClick for removal)
   * @returns {React.ReactElement[]} Array of rendered tag elements
   *
   * @example
   * renderTags={(tagValue, getTagProps) =>
   *   tagValue.map((option, index) => (
   *     <Chip
   *       label={option.label}
   *       style={{ backgroundColor: option.color }}
   *       {...getTagProps({ index })}
   *     />
   *   ))
   * }
   */
  renderTags: _propTypes["default"].func,
  returnFullObject: _propTypes["default"].bool,
  placeholder: _propTypes["default"].string,
  freeSolo: _propTypes["default"].bool,
  dataTestId: _propTypes["default"].string,
  useBuiltInErrors: _propTypes["default"].bool
};