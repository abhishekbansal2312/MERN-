// 1. Arthemetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Conditional (Ternary) Operator
// 7. Comma Operator
// 8. Unary Operators
// 9. Relational Operators
// 10. String Operators
// 11. Special Operators

// 1. Arthemetic Operators
// + - * / % ++ --
let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a++);
console.log(a);
console.log(--b);
console.log(b);

// 2. Assignment Operators
// = += -= *= /= %=
let c = 10;
c += 5;
console.log(c);
c -= 5;
console.log(c);
c *= 5;
console.log(c);
c /= 5;
console.log(c);
c %= 5;
console.log(c);

// 3. Comparison Operators
// == === != !== > < >= <=
let d = 10;
let e = 20;
console.log(d == e);
console.log(d === e);
console.log(d != e);
console.log(d !== e);
console.log(d > e);
console.log(d < e);
console.log(d >= e);
console.log(d <= e);

// 4. Logical Operators
// && || !
let f = true;
let g = false;
console.log(f && g);
console.log(f || g);
console.log(!f);
console.log(!g);

// 5. Bitwise Operators
// & | ^ ~ << >> >>>
let h = 2;
let i = 3;
console.log(h & i);
console.log(h | i);
console.log(h ^ i);
console.log(~h);
console.log(h << i);
console.log(h >> i);
console.log(h >>> i);

// 6. Conditional (Ternary) Operator
// condition ? expr1 : expr2
let j = 10;
let k = 20;
let l = j > k ? "true" : "false";
console.log(l);

// 7. Comma Operator
let m = 10,
  n = 20,
  o = 30;
console.log(m, n, o);

// 8. Unary Operators
// + - ++ -- ! typeof delete void
let p = 10;
console.log(+p);
console.log(-p);
console.log(++p);
console.log(--p);
console.log(!p);
console.log(typeof p);

// 9. Relational Operators
// in instanceof
let q = [1, 2, 3, 4, 5];
console.log(2 in q);
let r = new String("hello");
console.log(r instanceof String);

// 10. String Operators
// +
let s = "hello";
let t = "world";
console.log(s + t);

// 11. Special Operators
// ?: delete new this typeof void
let u = new String("hello");
console.log(u);
console.log(typeof u);
console.log(delete u);
console.log(void u);
console.log(this);


