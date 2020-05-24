// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
import { bytesToUuid } from "./_common.ts";
const UUID_RE = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$", "i");
export function validate(id) {
    return UUID_RE.test(id);
}
export function generate() {
    const rnds = crypto.getRandomValues(new Uint8Array(16));
    rnds[6] = (rnds[6] & 0x0f) | 0x40; // Version 4
    rnds[8] = (rnds[8] & 0x3f) | 0x80; // Variant 10
    return bytesToUuid(rnds);
}
//# sourceMappingURL=file:///C:/Users/kokou/workspace/typescript/deno-clean-architecture/deno_modules/gen/https/deno.land/std/uuid/v4.ts.js.map