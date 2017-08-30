#include <emscripten/bind.h>

#include "amoeba.h"

extern "C" {
	__attribute__((used)) int am_getautoupdate(am_Solver *solver) {
		return solver->auto_update;
	}
	__attribute__((used)) double am_getstrength(am_Constraint *constraint) {
		return constraint->strength;
	}
}
