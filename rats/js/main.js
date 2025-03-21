/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/rats/classes/AngleArc.ts":
/*!**************************************!*\
  !*** ./src/rats/classes/AngleArc.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AngleArc": () => (/* binding */ AngleArc)
/* harmony export */ });
var PI_OVER_180 = Math.PI / 180;

var AngleArc = function () {
  function AngleArc(position, radius, start, end) {
    this.active = false;
    this.position = position;
    this.radius = radius;
    this.start = start;
    this.end = end;
  }

  AngleArc.prototype.render = function (ctx) {
    if (!this.active) return;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";
    ctx.lineJoin = "miter";
    ctx.arc(this.position.x, this.position.y, this.radius, this.start * PI_OVER_180, this.end * PI_OVER_180);
    ctx.stroke();
  };

  return AngleArc;
}();



/***/ }),

/***/ "./src/rats/classes/Label.ts":
/*!***********************************!*\
  !*** ./src/rats/classes/Label.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Label": () => (/* binding */ Label)
/* harmony export */ });
var Label = function () {
  function Label(position, text) {
    this.fontSize = 24;
    this.textAlign = "center";
    this.active = false;
    this.position = position;
    this.text = text;
  }

  Label.prototype.render = function (ctx) {
    if (!this.active) return;
    ctx.font = this.fontSize.toString() + "px Arial";
    ctx.textAlign = this.textAlign;
    ctx.textBaseline = "middle";
    ctx.fillText(this.text, this.position.x, this.position.y);
  };

  return Label;
}();



/***/ }),

/***/ "./src/rats/classes/Point.ts":
/*!***********************************!*\
  !*** ./src/rats/classes/Point.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Point": () => (/* binding */ Point)
/* harmony export */ });
var Point = function () {
  function Point(x, y) {
    if (x === void 0) {
      x = 0;
    }

    if (y === void 0) {
      y = 0;
    }

    this.x = 0;
    this.y = 0;
    this.x = x;
    this.y = y;
  }

  Point.prototype.multiply = function (n) {
    this.x *= n;
    this.y *= n;
  };

  Point.prototype.copy = function () {
    return new Point(this.x, this.y);
  };

  Point.mid = function (a, b) {
    return new Point((a.x + b.x) / 2, (a.y + b.y) / 2);
  };

  return Point;
}();



/***/ }),

/***/ "./src/rats/classes/Question.ts":
/*!**************************************!*\
  !*** ./src/rats/classes/Question.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Question": () => (/* binding */ Question)
/* harmony export */ });
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/config */ "./src/rats/constants/config.ts");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Triangle */ "./src/rats/classes/Triangle.ts");



var Question = function () {
  function Question() {
    this.displaySideIndex = 0;
    this.answerSideIndex = 0;
    this.displayAngleIndex = 1;
    this.triangle = this.generateTriangle();
  }

  Question.prototype.getTriangle = function () {
    return this.triangle;
  };

  Question.prototype.getDisplaySideIndex = function () {
    return this.displaySideIndex;
  };

  Question.prototype.getAngleDisplayIndex = function () {
    return this.displayAngleIndex;
  };

  Question.prototype.text = function () {
    var questionText = "ABC is a right-angled triangle.<br>";
    questionText += "Calculate the length of " + this.answerSideLabel() + ".<br>";
    questionText += "Give your answer correct to 3 significant figures.";
    return questionText;
  };

  Question.prototype.checkAnswer = function (answer) {
    var correctAnswer = this.triangle.side(this.answerSideIndex);
    console.log("Correct: " + correctAnswer.toPrecision(3));
    return answer === correctAnswer.toPrecision(3);
  };

  Question.prototype.generateTriangle = function () {
    var angle = Math.floor(Math.random() * (_constants_config__WEBPACK_IMPORTED_MODULE_0__.MAX_ANGLE - _constants_config__WEBPACK_IMPORTED_MODULE_0__.MIN_ANGLE)) + _constants_config__WEBPACK_IMPORTED_MODULE_0__.MIN_ANGLE;
    var length = Math.random() * (_constants_config__WEBPACK_IMPORTED_MODULE_0__.MAX_LENGTH - _constants_config__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGHT) + _constants_config__WEBPACK_IMPORTED_MODULE_0__.MIN_LENGHT;
    var triangle = new _Triangle__WEBPACK_IMPORTED_MODULE_1__.Triangle(angle, length);
    this.displaySideIndex = Math.floor(Math.random() * 3);
    triangle.rationaliseOneSide(this.displaySideIndex);
    this.answerSideIndex = this.displaySideIndex;

    while (this.answerSideIndex === this.displaySideIndex) {
      this.answerSideIndex = Math.floor(Math.random() * 3);
    }

    this.displayAngleIndex = Math.floor(Math.random() * 2) + 1;
    return triangle;
  };

  Question.prototype.answerSideLabel = function () {
    if (this.answerSideIndex === 0) return 'AB';
    if (this.answerSideIndex === 1) return 'BC';
    return 'CA';
  };

  return Question;
}();



/***/ }),

/***/ "./src/rats/classes/Stage.ts":
/*!***********************************!*\
  !*** ./src/rats/classes/Stage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Stage": () => (/* binding */ Stage)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/rats/classes/Point.ts");


var Stage = function () {
  function Stage(rootEl, canvasEl, ctx, aspectRatio) {
    this.rootEl = rootEl;
    this.canvasEl = canvasEl;
    this.aspectRatio = aspectRatio;
    this.ctx = ctx;
    this.bounds = new _Point__WEBPACK_IMPORTED_MODULE_0__.Point();
    this.ctx.imageSmoothingEnabled = false;
    this.setBounds();
  }

  Stage.prototype.context = function () {
    return this.ctx;
  };

  Stage.prototype.clear = function () {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.clearRect(0, 0, this.bounds.x, this.bounds.y);
  };

  Stage.prototype.translate = function (offset) {
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    this.ctx.translate(offset.x, offset.y);
  };

  Stage.prototype.getBounds = function () {
    return this.bounds.copy();
  };

  Stage.prototype.clipY = function (n) {
    this.canvasEl.setAttribute('height', n.toString());
  };

  Stage.prototype.rootElWidthFromDom = function () {
    return this.rootEl.offsetWidth;
  };

  Stage.prototype.setBounds = function () {
    this.bounds.x = Math.round(this.rootElWidthFromDom());
    this.bounds.y = Math.round(this.bounds.x / this.aspectRatio.x * this.aspectRatio.y);
    this.canvasEl.setAttribute('width', this.bounds.x.toString());
    this.canvasEl.setAttribute('height', this.bounds.y.toString());
  };

  return Stage;
}();



/***/ }),

/***/ "./src/rats/classes/Triangle.ts":
/*!**************************************!*\
  !*** ./src/rats/classes/Triangle.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Triangle": () => (/* binding */ Triangle)
/* harmony export */ });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/rats/classes/Point.ts");

var PI_OVER_180 = Math.PI / 180;

var Triangle = function () {
  function Triangle(angle, length) {
    this.sides = [0, 0, 0];
    this.angles = [90, 0, 0];
    this.angles[1] = angle;
    this.angles[2] = 90 - angle;
    this.sides[0] = length * Math.cos(angle * PI_OVER_180);
    this.sides[1] = length;
    this.sides[2] = length * Math.sin(angle * PI_OVER_180);
  }

  Triangle.prototype.rationaliseOneSide = function (index) {
    var i;

    for (i = 0; i < 3; i++) {
      if (i !== index) this.sides[i] = 0;
    }

    this.sides[index] = Math.round(this.sides[index]);

    for (i = 0; i < 3; i++) {
      if (this.sides[i] === 0) {
        this.sides[i] = this.sideLength(i);
      }
    }
  };

  Triangle.prototype.side = function (index) {
    return this.sides[index];
  };

  Triangle.prototype.angle = function (index) {
    return this.angles[index];
  };

  Triangle.prototype.bounds = function () {
    return new _Point__WEBPACK_IMPORTED_MODULE_0__.Point(this.sides[0], this.sides[2]);
  };

  Triangle.prototype.validate = function (n) {
    if (n === void 0) {
      n = 8;
    }

    var ab = this.sides[0] * this.sides[0] + this.sides[2] * this.sides[2];
    var c = this.sides[1] * this.sides[1];
    return ab.toFixed(n) === c.toFixed(n);
  };

  Triangle.prototype.sideLength = function (index) {
    if (index === 0) {
      if (this.sides[1] !== 0) {
        return this.sides[1] * Math.cos(this.angles[1] * PI_OVER_180);
      }

      return this.sides[2] / Math.tan(this.angles[1] * PI_OVER_180);
    }

    if (index === 1) {
      if (this.sides[0] !== 0) {
        return this.sides[0] / Math.cos(this.angles[1] * PI_OVER_180);
      }

      return this.sides[2] / Math.sin(this.angles[1] * PI_OVER_180);
    }

    if (this.sides[0] !== 0) {
      return this.sides[0] * Math.tan(this.angles[1] * PI_OVER_180);
    }

    return this.sides[1] * Math.sin(this.angles[1] * PI_OVER_180);
  };

  return Triangle;
}();



/***/ }),

/***/ "./src/rats/classes/TriangleView.ts":
/*!******************************************!*\
  !*** ./src/rats/classes/TriangleView.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TriangleView": () => (/* binding */ TriangleView)
/* harmony export */ });
/* harmony import */ var _AngleArc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AngleArc */ "./src/rats/classes/AngleArc.ts");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Label */ "./src/rats/classes/Label.ts");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Point */ "./src/rats/classes/Point.ts");



var PI_OVER_180 = Math.PI / 180;
var PADDING_X = 80;
var PADDING_Y = 30;
var OUTER_LABEL_OFFSET = 16;
var LARGE_ANGLE_LABEL_OFFSET = 40;
var SMALL_ANGLE_LABEL_OFFSET = 80;
var TINY_ANGLE_LABEL_OFFSET = 90;
var ARC_LABEL_OFFSET = 40;
var FONT_LARGE = 22;
var FONT_MED = 18;
var FONT_SMALL = 14;
var DEGREES = '°';

var TriangleView = function () {
  function TriangleView(stage, question) {
    this.vertices = [];
    this.vertexLabels = [];
    this.sideLabels = [];
    this.angleLabels = [];
    this.arcs = [];
    this.scale = 1;
    this.orientation = new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(1, 1);
    this.stage = stage;
    this.question = question;
    this.triangle = this.question.getTriangle();
  }

  TriangleView.prototype.resetQuestion = function (question) {
    this.question = question;
    this.triangle = this.question.getTriangle();
  };

  TriangleView.prototype.render = function () {
    this.stage.clear();
    this.setup();
    this.stage.translate(this.getTranslation());
    var ctx = this.stage.context();
    this.arcs[1].render(ctx);
    this.arcs[2].render(ctx);
    this.renderRightAngle(ctx);
    this.renderSides(ctx);
    this.vertexLabels[0].render(ctx);
    this.vertexLabels[1].render(ctx);
    this.vertexLabels[2].render(ctx);
    this.sideLabels[0].render(ctx);
    this.sideLabels[1].render(ctx);
    this.sideLabels[2].render(ctx);
    this.angleLabels[1].render(ctx);
    this.angleLabels[2].render(ctx);
  };

  TriangleView.prototype.flipX = function () {
    this.orientation.x *= -1;
  };

  TriangleView.prototype.flipY = function () {
    this.orientation.y *= -1;
  };

  TriangleView.prototype.setup = function () {
    this.scale = this.getScale();
    this.setupVertices();
    this.vertexLabels = [new _Label__WEBPACK_IMPORTED_MODULE_1__.Label(new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(this.vertices[0].x, this.vertices[0].y - OUTER_LABEL_OFFSET * this.orientation.y), 'A'), new _Label__WEBPACK_IMPORTED_MODULE_1__.Label(new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(this.vertices[1].x + OUTER_LABEL_OFFSET * this.orientation.x, this.vertices[1].y), 'B'), new _Label__WEBPACK_IMPORTED_MODULE_1__.Label(new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(this.vertices[2].x, this.vertices[2].y + OUTER_LABEL_OFFSET * this.orientation.y), 'C')];

    for (var i = 0; i < 3; i++) {
      this.vertexLabels[i].fontSize = FONT_LARGE;
      this.vertexLabels[i].active = true;
    }

    this.sideLabels = [new _Label__WEBPACK_IMPORTED_MODULE_1__.Label(_Point__WEBPACK_IMPORTED_MODULE_2__.Point.mid(this.vertices[0], this.vertices[1]), this.triangle.side(0).toString() + ' km'), new _Label__WEBPACK_IMPORTED_MODULE_1__.Label(_Point__WEBPACK_IMPORTED_MODULE_2__.Point.mid(this.vertices[1], this.vertices[2]), this.triangle.side(1).toString() + ' km'), new _Label__WEBPACK_IMPORTED_MODULE_1__.Label(_Point__WEBPACK_IMPORTED_MODULE_2__.Point.mid(this.vertices[2], this.vertices[0]), this.triangle.side(2).toString() + ' km')];
    this.sideLabels[0].fontSize = FONT_SMALL;
    this.sideLabels[0].position.y -= OUTER_LABEL_OFFSET * this.orientation.y;
    this.sideLabels[1].fontSize = FONT_SMALL;
    this.sideLabels[1].textAlign = this.orientation.x === 1 ? 'left' : 'right';
    this.sideLabels[1].position.y += OUTER_LABEL_OFFSET * this.orientation.y;
    this.sideLabels[2].fontSize = FONT_SMALL;
    this.sideLabels[2].textAlign = this.orientation.x === 1 ? 'right' : 'left';
    this.sideLabels[2].position.x -= OUTER_LABEL_OFFSET * this.orientation.x;
    this.sideLabels[this.question.getDisplaySideIndex()].active = true;
    this.angleLabels = [];
    this.arcs = [];
    this.setupAngleLabels();
    var clip = this.triangle.bounds().y * this.scale + PADDING_Y * 2;
    this.stage.clipY(clip);
  };

  TriangleView.prototype.setupVertices = function () {
    var bounds = this.triangle.bounds();
    this.vertices = [new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(0, 0), new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(bounds.x * this.scale * this.orientation.x, 0), new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(0, bounds.y * this.scale * this.orientation.y)];
  };

  TriangleView.prototype.renderRightAngle = function (ctx) {
    var length = LARGE_ANGLE_LABEL_OFFSET;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";
    ctx.lineJoin = "round";
    ctx.moveTo(length * this.orientation.x, 0);
    ctx.lineTo(length * this.orientation.x, length * this.orientation.y);
    ctx.lineTo(0, length * this.orientation.y);
    ctx.stroke();
  };

  TriangleView.prototype.renderSides = function (ctx) {
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#000000";
    ctx.lineJoin = "round";
    ctx.moveTo(this.vertices[0].x, this.vertices[0].y);
    ctx.lineTo(this.vertices[1].x, this.vertices[1].y);
    ctx.lineTo(this.vertices[2].x, this.vertices[2].y);
    ctx.lineTo(this.vertices[0].x, this.vertices[0].y);
    ctx.closePath();
    ctx.stroke();
  };

  TriangleView.prototype.getScale = function () {
    var maxBounds = this.stage.getBounds();
    maxBounds.x -= PADDING_X * 2;
    maxBounds.y -= PADDING_Y * 2;
    var triangleBounds = this.triangle.bounds();

    if (triangleBounds.x > triangleBounds.y) {
      return maxBounds.x / triangleBounds.x;
    }

    return maxBounds.y / triangleBounds.y;
  };

  TriangleView.prototype.getTranslation = function () {
    var minX = 0;
    var minY = 0;

    for (var i = 0; i < 3; i++) {
      if (this.vertices[i].x < minX) minX = this.vertices[i].x;
      if (this.vertices[i].y < minY) minY = this.vertices[i].y;
    }

    return new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(Math.abs(minX) + PADDING_X, Math.abs(minY) + PADDING_Y);
  };

  TriangleView.prototype.setupAngleLabels = function () {
    var angle = this.triangle.angle(1);
    var offset = this.angleLabelOffset(1);
    var x = Math.cos(angle * 0.5 * PI_OVER_180) * offset;
    var y = Math.sin(angle * 0.5 * PI_OVER_180) * offset;
    this.angleLabels[1] = new _Label__WEBPACK_IMPORTED_MODULE_1__.Label(new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(this.vertices[1].x - x * this.orientation.x, this.vertices[1].y + y * this.orientation.y), this.triangle.angle(1).toString() + DEGREES);
    this.angleLabels[1].fontSize = FONT_MED;

    if (this.orientation.x === 1 && this.orientation.y === 1) {
      this.arcs[1] = new _AngleArc__WEBPACK_IMPORTED_MODULE_0__.AngleArc(this.vertices[1], offset + ARC_LABEL_OFFSET, 180 - this.triangle.angle(1), 180);
    } else if (this.orientation.x === -1 && this.orientation.y === 1) {
      this.arcs[1] = new _AngleArc__WEBPACK_IMPORTED_MODULE_0__.AngleArc(this.vertices[1], offset + ARC_LABEL_OFFSET, 0, this.triangle.angle(1));
    } else if (this.orientation.x === 1 && this.orientation.y === -1) {
      this.arcs[1] = new _AngleArc__WEBPACK_IMPORTED_MODULE_0__.AngleArc(this.vertices[1], offset + ARC_LABEL_OFFSET, 180, 180 + this.triangle.angle(1));
    } else if (this.orientation.x === -1 && this.orientation.y === -1) {
      this.arcs[1] = new _AngleArc__WEBPACK_IMPORTED_MODULE_0__.AngleArc(this.vertices[1], offset + ARC_LABEL_OFFSET, 360 - this.triangle.angle(1), 0);
    }

    angle = this.triangle.angle(2);
    offset = this.angleLabelOffset(2);
    x = Math.sin(angle * 0.5 * PI_OVER_180) * offset;
    y = Math.cos(angle * 0.5 * PI_OVER_180) * offset;
    this.angleLabels[2] = new _Label__WEBPACK_IMPORTED_MODULE_1__.Label(new _Point__WEBPACK_IMPORTED_MODULE_2__.Point(this.vertices[2].x + x * this.orientation.x, this.vertices[2].y - y * this.orientation.y), this.triangle.angle(2).toString() + DEGREES);
    this.angleLabels[2].fontSize = FONT_MED;

    if (this.orientation.x === 1 && this.orientation.y === 1) {
      this.arcs[2] = new _AngleArc__WEBPACK_IMPORTED_MODULE_0__.AngleArc(this.vertices[2], offset + ARC_LABEL_OFFSET, 270, 270 + this.triangle.angle(2));
    } else if (this.orientation.x === -1 && this.orientation.y === 1) {
      this.arcs[2] = new _AngleArc__WEBPACK_IMPORTED_MODULE_0__.AngleArc(this.vertices[2], offset + ARC_LABEL_OFFSET, 270 - this.triangle.angle(2), 270);
    } else if (this.orientation.x === 1 && this.orientation.y === -1) {
      this.arcs[2] = new _AngleArc__WEBPACK_IMPORTED_MODULE_0__.AngleArc(this.vertices[2], offset + ARC_LABEL_OFFSET, 90 - this.triangle.angle(2), 90);
    } else if (this.orientation.x === -1 && this.orientation.y === -1) {
      this.arcs[2] = new _AngleArc__WEBPACK_IMPORTED_MODULE_0__.AngleArc(this.vertices[2], offset + ARC_LABEL_OFFSET, 90, 90 + this.triangle.angle(2));
    }

    var index = this.question.getAngleDisplayIndex();
    this.angleLabels[index].active = true;
    this.arcs[index].active = true;
  };

  TriangleView.prototype.angleLabelOffset = function (index) {
    var angle = this.triangle.angle(index);
    if (angle > 45) return LARGE_ANGLE_LABEL_OFFSET;
    if (angle > 30) return SMALL_ANGLE_LABEL_OFFSET;
    return TINY_ANGLE_LABEL_OFFSET;
  };

  return TriangleView;
}();



/***/ }),

/***/ "./src/rats/constants/config.ts":
/*!**************************************!*\
  !*** ./src/rats/constants/config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIN_ANGLE": () => (/* binding */ MIN_ANGLE),
/* harmony export */   "MAX_ANGLE": () => (/* binding */ MAX_ANGLE),
/* harmony export */   "MIN_LENGHT": () => (/* binding */ MIN_LENGHT),
/* harmony export */   "MAX_LENGTH": () => (/* binding */ MAX_LENGTH)
/* harmony export */ });
var MIN_ANGLE = 25;
var MAX_ANGLE = 40;
var MIN_LENGHT = 4;
var MAX_LENGTH = 80;

/***/ }),

/***/ "./src/rats/rats.ts":
/*!**************************!*\
  !*** ./src/rats/rats.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Point */ "./src/rats/classes/Point.ts");
/* harmony import */ var _classes_Question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Question */ "./src/rats/classes/Question.ts");
/* harmony import */ var _classes_Stage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Stage */ "./src/rats/classes/Stage.ts");
/* harmony import */ var _classes_TriangleView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/TriangleView */ "./src/rats/classes/TriangleView.ts");




document.addEventListener('DOMContentLoaded', function (event) {
  var rootEl = document.getElementById('rats');
  var canvasEl = document.createElement('canvas');
  rootEl === null || rootEl === void 0 ? void 0 : rootEl.appendChild(canvasEl);
  var ctx = canvasEl.getContext('2d');

  if (rootEl && ctx) {
    var stage = new _classes_Stage__WEBPACK_IMPORTED_MODULE_2__.Stage(rootEl, canvasEl, ctx, new _classes_Point__WEBPACK_IMPORTED_MODULE_0__.Point(1, 1));
    var question_1 = new _classes_Question__WEBPACK_IMPORTED_MODULE_1__.Question();
    var triangleView_1 = new _classes_TriangleView__WEBPACK_IMPORTED_MODULE_3__.TriangleView(stage, question_1);
    if (Math.random() < 0.5) triangleView_1.flipX();
    if (Math.random() < 0.5) triangleView_1.flipY();
    triangleView_1.render();
    var wrapper = document.createElement('div');
    wrapper.setAttribute('style', 'margin-left:60px; margin-right:60px');
    rootEl.appendChild(wrapper);
    var questionText_1 = document.createElement('p');
    questionText_1.innerHTML = question_1.text();
    wrapper.appendChild(questionText_1);
    var inputGroup_1 = document.createElement('div');
    inputGroup_1.className = 'input-group mb-3';
    var inputText_1 = document.createElement('input');
    inputText_1.className = 'form-control';
    inputText_1.placeholder = "Enter your answer...";
    inputGroup_1.appendChild(inputText_1);
    var unit = document.createElement('span');
    unit.className = 'input-group-text';
    unit.innerText = 'km';
    inputGroup_1.appendChild(unit);
    var answerButton = document.createElement('button');
    answerButton.innerText = 'Submit';
    answerButton.className = 'btn btn-success';
    inputGroup_1.appendChild(answerButton);
    wrapper.appendChild(inputGroup_1);
    answerButton.addEventListener('click', function (e) {
      if (inputText_1.value.length === 0) return;

      if (question_1.checkAnswer(inputText_1.value)) {
        userMessage_1.className = 'alert alert-success';
        userMessage_1.innerHTML = 'Correct, well done!';
        nextQuestionButton_1.classList.remove('d-none');
        inputGroup_1.classList.add('d-none');
      } else {
        userMessage_1.className = 'alert alert-danger';
        userMessage_1.innerHTML = 'Oops, not quite the answer we were looking for!';
      }
    });
    var userMessage_1 = document.createElement('div');
    wrapper.appendChild(userMessage_1);
    var nextQuestionButton_1 = document.createElement('button');
    nextQuestionButton_1.innerText = 'Next question';
    nextQuestionButton_1.className = 'btn btn-primary d-none';
    wrapper.appendChild(nextQuestionButton_1);
    nextQuestionButton_1.addEventListener('click', function (e) {
      userMessage_1.classList.add('d-none');
      nextQuestionButton_1.classList.add('d-none');
      inputGroup_1.classList.remove('d-none');
      inputText_1.value = '';
      question_1 = new _classes_Question__WEBPACK_IMPORTED_MODULE_1__.Question();
      questionText_1.innerHTML = question_1.text();
      triangleView_1.resetQuestion(question_1);
      if (Math.random() < 0.5) triangleView_1.flipX();
      if (Math.random() < 0.5) triangleView_1.flipY();
      triangleView_1.render();
    });
  }
});

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
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
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _rats_rats_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rats/rats.ts */ "./src/rats/rats.ts");


})();

/******/ })()
;
//# sourceMappingURL=main.js.map