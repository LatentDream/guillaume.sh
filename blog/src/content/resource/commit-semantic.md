---
title: 'docs(git): Semantic Commit'
description: 'Specification for adding human and machine readable meaning to commit messages'
pubDate: 'Aug 30 2024'
heroImage: '/blog-placeholder-3.jpg'
tags: ['resources', 'git']
---
# Semantic Commit Messages

Semantic commits are a standardized way of writing commit messages that provide clear, consistent information about the changes made. They typically follow a format of type(scope): message, where the type indicates the kind of change (e.g., feat, fix, docs), helping developers quickly understand the nature of each commit.

> Format: `<type>[(scope)]: <description>`
> - `(scope)` has optional


```txt title="Example" {4}
    +--> What it affects
    |
    v--------------v
feat(auth): Add auth0
^--^        ^------------^
|           |
|           +-> Summary in present tense.
|
+-------> Type: chore, docs, feat, fix, refactor, perf, style, or test.
```

## Type possibility:

- `feat`: new feature for the user, not a new feature for build script
- `fix`: bug fix for the user, not a fix to a build script
- `docs`: changes to the documentation
- `perf`: optimization
- `ci`: modifying ci/cd pipeline
- `refactor`: refactoring production code, eg. renaming a variable
- `style`: formatting, missing semi colons, etc; (no production code change)
- `test`: adding missing tests, refactoring tests; (no production code change)
- `chore`: updating grunt tasks etc; (no production code change)
- `!`: after the type/scope, introduces a breaking API change (correlating with **MAJOR** in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.


## Why Use Conventional Commits
1. Automatically generating CHANGELOGs.
2. Automatically determining a semantic version bump (based on the types of commits landed).
3. Communicating the nature of changes to teammates, the public, and other stakeholders.
4. Triggering build and publish processes. 
5. Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

### References:
- https://www.conventionalcommits.org/
