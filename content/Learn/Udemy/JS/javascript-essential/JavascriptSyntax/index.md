---
emoji: 📑
title: javascript-essential_ Javascript Syntax
date: '2022-01-23 17:02:00'
author: sryn
tags: lecture tutorial Javascript
categories: learn
---

- Udemy 무료 JS강의[[https://www.udemy.com/course/javascript-essentials](https://www.udemy.com/course/javascript-essentials)] 를 보고 복기용으로 타이핑하는 수업내용.
- 자동생성된 영어 자막을 보며, 필요한 부분에 대한 내용만을 편집 하고 재타이핑 했기 때문에 일부 단어나 문구가 틀릴 수 있다.
- 이 JS강의를 들으며 놓쳤던 기초 부분을 복습하고 탄탄히 한다.
- 이 페이지에 있는 영어문장과 캡쳐 이미지의 저작권은(당연히) 모두 원작자 **[Lawrence Turton](https://www.udemy.com/user/lawrenceturton/)**와 [강의 사이트](https://www.udemy.com/course/javascript-essentials)에 있음을 명시한다.

## Syntax

So what is the javascript syntax.

Syntax is simply the way a program is written. It means the way in which that language is written and that's defined by the creators of that language.

### API

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e8d04c91-2ec9-4c73-9d7c-dd78d8479ce9/Untitled.png)

Now there's going to be a very popular acronym. An acronym simply means each letter is a word. And that acronym is API. And it will constantly keep poppin up.

So we really have to understand what is an API.

**API stands for application programming interface** and

every language on the face of the planet has its own API.

**Well an API is simply a collection of functions and also properties as well**.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cd9d7c87-cef6-4f3a-a4e9-569d3997c8ce/Untitled.png)

We didn't need to do anything for that window object to be defined. It was already defined for us. So in that case that is the javascript API. It's just a collection of functions and properties.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5c84611a-d1ec-4316-99de-be6b45f5e07b/Untitled.png)

**JQuery is an API.**

It has its own collection of functions and properties. This is what's known as an embedded or extension API.

So that basically means that JQuery needs the Javascript API to define its own API. So JQuery is just using those native API that come with Javascript.

There’s native predefined functions and then it is using those and it’s own functions and creating it’s own style. But its not a completely different language. Its an **API extension**.

Therefore its adding on to al**l** you could call it an **embedded API. That's what libraries are. Its an API extension**.

whenever I create an object with my own methods or my own functions and my own properties I'm essentially creating an API.

You don't have to give it a name but you that's what you are doing you are creating your own API.

Remember JS comes with a JIT Compiler that takes your human readable code into computer’s code. And JIT Compiler have their own native APIs or predefined functions and properties

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/967ffe29-664f-436d-8a9c-a4def48ce406/Untitled.png)

Now every single window( it doesn't matter whether the window is in a tab or many different separate windows it doesn't matter), Each one of those windows or web pages has its own window object. And each window object is isolated from the other.

So in essence, one web page can manipulate the window object to add stuff to the window object. and It is different

from the other one. So each window, each web page has its own window object.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4154896c-5fcc-4506-802d-9467d3fd48a6/Untitled.png)

Then also what we have is the API(application programming interface). Like when I'm interfacing with other people, you can think of the people as the programs. And we're interfacing back and forth. And these programs encapsulate, meaning put together their own APIs.

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68aeadde-77f8-41a6-abe1-755e812c5a36/Untitled.png)

Then finally what you've discovered is about programming language execution. Programming languages can either be executed by an interpreter compiler JIT compiler or AOT compiler.

In the case of javascript, it's a JIT compiler and the compiler will take your instructions just in time, when you need those instructions. And it will take them off and it will convert them into machine code, ones and zeros, that your computer's hardware can actually understands and they also do

some of the optimization processes as well.

So that is essentially how javascript and syntax is used in the browser.

```toc

```
