---
date: 2021-03-01T20:45:15.133Z
title: Coding for other people
---

<mark>The words below are part of the Wonderbly developer guide. All credit should go to [Hraban Luyat](https://www.linkedin.com/in/hraban/). He's an incredibly smart guy and you'll be lucky to have him on your team.</mark>

This note is about the importance of writing code with other people in mind. Knowing that the poor sap who has to deal with your crappy code is a colleague you respect, someone you may never meet or (very likely) you.

## Considering other people

What really, at its core, is programming about? What are the most common causes of friction and losses of efficiency in the programming process?

To gain some insight into this matter, make sure always to consider your coworkers. You write and contribute code not for yourself, but for your colleagues (and for your future self, who will have forgotten everything that present self knows). This includes colleagues who have not joined yet, colleagues who will join after you are gone, even after you and everyone presently working with you are gone. When all that remains is the work; how is it used, and how can it be made to optimally speak for itself?

All our dogma, every rule we have, all of it attempts to optimise for that scenario. That is where, we believe, the most fundamental gains in efficiency (and morale) can be achieved. This point of view underpins our entire methodology, and should be kept in mind when reading this document.

## Great code is easily understood

The most important job that code has is: **to be understood by your colleagues, both present and future**.

Fulfilling its intended purpose correctly (aka "working without bugs") is number 2; because understood, broken code can be fixed; but working, misunderstood code will break and then cannot be fixed.

In order to understand code, a programmer (your colleague, or future you) will navigate the code using those two perspectives. They tend to go through these phases, in order:

1.  Read the least amount of actual code to get a vague idea of how it works, change the minimal amount of code to achieve their task, ignore everything else. Don't read comments, don't read docs, don't read unrelated code.
2.  If this doesn't work: attempt to read some comments close to the code they think is relevant, maybe some related function definitions and types, some calling code.
3.  Nightmare: the task still can't be completed. Curse whoever wrote this spaghetti, a pox on who hired this tool. I am relegated to reading documentation, ugh. This troglodyte was apparently not aware of the maxim "good code is self documenting".
4.  I need to see who this idiot was. I have to see their face. Who could be this obtuse. What absolute waste of oxygen produced this nightmare. `git blame`. Oh, it was me 6 months ago.

Point being: people only open a project when they have a specific job to do. That task is their only priority, and they will (want to) spend the absolute minimum amount of mental energy learning about any idiosyncrasies of this project. Nobody will open this project just because. Nobody will know, nor care, about the conventions, about the unwritten rules, or even the rules written in bold letters in the README. Don't get frustrated by this: it is wasted energy. Rather, accept it as true, and write code that is resilient to it.

**Great code is easily understood.** Above all else. It can be understood using those two dimensions: the code & comments themselves (1), and sometimes, in the extreme, the history of how it came to be (2).

## Be demanding now to avoid burdening the future

As developers, we need to think of the code we write as our personal product with our fellow developers as customers. The reverse is also true, we must act as demanding customers when presented with our fellow developers code.

New code must be maintained, likely by developers who the submitter or reviewer will never meet. For that reason we must be mindful of burdening future developers with changes we make now.20
