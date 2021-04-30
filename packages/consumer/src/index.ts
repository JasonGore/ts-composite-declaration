// The only difference between the two packages is that one has "composite" set to true 
// and is a reference of this package.

// testCompositeFunction has red squigglies and no type safety, which can be seen by hovering over it and using it
import { testCompositeFunction } from 'emit-composite';

// testStandardFunction has type safety, which can be seen by hovering over it and using it
import { testStandardFunction } from 'emit-standard';

testStandardFunction('hello cruel world');

testCompositeFunction('why hello there');

// This should error in VSCode, but does not. 
// However, it DOES error if you run 'yarn tsc' in 'packages/consumer'.
testCompositeFunction('why hello there', 42);
