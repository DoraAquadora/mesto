/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Api": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api(_ref) {
    var _this = this;
    var url = _ref.url,
      headers = _ref.headers;
    _classCallCheck(this, Api);
    _defineProperty(this, "getInitialCards", function () {
      return fetch(_this._url + "cards", {
        headers: _this._headers
      }).then(function (res) {
        return _this._checkingResponse(res);
      });
    });
    _defineProperty(this, "getUserIfnoApi", function () {
      return fetch(_this._url + "users/me", {
        headers: _this._headers
      }).then(function (res) {
        return _this._checkingResponse(res);
      });
    });
    _defineProperty(this, "deleteCard", function (_id) {
      return fetch(_this._url + "cards/" + _id, {
        method: "DELETE",
        headers: _this._headers
      }).then(function (res) {
        return _this._checkingResponse(res);
      });
    });
    _defineProperty(this, "sendUserIfno", function (name, about) {
      return fetch(_this._url + "users/me", {
        method: "PATCH",
        headers: _this._headers,
        body: JSON.stringify(name, about)
      }).then(function (res) {
        return _this._checkingResponse(res);
      });
    });
    _defineProperty(this, "addNewCard", function (name, link) {
      return fetch(_this._url + "cards", {
        method: "POST",
        headers: _this._headers,
        body: JSON.stringify(name, link)
      }).then(function (res) {
        return _this._checkingResponse(res);
      });
    });
    _defineProperty(this, "addNewAvatar", function (avatar) {
      return fetch(_this._url + "users/me/avatar", {
        method: "PATCH",
        headers: _this._headers,
        body: JSON.stringify({
          avatar: avatar.link
        })
      }).then(function (res) {
        return _this._checkingResponse(res);
      });
    });
    _defineProperty(this, "addLike", function (_id) {
      return fetch(_this._url + "cards/" + _id + "/likes", {
        method: "PUT",
        headers: _this._headers
      }).then(function (res) {
        return _this._checkingResponse(res);
      });
    });
    _defineProperty(this, "deleteLike", function (_id) {
      return fetch(_this._url + "cards/" + _id + "/likes", {
        method: "DELETE",
        headers: _this._headers
      }).then(function (res) {
        return _this._checkingResponse(res);
      });
    });
    this._url = url;
    this._headers = headers;
  }
  _createClass(Api, [{
    key: "_checkingResponse",
    value: function _checkingResponse(res) {
      return res.ok ? res.json() : Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
  }]);
  return Api;
}();

/***/ }),

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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/function () {
  function Card(_ref, templateSelector) {
    var _this = this;
    var data = _ref.data,
      userId = _ref.userId,
      handleCardClick = _ref.handleCardClick,
      handleDeleteIconClick = _ref.handleDeleteIconClick,
      handleLikeClick = _ref.handleLikeClick;
    _classCallCheck(this, Card);
    _defineProperty(this, "generateCard", function () {
      _this._element = _this._getTemplateCard();
      _this._setEventListeners();
      _this.toggleButtonLike();
      _this._likeCounter.textContent = _this._likes.length;
      _this._element.querySelector(".cards__title").textContent = _this._text;
      _this._cardImg.src = _this._imageLink;
      _this._cardImg.alt = _this._text;
      return _this._element;
    });
    _defineProperty(this, "availableLikes", function () {
      var isMyLikes = _this._likes.some(function (like) {
        return like._id === _this._userId;
      });
      return isMyLikes;
    });
    this._text = data.name;
    this._imageLink = data.link;
    this._alt = data.name;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._ownerId = this._owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleLikeClick = handleLikeClick;
  }
  _createClass(Card, [{
    key: "_getTemplateCard",
    value: function _getTemplateCard() {
      var cardElement = document.querySelector(this._templateSelector).content.querySelector('.cards__item').cloneNode(true);
      this._buttonLike = cardElement.querySelector(".cards__like-btn"); //gg
      this._cardImg = cardElement.querySelector(".cards__image"); //gg
      this._delete = cardElement.querySelector(".cards__remove-btn"); //gg
      this._likeCounter = cardElement.querySelector(".cards__like-count"); //gg

      return cardElement;
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;
      this._buttonLike.addEventListener('click', function () {
        _this2._handleLikeClick(_this2._id);
      });
      this._delete.addEventListener('click', function () {
        _this2._handleDeleteIconClick(_this2._id);
      });
      this._cardImg.addEventListener('click', function () {
        _this2._handleCardClick(_this2._text, _this2._imageLink); //title
      });
    }
  }, {
    key: "checkMyId",
    value: function checkMyId() {
      if (this._userId !== this._ownerId) {
        this._delete.classList.add("cards__remove-btn_active");
      } else {
        this._delete.classList.remove("cards__remove-btn_active");
      }
    }
  }, {
    key: "countNewLike",
    value: function countNewLike(newData) {
      this._likes = newData.likes;
      this._likeCounter.textContent = this._likes.length;
    }
  }, {
    key: "toggleButtonLike",
    value: function toggleButtonLike() {
      if (this.availableLikes()) {
        this._buttonLike.classList.add("cards__like-btn_active");
      } else {
        this._buttonLike.classList.remove("cards__like-btn_active");
      }
    }
  }, {
    key: "handleDeleteCard",
    value: function handleDeleteCard() {
      this._element.remove();
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/function () {
  function FormValidator(validationSettings, formElement) {
    var _this = this;
    _classCallCheck(this, FormValidator);
    _defineProperty(this, "_checkformValidity", function (inputElement) {
      if (!inputElement.validity.valid) {
        _this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        _this._hideInputError(inputElement);
      }
    });
    _defineProperty(this, "resetValidation", function () {
      _this._toggleFormButtonState();
      _this._inputs.forEach(function (inputElement) {
        _this._hideInputError(inputElement);
      });
    });
    _defineProperty(this, "_setEventListeners", function () {
      _this._toggleFormButtonState();
      _this._inputs.forEach(function (inputElement) {
        inputElement.addEventListener("input", function () {
          _this._checkformValidity(inputElement);
          _this._toggleFormButtonState();
        });
      });
    });
    _defineProperty(this, "enableValidation", function () {
      _this._setEventListeners();
    });
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
    this._formElement = formElement;
    this._inputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  }
  _createClass(FormValidator, [{
    key: "_showInputError",
    value: function _showInputError(inputElement, errorMessage) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector("#".concat(inputElement.id, "-error"));
      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = "";
    }
  }, {
    key: "_toggleFormButtonState",
    value: function _toggleFormButtonState() {
      if (this._hasInvalideInput()) {
        this._buttonElement.classList.remove(this._inactiveButtonClass);
        this._buttonElement.removeAttribute("disabled");
      } else {
        this.disableSubmitButton();
      }
    }
  }, {
    key: "disableSubmitButton",
    value: function disableSubmitButton() {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", true);
    }
  }, {
    key: "_hasInvalideInput",
    value: function _hasInvalideInput() {
      return this._inputs.every(function (inputElement) {
        return inputElement.validity.valid;
      });
    }
  }]);
  return FormValidator;
}();

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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;
    _classCallCheck(this, Popup);
    _defineProperty(this, "_handleEscClose", function (evt) {
      if (evt.key === "Escape") {
        _this.close();
      }
    });
    this._popupElement = document.querySelector(popupSelector);
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupElement.classList.add("popup_is-opened");
      document.addEventListener("keydown", this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupElement.classList.remove("popup_is-opened");
      document.removeEventListener("keydown", this._handleEscClose);
    }

    // Закрытие попапа нажатием на Esc
  }, {
    key: "setEventListeners",
    value:
    // Закрытие попапа кликом на оверлей и на крестик

    function setEventListeners() {
      var _this2 = this;
      this._popupElement.querySelector('.popup__close-btn').addEventListener('click', function () {
        _this2.close();
      });
      this._popupElement.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup_is-opened')) {
          _this2.close();
        }
      });
    }
  }]);
  return Popup;
}();

/***/ }),

/***/ "./src/components/PopupWithConfirmation.js":
/*!*************************************************!*\
  !*** ./src/components/PopupWithConfirmation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopupWithConfirmation": () => (/* binding */ PopupWithConfirmation)
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

var PopupWithConfirmation = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirmation, _Popup);
  var _super = _createSuper(PopupWithConfirmation);
  function PopupWithConfirmation(_ref) {
    var _this;
    var popupSelector = _ref.popupSelector;
    _classCallCheck(this, PopupWithConfirmation);
    _this = _super.call(this, popupSelector);
    _this._form = _this._popupElement.querySelector(".popup__form");
    return _this;
  }
  _createClass(PopupWithConfirmation, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      this._form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this2._handleConfirmDelete();
      });
      _get(_getPrototypeOf(PopupWithConfirmation.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "setSubmitConfirm",
    value: function setSubmitConfirm(submitConfirm) {
      this._handleConfirmDelete = submitConfirm;
    }
  }]);
  return PopupWithConfirmation;
}(_components_Popup_js__WEBPACK_IMPORTED_MODULE_0__.Popup);

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
  function PopupWithForm(_ref) {
    var _this;
    var popupSelector = _ref.popupSelector,
      handleFormSubmit = _ref.handleFormSubmit;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._form = _this._popupElement.querySelector(".popup__form");
    _this._button = _this._popupElement.querySelector(".popup__save-btn");
    _this._inputs = _this._popupElement.querySelectorAll(".popup__input");
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;
      this._formValues = {};
      this._inputs.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });
      return this._formValues;
    }
  }, {
    key: "setInputValues",
    value: function setInputValues(data) {
      this._inputs.forEach(function (input) {
        input.value = data[input.name];
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;
      this._form.addEventListener("submit", function (evt) {
        evt.preventDefault();
        _this3._handleFormSubmit(_this3._getInputValues());
      });
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "waitLoad",
    value: function waitLoad(isReady) {
      if (isReady) {
        this._button.textContent = "Сохранение...";
      } else {
        this._button.textContent = "Сохранить";
      }
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
  function PopupWithImage(_ref) {
    var _this;
    var popupSelector = _ref.popupSelector;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._image = _this._popupElement.querySelector(".popup__image");
    _this._title = _this._popupElement.querySelector(".popup__image-title");
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      this._image.src = link;
      this._image.alt = name;
      this._title.textContent = name;
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
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(_ref, container) {
    var _this = this;
    var renderer = _ref.renderer;
    _classCallCheck(this, Section);
    _defineProperty(this, "renderItems", function (items) {
      items.forEach(_this._renderer);
    });
    this._renderer = renderer;
    this._container = container;
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(cardElement) {
      this._container.prepend(cardElement);
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
    var name = _ref.name,
      about = _ref.about,
      avatar = _ref.avatar;
    _classCallCheck(this, UserInfo);
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      var data = {
        name: this._name.textContent,
        about: this._about.textContent,
        avatar: this._avatar.src
      };
      return data;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._name.textContent = data.name;
      this._about.textContent = data.about;
      this._avatar.src = data.avatar;
    }
  }]);
  return UserInfo;
}();

/***/ }),

/***/ "./src/utils/components.js":
/*!*********************************!*\
  !*** ./src/utils/components.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonEditAvatar": () => (/* binding */ buttonEditAvatar),
/* harmony export */   "buttonOpenAddCardPopup": () => (/* binding */ buttonOpenAddCardPopup),
/* harmony export */   "buttonOpenEditProfilePopup": () => (/* binding */ buttonOpenEditProfilePopup),
/* harmony export */   "cardsElementList": () => (/* binding */ cardsElementList),
/* harmony export */   "elementPopupPhoto": () => (/* binding */ elementPopupPhoto),
/* harmony export */   "elementPopupTitle": () => (/* binding */ elementPopupTitle),
/* harmony export */   "formEditAvatar": () => (/* binding */ formEditAvatar),
/* harmony export */   "formEditProfile": () => (/* binding */ formEditProfile),
/* harmony export */   "formElementCard": () => (/* binding */ formElementCard),
/* harmony export */   "profileAvatar": () => (/* binding */ profileAvatar),
/* harmony export */   "profileJob": () => (/* binding */ profileJob),
/* harmony export */   "profileName": () => (/* binding */ profileName)
/* harmony export */ });
var buttonOpenEditProfilePopup = document.querySelector(".profile__edit-button");
var buttonOpenAddCardPopup = document.querySelector(".profile__add-button");
var formEditProfile = document.querySelector(".popup_type_profile");
var formEditAvatar = document.querySelector(".popup_type_update-avatar");
var formElementCard = document.querySelector(".popup_type_add-place");
var profileName = document.querySelector(".profile__title");
var profileJob = document.querySelector(".profile__profession");
var profileAvatar = document.querySelector(".profile__avatar");
var elementPopupTitle = document.querySelector(".popup__image-title");
var elementPopupPhoto = document.querySelector(".popup__image");
var cardsElementList = document.querySelector(".cards");
var buttonEditAvatar = document.querySelector(".profile__avatar-edith");

/***/ }),

/***/ "./src/utils/validate.js":
/*!*******************************!*\
  !*** ./src/utils/validate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
var validate = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__button_invalid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

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
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
/* harmony import */ var _utils_validate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/validate.js */ "./src/utils/validate.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PopupWithConfirmation.js */ "./src/components/PopupWithConfirmation.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _utils_components_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/components.js */ "./src/utils/components.js");

 //ll
 //ll
 //ll
 //ll
 //ll
 //ll
 //ll
 //ll
 //ll

var userId;
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_6__.PopupWithImage({
  popupSelector: ".popup_type_place-image"
});
popupWithImage.setEventListeners();
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_9__.UserInfo({
  name: _utils_components_js__WEBPACK_IMPORTED_MODULE_10__.profileName,
  about: _utils_components_js__WEBPACK_IMPORTED_MODULE_10__.profileJob,
  avatar: _utils_components_js__WEBPACK_IMPORTED_MODULE_10__.profileAvatar
});

// Попап удаления

var popupWithConfirmation = new _components_PopupWithConfirmation_js__WEBPACK_IMPORTED_MODULE_8__.PopupWithConfirmation({
  popupSelector: ".popup_delete"
});

// Создание карточки

var createCard = function createCard(data) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__.Card({
    data: data,
    userId: userId,
    handleCardClick: function handleCardClick(name, link) {
      popupWithImage.open(name, link);
    },
    handleDeleteIconClick: function handleDeleteIconClick() {
      popupWithConfirmation.open();
      popupWithConfirmation.setSubmitConfirm(function () {
        api.deleteCard(data._id).then(function (res) {
          card.handleDeleteCard(res);
          popupWithConfirmation.close();
        }).catch(function (err) {
          console.log(err);
        });
      });
    },
    handleLikeClick: function handleLikeClick(id) {
      if (card.availableLikes()) {
        api.deleteLike(id).then(function (res) {
          card.countNewLike(res);
          card.toggleButtonLike();
        }).catch(function (err) {
          console.log(err);
        });
      } else {
        api.addLike(id).then(function (res) {
          card.countNewLike(res);
          card.toggleButtonLike();
        }).catch(function (err) {
          console.log(err);
        });
      }
    }
  }, "#template-cards");
  var cardElement = card.generateCard();
  cardList.addItem(cardElement);
  card.checkMyId();
};
var cardList = new _components_Section_js__WEBPACK_IMPORTED_MODULE_5__.Section({
  renderer: function renderer(item) {
    return createCard(item);
  }
}, _utils_components_js__WEBPACK_IMPORTED_MODULE_10__.cardsElementList);
popupWithConfirmation.setEventListeners();
var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_1__.Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-59/",
  headers: {
    authorization: "04fe2fa3-c86b-49c0-922d-ad413859efcc",
    "Content-Type": "application/json"
  }
});
Promise.all([api.getUserIfnoApi(), api.getInitialCards()]).then(function (res) {
  var resUser = res[0];
  var resCard = res[1];
  userId = resUser._id;
  userInfo.setUserInfo(resUser);
  cardList.renderItems(resCard);
}).catch(function (err) {
  console.log(err);
});

// Форма редактирования профиля

var handleEditProfilePopup = function handleEditProfilePopup() {
  var data = userInfo.getUserInfo();
  popupEditProfile.setInputValues(data);
  popupEditProfile.open();
  formValidatorProfile.resetValidation();
};
var popupEditProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.PopupWithForm({
  popupSelector: ".popup_type_profile",
  handleFormSubmit: function handleFormSubmit(name, about) {
    popupEditProfile.waitLoad(true);
    api.sendUserIfno(name, about).then(function (res) {
      userInfo.setUserInfo(res);
      popupEditProfile.close();
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      popupEditProfile.waitLoad(false);
    });
  }
});
_utils_components_js__WEBPACK_IMPORTED_MODULE_10__.buttonOpenEditProfilePopup.addEventListener("click", function () {
  handleEditProfilePopup(_utils_components_js__WEBPACK_IMPORTED_MODULE_10__.profileName, _utils_components_js__WEBPACK_IMPORTED_MODULE_10__.profileJob);
});
popupEditProfile.setEventListeners();

// Форма создания карточки

var popupWithCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.PopupWithForm({
  popupSelector: ".popup_type_add-place",
  handleFormSubmit: function handleFormSubmit(name, link) {
    popupWithCard.waitLoad(true);
    api.addNewCard(name, link).then(function (res) {
      createCard(res);
      popupWithCard.close();
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      popupWithCard.waitLoad(false);
    });
  }
});
_utils_components_js__WEBPACK_IMPORTED_MODULE_10__.buttonOpenAddCardPopup.addEventListener("click", function () {
  popupWithCard.open();
  formValidatorCard.disableSubmitButton();
  formValidatorCard.resetValidation();
});
popupWithCard.setEventListeners();

// Форма редактирования аватара

var popupWithAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_7__.PopupWithForm({
  popupSelector: ".popup_type_update-avatar",
  handleFormSubmit: function handleFormSubmit(link) {
    popupWithAvatar.waitLoad(true);
    api.addNewAvatar(link).then(function (res) {
      userInfo.setUserInfo(res);
      popupWithAvatar.close();
    }).catch(function (err) {
      console.log(err);
    }).finally(function () {
      popupWithAvatar.waitLoad(false);
    });
  }
});
_utils_components_js__WEBPACK_IMPORTED_MODULE_10__.buttonEditAvatar.addEventListener("click", function () {
  popupWithAvatar.open();
  formValidatorAvatar.disableSubmitButton();
  formValidatorAvatar.resetValidation();
});
popupWithAvatar.setEventListeners();

// Валидация форм

var formValidatorCard = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__.FormValidator(_utils_validate_js__WEBPACK_IMPORTED_MODULE_2__.validate, _utils_components_js__WEBPACK_IMPORTED_MODULE_10__.formElementCard);
var formValidatorProfile = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__.FormValidator(_utils_validate_js__WEBPACK_IMPORTED_MODULE_2__.validate, _utils_components_js__WEBPACK_IMPORTED_MODULE_10__.formEditProfile);
var formValidatorAvatar = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__.FormValidator(_utils_validate_js__WEBPACK_IMPORTED_MODULE_2__.validate, _utils_components_js__WEBPACK_IMPORTED_MODULE_10__.formEditAvatar);
formValidatorCard.enableValidation();
formValidatorProfile.enableValidation();
formValidatorAvatar.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LG1CQUFtQixFQUFFO0VBQ3pDc0csbUJBQW1CLENBQUNULGVBQWUsRUFBRTtBQUN2QyxDQUFDLENBQUM7QUFFRk8sZUFBZSxDQUFDMUMsaUJBQWlCLEVBQUU7O0FBRW5DOztBQUVBLElBQU15QyxpQkFBaUIsR0FBRyxJQUFJcEksdUVBQWEsQ0FDekN3Rix3REFBUSxFQUNSUixrRUFBZSxDQUNoQjtBQUNELElBQU02QyxvQkFBb0IsR0FBRyxJQUFJN0gsdUVBQWEsQ0FDNUN3Rix3REFBUSxFQUNSVixrRUFBZSxDQUNoQjtBQUVELElBQU15RCxtQkFBbUIsR0FBRyxJQUFJdkksdUVBQWEsQ0FDM0N3Rix3REFBUSxFQUNSVCxpRUFBYyxDQUNmO0FBRURxRCxpQkFBaUIsQ0FBQ0ksZ0JBQWdCLEVBQUU7QUFDcENYLG9CQUFvQixDQUFDVyxnQkFBZ0IsRUFBRTtBQUN2Q0QsbUJBQW1CLENBQUNDLGdCQUFnQixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhDb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgdXJsLCBoZWFkZXJzIH0pIHtcclxuICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcclxuICAgIH1cclxuICBcclxuICAgIF9jaGVja2luZ1Jlc3BvbnNlKHJlcykge1xyXG4gICAgICByZXR1cm4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgIH1cclxuICBcclxuICAgIGdldEluaXRpYWxDYXJkcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX3VybCArIFwiY2FyZHNcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja2luZ1Jlc3BvbnNlKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGdldFVzZXJJZm5vQXBpID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2godGhpcy5fdXJsICsgXCJ1c2Vycy9tZVwiLCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNraW5nUmVzcG9uc2UocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgZGVsZXRlQ2FyZCA9IChfaWQpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX3VybCArIFwiY2FyZHMvXCIgKyBfaWQsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNraW5nUmVzcG9uc2UocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgc2VuZFVzZXJJZm5vID0gKG5hbWUsIGFib3V0KSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaCh0aGlzLl91cmwgKyBcInVzZXJzL21lXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5hbWUsIGFib3V0KSxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNraW5nUmVzcG9uc2UocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgYWRkTmV3Q2FyZCA9IChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaCh0aGlzLl91cmwgKyBcImNhcmRzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmFtZSwgbGluayksXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja2luZ1Jlc3BvbnNlKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGFkZE5ld0F2YXRhciA9IChhdmF0YXIpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX3VybCArIFwidXNlcnMvbWUvYXZhdGFyXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYXZhdGFyOiBhdmF0YXIubGluayB9KSxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNraW5nUmVzcG9uc2UocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgYWRkTGlrZSA9IChfaWQpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX3VybCArIFwiY2FyZHMvXCIgKyBfaWQgKyBcIi9saWtlc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja2luZ1Jlc3BvbnNlKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGRlbGV0ZUxpa2UgPSAoX2lkKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaCh0aGlzLl91cmwgKyBcImNhcmRzL1wiICsgX2lkICsgXCIvbGlrZXNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tpbmdSZXNwb25zZShyZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfVxyXG4gICIsImV4cG9ydCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHsgZGF0YSwgdXNlcklkLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZURlbGV0ZUljb25DbGljaywgaGFuZGxlTGlrZUNsaWNrIH0sXHJcbiAgICB0ZW1wbGF0ZVNlbGVjdG9yXHJcbiAgKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5faW1hZ2VMaW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5fYWx0ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcclxuICAgIHRoaXMuX2xpa2VzID0gZGF0YS5saWtlcztcclxuICAgIHRoaXMuX293bmVyID0gZGF0YS5vd25lcjtcclxuICAgIHRoaXMuX293bmVySWQgPSB0aGlzLl9vd25lci5faWQ7XHJcbiAgICB0aGlzLl91c2VySWQgPSB1c2VySWQ7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb25DbGljayA9IGhhbmRsZURlbGV0ZUljb25DbGljaztcclxuICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZUNhcmQoKSB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yKVxyXG4gICAgLmNvbnRlbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2l0ZW0nKVxyXG4gICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHRoaXMuX2J1dHRvbkxpa2UgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saWtlLWJ0blwiKTsvL2dnXHJcbiAgICB0aGlzLl9jYXJkSW1nID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19faW1hZ2VcIik7Ly9nZ1xyXG4gICAgdGhpcy5fZGVsZXRlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fcmVtb3ZlLWJ0blwiKTsvL2dnXHJcbiAgICB0aGlzLl9saWtlQ291bnRlciA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpa2UtY291bnRcIik7Ly9nZ1xyXG5cclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG5nZW5lcmF0ZUNhcmQgPSAoKSA9PiB7XHJcbiAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlQ2FyZCgpOyBcclxuICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG4gIHRoaXMudG9nZ2xlQnV0dG9uTGlrZSgpXHJcblxyXG4gIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xyXG4gIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xyXG4gIHRoaXMuX2NhcmRJbWcuc3JjID0gdGhpcy5faW1hZ2VMaW5rO1xyXG4gIHRoaXMuX2NhcmRJbWcuYWx0ID0gdGhpcy5fdGV4dDtcclxuXHJcbiAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbn1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uTGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrKHRoaXMuX2lkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlSWNvbkNsaWNrKHRoaXMuX2lkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NhcmRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90ZXh0LCB0aGlzLl9pbWFnZUxpbmspOy8vdGl0bGVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tNeUlkKCkge1xyXG4gICAgaWYgKHRoaXMuX3VzZXJJZCAhPT0gdGhpcy5fb3duZXJJZCkge1xyXG4gICAgICB0aGlzLl9kZWxldGUuY2xhc3NMaXN0LmFkZChcImNhcmRzX19yZW1vdmUtYnRuX2FjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2RlbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2FyZHNfX3JlbW92ZS1idG5fYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY291bnROZXdMaWtlKG5ld0RhdGEpIHtcclxuICAgIHRoaXMuX2xpa2VzID0gbmV3RGF0YS5saWtlcztcclxuICAgIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xyXG4gIH1cclxuICBcclxuICBhdmFpbGFibGVMaWtlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzTXlMaWtlcyA9IHRoaXMuX2xpa2VzLnNvbWUoKGxpa2UpID0+IGxpa2UuX2lkID09PSB0aGlzLl91c2VySWQpO1xyXG4gICAgcmV0dXJuIGlzTXlMaWtlcztcclxuICB9O1xyXG5cclxudG9nZ2xlQnV0dG9uTGlrZSgpIHtcclxuICBpZiAodGhpcy5hdmFpbGFibGVMaWtlcygpKSB7XHJcbiAgICB0aGlzLl9idXR0b25MaWtlLmNsYXNzTGlzdC5hZGQoXCJjYXJkc19fbGlrZS1idG5fYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLl9idXR0b25MaWtlLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkc19fbGlrZS1idG5fYWN0aXZlXCIpO1xyXG4gIH0gIFxyXG59XHJcblxyXG4gIGhhbmRsZURlbGV0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcih2YWxpZGF0aW9uU2V0dGluZ3MsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gdmFsaWRhdGlvblNldHRpbmdzLmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHZhbGlkYXRpb25TZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgIHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MgPSB2YWxpZGF0aW9uU2V0dGluZ3MuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHZhbGlkYXRpb25TZXR0aW5ncy5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gdmFsaWRhdGlvblNldHRpbmdzLmVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRzID0gQXJyYXkuZnJvbShcclxuICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxyXG4gICAgKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9zaG93SW5wdXRFcnJvcihpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gIH1cclxuXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIF9jaGVja2Zvcm1WYWxpZGl0eSA9IChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3RvZ2dsZUZvcm1CdXR0b25TdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkZUlucHV0KCkpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5kaXNhYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlU3VibWl0QnV0dG9uKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgIHRoaXMuX3RvZ2dsZUZvcm1CdXR0b25TdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcclxuICAgIHRoaXMuX3RvZ2dsZUZvcm1CdXR0b25TdGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tmb3JtVmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLl90b2dnbGVGb3JtQnV0dG9uU3RhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBfaGFzSW52YWxpZGVJbnB1dCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9pbnB1dHMuZXZlcnkoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBlbmFibGVWYWxpZGF0aW9uID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9O1xyXG59IiwiZXhwb3J0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfaXMtb3BlbmVkXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX2lzLW9wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIC8vINCX0LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwINC90LDQttCw0YLQuNC10Lwg0L3QsCBFc2NcclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vINCX0LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwINC60LvQuNC60L7QvCDQvdCwINC+0LLQtdGA0LvQtdC5INC4INC90LAg0LrRgNC10YHRgtC40LpcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX2lzLW9wZW5lZCcpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG59XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhDb25maXJtYXRpb24gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlQ29uZmlybURlbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3VibWl0Q29uZmlybShzdWJtaXRDb25maXJtKSB7XHJcbiAgICB0aGlzLl9oYW5kbGVDb25maXJtRGVsZXRlID0gc3VibWl0Q29uZmlybTtcclxuICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlRm9ybVN1Ym1pdCB9KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZUZvcm1TdWJtaXQgPSBoYW5kbGVGb3JtU3VibWl0O1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gICAgdGhpcy5fYnV0dG9uID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX3NhdmUtYnRuXCIpO1xyXG4gICAgdGhpcy5faW5wdXRzID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucG9wdXBfX2lucHV0XCIpO1xyXG4gIH1cclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XHJcbiAgfVxyXG5cclxuICBzZXRJbnB1dFZhbHVlcyhkYXRhKSB7XHJcbiAgICB0aGlzLl9pbnB1dHMuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBkYXRhW2lucHV0Lm5hbWVdO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0KHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgfSk7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgd2FpdExvYWQoaXNSZWFkeSkge1xyXG4gICAgaWYgKGlzUmVhZHkpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gXCLQodC+0YXRgNCw0L3QtdC90LjQtS4uLlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYnV0dG9uLnRleHRDb250ZW50ID0gXCLQodC+0YXRgNCw0L3QuNGC0YxcIjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUG9wdXAgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciB9KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2ltYWdlID0gdGhpcy5fcG9wdXBFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xyXG4gICAgdGhpcy5fdGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2UtdGl0bGVcIik7XHJcbiAgfVxyXG5cclxuICBvcGVuKG5hbWUsIGxpbmspIHtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IGxpbms7XHJcbiAgICB0aGlzLl9pbWFnZS5hbHQgPSBuYW1lO1xyXG4gICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgc3VwZXIub3BlbigpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXIpIHtcclxuICAgIHRoaXMuX3JlbmRlcmVyID0gcmVuZGVyZXI7XHJcbiAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgfVxyXG5cclxuICByZW5kZXJJdGVtcyA9IChpdGVtcykgPT4ge1xyXG4gICAgaXRlbXMuZm9yRWFjaCh0aGlzLl9yZW5kZXJlcik7XHJcbiAgfTtcclxuXHJcbiAgYWRkSXRlbShjYXJkRWxlbWVudCkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyLnByZXBlbmQoY2FyZEVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFVzZXJJbmZvIHtcclxuICBjb25zdHJ1Y3Rvcih7IG5hbWUsIGFib3V0LCBhdmF0YXIgfSkge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgICB0aGlzLl9hYm91dCA9IGFib3V0O1xyXG4gICAgdGhpcy5fYXZhdGFyID0gYXZhdGFyO1xyXG4gIH1cclxuXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBuYW1lOiB0aGlzLl9uYW1lLnRleHRDb250ZW50LFxyXG4gICAgICBhYm91dDogdGhpcy5fYWJvdXQudGV4dENvbnRlbnQsXHJcbiAgICAgIGF2YXRhcjogdGhpcy5fYXZhdGFyLnNyYyxcclxuICAgIH07XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9XHJcblxyXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcclxuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9hYm91dC50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgICB0aGlzLl9hdmF0YXIuc3JjID0gZGF0YS5hdmF0YXI7XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5cclxuZXhwb3J0IGNvbnN0IGJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcclxuZXhwb3J0IGNvbnN0IGJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2FkZC1idXR0b25cIik7XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybUVkaXRQcm9maWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX3Byb2ZpbGVcIik7XHJcbmV4cG9ydCBjb25zdCBmb3JtRWRpdEF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV91cGRhdGUtYXZhdGFyXCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybUVsZW1lbnRDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF90eXBlX2FkZC1wbGFjZVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fdGl0bGVcIik7XHJcbmV4cG9ydCBjb25zdCBwcm9maWxlSm9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19wcm9mZXNzaW9uXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGVsZW1lbnRQb3B1cFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2UtdGl0bGVcIik7XHJcbmV4cG9ydCBjb25zdCBlbGVtZW50UG9wdXBQaG90byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhcmRzRWxlbWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzXCIpO1xyXG5leHBvcnQgY29uc3QgYnV0dG9uRWRpdEF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fYXZhdGFyLWVkaXRoXCIpOyIsImV4cG9ydCBjb25zdCB2YWxpZGF0ZSA9IHtcclxuICBmb3JtU2VsZWN0b3I6ICcucG9wdXBfX2Zvcm0nLFxyXG4gIGlucHV0U2VsZWN0b3I6ICcucG9wdXBfX2lucHV0JyxcclxuICBzdWJtaXRCdXR0b25TZWxlY3RvcjogJy5wb3B1cF9fc2F2ZS1idG4nLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fYnV0dG9uX2ludmFsaWQnLFxyXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcclxuICBlcnJvckNsYXNzOiAncG9wdXBfX2Vycm9yX3Zpc2libGUnXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLy4uL3BhZ2VzL2luZGV4LmNzcyc7XHJcbmltcG9ydCB7QXBpfSBmcm9tICcuLi9jb21wb25lbnRzL0FwaS5qcycvL2xsXHJcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi4vdXRpbHMvdmFsaWRhdGUuanMnOy8vbGxcclxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FyZC5qcyc7Ly9sbFxyXG5pbXBvcnQgeyBGb3JtVmFsaWRhdG9yIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJzsvL2xsXHJcbmltcG9ydCB7IFNlY3Rpb24gfSBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnOy8vbGxcclxuaW1wb3J0IHsgUG9wdXBXaXRoSW1hZ2UgfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzJzsvL2xsXHJcbmltcG9ydCB7IFBvcHVwV2l0aEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnOy8vbGxcclxuaW1wb3J0IHsgUG9wdXBXaXRoQ29uZmlybWF0aW9ufSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm1hdGlvbi5qcycvL2xsXHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7Ly9sbFxyXG5pbXBvcnQgeyAgcHJvZmlsZU5hbWUsXHJcbiAgcHJvZmlsZUpvYixcclxuICBjYXJkc0VsZW1lbnRMaXN0LFxyXG4gIGZvcm1FZGl0UHJvZmlsZSxcclxuICBmb3JtRWRpdEF2YXRhcixcclxuICBmb3JtRWxlbWVudENhcmQsXHJcbiAgYnV0dG9uT3BlbkFkZENhcmRQb3B1cCxcclxuICBidXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cCxcclxuICBwcm9maWxlQXZhdGFyLFxyXG4gIGJ1dHRvbkVkaXRBdmF0YXIsfSBmcm9tICcuLi91dGlscy9jb21wb25lbnRzLmpzJztcclxubGV0IHVzZXJJZDtcclxuY29uc3QgcG9wdXBXaXRoSW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoeyBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF90eXBlX3BsYWNlLWltYWdlXCIgfSk7XHJcbnBvcHVwV2l0aEltYWdlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCB1c2VySW5mbyA9IG5ldyBVc2VySW5mbyh7XHJcbiAgbmFtZTogcHJvZmlsZU5hbWUsXHJcbiAgYWJvdXQ6IHByb2ZpbGVKb2IsXHJcbiAgYXZhdGFyOiBwcm9maWxlQXZhdGFyLFxyXG59KTtcclxuXHJcbi8vINCf0L7Qv9Cw0L8g0YPQtNCw0LvQtdC90LjRj1xyXG5cclxuY29uc3QgcG9wdXBXaXRoQ29uZmlybWF0aW9uID0gbmV3IFBvcHVwV2l0aENvbmZpcm1hdGlvbih7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCIucG9wdXBfZGVsZXRlXCIsXHJcbn0pO1xyXG5cclxuLy8g0KHQvtC30LTQsNC90LjQtSDQutCw0YDRgtC+0YfQutC4XHJcblxyXG5jb25zdCBjcmVhdGVDYXJkID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoXHJcbiAgICB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICAgIHVzZXJJZDogdXNlcklkLFxyXG4gICAgICBoYW5kbGVDYXJkQ2xpY2s6IChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgICAgICAgcG9wdXBXaXRoSW1hZ2Uub3BlbihuYW1lLCBsaW5rKTtcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlRGVsZXRlSWNvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBXaXRoQ29uZmlybWF0aW9uLm9wZW4oKTtcclxuICAgICAgICBwb3B1cFdpdGhDb25maXJtYXRpb24uc2V0U3VibWl0Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgICBhcGlcclxuICAgICAgICAgICAgLmRlbGV0ZUNhcmQoZGF0YS5faWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICBjYXJkLmhhbmRsZURlbGV0ZUNhcmQocmVzKTtcclxuICAgICAgICAgICAgICBwb3B1cFdpdGhDb25maXJtYXRpb24uY2xvc2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgaGFuZGxlTGlrZUNsaWNrOiAoaWQpID0+IHtcclxuICAgICAgICBpZiAoY2FyZC5hdmFpbGFibGVMaWtlcygpKSB7XHJcbiAgICAgICAgICBhcGlcclxuICAgICAgICAgICAgLmRlbGV0ZUxpa2UoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICBjYXJkLmNvdW50TmV3TGlrZShyZXMpO1xyXG4gICAgICAgICAgICAgIGNhcmQudG9nZ2xlQnV0dG9uTGlrZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhcGlcclxuICAgICAgICAgICAgLmFkZExpa2UoaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICBjYXJkLmNvdW50TmV3TGlrZShyZXMpO1xyXG4gICAgICAgICAgICAgIGNhcmQudG9nZ2xlQnV0dG9uTGlrZSgpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBcIiN0ZW1wbGF0ZS1jYXJkc1wiXHJcbiAgKTtcclxuICBjb25zdCBjYXJkRWxlbWVudCA9IGNhcmQuZ2VuZXJhdGVDYXJkKCk7XHJcbiAgY2FyZExpc3QuYWRkSXRlbShjYXJkRWxlbWVudCk7XHJcbiAgY2FyZC5jaGVja015SWQoKTtcclxufTtcclxuXHJcbmNvbnN0IGNhcmRMaXN0ID0gbmV3IFNlY3Rpb24oXHJcbiAgeyByZW5kZXJlcjogKGl0ZW0pID0+IGNyZWF0ZUNhcmQoaXRlbSkgfSxcclxuICBjYXJkc0VsZW1lbnRMaXN0XHJcbik7XHJcblxyXG5wb3B1cFdpdGhDb25maXJtYXRpb24uc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbmNvbnN0IGFwaSA9IG5ldyBBcGkoe1xyXG4gIHVybDogXCJodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTU5L1wiLFxyXG4gIGhlYWRlcnM6IHtcclxuICAgIGF1dGhvcml6YXRpb246IFwiMDRmZTJmYTMtYzg2Yi00OWMwLTkyMmQtYWQ0MTM4NTllZmNjXCIsXHJcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICB9LFxyXG59KTtcclxuXHJcblByb21pc2UuYWxsKFthcGkuZ2V0VXNlcklmbm9BcGkoKSwgYXBpLmdldEluaXRpYWxDYXJkcygpXSlcclxuICAudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zdCByZXNVc2VyID0gcmVzWzBdO1xyXG4gICAgY29uc3QgcmVzQ2FyZCA9IHJlc1sxXTtcclxuICAgIHVzZXJJZCA9IHJlc1VzZXIuX2lkO1xyXG4gICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzVXNlcik7XHJcbiAgICBjYXJkTGlzdC5yZW5kZXJJdGVtcyhyZXNDYXJkKTtcclxuICB9KVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuLy8g0KTQvtGA0LzQsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXHJcblxyXG5jb25zdCBoYW5kbGVFZGl0UHJvZmlsZVBvcHVwID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRhdGEgPSB1c2VySW5mby5nZXRVc2VySW5mbygpO1xyXG4gIHBvcHVwRWRpdFByb2ZpbGUuc2V0SW5wdXRWYWx1ZXMoZGF0YSk7XHJcbiAgcG9wdXBFZGl0UHJvZmlsZS5vcGVuKCk7XHJcbiAgZm9ybVZhbGlkYXRvclByb2ZpbGUucmVzZXRWYWxpZGF0aW9uKCk7XHJcbn07XHJcblxyXG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwX3R5cGVfcHJvZmlsZVwiLFxyXG4gIGhhbmRsZUZvcm1TdWJtaXQ6IChuYW1lLCBhYm91dCkgPT4ge1xyXG4gICAgcG9wdXBFZGl0UHJvZmlsZS53YWl0TG9hZCh0cnVlKTtcclxuICAgIGFwaVxyXG4gICAgICAuc2VuZFVzZXJJZm5vKG5hbWUsIGFib3V0KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdXNlckluZm8uc2V0VXNlckluZm8ocmVzKTtcclxuICAgICAgICBwb3B1cEVkaXRQcm9maWxlLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwRWRpdFByb2ZpbGUud2FpdExvYWQoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmJ1dHRvbk9wZW5FZGl0UHJvZmlsZVBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgaGFuZGxlRWRpdFByb2ZpbGVQb3B1cChwcm9maWxlTmFtZSwgcHJvZmlsZUpvYik7XHJcbn0pO1xyXG5cclxucG9wdXBFZGl0UHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy8g0KTQvtGA0LzQsCDRgdC+0LfQtNCw0L3QuNGPINC60LDRgNGC0L7Rh9C60LhcclxuXHJcbmNvbnN0IHBvcHVwV2l0aENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCIucG9wdXBfdHlwZV9hZGQtcGxhY2VcIixcclxuICBoYW5kbGVGb3JtU3VibWl0OiAobmFtZSwgbGluaykgPT4ge1xyXG4gICAgcG9wdXBXaXRoQ2FyZC53YWl0TG9hZCh0cnVlKTtcclxuICAgIGFwaVxyXG4gICAgICAuYWRkTmV3Q2FyZChuYW1lLCBsaW5rKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQ2FyZChyZXMpO1xyXG4gICAgICAgIHBvcHVwV2l0aENhcmQuY2xvc2UoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBXaXRoQ2FyZC53YWl0TG9hZChmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuYnV0dG9uT3BlbkFkZENhcmRQb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBvcHVwV2l0aENhcmQub3BlbigpO1xyXG4gIGZvcm1WYWxpZGF0b3JDYXJkLmRpc2FibGVTdWJtaXRCdXR0b24oKTtcclxuICBmb3JtVmFsaWRhdG9yQ2FyZC5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG5wb3B1cFdpdGhDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyDQpNC+0YDQvNCwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LDQstCw0YLQsNGA0LBcclxuXHJcbmNvbnN0IHBvcHVwV2l0aEF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF90eXBlX3VwZGF0ZS1hdmF0YXJcIixcclxuICBoYW5kbGVGb3JtU3VibWl0OiAobGluaykgPT4ge1xyXG4gICAgcG9wdXBXaXRoQXZhdGFyLndhaXRMb2FkKHRydWUpO1xyXG4gICAgYXBpXHJcbiAgICAgIC5hZGROZXdBdmF0YXIobGluaylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XHJcbiAgICAgICAgcG9wdXBXaXRoQXZhdGFyLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwV2l0aEF2YXRhci53YWl0TG9hZChmYWxzZSk7XHJcbiAgICAgIH0pO1xyXG4gIH0sXHJcbn0pO1xyXG5cclxuYnV0dG9uRWRpdEF2YXRhci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIHBvcHVwV2l0aEF2YXRhci5vcGVuKCk7XHJcbiAgZm9ybVZhbGlkYXRvckF2YXRhci5kaXNhYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgZm9ybVZhbGlkYXRvckF2YXRhci5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG5wb3B1cFdpdGhBdmF0YXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vINCS0LDQu9C40LTQsNGG0LjRjyDRhNC+0YDQvFxyXG5cclxuY29uc3QgZm9ybVZhbGlkYXRvckNhcmQgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICB2YWxpZGF0ZSxcclxuICBmb3JtRWxlbWVudENhcmRcclxuKTtcclxuY29uc3QgZm9ybVZhbGlkYXRvclByb2ZpbGUgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICB2YWxpZGF0ZSxcclxuICBmb3JtRWRpdFByb2ZpbGVcclxuKTtcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JBdmF0YXIgPSBuZXcgRm9ybVZhbGlkYXRvcihcclxuICB2YWxpZGF0ZSxcclxuICBmb3JtRWRpdEF2YXRhclxyXG4pO1xyXG5cclxuZm9ybVZhbGlkYXRvckNhcmQuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5mb3JtVmFsaWRhdG9yUHJvZmlsZS5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbmZvcm1WYWxpZGF0b3JBdmF0YXIuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4iXSwibmFtZXMiOlsiQXBpIiwidXJsIiwiaGVhZGVycyIsImZldGNoIiwiX3VybCIsIl9oZWFkZXJzIiwidGhlbiIsInJlcyIsIl9jaGVja2luZ1Jlc3BvbnNlIiwiX2lkIiwibWV0aG9kIiwibmFtZSIsImFib3V0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsaW5rIiwiYXZhdGFyIiwib2siLCJqc29uIiwiUHJvbWlzZSIsInJlamVjdCIsInN0YXR1cyIsIkNhcmQiLCJ0ZW1wbGF0ZVNlbGVjdG9yIiwiZGF0YSIsInVzZXJJZCIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUljb25DbGljayIsImhhbmRsZUxpa2VDbGljayIsIl9lbGVtZW50IiwiX2dldFRlbXBsYXRlQ2FyZCIsIl9zZXRFdmVudExpc3RlbmVycyIsInRvZ2dsZUJ1dHRvbkxpa2UiLCJfbGlrZUNvdW50ZXIiLCJ0ZXh0Q29udGVudCIsIl9saWtlcyIsImxlbmd0aCIsInF1ZXJ5U2VsZWN0b3IiLCJfdGV4dCIsIl9jYXJkSW1nIiwic3JjIiwiX2ltYWdlTGluayIsImFsdCIsImlzTXlMaWtlcyIsInNvbWUiLCJsaWtlIiwiX3VzZXJJZCIsIl9hbHQiLCJsaWtlcyIsIl9vd25lciIsIm93bmVyIiwiX293bmVySWQiLCJfdGVtcGxhdGVTZWxlY3RvciIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlSWNvbkNsaWNrIiwiX2hhbmRsZUxpa2VDbGljayIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2J1dHRvbkxpa2UiLCJfZGVsZXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm5ld0RhdGEiLCJhdmFpbGFibGVMaWtlcyIsIkZvcm1WYWxpZGF0b3IiLCJ2YWxpZGF0aW9uU2V0dGluZ3MiLCJmb3JtRWxlbWVudCIsImlucHV0RWxlbWVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJfc2hvd0lucHV0RXJyb3IiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsIl9oaWRlSW5wdXRFcnJvciIsIl90b2dnbGVGb3JtQnV0dG9uU3RhdGUiLCJfaW5wdXRzIiwiZm9yRWFjaCIsIl9jaGVja2Zvcm1WYWxpZGl0eSIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsIl9mb3JtRWxlbWVudCIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfYnV0dG9uRWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwiX2hhc0ludmFsaWRlSW5wdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkaXNhYmxlU3VibWl0QnV0dG9uIiwic2V0QXR0cmlidXRlIiwiZXZlcnkiLCJQb3B1cCIsInBvcHVwU2VsZWN0b3IiLCJldnQiLCJrZXkiLCJjbG9zZSIsIl9wb3B1cEVsZW1lbnQiLCJfaGFuZGxlRXNjQ2xvc2UiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoQ29uZmlybWF0aW9uIiwiX2Zvcm0iLCJwcmV2ZW50RGVmYXVsdCIsIl9oYW5kbGVDb25maXJtRGVsZXRlIiwic3VibWl0Q29uZmlybSIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0IiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfYnV0dG9uIiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwiaXNSZWFkeSIsInJlc2V0IiwiUG9wdXBXaXRoSW1hZ2UiLCJfaW1hZ2UiLCJfdGl0bGUiLCJTZWN0aW9uIiwiY29udGFpbmVyIiwicmVuZGVyZXIiLCJpdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJfbmFtZSIsIl9hYm91dCIsIl9hdmF0YXIiLCJidXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cCIsImJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAiLCJmb3JtRWRpdFByb2ZpbGUiLCJmb3JtRWRpdEF2YXRhciIsImZvcm1FbGVtZW50Q2FyZCIsInByb2ZpbGVOYW1lIiwicHJvZmlsZUpvYiIsInByb2ZpbGVBdmF0YXIiLCJlbGVtZW50UG9wdXBUaXRsZSIsImVsZW1lbnRQb3B1cFBob3RvIiwiY2FyZHNFbGVtZW50TGlzdCIsImJ1dHRvbkVkaXRBdmF0YXIiLCJ2YWxpZGF0ZSIsImZvcm1TZWxlY3RvciIsInBvcHVwV2l0aEltYWdlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ1c2VySW5mbyIsInBvcHVwV2l0aENvbmZpcm1hdGlvbiIsImNyZWF0ZUNhcmQiLCJjYXJkIiwib3BlbiIsInNldFN1Ym1pdENvbmZpcm0iLCJhcGkiLCJkZWxldGVDYXJkIiwiaGFuZGxlRGVsZXRlQ2FyZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUxpa2UiLCJjb3VudE5ld0xpa2UiLCJhZGRMaWtlIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZExpc3QiLCJhZGRJdGVtIiwiY2hlY2tNeUlkIiwiaXRlbSIsImF1dGhvcml6YXRpb24iLCJhbGwiLCJnZXRVc2VySWZub0FwaSIsImdldEluaXRpYWxDYXJkcyIsInJlc1VzZXIiLCJyZXNDYXJkIiwic2V0VXNlckluZm8iLCJyZW5kZXJJdGVtcyIsImhhbmRsZUVkaXRQcm9maWxlUG9wdXAiLCJnZXRVc2VySW5mbyIsInBvcHVwRWRpdFByb2ZpbGUiLCJzZXRJbnB1dFZhbHVlcyIsImZvcm1WYWxpZGF0b3JQcm9maWxlIiwicmVzZXRWYWxpZGF0aW9uIiwid2FpdExvYWQiLCJzZW5kVXNlcklmbm8iLCJmaW5hbGx5IiwicG9wdXBXaXRoQ2FyZCIsImFkZE5ld0NhcmQiLCJmb3JtVmFsaWRhdG9yQ2FyZCIsInBvcHVwV2l0aEF2YXRhciIsImFkZE5ld0F2YXRhciIsImZvcm1WYWxpZGF0b3JBdmF0YXIiLCJlbmFibGVWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==