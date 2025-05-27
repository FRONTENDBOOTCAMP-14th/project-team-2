# Login Components

로그인 및 회원가입 페이지에서 사용되는 재사용 가능한 컴포넌트들입니다.

## 컴포넌트 목록

### 1. Input.html
기본 입력 필드 컴포넌트
- 텍스트, 비밀번호, 이메일 등 다양한 타입 지원
- 포커스 시 보라색 테두리
- 생년월일용 특별 스타일 포함

### 2. Button.html
버튼 컴포넌트
- `btn--primary`: 메인 버튼 (보라색 배경)
- `btn--secondary`: 보조 버튼 (투명 배경, 보라색 테두리)
- `btn--small`: 작은 버튼 (중복확인, 인증번호 받기 등)
- `btn--address`: 주소 검색 버튼

### 3. Label.html
라벨 컴포넌트
- 필수 항목 표시 (빨간색 *)
- 일관된 스타일링

### 4. Radio.html
라디오 버튼 컴포넌트
- 그룹별 단일 선택
- 클릭 이벤트 처리 포함
- 성별, 추가입력사항 등에 사용

### 5. Checkbox.html
체크박스 컴포넌트
- 단일 체크박스
- 체크 시 보라색 배경
- 클릭 이벤트 처리 포함

### 6. FormRow.html
폼 행 컴포넌트
- 라벨 + 입력필드 + 버튼 조합
- 회원가입 폼의 기본 레이아웃
- 하단 구분선 포함

### 7. Agreement.html
이용약관 동의 컴포넌트
- 전체 동의 기능
- 개별 약관 체크
- 필수/선택 구분
- 약관보기 링크

## 사용 방법

각 컴포넌트는 독립적으로 사용할 수 있으며, HTML 파일을 include하거나 내용을 복사해서 사용하면 됩니다.

```html
<!-- 예시: 로그인 폼 -->
<div class="container">
    <h1 class="title">로그인</h1>
    <div class="form">
        <!-- Input 컴포넌트 사용 -->
        <input type="text" class="input" placeholder="아이디를 입력해주세요">
        <input type="password" class="input" placeholder="비밀번호를 입력해주세요">
        
        <!-- Button 컴포넌트 사용 -->
        <button class="btn btn--primary">로그인</button>
    </div>
</div>
```

## 스타일 가이드

- 주 색상: #5F0080 (보라색)
- 에러 색상: #F03F40 (빨간색)
- 텍스트 색상: #333333
- 보조 텍스트: #898989
- 테두리: #C4C4C4
- 폰트: PretendardVariable 