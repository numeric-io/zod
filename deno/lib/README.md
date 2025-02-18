# Zod (Numeric fork)

This fork does not deep copy objects and records when parsing. This speeds parsing up by quite a bit (around 2x on standard use cases for our app). For strict and strip parsing, the extra keys are just deleted from the input object.

Because of this, I also removed the following features which did not make sense when the input data is mutable:

- catch
- coerce
- default
- intersection/and (in favor of merge)
- pipe
- preprocess
- transform

I've kept refinements in for now, since they don't affect anything. But I do hate them.

All tests have been updated and pass.
