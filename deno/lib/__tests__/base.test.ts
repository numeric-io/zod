// @ts-ignore TS6133
import { expect } from "https://deno.land/x/expect@v0.2.6/mod.ts";
const test = Deno.test;

import * as z from "../index.ts";

test("test this binding", () => {
  const callback = (predicate: (val: string) => boolean) => {
    return predicate("hello");
  };

  expect(callback((value) => z.string().safeParse(value).success)).toBe(true); // true
  expect(callback((value) => z.string().safeParse(value).success)).toBe(true); // true
});
