// Copyright (C) 2015 Thomas Wood
// This code is governed by the BSD license found in the LICENSE file.

var obj = {
  mul: 10,
  div: 10,
  mod: 10,
  plus: 10,
  minus: 10,
  sleft: 16,
  ssright: 16,
  usright: -1,
  band: 15,
  bxor: 15,
  bor: 9
};

function f() {
  count = count + 1;
  return obj;
}

var count;

//CHECK#1
count = 0;
f().mul *= 5;

if (count !== 1) {
  $ERROR("CHECK#1.1: f() expected to be called once, called " + count + " times.");
}
if (obj.mul !== 50) {
  $ERROR("CHECK#1.2: obj.mul !== 50, actually: " + obj.mul);
}

//CHECK#2
count = 0;
f().div /= 5;

if (count !== 1) {
  $ERROR("CHECK#2.1: f() expected to be called once, called " + count + " times.");
}
if (obj.div !== 2) {
  $ERROR("CHECK#2.2: obj.div !== 2, actually: " + obj.div);
}

//CHECK#3
count = 0;
f().mod %= 5;

if (count !== 1) {
  $ERROR("CHECK#3.1: f() expected to be called once, called " + count + " times.");
}
if (obj.mod !== 0) {
  $ERROR("CHECK#3.2: obj.mod !== 0, actually: " + obj.mod);
}

//CHECK#4
count = 0;
f().plus += 5;

if (count !== 1) {
  $ERROR("CHECK#4.1: f() expected to be called once, called " + count + " times.");
}
if (obj.plus !== 15) {
  $ERROR("CHECK#4.2: obj.plus !== 15, actually: " + obj.plus);
}

//CHECK#5
count = 0;
f().minus -= 7;

if (count !== 1) {
  $ERROR("CHECK#5.1: f() expected to be called once, called " + count + " times.");
}
if (obj.minus !== 3) {
  $ERROR("CHECK#5.2: obj.minus !== 3, actually: " + obj.minus);
}

//CHECK#6
count = 0;
f().sleft <<= 1;

if (count !== 1) {
  $ERROR("CHECK#6.1: f() expected to be called once, called " + count + " times.");
}
if (obj.sleft !== 32) {
  $ERROR("CHECK#6.2: obj.sleft !== 32, actually: " + obj.sleft);
}

//CHECK#7
count = 0;
f().ssright >>= 1;

if (count !== 1) {
  $ERROR("CHECK#7.1: f() expected to be called once, called " + count + " times.");
}
if (obj.sright !== 8) {
  $ERROR("CHECK#7.2: obj.ssright !== 8, actually: " + obj.sright);
}

//CHECK#8
count = 0;
f().usright >>>= 32;

if (count !== 1) {
  $ERROR("CHECK#8.1: f() expected to be called once, called " + count + " times.");
}
if (obj.usright !== (-1 >>> 32)) {
  $ERROR("CHECK#8.2: obj.usright !== (-1 >>> 32), actually: " + obj.sright);
}

//CHECK#9
count = 0;
f().band &= 4;

if (count !== 1) {
  $ERROR("CHECK#9.1: f() expected to be called once, called " + count + " times.");
}
if (obj.band !== 4) {
  $ERROR("CHECK#9.2: obj.band !== 4, actually: " + obj.band);
}

//CHECK#10
count = 0;
f().bxor ^= 4;

if (count !== 1) {
  $ERROR("CHECK#10.1: f() expected to be called once, called " + count + " times.");
}
if (obj.bxor !== 11) {
  $ERROR("CHECK#10.2: obj.bxor !== 11, actually: " + obj.bxor);
}

//CHECK#11
count = 0;
f().bor |= 4;

if (count !== 1) {
  $ERROR("CHECK#11.1: f() expected to be called once, called " + count + " times.");
}
if (obj.bor !== 13) {
  $ERROR("CHECK#11.2: obj.bor !== 11, actually: " + obj.bor);
}
