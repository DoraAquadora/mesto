/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Card": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(data, templateSelector, handleCardClick) {
    _classCallCheck(this, Card);
    this._title = data.title;
    this._image = data.image;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true);
      return cardElement;
    }
  }, {
    key: "generateCard",
    value: function generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._elementChangeData();
      return this._element;
    }
  }, {
    key: "_elementChangeData",
    value: function _elementChangeData() {
      this._element.querySelector('.cards__image').src = this._image;
      this._element.querySelector('.cards__title').textContent = this._title;
      this._element.querySelector('.cards__image').alt = this._title;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._element.querySelector('.cards__like-btn').addEventListener('click', function (event) {
        _this._handleLikeButton(event);
      });
      this._element.querySelector('.cards__remove-btn').addEventListener('click', function (event) {
        _this._handleDeleteCard(event);
      });
      this._element.querySelector('.cards__image').addEventListener('click', function () {
        _this._handleCardClick(_this._title, _this._image);
      });
    }
  }, {
    key: "_handleLikeButton",
    value: function _handleLikeButton(event) {
      event.target.classList.toggle('cards__like-btn_active');
    }
  }, {
    key: "_handleDeleteCard",
    value: function _handleDeleteCard(event) {
      this._element.remove(event);
    }
  }]);
  return Card;
}();

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormValidator": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(Validate, formElement) {
    _classCallCheck(this, FormValidator);
    this._inputSelector = Validate.inputSelector;
    this._submitButtonSelector = Validate.submitButtonSelector;
    this._inactiveButtonClass = Validate.inactiveButtonClass;
    this._inputErrorClass = Validate.inputErrorClass;
    this._errorClass = Validate.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
  }
  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(input, errorMessage) {
      var error = this._formElement.querySelector("#".concat(input.id, "-error"));
      input.classList.add(this._inputErrorClass);
      error.textContent = errorMessage;
      error.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(input) {
      var error = this._formElement.querySelector("#".concat(input.id, "-error"));
      error.textContent = '';
      input.classList.remove(this._inputErrorClass);
      error.classList.remove(this._errorClass);
    }
  }, {
    key: "_checkInputValidity",
    value: function _checkInputValidity(input) {
      if (!input.validity.valid) {
        this._showInputError(input, input.validationMessage);
      } else {
        this._hideInputError(input);
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this = this;
      this._inputList.forEach(function (input) {
        input.addEventListener('input', function () {
          _this._checkInputValidity(input);
          _this._toggleButtonState(_this._inputList, _this._submitButton);
        });
      });
    }
  }, {
    key: "enableValidation",
    value: function enableValidation() {
      this._setEventListeners();
    }
  }, {
    key: "_hasInvalidInput",
    value: function _hasInvalidInput(inputList) {
      return inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "_toggleButtonState",
    value: function _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.disabled = true;
      } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.disabled = false;
      }
    }
  }, {
    key: "disableSubmitButton",
    value: function disableSubmitButton() {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.disabled = true;
    }
  }]);
  return FormValidator;
}();
;

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Popup": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);
    this._popupElement = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add('popup_is-opened');
      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove('popup_is-opened');
      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(e) {
      if (e.key === 'Escape') {
        this.close();
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;
      this._popupElement.querySelector('.popup__close-btn').addEventListener('click', function () {
        _this.close();
      });
      this._popupElement.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup_is-opened')) {
          _this.close();
        }
      });
    }
  }]);
  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithForm": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._form = _this._popupElement.querySelector('.popup__form'); // находим элементы формы для того, чтобы в методе close сбросить все инпуты формы (сбросить форму)
    _this._inputList = _this._popupElement.querySelectorAll('.popup__input'); // находим все элементы полей
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var formValues = {};
      this._inputList.forEach(function (input) {
        formValues[input.name] = input.value;
      });
      return formValues;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
      this._form.addEventListener('submit', function (e) {
        e.preventDefault();
        _this2._handleFormSubmit(_this2._getInputValues());
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
      this._form.reset();
    }
  }]);
  return PopupWithForm;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithImage": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _components_Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._popupImageElementImage = _this._popupElement.querySelector('.popup__image');
    _this._popupTitleElementImage = _this._popupElement.querySelector('.popup__image-title');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(title, image) {
      this._popupImageElementImage.src = image;
      this._popupImageElementImage.alt = title;
      this._popupTitleElementImage.textContent = title;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;
    _classCallCheck(this, Section);
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "renderItems",
    value: function renderItems(data) {
      var _this = this;
      data.forEach(function (item) {
        _this._renderer(item);
      });
    }
  }, {
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }]);
  return Section;
}();

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserInfo": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      infoSelector = _ref.infoSelector;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._infoElement = document.querySelector(infoSelector);
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var userInfo = {};
      userInfo.name = this._nameElement.textContent;
      userInfo.info = this._infoElement.textContent;
      return userInfo;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        job = _ref2.job;
      this._nameElement.textContent = name;
      this._infoElement.textContent = job;
    }
  }]);
  return UserInfo;
}();

/***/ }),

/***/ "./src/utils/Validate.js":
/*!*******************************!*\
  !*** ./src/utils/Validate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validate": () => (/* binding */ Validate)
/* harmony export */ });
var Validate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

/***/ }),

/***/ "./src/utils/components.js":
/*!*********************************!*\
  !*** ./src/utils/components.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCardButton": () => (/* binding */ AddCardButton),
/* harmony export */   "formProfile": () => (/* binding */ formProfile),
/* harmony export */   "jobInput": () => (/* binding */ jobInput),
/* harmony export */   "nameInput": () => (/* binding */ nameInput),
/* harmony export */   "popupAddCard": () => (/* binding */ popupAddCard),
/* harmony export */   "popupElementProfile": () => (/* binding */ popupElementProfile),
/* harmony export */   "popupImage": () => (/* binding */ popupImage),
/* harmony export */   "profileButton": () => (/* binding */ profileButton)
/* harmony export */ });
var popupElementProfile = document.querySelector('.popup_type_profile');
var profileButton = document.querySelector('.profile__edit-button');
var formProfile = document.querySelector('.popup__form');
var nameInput = formProfile.querySelector('input[name="name"]');
var jobInput = formProfile.querySelector('input[name="job"]');
var popupAddCard = document.querySelector('.popup_type_add-place');
var AddCardButton = document.querySelector('.profile__add-button');
var popupImage = document.querySelector('.popup_type_place-image');

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards)
/* harmony export */ });
var initialCards = [{
  title: 'красивый лед',
  image: 'https://images.unsplash.com/photo-1566150783916-69a8b9e5a6af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
}, {
  title: 'волшебный лед',
  image: 'https://images.unsplash.com/photo-1566150783896-f91266ed92fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}, {
  title: 'холодный лед',
  image: 'https://images.unsplash.com/photo-1566150784115-4e5c73f33507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'
}, {
  title: 'страшный лед',
  image: 'https://images.unsplash.com/photo-1549598685-0058b114c9d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
}, {
  title: 'веселый лед',
  image: 'https://images.unsplash.com/photo-1536069192745-0d39f51fc2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80'
}, {
  title: 'ледяной пейзаж',
  image: 'https://images.unsplash.com/photo-1543074143-99e9efbba821?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}];

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/pages/script.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _utils_Validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/Validate.js */ "./src/utils/Validate.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_components_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/components.js */ "./src/utils/components.js");










var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__.UserInfo({
  nameSelector: '.profile__title',
  infoSelector: '.profile__profession'
});
function handleProfileFormSubmit(formValues) {
  userInfo.setUserInfo(formValues);
  popupProfile.close();
}
var popupProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.PopupWithForm('.popup_type_profile', handleProfileFormSubmit);
popupProfile.setEventListeners();
var handleCardFormSubmit = function handleCardFormSubmit(formValues) {
  var cardItem = {
    title: formValues.place,
    image: formValues.url
  };
  var newCard = createCard(cardItem);
  cardList.addItem(newCard);
  popupCard.close();
};
var popupCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.PopupWithForm('.popup_type_add-place', handleCardFormSubmit);
popupCard.setEventListeners();
function createCard(item) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.Card(item, '#templateCards', handleCardClick);
  var cardElement = card.generateCard();
  return cardElement;
}
var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_5__.Section({
  renderer: function renderer(item) {
    var cardElement = createCard(item);
    cardList.addItem(cardElement);
  }
}, '.cards');
cardList.renderItems(_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.initialCards);
var popupImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithImage('.popup_type_place-image');
popupImage.setEventListeners();
function handleCardClick(title, image) {
  popupImage.open(title, image);
}
;
var popupProfileFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__.FormValidator(_utils_Validate_js__WEBPACK_IMPORTED_MODULE_2__.Validate, _utils_components_js__WEBPACK_IMPORTED_MODULE_9__.popupElementProfile);
popupProfileFormValidator.enableValidation();
_utils_components_js__WEBPACK_IMPORTED_MODULE_9__.profileButton.addEventListener('click', function () {
  var userData = userInfo.getUserInfo();
  _utils_components_js__WEBPACK_IMPORTED_MODULE_9__.nameInput.value = userData.name;
  _utils_components_js__WEBPACK_IMPORTED_MODULE_9__.jobInput.value = userData.info;
  popupProfile.open();
});
_utils_components_js__WEBPACK_IMPORTED_MODULE_9__.AddCardButton.addEventListener('click', function () {
  popupCard.open();
  popupCardFormValidator.disableSubmitButton();
});
var popupCardFormValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__.FormValidator(_utils_Validate_js__WEBPACK_IMPORTED_MODULE_2__.Validate, _utils_components_js__WEBPACK_IMPORTED_MODULE_9__.popupAddCard);
popupCardFormValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTdEgsZUFBZSxDQUFDRSxLQUFLLEVBQUVFLEtBQUssRUFBRTtFQUNyQzRHLFVBQVUsQ0FBQ21CLElBQUksQ0FBQ2pJLEtBQUssRUFBRUUsS0FBSyxDQUFDO0FBQzdCO0FBQUM7QUFFSCxJQUFNZ0kseUJBQXlCLEdBQUcsSUFBSXpHLHVFQUFhLENBQUNDLHdEQUFRLEVBQUU2RSxxRUFBbUIsQ0FBQztBQUNsRjJCLHlCQUF5QixDQUFDQyxnQkFBZ0IsRUFBRTtBQUU1QzNCLGdGQUE4QixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ2xELElBQU00QixRQUFRLEdBQUdqQyxRQUFRLENBQUNrQyxXQUFXLEVBQUU7RUFDdkMzQixpRUFBZSxHQUFHMEIsUUFBUSxDQUFDdEQsSUFBSTtFQUMvQjZCLGdFQUFjLEdBQUd5QixRQUFRLENBQUNoQyxJQUFJO0VBQzlCZSxZQUFZLENBQUNjLElBQUksRUFBRTtBQUNyQixDQUFDLENBQUM7QUFFRnBCLGdGQUE4QixDQUFDLE9BQU8sRUFBRSxZQUFZO0VBQ2xEZ0IsU0FBUyxDQUFDSSxJQUFJLEVBQUU7RUFDaEJLLHNCQUFzQixDQUFDQyxtQkFBbUIsRUFBRTtBQUM5QyxDQUFDLENBQUM7QUFFRixJQUFNRCxzQkFBc0IsR0FBRyxJQUFJN0csdUVBQWEsQ0FBQ0Msd0RBQVEsRUFBRWtGLDhEQUFZLENBQUM7QUFDeEUwQixzQkFBc0IsQ0FBQ0gsZ0JBQWdCLEVBQUUsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Vc2VySW5mby5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy9WYWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy9jb21wb25lbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9zY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihkYXRhLCB0ZW1wbGF0ZVNlbGVjdG9yLCBoYW5kbGVDYXJkQ2xpY2spIHtcbiAgdGhpcy5fdGl0bGUgPSBkYXRhLnRpdGxlO1xuICB0aGlzLl9pbWFnZSA9IGRhdGEuaW1hZ2U7XG4gIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IgPSB0ZW1wbGF0ZVNlbGVjdG9yO1xuICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XG4gIH1cblxuICBfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX3RlbXBsYXRlU2VsZWN0b3IpXG4gICAgLmNvbnRlbnRcbiAgICAucXVlcnlTZWxlY3RvcignLmNhcmRzX19pdGVtJylcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgcmV0dXJuIGNhcmRFbGVtZW50O1xuICB9XG5cbiAgZ2VuZXJhdGVDYXJkKCkge1xuICAgIHRoaXMuX2VsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZWxlbWVudENoYW5nZURhdGEoKTtcblxuICAgIHJldHVybiB0aGlzLl9lbGVtZW50O1xuICB9XG5cbiAgX2VsZW1lbnRDaGFuZ2VEYXRhKCkge1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX19pbWFnZScpLnNyYyA9IHRoaXMuX2ltYWdlO1xuICAgIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzX190aXRsZScpLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2ltYWdlJykuYWx0ID0gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBfc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2xpa2UtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VCdXR0b24oZXZlbnQpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5fZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX3JlbW92ZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2FyZChldmVudCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl9lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkc19faW1hZ2UnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90aXRsZSwgdGhpcy5faW1hZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgX2hhbmRsZUxpa2VCdXR0b24oZXZlbnQpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnY2FyZHNfX2xpa2UtYnRuX2FjdGl2ZScpO1xuICB9XG5cbiAgX2hhbmRsZURlbGV0ZUNhcmQoZXZlbnQpIHtcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZShldmVudCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcbiAgY29uc3RydWN0b3IoVmFsaWRhdGUsIGZvcm1FbGVtZW50KSB7XG4gICAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gVmFsaWRhdGUuaW5wdXRTZWxlY3RvcjtcbiAgICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gVmFsaWRhdGUuc3VibWl0QnV0dG9uU2VsZWN0b3I7XG4gICAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gVmFsaWRhdGUuaW5hY3RpdmVCdXR0b25DbGFzcztcbiAgICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IFZhbGlkYXRlLmlucHV0RXJyb3JDbGFzcztcbiAgICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSBWYWxpZGF0ZS5lcnJvckNsYXNzO1xuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQgPSBmb3JtRWxlbWVudDtcbiAgICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b24gPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcbiAgfTtcblxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXQsIGVycm9yTWVzc2FnZSkge1xuICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dC5pZH0tZXJyb3JgKTtcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcbiAgICAgIGVycm9yLnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfTtcblxuICBfaGlkZUlucHV0RXJyb3IoaW5wdXQpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aW5wdXQuaWR9LWVycm9yYCk7XG4gICAgICBlcnJvci50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgaW5wdXQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xuICAgICAgZXJyb3IuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcbiAgfTtcblxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0KSB7XG4gICAgICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXQsIGlucHV0LnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXQpO1xuICAgICAgfVxuICB9O1xuXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKGlucHV0ID0+IHtcbiAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5fY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0KTtcbiAgICAgICAgICAgICAgdGhpcy5fdG9nZ2xlQnV0dG9uU3RhdGUodGhpcy5faW5wdXRMaXN0LCB0aGlzLl9zdWJtaXRCdXR0b24pO1xuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH07XG5cbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcbiAgICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XG4gIH07XG5cbiAgX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpIHtcbiAgICAgIHJldHVybiBpbnB1dExpc3Quc29tZSgoaW5wdXRFbGVtZW50KSA9PiB7XG5cbiAgICAgICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcbiAgICAgIH0pXG4gIH07XG5cbiAgX3RvZ2dsZUJ1dHRvblN0YXRlKGlucHV0TGlzdCwgYnV0dG9uRWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dChpbnB1dExpc3QpKSB7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xuICAgICAgICAgIGJ1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBidXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgICAgICAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICB9O1xuXG4gIGRpc2FibGVTdWJtaXRCdXR0b24oKSB7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gICAgdGhpcy5fc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxufTtcbiIsImV4cG9ydCBjbGFzcyBQb3B1cCB7XG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocG9wdXBTZWxlY3Rvcik7XG4gICAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XG4gIH1cblxuXG4gIG9wZW4oKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncG9wdXBfaXMtb3BlbmVkJyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xuICB9XG5cblxuICBjbG9zZSgpIHtcbiAgICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9pcy1vcGVuZWQnKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XG4gIH1cblxuICBfaGFuZGxlRXNjQ2xvc2UoZSkge1xuICAgICAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICB9XG5cbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICB0aGlzLl9wb3B1cEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9pcy1vcGVuZWQnKSkge1xuICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxufVxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xuXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcbiAgICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yLCBoYW5kbGVGb3JtU3VibWl0KSB7XG4gICAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xuICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcbiAgICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTsgLy8g0L3QsNGF0L7QtNC40Lwg0Y3Qu9C10LzQtdC90YLRiyDRhNC+0YDQvNGLINC00LvRjyDRgtC+0LPQviwg0YfRgtC+0LHRiyDQsiDQvNC10YLQvtC00LUgY2xvc2Ug0YHQsdGA0L7RgdC40YLRjCDQstGB0LUg0LjQvdC/0YPRgtGLINGE0L7RgNC80YsgKNGB0LHRgNC+0YHQuNGC0Ywg0YTQvtGA0LzRgylcbiAgICAgICAgdGhpcy5faW5wdXRMaXN0ID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKTsgLy8g0L3QsNGF0L7QtNC40Lwg0LLRgdC1INGN0LvQtdC80LXQvdGC0Ysg0L/QvtC70LXQuVxuICAgIH1cbiAgICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XG4gICAgICAgIGNvbnN0IGZvcm1WYWx1ZXMgPSB7fTtcblxuICAgICAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaChpbnB1dCA9PiB7XG4gICAgICAgICAgICBmb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZm9ybVZhbHVlcztcbiAgICB9XG5cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgc3VwZXIuY2xvc2UoKTtcbiAgICAgICAgdGhpcy5fZm9ybS5yZXNldCgpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcblxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xuICAgIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcbiAgICAgICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuX3BvcHVwSW1hZ2VFbGVtZW50SW1hZ2UgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpO1xuICAgICAgICB0aGlzLl9wb3B1cFRpdGxlRWxlbWVudEltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1hZ2UtdGl0bGUnKTtcbiAgICAgIH1cblxuICAgIG9wZW4odGl0bGUsIGltYWdlKSB7XG4gICAgICAgIHRoaXMuX3BvcHVwSW1hZ2VFbGVtZW50SW1hZ2Uuc3JjID0gaW1hZ2U7XG4gICAgICAgIHRoaXMuX3BvcHVwSW1hZ2VFbGVtZW50SW1hZ2UuYWx0ID0gdGl0bGU7XG4gICAgICAgIHRoaXMuX3BvcHVwVGl0bGVFbGVtZW50SW1hZ2UudGV4dENvbnRlbnQgPSB0aXRsZTtcbiAgICAgICAgc3VwZXIub3BlbigpO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0IGNsYXNzIFNlY3Rpb24ge1xuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICB0aGlzLl9jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcbiAgfVxuXG5yZW5kZXJJdGVtcyhkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcbiAgICB0aGlzLl9yZW5kZXJlcihpdGVtKTtcbiAgfSk7XG4gIH1cbiAgYWRkSXRlbShlbGVtZW50KSB7XG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoZWxlbWVudCk7XG4gIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XG4gIGNvbnN0cnVjdG9yKHsgbmFtZVNlbGVjdG9yLCBpbmZvU2VsZWN0b3IgfSkge1xuICAgIHRoaXMuX25hbWVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihuYW1lU2VsZWN0b3IpO1xuICAgIHRoaXMuX2luZm9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbmZvU2VsZWN0b3IpO1xuICB9XG5cbiAgZ2V0VXNlckluZm8oKSB7XG4gICAgY29uc3QgdXNlckluZm8gPSB7fTtcbiAgICB1c2VySW5mby5uYW1lID0gdGhpcy5fbmFtZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgdXNlckluZm8uaW5mbyA9IHRoaXMuX2luZm9FbGVtZW50LnRleHRDb250ZW50O1xuICAgIHJldHVybiB1c2VySW5mbztcbiAgfVxuXG4gIHNldFVzZXJJbmZvKHsgbmFtZSwgam9iIH0pIHtcbiAgICB0aGlzLl9uYW1lRWxlbWVudC50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgdGhpcy5faW5mb0VsZW1lbnQudGV4dENvbnRlbnQgPSBqb2I7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBWYWxpZGF0ZSA9IHtcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc2F2ZS1idG4nLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9pbnZhbGlkJyxcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxuICBlcnJvckNsYXNzOiAncG9wdXBfX2Vycm9yX3Zpc2libGUnXG59O1xuIiwiZXhwb3J0IGNvbnN0IHBvcHVwRWxlbWVudFByb2ZpbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9wcm9maWxlJyk7XG5leHBvcnQgY29uc3QgcHJvZmlsZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWJ1dHRvbicpO1xuZXhwb3J0IGNvbnN0IGZvcm1Qcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG5leHBvcnQgY29uc3QgbmFtZUlucHV0ID0gZm9ybVByb2ZpbGUucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cIm5hbWVcIl0nKTtcbmV4cG9ydCBjb25zdCBqb2JJbnB1dCA9IGZvcm1Qcm9maWxlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJqb2JcIl0nKTtcbmV4cG9ydCBjb25zdCBwb3B1cEFkZENhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9hZGQtcGxhY2UnKTtcbmV4cG9ydCBjb25zdCBBZGRDYXJkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2FkZC1idXR0b24nKTtcbmV4cG9ydCBjb25zdCBwb3B1cEltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfcGxhY2UtaW1hZ2UnKTtcblxuIiwiZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIHRpdGxlOiAn0LrRgNCw0YHQuNCy0YvQuSDQu9C10LQnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjYxNTA3ODM5MTYtNjlhOGI5ZTVhNmFmP2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MzUmcT04MCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0LLQvtC70YjQtdCx0L3Ri9C5INC70LXQtCcsXG4gICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU2NjE1MDc4Mzg5Ni1mOTEyNjZlZDkyZmU/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwNzQmcT04MCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0YXQvtC70L7QtNC90YvQuSDQu9C10LQnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NjYxNTA3ODQxMTUtNGU1YzczZjMzNTA3P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz00MzUmcT04MCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0YHRgtGA0LDRiNC90YvQuSDQu9C10LQnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1NDk1OTg2ODUtMDA1OGIxMTRjOWQ2P2l4bGliPXJiLTQuMC4zJml4aWQ9TW53eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0zMjcmcT04MCdcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAn0LLQtdGB0LXQu9GL0Lkg0LvQtdC0JyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM2MDY5MTkyNzQ1LTBkMzlmNTFmYzJkOD9peGxpYj1yYi00LjAuMyZpeGlkPU1ud3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MzcxJnE9ODAnXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ9C70LXQtNGP0L3QvtC5INC/0LXQudC30LDQticsXG4gICAgaW1hZ2U6ICdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU0MzA3NDE0My05OWU5ZWZiYmE4MjE/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTEwNzQmcT04MCdcbiAgfVxuXTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLy4uL3BhZ2VzL2luZGV4LmNzcyc7XG5pbXBvcnQgeyBpbml0aWFsQ2FyZHMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xuaW1wb3J0IHsgVmFsaWRhdGUgfSBmcm9tICcuLi91dGlscy9WYWxpZGF0ZS5qcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcbmltcG9ydCB7IEZvcm1WYWxpZGF0b3IgfSBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xuaW1wb3J0IHsgU2VjdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMvU2VjdGlvbi5qcyc7XG5pbXBvcnQgeyBQb3B1cFdpdGhJbWFnZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xuaW1wb3J0IHsgUG9wdXBXaXRoRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnO1xuaW1wb3J0IHsgcG9wdXBFbGVtZW50UHJvZmlsZSwgcHJvZmlsZUJ1dHRvbiwgZm9ybVByb2ZpbGUsIG5hbWVJbnB1dCwgam9iSW5wdXQsIHBvcHVwQWRkQ2FyZCwgQWRkQ2FyZEJ1dHRvbiwgcG9wdXBJbWFnZVJlbmR9IGZyb20gJy4uL3V0aWxzL2NvbXBvbmVudHMuanMnO1xuXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7IG5hbWVTZWxlY3RvcjogJy5wcm9maWxlX190aXRsZScsIGluZm9TZWxlY3RvcjogJy5wcm9maWxlX19wcm9mZXNzaW9uJyB9KTtcblxuZnVuY3Rpb24gaGFuZGxlUHJvZmlsZUZvcm1TdWJtaXQoZm9ybVZhbHVlcykge1xuICB1c2VySW5mby5zZXRVc2VySW5mbyhmb3JtVmFsdWVzKTtcbiAgcG9wdXBQcm9maWxlLmNsb3NlKCk7XG59XG4gIGNvbnN0IHBvcHVwUHJvZmlsZSA9ICBuZXcgUG9wdXBXaXRoRm9ybSgnLnBvcHVwX3R5cGVfcHJvZmlsZScsIGhhbmRsZVByb2ZpbGVGb3JtU3VibWl0KTtcbiAgcG9wdXBQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmNvbnN0IGhhbmRsZUNhcmRGb3JtU3VibWl0ID0gKGZvcm1WYWx1ZXMpID0+IHtcbiAgY29uc3QgY2FyZEl0ZW0gPSB7XG4gICAgdGl0bGU6IGZvcm1WYWx1ZXMucGxhY2UsXG4gICAgaW1hZ2U6IGZvcm1WYWx1ZXMudXJsXG4gIH1cblxuICBjb25zdCBuZXdDYXJkID0gY3JlYXRlQ2FyZChjYXJkSXRlbSk7XG4gIGNhcmRMaXN0LmFkZEl0ZW0obmV3Q2FyZCk7XG4gIHBvcHVwQ2FyZC5jbG9zZSgpO1xufVxuXG4gIGNvbnN0IHBvcHVwQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKCcucG9wdXBfdHlwZV9hZGQtcGxhY2UnLCBoYW5kbGVDYXJkRm9ybVN1Ym1pdCk7XG5wb3B1cENhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuZnVuY3Rpb24gY3JlYXRlQ2FyZChpdGVtKSB7XG4gIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChpdGVtLCAnI3RlbXBsYXRlQ2FyZHMnLCBoYW5kbGVDYXJkQ2xpY2spO1xuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XG5cbiAgcmV0dXJuIGNhcmRFbGVtZW50O1xufVxuXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKHtcbiAgcmVuZGVyZXI6IChpdGVtKSA9PiB7XG4gICAgY29uc3QgY2FyZEVsZW1lbnQgPSBjcmVhdGVDYXJkKGl0ZW0pO1xuICAgIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xuICB9XG59LFxuICAnLmNhcmRzJ1xuKTtcblxuY2FyZExpc3QucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcblxuXG5jb25zdCBwb3B1cEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKCcucG9wdXBfdHlwZV9wbGFjZS1pbWFnZScpO1xucG9wdXBJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xuXG5mdW5jdGlvbiBoYW5kbGVDYXJkQ2xpY2sodGl0bGUsIGltYWdlKSB7XG4gIHBvcHVwSW1hZ2Uub3Blbih0aXRsZSwgaW1hZ2UpO1xuICB9O1xuXG5jb25zdCBwb3B1cFByb2ZpbGVGb3JtVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IoVmFsaWRhdGUsIHBvcHVwRWxlbWVudFByb2ZpbGUpO1xucG9wdXBQcm9maWxlRm9ybVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XG5cbnByb2ZpbGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcbiAgbmFtZUlucHV0LnZhbHVlID0gdXNlckRhdGEubmFtZTtcbiAgam9iSW5wdXQudmFsdWUgPSB1c2VyRGF0YS5pbmZvO1xuICBwb3B1cFByb2ZpbGUub3BlbigpO1xufSk7XG5cbkFkZENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHBvcHVwQ2FyZC5vcGVuKCk7XG4gIHBvcHVwQ2FyZEZvcm1WYWxpZGF0b3IuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xufSk7XG5cbmNvbnN0IHBvcHVwQ2FyZEZvcm1WYWxpZGF0b3IgPSBuZXcgRm9ybVZhbGlkYXRvcihWYWxpZGF0ZSwgcG9wdXBBZGRDYXJkKTtcbnBvcHVwQ2FyZEZvcm1WYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJkYXRhIiwidGVtcGxhdGVTZWxlY3RvciIsImhhbmRsZUNhcmRDbGljayIsIl90aXRsZSIsInRpdGxlIiwiX2ltYWdlIiwiaW1hZ2UiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbnRlbnQiLCJjbG9uZU5vZGUiLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsIl9lbGVtZW50Q2hhbmdlRGF0YSIsInNyYyIsInRleHRDb250ZW50IiwiYWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX2hhbmRsZUxpa2VCdXR0b24iLCJfaGFuZGxlRGVsZXRlQ2FyZCIsInRhcmdldCIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInJlbW92ZSIsIkZvcm1WYWxpZGF0b3IiLCJWYWxpZGF0ZSIsImZvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0TGlzdCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfc3VibWl0QnV0dG9uIiwiaW5wdXQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsImlkIiwiYWRkIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiZm9yRWFjaCIsIl9jaGVja0lucHV0VmFsaWRpdHkiLCJfdG9nZ2xlQnV0dG9uU3RhdGUiLCJpbnB1dExpc3QiLCJzb21lIiwiaW5wdXRFbGVtZW50IiwiYnV0dG9uRWxlbWVudCIsIl9oYXNJbnZhbGlkSW5wdXQiLCJkaXNhYmxlZCIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJrZXkiLCJjbG9zZSIsImNvbnRhaW5zIiwiUG9wdXBXaXRoRm9ybSIsImhhbmRsZUZvcm1TdWJtaXQiLCJfaGFuZGxlRm9ybVN1Ym1pdCIsIl9mb3JtIiwiZm9ybVZhbHVlcyIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltYWdlRWxlbWVudEltYWdlIiwiX3BvcHVwVGl0bGVFbGVtZW50SW1hZ2UiLCJTZWN0aW9uIiwiY29udGFpbmVyU2VsZWN0b3IiLCJyZW5kZXJlciIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJpdGVtIiwiZWxlbWVudCIsInByZXBlbmQiLCJVc2VySW5mbyIsIm5hbWVTZWxlY3RvciIsImluZm9TZWxlY3RvciIsIl9uYW1lRWxlbWVudCIsIl9pbmZvRWxlbWVudCIsInVzZXJJbmZvIiwiaW5mbyIsImpvYiIsImZvcm1TZWxlY3RvciIsInBvcHVwRWxlbWVudFByb2ZpbGUiLCJwcm9maWxlQnV0dG9uIiwiZm9ybVByb2ZpbGUiLCJuYW1lSW5wdXQiLCJqb2JJbnB1dCIsInBvcHVwQWRkQ2FyZCIsIkFkZENhcmRCdXR0b24iLCJwb3B1cEltYWdlIiwiaW5pdGlhbENhcmRzIiwicG9wdXBJbWFnZVJlbmQiLCJoYW5kbGVQcm9maWxlRm9ybVN1Ym1pdCIsInNldFVzZXJJbmZvIiwicG9wdXBQcm9maWxlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJoYW5kbGVDYXJkRm9ybVN1Ym1pdCIsImNhcmRJdGVtIiwicGxhY2UiLCJ1cmwiLCJuZXdDYXJkIiwiY3JlYXRlQ2FyZCIsImNhcmRMaXN0IiwiYWRkSXRlbSIsInBvcHVwQ2FyZCIsImNhcmQiLCJnZW5lcmF0ZUNhcmQiLCJyZW5kZXJJdGVtcyIsIm9wZW4iLCJwb3B1cFByb2ZpbGVGb3JtVmFsaWRhdG9yIiwiZW5hYmxlVmFsaWRhdGlvbiIsInVzZXJEYXRhIiwiZ2V0VXNlckluZm8iLCJwb3B1cENhcmRGb3JtVmFsaWRhdG9yIiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=