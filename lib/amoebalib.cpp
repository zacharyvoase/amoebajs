#include <emscripten/bind.h>

#include "amoeba.h"

extern "C" __attribute__((used)) double am_getstrength(am_Constraint *constraint) {
	return constraint->strength;
}
