## NATIONAL_CULTURAL_FESTIVAL
문화축제정보 공공api를 이용해 만든 전국 각지의 문화·축제 안내 웹

## 이미지
<img width="1897" height="874" alt="image" src="https://github.com/user-attachments/assets/0b064ea8-c895-4ceb-8bb7-0ee2397ca761" />
<img width="1889" height="934" alt="스크린샷 2026-06-06 004700" src="https://github.com/user-attachments/assets/2ef4286f-594b-403f-ac46-d0c7dd60ceba" />
<img width="1898" height="874" alt="스크린샷 2026-06-06 004650" src="https://github.com/user-attachments/assets/6cea0ff7-9b88-4ab9-8644-017af015d5e2" />
<img width="1919" height="876" alt="스크린샷 2026-06-06 004627" src="https://github.com/user-attachments/assets/8bbf8563-9c30-4d2c-a65a-5e9ca0f00979" />

## 배포 URL
[https://bean-talk.vercel.app](https://national-cultural-festival.vercel.app/)

## 개발 인원
1인 개발

## 개발 기간
2026-05-30 ~ 2026-06-06

## 기술 스택
- typescript
- nextJs (app 라우터)
- kakao-maps
- tanstack-query
- zustand
- scss

## 프로젝트 특징
- Next 라우트 핸들러를 이용하여 env값을 브라우저에 노출하지 않은 api 요청
- 공공 api를 활용한 빠른 개발
- 카카오 맵
- 하이드레이션 최소화를 위한 서버 컴포넌트의 명확한 분리

## 배포 플랫폼
Vercel

## 설치
```
npm install
```

## 개발환경 실행
```
npm run dev
```

## 폴더 구조
```
├── .vscode
├── public
├── src
|   ├── app
|   ├── axiosInstance
|   ├── components
|   ├── constants
|   ├── hooks
|   ├── services
|   ├── stores
|   ├── styles
|   ├── types
|   ├── utils
├── .env
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
```

## 특징
- tiptap과 kaka-maps를 이용한 사용자 친화적 WYSIWYG
- 보안을 위한 API 프록시 구현
- 유지보수를 위한 CoLocation 폴더 구조
