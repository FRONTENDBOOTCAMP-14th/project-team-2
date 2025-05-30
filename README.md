###### Likelion Front-end Bootcamp

# UI Project(CSS) ![Image](https://github.com/user-attachments/assets/1ae348e9-3bb9-402a-b2b8-9ff682f06c1a)

## 📝 목차
> 프론트엔드 부트캠프 14기 `일석2조` 의 **UI Project** 리드미는 다음과 같이 구성되어 있습니다.

  1️⃣프로젝트 개요
  2️⃣배포사이트
  3️⃣프로젝트 팀&팀원 소개
  4️⃣프로젝트 R&R
  5️⃣기술 스택
  6️⃣컨벤션

---
### 📌 프로젝트 개요
> HTML & CSS를 활용하여 컴포넌트화의 기준을 학습하고, 협업을 통한 커뮤니케이션 스킬을 향상시키고자 합니다.

---
### 🔗 배포사이트
[마켓칼리 바로가기](https://1stone2team.netlify.app/)  

---
### 💬 프로젝트 팀&팀원 소개
1. 팀 소개
   - 이번 프로젝트를 통해 `HTML & CSS 스킬 향상`과 `좋은 동기`, 두 가지 모두를 얻어가자는 의미입니다.

2. 팀원 소개

|NAME|Gitgub|
|-|-|
|정우진(PL)|https://github.com/wjinss|
|최도형(PM)|https://github.com/Stylechoi|
|김민지|https://github.com/minji-kim0524|
|김상훈|https://github.com/ksh2998|
|이성은|https://github.com/HanUL072|



### 👨‍💻 프로젝트 R&R
---
✨<i>정우진</i> <br />
 - **Project Leader**
 - 공통 컴포넌트(header, footer) 구현
 - 메인 페이지 구현
 - 문서화 작업
 - 기초 환경구성 셋팅

 ✨<i>최도형</i> 
 - **Project Manager**
 - 회원가입 페이지 구현
 - 로그인 페이지 구현 <br />
 
  ✨<i>김민지</i> <br />
 - **Project Member**
 - 장바구니 페이지 구현 <br />

  ✨<i>김상훈</i> <br />
 - **Project Member**
 - 상품상세 페이지 구현 <br />

  ✨<i>이성은</i> <br />
 - **Project Member**
 - 상품 리스트 페이지 구현
<br />

### 🛠️ 기술 스택
---
- 기술스택:<img alt="HTML5" src ="https://img.shields.io/badge/HTML5-E34F26.svg?&style=for-the-badge&logo=HTML5&logoColor=white"/><img alt="CSS3" src ="https://img.shields.io/badge/CSS3-663399.svg?&style=for-the-badge&logo=css&logoColor=white"/>
- 버전관리:<img alt="GIT" src ="https://img.shields.io/badge/GIT-F05032.svg?&style=for-the-badge&logo=GIT&logoColor=white"/><img alt="github" src ="https://img.shields.io/badge/github-181717.svg?&style=for-the-badge&logo=github&logoColor=white"/>
- 에디터: <img alt="vscode" src ="https://img.shields.io/badge/vscode-007ACC.svg?&style=for-the-badge&logo=code&logoColor=white"/>
- 협업 툴:<img alt="notion" src ="https://img.shields.io/badge/notion-000000.svg?&style=for-the-badge&logo=notion&logoColor=white"/><img alt="discord" src ="https://img.shields.io/badge/discord-5865F2.svg?&style=for-the-badge&logo=discord&logoColor=white"/>
- 배포환경: <img alt="netlify" src ="https://img.shields.io/badge/netlify-00C7B7.svg?&style=for-the-badge&logo=netlify&logoColor=white"/>

### ✅ 컨벤션
---
#### 1. Git Convention

##### 1.1 Git Commit


**커밋 메세지 + 이슈번호**

- `init`: 초기 설정.
- `feat`: 기능 추가, 변경
- `remove` : 파일이나 코드 삭제
- `fix` : 버그, 오류 수정
- `docs`: readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)
- `style`: CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬, 주석 등의 변경)
- `refactor`: 코드 리팩토링
- `test`: 테스트 코드 추가, 삭제, 변경 등 (코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당)
- `ci`: npm 모듈 설치 등
- `chore`: 패키지 매니저 설정할 경우, etc 등

### 커밋 작성 방식

```html
Type(제목): Subject
(한줄 띄어 분리)
Body(본문 - 생략 가능) : 내용 ~
(한줄 띄어 분리)
Footer(꼬리말 - 생략 가능) : 내용~
```

커밋 예시

```html
style: index.html header > nav 너비 수정  

반응형 디자인 시안에 맞춰 모바일, 데스크탑의 max-width 설정
 - 모바일: minmax(200px,40vw)
 - 데스크탑: minmax(80%, 1280px) 
 
Resolves #1
```

##### 1.2 Git Branch

- main: 배포용 브랜치, **작업 절대 X**
- develop: 개발용 브랜치, 모든 브랜치의 시작점으로 여기로 merge해야됨
- feature/작업 내역: 각자 작업 브랜치
- hotfix: 오류 수정. 사용할 일 없기를
- docx/문서이름: 문서작성
```
로그인 기능 구현 > feature/login

폼 오류 수정 > hotfix/form

README.md 내용 추가 > docx/readme
```

#### 2.  Coding Convention

##### 2.1 Class Naming

클래스 네이밍: **OOCSS**

**OOCSS 예시**

- html
``` html
<button class="btn youtube">youtube</button>
<button class="btn instagram">instagram</button>

<h3 class="sub-title"> ... </h3> 
<span class="sub-title"> ... </span>
```
- css
```css
.btn{공통 스타일 선언} 
.youtube{youtube 스타일 선언}
.instagram{instagram 스타일 선언 }

.sub-title {font-size:16px}
```
