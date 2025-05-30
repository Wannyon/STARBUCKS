# STARBUCKS

## 메인 페이지 구조 
1. **헤더**
   - 로고
   - 네비게이션 메뉴   <br/>
        COFFEE  <br/>
        MENU   <br/>
        STORE  <br/>
        RESPONSIBILITY <br/>
        STARBUCKS REWARDS  <br/>
        CORPORATE SALES    <br/>
        WHAT'S NEW   <br/>
   - 로그인/회원가입
        Sign In   <br/>
        My Starbucks   <br/>
        Customer Service & Ideas   <br/>
        Find a Store   <br/>
2. **메인 베너**
3. **공지사항**(페이지 이동) 및 **프로모션 배너**(드롭다운 배너 확장)
4. **리워드 소개 섹션**
5. **메인 콘텐츠 섹션들**
    - 시즌 음료 소개
    - 스타벅스 리워드
    - 매장 소개
    - 앱 소개 등
6. **푸터**

## 폴더 구조
src/ <br/>
├── assets/                # 이미지, 로고 등<br/>
├── components/            # 공통 컴포넌트<br/>
│   ├── Header/<br/>
│   ├── Footer/<br/>
│   ├── MainSlider/        # Swiper 적용<br/>
│   ├── NoticeBanner/<br/>
│   └── ...etc<br/>
├── features/              # 각 섹션에 대응하는 기능 단위<br/>
│   ├── reward/<br/>
│   ├── seasonalDrink/<br/>
│   ├── storeInfo/<br/>
│   └── appPromotion/<br/>
├── pages/                 # 페이지 단위<br/>
│   └── Home/<br/>
│       ├── HomePage.tsx<br/>
│       └── sections/      # 메인 페이지의 섹션들로 나눠서 구성<br/>
│           ├── MainVisualSection.tsx<br/>
│           ├── RewardsSection.tsx<br/>
│           ├── NoticeSection.tsx<br/>
│           ├── SeasonalDrinkSection.tsx<br/>
│           ├── StoreInfoSection.tsx<br/>
│           └── AppPromotionSection.tsx<br/>
├── redux/                 # Redux Toolkit store<br/>
│   ├── store.ts<br/>
│   └── slices/<br/>
│       ├── bannerSlice.ts<br/>
│       └── ...etc<br/>
├── routes/                # 라우팅<br/>
│   └── index.tsx<br/>
├── styles/                # 전역 스타일 및 theme<br/>
│   ├── global.scss<br/>
│   └── theme.ts<br/>
├── utils/                 # 헬퍼 함수 및 유틸리티<br/>
├── App.tsx<br/>
└── main.tsx<br/>