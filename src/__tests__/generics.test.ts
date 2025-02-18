// @ts-ignore TS6133
import { expect, test } from "@jest/globals";

import * as z from "../index";

// test("assignability", () => {
//   const createSchemaAndParse = <K extends string, VS extends z.ZodString>(
//     key: K,
//     valueSchema: VS,
//     data: unknown
//   ) => {
//     const schema = z.object({
//       [key]: valueSchema,
//     } as { [k in K]: VS });
//     return { [key]: valueSchema };
//     const parsed = schema.parse(data);
//     return parsed;
//     // const inferred: z.infer<z.ZodObject<{ [k in K]: VS }>> = parsed;
//     // return inferred;
//   };
//   const parsed = createSchemaAndParse("foo", z.string(), { foo: "" });
//   util.assertEqual<typeof parsed, { foo: string }>(true);
// });

test("nested no undefined", () => {
  const inner = z.string().or(z.array(z.string()));
  const outer = z.object({ inner });
  type outerSchema = z.infer<typeof outer>;
  z.util.assertEqual<outerSchema, { inner: string | string[] }>(true);
  expect(outer.safeParse({ inner: undefined }).success).toEqual(false);
});
