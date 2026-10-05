import test from "ava";
import fn from "./index.js";
test("must lint the readme", async t => {
  const res = await fn("./readme.md");
  t.true(res.errorCount >= 1 || (res.results && res.results[0].errorCount >= 1));
});
