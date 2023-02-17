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
        _this2._handleCardClick(_this2._title, _this2._imageLink);
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
    _defineProperty(this, "resetValidation", function () {
      _this._toggleFormButtonState();
      _this._inputs.forEach(function (inputElement) {
        _this._hideInputError(inputElement);
      });
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
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithConfirmation.prototype), "close", this).call(this);
      this._form.reset();
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
  function Section(_ref, containerSelector) {
    var _this = this;
    var renderer = _ref.renderer;
    _classCallCheck(this, Section);
    _defineProperty(this, "renderItems", function (items) {
      items.forEach(_this._renderer);
    });
    this._renderer = renderer;
    this._container = containerSelector;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVGeEMsb0ZBQWlDLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDL0M4QyxlQUFlLENBQUNyQyxJQUFJLEVBQUU7RUFDdEJ1QyxtQkFBbUIsQ0FBQ25HLG1CQUFtQixFQUFFO0VBQ3pDbUcsbUJBQW1CLENBQUNULGVBQWUsRUFBRTtBQUN2QyxDQUFDLENBQUM7QUFFRk8sZUFBZSxDQUFDMUMsaUJBQWlCLEVBQUU7O0FBRW5DOztBQUVBLElBQU15QyxpQkFBaUIsR0FBRyxJQUFJbkksdUVBQWEsQ0FDekN1Rix3REFBUSxFQUNSUixrRUFBZSxDQUNoQjtBQUNELElBQU02QyxvQkFBb0IsR0FBRyxJQUFJNUgsdUVBQWEsQ0FDNUN1Rix3REFBUSxFQUNSVixrRUFBZSxDQUNoQjtBQUVELElBQU15RCxtQkFBbUIsR0FBRyxJQUFJdEksdUVBQWEsQ0FDM0N1Rix3REFBUSxFQUNSVCxpRUFBYyxDQUNmO0FBRURxRCxpQkFBaUIsQ0FBQ0ksZ0JBQWdCLEVBQUU7QUFDcENYLG9CQUFvQixDQUFDVyxnQkFBZ0IsRUFBRTtBQUN2Q0QsbUJBQW1CLENBQUNDLGdCQUFnQixFQUFFLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhDb25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy91dGlscy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBpIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgdXJsLCBoZWFkZXJzIH0pIHtcclxuICAgICAgdGhpcy5fdXJsID0gdXJsO1xyXG4gICAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVycztcclxuICAgIH1cclxuICBcclxuICAgIF9jaGVja2luZ1Jlc3BvbnNlKHJlcykge1xyXG4gICAgICByZXR1cm4gcmVzLm9rID8gcmVzLmpzb24oKSA6IFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcclxuICAgIH1cclxuICBcclxuICAgIGdldEluaXRpYWxDYXJkcyA9ICgpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX3VybCArIFwiY2FyZHNcIiwge1xyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja2luZ1Jlc3BvbnNlKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGdldFVzZXJJZm5vQXBpID0gKCkgPT4ge1xyXG4gICAgICByZXR1cm4gZmV0Y2godGhpcy5fdXJsICsgXCJ1c2Vycy9tZVwiLCB7XHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNraW5nUmVzcG9uc2UocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgZGVsZXRlQ2FyZCA9IChfaWQpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX3VybCArIFwiY2FyZHMvXCIgKyBfaWQsIHtcclxuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNraW5nUmVzcG9uc2UocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgc2VuZFVzZXJJZm5vID0gKG5hbWUsIGFib3V0KSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaCh0aGlzLl91cmwgKyBcInVzZXJzL21lXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5hbWUsIGFib3V0KSxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNraW5nUmVzcG9uc2UocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgYWRkTmV3Q2FyZCA9IChuYW1lLCBsaW5rKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaCh0aGlzLl91cmwgKyBcImNhcmRzXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmFtZSwgbGluayksXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja2luZ1Jlc3BvbnNlKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGFkZE5ld0F2YXRhciA9IChhdmF0YXIpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX3VybCArIFwidXNlcnMvbWUvYXZhdGFyXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUEFUQ0hcIixcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgYXZhdGFyOiBhdmF0YXIubGluayB9KSxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoZWNraW5nUmVzcG9uc2UocmVzKTtcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgYWRkTGlrZSA9IChfaWQpID0+IHtcclxuICAgICAgcmV0dXJuIGZldGNoKHRoaXMuX3VybCArIFwiY2FyZHMvXCIgKyBfaWQgKyBcIi9saWtlc1wiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jaGVja2luZ1Jlc3BvbnNlKHJlcyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICBcclxuICAgIGRlbGV0ZUxpa2UgPSAoX2lkKSA9PiB7XHJcbiAgICAgIHJldHVybiBmZXRjaCh0aGlzLl91cmwgKyBcImNhcmRzL1wiICsgX2lkICsgXCIvbGlrZXNcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tpbmdSZXNwb25zZShyZXMpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgfVxyXG4gICIsImV4cG9ydCBjbGFzcyBDYXJkIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHsgZGF0YSwgdXNlcklkLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZURlbGV0ZUljb25DbGljaywgaGFuZGxlTGlrZUNsaWNrIH0sXHJcbiAgICB0ZW1wbGF0ZVNlbGVjdG9yXHJcbiAgKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5faW1hZ2VMaW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5fYWx0ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcclxuICAgIHRoaXMuX2xpa2VzID0gZGF0YS5saWtlcztcclxuICAgIHRoaXMuX293bmVyID0gZGF0YS5vd25lcjtcclxuICAgIHRoaXMuX293bmVySWQgPSB0aGlzLl9vd25lci5faWQ7XHJcbiAgICB0aGlzLl91c2VySWQgPSB1c2VySWQ7XHJcbiAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdGVtcGxhdGVTZWxlY3RvcjtcclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgIHRoaXMuX2hhbmRsZURlbGV0ZUljb25DbGljayA9IGhhbmRsZURlbGV0ZUljb25DbGljaztcclxuICAgIHRoaXMuX2hhbmRsZUxpa2VDbGljayA9IGhhbmRsZUxpa2VDbGljaztcclxuICB9XHJcblxyXG4gIF9nZXRUZW1wbGF0ZUNhcmQoKSB7XHJcbiAgICBjb25zdCBjYXJkRWxlbWVudCA9IGRvY3VtZW50XHJcbiAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yKVxyXG4gICAgLmNvbnRlbnRcclxuICAgIC5xdWVyeVNlbGVjdG9yKCcuY2FyZHNfX2l0ZW0nKVxyXG4gICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICAgIHRoaXMuX2J1dHRvbkxpa2UgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRzX19saWtlLWJ0blwiKTsvL2dnXHJcbiAgICB0aGlzLl9jYXJkSW1nID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19faW1hZ2VcIik7Ly9nZ1xyXG4gICAgdGhpcy5fZGVsZXRlID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fcmVtb3ZlLWJ0blwiKTsvL2dnXHJcbiAgICB0aGlzLl9saWtlQ291bnRlciA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZHNfX2xpa2UtY291bnRcIik7Ly9nZ1xyXG5cclxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcclxuICB9XHJcblxyXG5nZW5lcmF0ZUNhcmQgPSAoKSA9PiB7XHJcbiAgdGhpcy5fZWxlbWVudCA9IHRoaXMuX2dldFRlbXBsYXRlQ2FyZCgpOyBcclxuICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKVxyXG4gIHRoaXMudG9nZ2xlQnV0dG9uTGlrZSgpXHJcblxyXG4gIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xyXG4gIHRoaXMuX2VsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fdGl0bGVcIikudGV4dENvbnRlbnQgPSB0aGlzLl90ZXh0O1xyXG4gIHRoaXMuX2NhcmRJbWcuc3JjID0gdGhpcy5faW1hZ2VMaW5rO1xyXG4gIHRoaXMuX2NhcmRJbWcuYWx0ID0gdGhpcy5fdGV4dDtcclxuXHJcbiAgcmV0dXJuIHRoaXMuX2VsZW1lbnQ7XHJcbn1cclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uTGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUNsaWNrKHRoaXMuX2lkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlSWNvbkNsaWNrKHRoaXMuX2lkKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NhcmRJbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayh0aGlzLl90aXRsZSwgdGhpcy5faW1hZ2VMaW5rKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hlY2tNeUlkKCkge1xyXG4gICAgaWYgKHRoaXMuX3VzZXJJZCAhPT0gdGhpcy5fb3duZXJJZCkge1xyXG4gICAgICB0aGlzLl9kZWxldGUuY2xhc3NMaXN0LmFkZChcImNhcmRzX19yZW1vdmUtYnRuX2FjdGl2ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2RlbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKFwiY2FyZHNfX3JlbW92ZS1idG5fYWN0aXZlXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY291bnROZXdMaWtlKG5ld0RhdGEpIHtcclxuICAgIHRoaXMuX2xpa2VzID0gbmV3RGF0YS5saWtlcztcclxuICAgIHRoaXMuX2xpa2VDb3VudGVyLnRleHRDb250ZW50ID0gdGhpcy5fbGlrZXMubGVuZ3RoO1xyXG4gIH1cclxuICBcclxuICBhdmFpbGFibGVMaWtlcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IGlzTXlMaWtlcyA9IHRoaXMuX2xpa2VzLnNvbWUoKGxpa2UpID0+IGxpa2UuX2lkID09PSB0aGlzLl91c2VySWQpO1xyXG4gICAgcmV0dXJuIGlzTXlMaWtlcztcclxuICB9O1xyXG5cclxudG9nZ2xlQnV0dG9uTGlrZSgpIHtcclxuICBpZiAodGhpcy5hdmFpbGFibGVMaWtlcygpKSB7XHJcbiAgICB0aGlzLl9idXR0b25MaWtlLmNsYXNzTGlzdC5hZGQoXCJjYXJkc19fbGlrZS1idG5fYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aGlzLl9idXR0b25MaWtlLmNsYXNzTGlzdC5yZW1vdmUoXCJjYXJkc19fbGlrZS1idG5fYWN0aXZlXCIpO1xyXG4gIH0gIFxyXG59XHJcblxyXG4gIGhhbmRsZURlbGV0ZUNhcmQoKSB7XHJcbiAgICB0aGlzLl9lbGVtZW50LnJlbW92ZSgpO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbGlkYXRpb25TZXR0aW5ncywgZm9ybUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHZhbGlkYXRpb25TZXR0aW5ncy5pbnB1dFNlbGVjdG9yO1xyXG4gICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHZhbGlkYXRpb25TZXR0aW5ncy5zdWJtaXRCdXR0b25TZWxlY3RvcjtcclxuICAgICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHZhbGlkYXRpb25TZXR0aW5ncy5pbmFjdGl2ZUJ1dHRvbkNsYXNzO1xyXG4gICAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSB2YWxpZGF0aW9uU2V0dGluZ3MuaW5wdXRFcnJvckNsYXNzO1xyXG4gICAgICB0aGlzLl9lcnJvckNsYXNzID0gdmFsaWRhdGlvblNldHRpbmdzLmVycm9yQ2xhc3M7XHJcbiAgICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuX2lucHV0cyA9IEFycmF5LmZyb20oXHJcbiAgICAgICAgdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKVxyXG4gICAgICApO1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgICAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvclxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICAgICk7XHJcbiAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcclxuICAgICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfaGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KSB7XHJcbiAgICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICAgICAgYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgXHJcbiAgICAgICk7XHJcbiAgICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgX2NoZWNrZm9ybVZhbGlkaXR5ID0gKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgX3NldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLl90b2dnbGVGb3JtQnV0dG9uU3RhdGUoKTtcclxuICBcclxuICAgICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5fY2hlY2tmb3JtVmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICAgIHRoaXMuX3RvZ2dsZUZvcm1CdXR0b25TdGF0ZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBkaXNhYmxlU3VibWl0QnV0dG9uKCkge1xyXG4gICAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBlbmFibGVWYWxpZGF0aW9uID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgfTtcclxuICBcclxuICAgIF9oYXNJbnZhbGlkZUlucHV0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRzLmV2ZXJ5KChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgX3RvZ2dsZUZvcm1CdXR0b25TdGF0ZSgpIHtcclxuICAgICAgaWYgKHRoaXMuX2hhc0ludmFsaWRlSW5wdXQoKSkge1xyXG4gICAgICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzKTtcclxuICAgICAgICB0aGlzLl9idXR0b25FbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImRpc2FibGVkXCIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXHJcbiAgICBcclxuICBcclxuICAgIHJlc2V0VmFsaWRhdGlvbiA9ICgpID0+IHtcclxuICAgICAgdGhpcy5fdG9nZ2xlRm9ybUJ1dHRvblN0YXRlKCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBvcHVwU2VsZWN0b3IpO1xyXG4gIH1cclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicG9wdXBfaXMtb3BlbmVkXCIpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH1cclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInBvcHVwX2lzLW9wZW5lZFwiKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuX2hhbmRsZUVzY0Nsb3NlKTtcclxuICB9XHJcblxyXG4gIC8vINCX0LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwINC90LDQttCw0YLQuNC10Lwg0L3QsCBFc2NcclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlID0gKGV2dCkgPT4ge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIC8vINCX0LDQutGA0YvRgtC40LUg0L/QvtC/0LDQv9CwINC60LvQuNC60L7QvCDQvdCwINC+0LLQtdGA0LvQtdC5INC4INC90LAg0LrRgNC10YHRgtC40LpcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19jbG9zZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3BvcHVwRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX2lzLW9wZW5lZCcpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG59XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhDb25maXJtYXRpb24gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19mb3JtXCIpO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlQ29uZmlybURlbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3VibWl0Q29uZmlybShzdWJtaXRDb25maXJtKSB7XHJcbiAgICB0aGlzLl9oYW5kbGVDb25maXJtRGVsZXRlID0gc3VibWl0Q29uZmlybTtcclxuICB9XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBQb3B1cCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUG9wdXBXaXRoRm9ybSBleHRlbmRzIFBvcHVwIHtcclxuICBjb25zdHJ1Y3Rvcih7IHBvcHVwU2VsZWN0b3IsIGhhbmRsZUZvcm1TdWJtaXQgfSkge1xyXG4gICAgc3VwZXIocG9wdXBTZWxlY3Rvcik7XHJcbiAgICB0aGlzLl9oYW5kbGVGb3JtU3VibWl0ID0gaGFuZGxlRm9ybVN1Ym1pdDtcclxuICAgIHRoaXMuX2Zvcm0gPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9fZm9ybVwiKTtcclxuICAgIHRoaXMuX2J1dHRvbiA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19zYXZlLWJ0blwiKTtcclxuICAgIHRoaXMuX2lucHV0cyA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBvcHVwX19pbnB1dFwiKTtcclxuICB9XHJcblxyXG4gIF9nZXRJbnB1dFZhbHVlcygpIHtcclxuICAgIHRoaXMuX2Zvcm1WYWx1ZXMgPSB7fTtcclxuICAgIHRoaXMuX2lucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICB0aGlzLl9mb3JtVmFsdWVzW2lucHV0Lm5hbWVdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5wdXRWYWx1ZXMoZGF0YSkge1xyXG4gICAgdGhpcy5faW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIGlucHV0LnZhbHVlID0gZGF0YVtpbnB1dC5uYW1lXTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlRm9ybVN1Ym1pdCh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgIH0pO1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9XHJcblxyXG4gIHdhaXRMb2FkKGlzUmVhZHkpIHtcclxuICAgIGlmIChpc1JlYWR5KSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9IFwi0KHQvtGF0YDQsNC90LXQvdC40LUuLi5cIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbi50ZXh0Q29udGVudCA9IFwi0KHQvtGF0YDQsNC90LjRgtGMXCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9mb3JtLnJlc2V0KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQb3B1cFdpdGhJbWFnZSBleHRlbmRzIFBvcHVwIHtcclxuICAgIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciB9KSB7XHJcbiAgICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgICB0aGlzLl9pbWFnZSA9IHRoaXMuX3BvcHVwRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuICAgICAgdGhpcy5fdGl0bGUgPSB0aGlzLl9wb3B1cEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5wb3B1cF9faW1hZ2UtdGl0bGVcIik7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBvcGVuKG5hbWUsIGxpbmspIHtcclxuICAgICAgdGhpcy5faW1hZ2Uuc3JjID0gbGluaztcclxuICAgICAgdGhpcy5faW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgICAgdGhpcy5fdGl0bGUudGV4dENvbnRlbnQgPSBuYW1lO1xyXG4gICAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4iLCJleHBvcnQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyByZW5kZXJlciB9LCBjb250YWluZXJTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcmVuZGVyZXIgPSByZW5kZXJlcjtcclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IGNvbnRhaW5lclNlbGVjdG9yO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVySXRlbXMgPSAoaXRlbXMpID0+IHtcclxuICAgIGl0ZW1zLmZvckVhY2godGhpcy5fcmVuZGVyZXIpO1xyXG4gIH07XHJcblxyXG4gIGFkZEl0ZW0oY2FyZEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wcmVwZW5kKGNhcmRFbGVtZW50KTtcclxuICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBuYW1lLCBhYm91dCwgYXZhdGFyIH0pIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5fYWJvdXQgPSBhYm91dDtcclxuICAgIHRoaXMuX2F2YXRhciA9IGF2YXRhcjtcclxuICB9XHJcblxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgbmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgYWJvdXQ6IHRoaXMuX2Fib3V0LnRleHRDb250ZW50LFxyXG4gICAgICBhdmF0YXI6IHRoaXMuX2F2YXRhci5zcmMsXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfVxyXG5cclxuICBzZXRVc2VySW5mbyhkYXRhKSB7XHJcbiAgICB0aGlzLl9uYW1lLnRleHRDb250ZW50ID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fYWJvdXQudGV4dENvbnRlbnQgPSBkYXRhLmFib3V0O1xyXG4gICAgdGhpcy5fYXZhdGFyLnNyYyA9IGRhdGEuYXZhdGFyO1xyXG4gIH1cclxufVxyXG4iLCJcclxuXHJcbmV4cG9ydCBjb25zdCBidXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZWRpdC1idXR0b25cIik7XHJcbmV4cG9ydCBjb25zdCBidXR0b25PcGVuQWRkQ2FyZFBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19hZGQtYnV0dG9uXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1FZGl0UHJvZmlsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9wcm9maWxlXCIpO1xyXG5leHBvcnQgY29uc3QgZm9ybUVkaXRBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX3R5cGVfdXBkYXRlLWF2YXRhclwiKTtcclxuZXhwb3J0IGNvbnN0IGZvcm1FbGVtZW50Q2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfdHlwZV9hZGQtcGxhY2VcIik7XHJcblxyXG5leHBvcnQgY29uc3QgcHJvZmlsZU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX3RpdGxlXCIpO1xyXG5leHBvcnQgY29uc3QgcHJvZmlsZUpvYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcHJvZmVzc2lvblwiKTtcclxuZXhwb3J0IGNvbnN0IHByb2ZpbGVBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhclwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBlbGVtZW50UG9wdXBUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG9wdXBfX2ltYWdlLXRpdGxlXCIpO1xyXG5leHBvcnQgY29uc3QgZWxlbWVudFBvcHVwUGhvdG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBvcHVwX19pbWFnZVwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXJkc0VsZW1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc1wiKTtcclxuZXhwb3J0IGNvbnN0IGJ1dHRvbkVkaXRBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2ZpbGVfX2F2YXRhci1lZGl0aFwiKTsiLCJleHBvcnQgY29uc3QgdmFsaWRhdGUgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcclxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3NhdmUtYnRuJyxcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX2J1dHRvbl9pbnZhbGlkJyxcclxuICBpbnB1dEVycm9yQ2xhc3M6ICdwb3B1cF9faW5wdXRfdHlwZV9lcnJvcicsXHJcbiAgZXJyb3JDbGFzczogJ3BvcHVwX19lcnJvcl92aXNpYmxlJ1xyXG59O1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi8uLi9wYWdlcy9pbmRleC5jc3MnO1xyXG5pbXBvcnQge0FwaX0gZnJvbSAnLi4vY29tcG9uZW50cy9BcGkuanMnLy9sbFxyXG5pbXBvcnQgeyB2YWxpZGF0ZSB9IGZyb20gJy4uL3V0aWxzL3ZhbGlkYXRlLmpzJzsvL2xsXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnOy8vbGxcclxuaW1wb3J0IHsgRm9ybVZhbGlkYXRvciB9IGZyb20gJy4uL2NvbXBvbmVudHMvRm9ybVZhbGlkYXRvci5qcyc7Ly9sbFxyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJzsvL2xsXHJcbmltcG9ydCB7IFBvcHVwV2l0aEltYWdlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyc7Ly9sbFxyXG5pbXBvcnQgeyBQb3B1cFdpdGhGb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzJzsvL2xsXHJcbmltcG9ydCB7IFBvcHVwV2l0aENvbmZpcm1hdGlvbn0gZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhDb25maXJtYXRpb24uanMnLy9sbFxyXG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uL2NvbXBvbmVudHMvVXNlckluZm8uanMnOy8vbGxcclxuaW1wb3J0IHsgIHByb2ZpbGVOYW1lLFxyXG4gIHByb2ZpbGVKb2IsXHJcbiAgY2FyZHNFbGVtZW50TGlzdCxcclxuICBmb3JtRWRpdFByb2ZpbGUsXHJcbiAgZm9ybUVkaXRBdmF0YXIsXHJcbiAgZm9ybUVsZW1lbnRDYXJkLFxyXG4gIGJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAsXHJcbiAgYnV0dG9uT3BlbkVkaXRQcm9maWxlUG9wdXAsXHJcbiAgcHJvZmlsZUF2YXRhcixcclxuICBidXR0b25FZGl0QXZhdGFyLH0gZnJvbSAnLi4vdXRpbHMvY29tcG9uZW50cy5qcyc7XHJcbmxldCB1c2VySWQ7XHJcbmNvbnN0IHBvcHVwV2l0aEltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKHsgcG9wdXBTZWxlY3RvcjogXCIucG9wdXBfdHlwZV9wbGFjZS1pbWFnZVwiIH0pO1xyXG5wb3B1cFdpdGhJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuY29uc3QgdXNlckluZm8gPSBuZXcgVXNlckluZm8oe1xyXG4gIG5hbWU6IHByb2ZpbGVOYW1lLFxyXG4gIGFib3V0OiBwcm9maWxlSm9iLFxyXG4gIGF2YXRhcjogcHJvZmlsZUF2YXRhcixcclxufSk7XHJcblxyXG4vLyDQn9C+0L/QsNC/INGD0LTQsNC70LXQvdC40Y9cclxuXHJcbmNvbnN0IHBvcHVwV2l0aENvbmZpcm1hdGlvbiA9IG5ldyBQb3B1cFdpdGhDb25maXJtYXRpb24oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwX2RlbGV0ZVwiLFxyXG59KTtcclxuXHJcbi8vINCh0L7Qt9C00LDQvdC40LUg0LrQsNGA0YLQvtGH0LrQuFxyXG5cclxuY29uc3QgY3JlYXRlQ2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKFxyXG4gICAge1xyXG4gICAgICBkYXRhLFxyXG4gICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgaGFuZGxlQ2FyZENsaWNrOiAobmFtZSwgbGluaykgPT4ge1xyXG4gICAgICAgIHBvcHVwV2l0aEltYWdlLm9wZW4obmFtZSwgbGluayk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZURlbGV0ZUljb25DbGljazogKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwV2l0aENvbmZpcm1hdGlvbi5vcGVuKCk7XHJcbiAgICAgICAgcG9wdXBXaXRoQ29uZmlybWF0aW9uLnNldFN1Ym1pdENvbmZpcm0oKCkgPT4ge1xyXG4gICAgICAgICAgYXBpXHJcbiAgICAgICAgICAgIC5kZWxldGVDYXJkKGRhdGEuX2lkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FyZC5oYW5kbGVEZWxldGVDYXJkKHJlcyk7XHJcbiAgICAgICAgICAgICAgcG9wdXBXaXRoQ29uZmlybWF0aW9uLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGhhbmRsZUxpa2VDbGljazogKGlkKSA9PiB7XHJcbiAgICAgICAgaWYgKGNhcmQuYXZhaWxhYmxlTGlrZXMoKSkge1xyXG4gICAgICAgICAgYXBpXHJcbiAgICAgICAgICAgIC5kZWxldGVMaWtlKGlkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FyZC5jb3VudE5ld0xpa2UocmVzKTtcclxuICAgICAgICAgICAgICBjYXJkLnRvZ2dsZUJ1dHRvbkxpa2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgYXBpXHJcbiAgICAgICAgICAgIC5hZGRMaWtlKGlkKVxyXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgY2FyZC5jb3VudE5ld0xpa2UocmVzKTtcclxuICAgICAgICAgICAgICBjYXJkLnRvZ2dsZUJ1dHRvbkxpa2UoKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgXCIjdGVtcGxhdGUtY2FyZHNcIlxyXG4gICk7XHJcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkLmdlbmVyYXRlQ2FyZCgpO1xyXG4gIGNhcmRMaXN0LmFkZEl0ZW0oY2FyZEVsZW1lbnQpO1xyXG4gIGNhcmQuY2hlY2tNeUlkKCk7XHJcbn07XHJcblxyXG5jb25zdCBjYXJkTGlzdCA9IG5ldyBTZWN0aW9uKFxyXG4gIHsgcmVuZGVyZXI6IChpdGVtKSA9PiBjcmVhdGVDYXJkKGl0ZW0pIH0sXHJcbiAgY2FyZHNFbGVtZW50TGlzdFxyXG4pO1xyXG5cclxucG9wdXBXaXRoQ29uZmlybWF0aW9uLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcclxuICB1cmw6IFwiaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC01OS9cIixcclxuICBoZWFkZXJzOiB7XHJcbiAgICBhdXRob3JpemF0aW9uOiBcIjA0ZmUyZmEzLWM4NmItNDljMC05MjJkLWFkNDEzODU5ZWZjY1wiLFxyXG4gICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgfSxcclxufSk7XHJcblxyXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXJJZm5vQXBpKCksIGFwaS5nZXRJbml0aWFsQ2FyZHMoKV0pXHJcbiAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgY29uc3QgcmVzVXNlciA9IHJlc1swXTtcclxuICAgIGNvbnN0IHJlc0NhcmQgPSByZXNbMV07XHJcbiAgICB1c2VySWQgPSByZXNVc2VyLl9pZDtcclxuICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlc1VzZXIpO1xyXG4gICAgY2FyZExpc3QucmVuZGVySXRlbXMocmVzQ2FyZCk7XHJcbiAgfSlcclxuICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcbi8vINCk0L7RgNC80LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQv9GA0L7RhNC40LvRj1xyXG5cclxuY29uc3QgaGFuZGxlRWRpdFByb2ZpbGVQb3B1cCA9ICgpID0+IHtcclxuICBjb25zdCBkYXRhID0gdXNlckluZm8uZ2V0VXNlckluZm8oKTtcclxuICBwb3B1cEVkaXRQcm9maWxlLnNldElucHV0VmFsdWVzKGRhdGEpO1xyXG4gIHBvcHVwRWRpdFByb2ZpbGUub3BlbigpO1xyXG4gIGZvcm1WYWxpZGF0b3JQcm9maWxlLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59O1xyXG5cclxuY29uc3QgcG9wdXBFZGl0UHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiBcIi5wb3B1cF90eXBlX3Byb2ZpbGVcIixcclxuICBoYW5kbGVGb3JtU3VibWl0OiAobmFtZSwgYWJvdXQpID0+IHtcclxuICAgIHBvcHVwRWRpdFByb2ZpbGUud2FpdExvYWQodHJ1ZSk7XHJcbiAgICBhcGlcclxuICAgICAgLnNlbmRVc2VySWZubyhuYW1lLCBhYm91dClcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHVzZXJJbmZvLnNldFVzZXJJbmZvKHJlcyk7XHJcbiAgICAgICAgcG9wdXBFZGl0UHJvZmlsZS5jbG9zZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cEVkaXRQcm9maWxlLndhaXRMb2FkKGZhbHNlKTtcclxuICAgICAgfSk7XHJcbiAgfSxcclxufSk7XHJcblxyXG5idXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGhhbmRsZUVkaXRQcm9maWxlUG9wdXAocHJvZmlsZU5hbWUsIHByb2ZpbGVKb2IpO1xyXG59KTtcclxuXHJcbnBvcHVwRWRpdFByb2ZpbGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8vINCk0L7RgNC80LAg0YHQvtC30LTQsNC90LjRjyDQutCw0YDRgtC+0YfQutC4XHJcblxyXG5jb25zdCBwb3B1cFdpdGhDYXJkID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6IFwiLnBvcHVwX3R5cGVfYWRkLXBsYWNlXCIsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKG5hbWUsIGxpbmspID0+IHtcclxuICAgIHBvcHVwV2l0aENhcmQud2FpdExvYWQodHJ1ZSk7XHJcbiAgICBhcGlcclxuICAgICAgLmFkZE5ld0NhcmQobmFtZSwgbGluaylcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGNyZWF0ZUNhcmQocmVzKTtcclxuICAgICAgICBwb3B1cFdpdGhDYXJkLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwV2l0aENhcmQud2FpdExvYWQoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwb3B1cFdpdGhDYXJkLm9wZW4oKTtcclxuICBmb3JtVmFsaWRhdG9yQ2FyZC5kaXNhYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgZm9ybVZhbGlkYXRvckNhcmQucmVzZXRWYWxpZGF0aW9uKCk7XHJcbn0pO1xyXG5cclxucG9wdXBXaXRoQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy8g0KTQvtGA0LzQsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINCw0LLQsNGC0LDRgNCwXHJcblxyXG5jb25zdCBwb3B1cFdpdGhBdmF0YXIgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogXCIucG9wdXBfdHlwZV91cGRhdGUtYXZhdGFyXCIsXHJcbiAgaGFuZGxlRm9ybVN1Ym1pdDogKGxpbmspID0+IHtcclxuICAgIHBvcHVwV2l0aEF2YXRhci53YWl0TG9hZCh0cnVlKTtcclxuICAgIGFwaVxyXG4gICAgICAuYWRkTmV3QXZhdGFyKGxpbmspXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB1c2VySW5mby5zZXRVc2VySW5mbyhyZXMpO1xyXG4gICAgICAgIHBvcHVwV2l0aEF2YXRhci5jbG9zZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cFdpdGhBdmF0YXIud2FpdExvYWQoZmFsc2UpO1xyXG4gICAgICB9KTtcclxuICB9LFxyXG59KTtcclxuXHJcbmJ1dHRvbkVkaXRBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBwb3B1cFdpdGhBdmF0YXIub3BlbigpO1xyXG4gIGZvcm1WYWxpZGF0b3JBdmF0YXIuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gIGZvcm1WYWxpZGF0b3JBdmF0YXIucmVzZXRWYWxpZGF0aW9uKCk7XHJcbn0pO1xyXG5cclxucG9wdXBXaXRoQXZhdGFyLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vLyDQktCw0LvQuNC00LDRhtC40Y8g0YTQvtGA0LxcclxuXHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JDYXJkID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAgdmFsaWRhdGUsXHJcbiAgZm9ybUVsZW1lbnRDYXJkXHJcbik7XHJcbmNvbnN0IGZvcm1WYWxpZGF0b3JQcm9maWxlID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAgdmFsaWRhdGUsXHJcbiAgZm9ybUVkaXRQcm9maWxlXHJcbik7XHJcblxyXG5jb25zdCBmb3JtVmFsaWRhdG9yQXZhdGFyID0gbmV3IEZvcm1WYWxpZGF0b3IoXHJcbiAgdmFsaWRhdGUsXHJcbiAgZm9ybUVkaXRBdmF0YXJcclxuKTtcclxuXHJcbmZvcm1WYWxpZGF0b3JDYXJkLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuZm9ybVZhbGlkYXRvclByb2ZpbGUuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5mb3JtVmFsaWRhdG9yQXZhdGFyLmVuYWJsZVZhbGlkYXRpb24oKTtcclxuIl0sIm5hbWVzIjpbIkFwaSIsInVybCIsImhlYWRlcnMiLCJmZXRjaCIsIl91cmwiLCJfaGVhZGVycyIsInRoZW4iLCJyZXMiLCJfY2hlY2tpbmdSZXNwb25zZSIsIl9pZCIsIm1ldGhvZCIsIm5hbWUiLCJhYm91dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibGluayIsImF2YXRhciIsIm9rIiwianNvbiIsIlByb21pc2UiLCJyZWplY3QiLCJzdGF0dXMiLCJDYXJkIiwidGVtcGxhdGVTZWxlY3RvciIsImRhdGEiLCJ1c2VySWQiLCJoYW5kbGVDYXJkQ2xpY2siLCJoYW5kbGVEZWxldGVJY29uQ2xpY2siLCJoYW5kbGVMaWtlQ2xpY2siLCJfZWxlbWVudCIsIl9nZXRUZW1wbGF0ZUNhcmQiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJ0b2dnbGVCdXR0b25MaWtlIiwiX2xpa2VDb3VudGVyIiwidGV4dENvbnRlbnQiLCJfbGlrZXMiLCJsZW5ndGgiLCJxdWVyeVNlbGVjdG9yIiwiX3RleHQiLCJfY2FyZEltZyIsInNyYyIsIl9pbWFnZUxpbmsiLCJhbHQiLCJpc015TGlrZXMiLCJzb21lIiwibGlrZSIsIl91c2VySWQiLCJfYWx0IiwibGlrZXMiLCJfb3duZXIiLCJvd25lciIsIl9vd25lcklkIiwiX3RlbXBsYXRlU2VsZWN0b3IiLCJfaGFuZGxlQ2FyZENsaWNrIiwiX2hhbmRsZURlbGV0ZUljb25DbGljayIsIl9oYW5kbGVMaWtlQ2xpY2siLCJjYXJkRWxlbWVudCIsImRvY3VtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsIl9idXR0b25MaWtlIiwiX2RlbGV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJfdGl0bGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJuZXdEYXRhIiwiYXZhaWxhYmxlTGlrZXMiLCJGb3JtVmFsaWRhdG9yIiwidmFsaWRhdGlvblNldHRpbmdzIiwiZm9ybUVsZW1lbnQiLCJpbnB1dEVsZW1lbnQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJfdG9nZ2xlRm9ybUJ1dHRvblN0YXRlIiwiX2lucHV0cyIsImZvckVhY2giLCJfY2hlY2tmb3JtVmFsaWRpdHkiLCJfaW5wdXRTZWxlY3RvciIsImlucHV0U2VsZWN0b3IiLCJfc3VibWl0QnV0dG9uU2VsZWN0b3IiLCJzdWJtaXRCdXR0b25TZWxlY3RvciIsIl9pbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsIl9pbnB1dEVycm9yQ2xhc3MiLCJpbnB1dEVycm9yQ2xhc3MiLCJfZXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJfZm9ybUVsZW1lbnQiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2J1dHRvbkVsZW1lbnQiLCJlcnJvck1lc3NhZ2UiLCJlcnJvckVsZW1lbnQiLCJpZCIsInNldEF0dHJpYnV0ZSIsImV2ZXJ5IiwiX2hhc0ludmFsaWRlSW5wdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJkaXNhYmxlU3VibWl0QnV0dG9uIiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJfcG9wdXBFbGVtZW50IiwiX2hhbmRsZUVzY0Nsb3NlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImUiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aENvbmZpcm1hdGlvbiIsIl9mb3JtIiwicHJldmVudERlZmF1bHQiLCJfaGFuZGxlQ29uZmlybURlbGV0ZSIsInN1Ym1pdENvbmZpcm0iLCJyZXNldCIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVGb3JtU3VibWl0IiwiX2hhbmRsZUZvcm1TdWJtaXQiLCJfYnV0dG9uIiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwiX2dldElucHV0VmFsdWVzIiwiaXNSZWFkeSIsIlBvcHVwV2l0aEltYWdlIiwiX2ltYWdlIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJpdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJwcmVwZW5kIiwiVXNlckluZm8iLCJfbmFtZSIsIl9hYm91dCIsIl9hdmF0YXIiLCJidXR0b25PcGVuRWRpdFByb2ZpbGVQb3B1cCIsImJ1dHRvbk9wZW5BZGRDYXJkUG9wdXAiLCJmb3JtRWRpdFByb2ZpbGUiLCJmb3JtRWRpdEF2YXRhciIsImZvcm1FbGVtZW50Q2FyZCIsInByb2ZpbGVOYW1lIiwicHJvZmlsZUpvYiIsInByb2ZpbGVBdmF0YXIiLCJlbGVtZW50UG9wdXBUaXRsZSIsImVsZW1lbnRQb3B1cFBob3RvIiwiY2FyZHNFbGVtZW50TGlzdCIsImJ1dHRvbkVkaXRBdmF0YXIiLCJ2YWxpZGF0ZSIsImZvcm1TZWxlY3RvciIsInBvcHVwV2l0aEltYWdlIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJ1c2VySW5mbyIsInBvcHVwV2l0aENvbmZpcm1hdGlvbiIsImNyZWF0ZUNhcmQiLCJjYXJkIiwib3BlbiIsInNldFN1Ym1pdENvbmZpcm0iLCJhcGkiLCJkZWxldGVDYXJkIiwiaGFuZGxlRGVsZXRlQ2FyZCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRlbGV0ZUxpa2UiLCJjb3VudE5ld0xpa2UiLCJhZGRMaWtlIiwiZ2VuZXJhdGVDYXJkIiwiY2FyZExpc3QiLCJhZGRJdGVtIiwiY2hlY2tNeUlkIiwiaXRlbSIsImF1dGhvcml6YXRpb24iLCJhbGwiLCJnZXRVc2VySWZub0FwaSIsImdldEluaXRpYWxDYXJkcyIsInJlc1VzZXIiLCJyZXNDYXJkIiwic2V0VXNlckluZm8iLCJyZW5kZXJJdGVtcyIsImhhbmRsZUVkaXRQcm9maWxlUG9wdXAiLCJnZXRVc2VySW5mbyIsInBvcHVwRWRpdFByb2ZpbGUiLCJzZXRJbnB1dFZhbHVlcyIsImZvcm1WYWxpZGF0b3JQcm9maWxlIiwicmVzZXRWYWxpZGF0aW9uIiwid2FpdExvYWQiLCJzZW5kVXNlcklmbm8iLCJmaW5hbGx5IiwicG9wdXBXaXRoQ2FyZCIsImFkZE5ld0NhcmQiLCJmb3JtVmFsaWRhdG9yQ2FyZCIsInBvcHVwV2l0aEF2YXRhciIsImFkZE5ld0F2YXRhciIsImZvcm1WYWxpZGF0b3JBdmF0YXIiLCJlbmFibGVWYWxpZGF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==