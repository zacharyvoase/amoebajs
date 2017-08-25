# AmoebaJS

AmoebaJS is a linear constraint solver for the web. It's based on a WebAssembly
compilation of Xavier Wang's [Amoeba][] C library, bound with an idiomatic
JavaScript interface.

AmoebaJS is provided in its original source as ES6 + LLVM bytecode, a web
distribution which attaches the module to `window.amoeba`, and a NodeJS
distribution which can be `require()`d. Additional targets may be built for by
users; consult the [webpack config][] for some starting points.

[Amoeba]: https://github.com/starwing/amoeba
[webpack config]: https://github.com/zacharyvoase/amoebajs/blob/master/webpack.config.js


## Installation

You can use NPM or Yarn to install:

    $ npm install amoebajs


## Usage

Import and create a solver:

    let amoeba = require('amoebajs/node')

    let solver = new amoeba.Solver()

Set up variables:

    let v1 = solver.newVariable(), v2 = solver.newVariable()

Set up constraints, and call `.add()` to enable them:

    v1.mustEqual(v2.divide(2).subtract(4)).add()

Suggest a value for one variable:

    v1.suggest(10)

Read variable values:

    console.log("v1 = " + v1.value) // v1 = 10
    console.log("v2 = " + v2.value) // v2 = 28


## Licensing

The original JavaScript in this repository is released under the Unlicense:

> This is free and unencumbered software released into the public domain.
>
> Anyone is free to copy, modify, publish, use, compile, sell, or
> distribute this software, either in source code form or as a compiled
> binary, for any purpose, commercial or non-commercial, and by any
> means.
>
> In jurisdictions that recognize copyright laws, the author or authors
> of this software dedicate any and all copyright interest in the
> software to the public domain. We make this dedication for the benefit
> of the public at large and to the detriment of our heirs and
> successors. We intend this dedication to be an overt act of
> relinquishment in perpetuity of all present and future rights to this
> software under copyright law.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
> OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
> ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
> OTHER DEALINGS IN THE SOFTWARE.
>
> For more information, please refer to <http://unlicense.org/>

Amoeba will be implicitly bundled with all builds, and is licensed under 'the
same license as Lua', which can be inferred as the MIT license:

> Copyright © 2016 Xavier Wang
>
> Permission is hereby granted, free of charge, to any person obtaining a copy of
> this software and associated documentation files (the "Software"), to deal in
> the Software without restriction, including without limitation the rights to
> use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
> of the Software, and to permit persons to whom the Software is furnished to do
> so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.

If you use a built version of this library on your website, you don't need to
include a copy of the Unlicense but you should include a reproduction of Mr.
Wang's license as reproduced above.
