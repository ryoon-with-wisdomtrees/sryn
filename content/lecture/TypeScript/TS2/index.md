---
emoji: 🎨
title: DOIT 타입스크립트_1
date: '2022-01-20 17:02:00'
author: sryn
tags: lecture tutorial TypeScript
categories: 📑 featured
---

## 📑 타입스크립트?

자바스크립트는 현재 세가지 종류가 있어.
</br></br>

1. 웹브라우저에서 동작하는 표준 자바스크립트 ES5와
2. ESNext(ES6),
3. 그리고 타입을 추가한 타입스크립트임
   타입스크립트가 다 포함함.

```
function makePerson(name: String, age: number){}
```

이런게 타입스크립트</br>
자바스크립트에 강력한 Type기능을 추가해서 오류를 줄임.</br>
타입스크립트 소스코드는 TSC(타입스크립트 Compiler)를 통해 ES5자바스크립트로 변환됨.

## 📑 타입스크립트 개발 환경 만들기

scoop을 설치하라고 권유하고 있다. 그래서 스쿱이 뭐지? 하고 알아보니 아래와 같다고 한다.</br>

> scoop(https://scoop.sh/) 이란? -리눅스의 apt-get install 처럼 윈도우에서도 명령어를 통해 sw 등을 간단히 설치 가능하게 하는 도구</br>출처:https://kiki-100.tistory.com/99

1. Windows PowerShell 실행. 윈도우키에서 오른쪽버튼 클릭하면 나옴.

2. scoop설치
   아래와 같이 명령을 차례대로 실행.(실행정책 A누를 것)
   ![1](ts1.JPG)
3. 스쿱은 내부적으로 다양한 설치 정보를 깃허브로부터 받는다고 한다.
4. aria2는 다중 내려받기를 가능하게 해서 프로그램 설치 시간이 절감된다고 한다.
   </br></br></br></br></br>

5. 관리자 모드 파워셸에서 scoop update \* 입력하면 한꺼번에 최신 버전으로 업데이크 가능.

## 📑 etc

tsc는 타입스크립트 코드를 ES5 형식의 js코드로 변환만 하고 실행까지는 안함. 둘다 하게 하고 싶으면 ts-node라는 프고르램을 설치하면 됨.

```
npm i -g ts-node

```

```toc

```
