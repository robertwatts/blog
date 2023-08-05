---
date: 2021-04-01T20:45:15.133Z
title: Writing PR descriptions
---

<mark>The words below are part of the Wonderbly developer guide. I contributed a little but this is mainly the work of [Hraban Luyat](https://www.linkedin.com/in/hraban/) and [Lev Perlman](https://www.linkedin.com/in/justlev2/). They are great devs and I am grateful to have worked with them both.</mark>

Pull Requests are about telling a story. What kind of story are you telling? Is it the creation of a new feature, or how a bug has been fixed, or why an improvement needs to be made? Put yourself in the mindset of the reviewer, what does that person need to know to understand your story and be able to do their job.

Remember to balance this with the story told by the source code as a whole. Always judge what the source code will look like after merging your PR, and don't lose track of its priority over this individual patch.

To help you tell that story, use these these guidelines as much as possible.

## Writing a description

First step is creating a useful description. A good description helps your reviewer understand what they are being asked to look at.

### The title that says concisely _what_ this PR is

> fix: no feedback after editing customisations

Remember: the title has a maximum length of 50 characters. This helps understand the purpose of the PR at a glance when looking at a long list of changes in history view, a typical way of looking at history to see what's changed:

```
a10dd93 fix: statement timeout to 300s (#300)
714681a enable heroku nodejs analytics (#299)
12ee117 fix: orderEnricher: removing zip and merging sources correctly (#296)
bebfcf8 feat: stock - upserting stock with permissions (#288)
aa0b34e fix: async nock post request body test in CDS (#293)
ee2df10 feat: Stock Log Levels - change to info (#289)
f6eccc8 feat: psps deps: Passing AppDependencies to all PSPs (#283)
de54de2 docs: improve readme (#286)
8b0d6ec refactor: native request types, no need to redeclare (#284)
8f370fa feat: ecommOrigin in FullPspOrderData (#282)
7272d23 fix: OneFlow: shipping update path (#279)
b791d61 [Stock 403] - handling 403 error from OneFlow stock manager (#278)
5d21f49 Add printForReal boolean to order event log (#269)
050420f feature/ order log formatter (#277)
9e980b4 Fix sample unit test file (#276)
```

As you can see, some of these descriptions work better than others. Some don't follow the convention and they immediately stand out; this is why it's important to follow the convention in _all_ submissions.

Have a good look at this list and evaluate which submissions tell you what you need to know (what changed, which files were touched, ...), and which don't. For those that don't, imagine having to dig deeper into them and having to manually inspect each one to get a feeling for what actually changed.

As always, with everything you do relating to code: you are telling a story, so keep your audience in mind. What is their perspective, what do they want, who are they? In the case of PR titles, their perspective is this list of summaries. Keep this in mind when writing the title for your own PR.

### The description that explains _why_ this PR must exist

Explain why, with a note of what has changed.

> When submitting edited customisations for a product after purchasing the user wouldn't be navigated back to their order. This was broken during the changes made to customisations when trying to fix the case mismatch between Eagle, Website, and Muse. After looking at where the fetch method updateOrderItem was being used I noticed that the actual order response wasn't being used so I have removed the .then following the call to Eagle.

Again: you are telling a story; who is your audience? It is people reviewing your PR, and people using `git blame` to see what happened to a specific line, then wishing to see it in the context of its entire patch. What would those different audiences need to know to fully understand the patch? This can include:

-   Time pressure ("Should be doing X, but Rob says he wants it done by the end of the day so I must go with Y").
-   Alternative solutions that were not chosen ("Not doing Z because it might clash with Foo"). This is often overlooked but incredibly valuable.
-   Links to related issues.
-   Links to logs, or copies of logs
-   Excerpts from e-mail threads with suppliers / clients
-   on and on.

In the end, this is about "what is the context of this patch?" Most of that context could also be put in the code itself, which is more desirable if appropriate (remember the priority: code > patch). It is a delicate balance between what should live in the patch description, and what as a code comment. A rule of thumb is that comments should always go in the code, unless they are only relevant historically, but don't have any potential to benefit future decisions. If a library was removed because it is unmaintained, it won't risk being reintroduced, and there is little value commenting on it in the code. However, time pressure from management is almost always more useful as a code comment, because it helps future maintainers understand they can safely rewrite something, that there was no greater purpose to this hack than "getting it out the door." It is an instance of [Chesterton's fence](https://en.wikipedia.org/wiki/Wikipedia:Chesterton%27s_fence).

### Think about whom this PR will affect

Consider who is impacted by this. Our users? If so, write down how. Is there something our customer support team need to know? How-about dependent systems, is there new behaviour to be aware of? Go through this exercise and you may find new dependencies you haven't thought of.

### Highlight danger

Highlight danger clearly.

-   Is there a complication with roll-out beyond a simply deploy? E.g. a new environment variable, a dependent PR etc
-   Can this be rolled back quickly? If not, make it clear
-   Does this create potentially breaking changes? E.g. a breaking API update

### Provide useful links

Link back to the original ticket. Share links so the reviewer can preview.

Overall, don't make the reviewer work - any link that provides context can be helpful.

### Acceptance criteria to show new behaviour

Help someone understand what has changed by adding acceptance criteria. Create a list, ordered in a way that makes sense for the reviewer.

Example:

> -    Editing a product from `/personalized-products/:productSku/preview/:orderId/:itemId` (edit in account) will redirect users back to their order
> -    The user will see their update has been successful on the order page

### Include Steps to Test to walk the reviewer through the change

Show the reviewer some steps that demonstrate how acceptance criteria have been met.

For example:

> 1.  Add a product to cart
> 2.  Go through checkout (v1 or v2 doesn't matter)
> 3.  Once on the order page, click "login to edit order"
> 4.  Click on the edit link in one of the line items
> 5.  You should now be on the preview page
> 6.  Make any change to the product and click save
> 7.  You should now be navigated back to the order page and be able to see the new customisations

## Don't conflate concerns

Reviewers don't want see changes that aren't in the description. Adding "oh and I also refactored/cleaned-up a few classes" to the description doesn't make it ok either.

Imagine being in the head of the reviewer, a PR that does many things (a conflation of concerns) is more change for the reviewer, therefore more things they might miss, therefore more things that may go wrong in production and therefore more time unpicking the changes when it does.

If your code does require a refactor - think whether you can isolate in a separate PR, and start with that. This way, the reviewer might receive several PRs with a smaller amount refactoring prior to receiving the main PR that includes the logical change or the new feature.

Consequently that main PR will be smaller, more isolated, more readable.

## Use git to tell a story

This is a hard thing to do but it can make reviewing much easier and when the commits are squashed can provide a decent summary of what happened that we can all see our IDEs.

### Writing a good commit message

Borrow this syntax from the [Coventional Commits](https://www.conventionalcommits.org/en/) spec: `<type>[optional scope]: <description>`

Where `type` is one of `fix`, `feat`, or `improvement`.

Example:

> fix: Eagle API: Remove handling of response from edit in account api endpoint

#### [](https://github.com/Lostmyname/documentation/blob/master/1-dev-guide/submitting-prs.md#putting-commits-together-to-tell-a-story)Putting commits together to tell a story

An ideal git log tells a linear story, each commit showing progress to completing the feature. It's easy to show that progress when you have thought about what you plan to do before you start coding. This will help you, provide clarity to the PR and therefore help the reviewer. Then you can plan the commits as a series of improvements to the PR's stated goal.

When it comes to review, the reviewer can step through every commit, rather than having to parse every file change all at once.

## Provide some tests

Your PR should contain a test that validates the new behaviour. Think from the PR reviewers perspective: tests are documentation, they show new behaviour, what should happen what, importantly, what should not happen.

When writing tests, it's not enough to prove your code works. Think "how could this go wrong?" and write tests to cover those cases as well. Think how someone could misunderstand or misuse your changes, make sure they are covered in tests as-well.

## Add _why_ not _what_ comments to the code

Look at your code and if the reason _why_ is not clear then add a comment, probably with a `TODO` to remind ourselves that something needs to be done.

If you're adding comments to explain _what_ this code is doing then stop and think again. This is usually a sign that your code is overly complex. We should be able to determine what the code is doing just by reading it.

Readable code that doesn't work is better than unreadable code that does work!
