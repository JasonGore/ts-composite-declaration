Repro to show issue using "emitDeclarationOnly" and "composite".

To repro:
1. clone this repro
1. run `yarn`
1. `cd packages/emit-standard`
1. `yarn tsc`
1. `cd ../packages/emit-composite`
1. `yarn tsc` (although I don't think this should technically be needed for projrefs)

Open VSCode from repo root and open `packages/consumer/src/index.ts` and note comments.
