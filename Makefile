CXX=em++
CXXFLAGS=-std=c++11 --bind -Iamoeba -DAM_API='extern __attribute__((used))' -DAM_IMPLEMENTATION

dist/amoebajs_node.js dist/amoebajs_web.js: lib/amoebalib.bc lib/index.js
	webpack

lib/amoebalib.bc: lib/amoebalib.cpp
	${CXX} ${CXXFLAGS} lib/amoebalib.cpp -o lib/amoebalib.bc

clean:
	rm lib/amoebalib.bc dist/amoebajs_node.js dist/amoebajs_web.js

.PHONY: clean
