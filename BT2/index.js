var a = 1;

var b = {
  a: 2,
  foo: function() {
    console.log(this.a);
  }
};

b.foo();

var fooCopy = b.foo;
fooCopy();
// Chạy code và giải thích vì sao kết quả dòng 10 khác dòng 13
// b.foo(): Con trỏ this trỏ tới object b => a = 2
// fooCopy: con trỏ this trỏ tới fooCopy => a undifined