# 개별 질환 검색 캐러셀

참조: https://orbitchae.com/programs/ms/tennis-elbow 및 그 아래 symptoms, causes 등 주제별 독립 페이지. 클리닉에 여러 질환을 나열하는 이전 구현은 철회했다.

- 7개 상위 클리닉에는 갤러리와 ItemList가 없다. 여성한의원·피부클리닉·고운맘카드 같은 포괄/행정 안내도 제외했다.
- 대상 85개 개별 질환/진료 항목에 각각 6개 주제 URL을 연결한다. 예: `/programs/digestive/reflux-esophagitis/symptoms`.
- `disease-guides-content.json`은 기존 공개 본문의 주제별 편집본이다. `prepare-disease-guides.cjs`는 기존 빌드 HTML에서 원문을 추출하는 이관 도구이며 자동 빌드에서는 실행하지 않는다. 향후 내용 변경은 JSON과 원래 본문을 함께 검토한다.
- `disease-guides.ts`의 데이터로 화면 목록, ItemList, 주제별 OG 메타데이터 및 sitemap을 맞춘다. 모든 링크는 같은 질환 아래 주제만 가리킨다.
- 새 이미지는 `public/images/disease-guides-v2`의 1200×1200 WebP이다. 첫 카드는 질환 관련 해부학 설명 그림, 나머지 다섯 카드는 증상을 표현하는 AI 연출 인물 사진이다. 질환명과 주제 글씨를 이미지 자체에 포함한다. 제작 프롬프트와 파일 기록은 `docs/photo-carousel`에 보관한다.
- `photo-carousel-ready.json`에 등록된 검수 완료 질환만 새 이미지를 사용한다. 미등록 질환은 `public/images/disease-guides`의 기존 벡터 카드를 유지한다. 여섯 이미지가 모두 준비되었는지 확인한 후 `mark-photo-carousel-reviewed.mjs`로 등록한다.
- 모바일 스크롤, 이전/다음 버튼, 키보드 포커스, 현재 글 표시, 본문 바로가기를 제공한다. 클라이언트에는 카드용 필드만 전달한다.

검증: `npm run build` 후 저장소 루트에서 `node chogeunmokpi/scripts/check-disease-guides.mjs` 실행. 클리닉 복원, 질환별 목록 격리, 주제별 원문·canonical·OG, sitemap, 이미지 크기와 중복을 검사한다.

네이버 검색 캐러셀 노출은 검색엔진 판단에 달려 있으며 보장되지 않는다. 지침: https://searchadvisor.naver.com/guide/structured-data-carousel
