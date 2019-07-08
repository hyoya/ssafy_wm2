# 개요

1. 프론트 / 백 / DB

2. 참고 페이지

3. 기능

5. 만들면서 주의사항

   jquery 쓰지 말기
   
   

## 1. 프론트/백/DB

- 프론트 : vue
- 백, DB : firebase로 연동



## 2. 참고 페이지

- `https://dribbble.com/`
- `https://meeta.io/`

- `https://programmers.co.kr/`
- `https://www.jobplanet.co.kr/`



## 3. 기능

- 프로젝트 목적 : 포트폴리오 공유 사이트

- 레이아웃 : 숫자로  페이지(url) 구분 , {숫자} 는 이동 가능한 페이지를 뜻함

  ```
  1 메인화면 : ex) https://dribbble.com/
  url : https://~~~~.com/
  	- 헤더 : 로고, 로그인, 회원가입, (멤버십 등급은 넣지 않기로 함, 세부 내용은 추가기능에 설명)
  		{4 회원 가입 페이지}
  	- 상단 : 서비스 안내(정보) 
  	- 필터링 기능(포트폴리오 검색=돋보기이용)
  	- 중간 : 종류별(선택가능) 포트폴리오 나열
  		{2 포트폴리오 상세 화면 이동 가능}
  	- 맨 아래 : 메타 데이터
  
  2 포트폴리오 상세 화면 : 모달로 구현 , ex) https://dribbble.com/shots/6732804-Refreshing-Summer-Drinks
  url : https://~~~~.com/@제작자의ID/그사람의포트폴리오숫자
  	- 유저 정보 , 좋아요..? 저장..? 기능
  	- 간단한 포트폴리오 대표이미지
  	- 유저 : 댓글(대댓글기능=소통, #,@언급기능) 모음
  		{3-1 유저 상세 페이지로 이동 가능}
  
  3-1 유저 상세 페이지(남의 페이지) : ex) https://dribbble.com/Angelia1314
  url : https://~~~~.com/@제작자의ID/
  목적 : 유저가 어떤 포트폴리오 공유했는지 확인 가능
  	- 상단 : 태그 / 팔로워 / 기능
  		- 태그 별 포트폴리오 나열
  		- 팔로우 별 .. 정보??
  	- 왼쪽 세션 : 유저의 기본 정보
  		- 이메일을 통해 바로 메일 보내기 기능
  	- 오른쪽 : 포트폴리오 나열
  
  3-2 유저 상세 페이지(나의 페이지) : 내가 나의 페이지 안에서 할 수 있는 것
  url : https://~~~~.com/@제작자의ID/
  	- 알림 기능 : 로그인한 경우 = 백준 참조
  		- 포트폴리오 열람 기록
  			개인이 열람했는지, 기업이 열람했는지 확인(필터링 또는 하이라이트 기능으로)
  		- 팔로우한 사람이 새로운 프로젝트를 올렸습니다.
  		- 관심있는 기업(3-3 참조)이 어떠한 포스팅을 하였는지 확인 가능
  	- 자신의 프로젝트 CRUD (meeta 참조)
  
  3-3 기업 상세 페이지 , ex) https://programmers.co.kr/job_positions/815
  url : https://~~~~.com/company/@회사의ID/
  	- 왼쪽 : 기업의 기본적인 정보
  	- 오른쪽 : 어떠한 사람들을 원하는지에 대한 내용(간단하게), 채용 포스팅
  
  4-1 회원 가입 페이지(유저)
  url : https://~~~~.com/signup/user
  	- 개인정보
  		- 한줄소개, 경력, 교육, 이메일과 폰번호(공개/비공개 여부), 대표이미지 
  
  4-2 회원 가입 페이지(기업)
  url : https://~~~~.com/signup/company
  	- 기업인증 : 메일인증 형식으로(관리자는 관리자페이지에서 승인가능??!?!?!)
  	- 어떠한 직무를 원하는지 meeta 처럼 태크 선택가능하게끔.(최대한 편하게)
  
  ```

- 추가 기능

  - 멤버십

    - 등급 : 논멤버십, 기업멤버십(기업인증필요-관리자페이지에서 승인(메일인증형식)), 개인멤버십(기준이 2개=돈을 내거나, 프로젝트를 올린 기록이 있거나, 하루치 한달치 등등)

    - 개인은, 포트폴리오/ 를 보려면 내가 올렸거나? 돈을 냈거나
    - 개인은 올린 포트폴리오에 대한 랭킹시스템으로 활성화 유도

    