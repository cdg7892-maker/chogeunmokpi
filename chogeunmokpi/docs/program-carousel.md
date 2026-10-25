# 진료 안내 캐러셀

오비채한의원의 두통 안내 목록(기존 상세 글 재사용)과 안면마비·골프엘보의 공유 갤러리 구조를 참고했다. 초근목피의 기존 본문·이미지·URL을 사용한다.

- 대상: 소화기, 마음건강, 소아·성장, 두면부, 여성건강, 보약·웰니스, 피부. 7개 소개 페이지와 88개 상세 글.
- `src/lib/program-guides.ts`: 카드와 ItemList의 공통 데이터. 마음건강 소개는 `/programs/mind`, 상세 글은 `/programs/psy/*`.
- 각 분야 layout이 공통 갤러리와 ItemList 하나를 렌더링한다. 같은 분야에서 이동하면 갤러리 위치를 유지한다.
- 원본 이미지는 기존 상세 페이지 OG 이미지와 동일하다. 클라이언트에는 본문 전체 대신 카드용 필드만 전달한다.
- 모바일 가로 스크롤, 이전/다음 버튼, 키보드 포커스, 현재 글 표시, 본문 바로가기를 제공한다.
- 단독 다이어트 페이지와 신청 양식은 묶을 상세 글이 없어 제외했다.

검증: `npm run build` 후 저장소 루트에서 `node chogeunmokpi/scripts/check-program-guides.mjs` 실행. 생성된 HTML에서 목록 수, 카드 수, URL, canonical, OG 이미지, 원본 이미지 중복을 검사한다.

네이버 검색 캐러셀 노출은 검색엔진 판단에 달려 있으며 보장되지 않는다. 지침: https://searchadvisor.naver.com/guide/structured-data-carousel
