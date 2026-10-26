# 질환별 해부학 / 환자 연출 이미지

2026-10-26: 85개 항목 × 6장, 총 510장의 제작과 육안 검수를 완료했다. `src/lib/photo-carousel-ready.json`에 전체 85개 항목을 등록했다.

- 제작 방식: 기본 내장 `image_gen` 도구. CLI/API 대체 경로는 사용하지 않는다.
- 구성: 각 질환의 첫 카드에는 관련 해부학 일러스트, 나머지 다섯 카드에는 해당 증상을 표현하는 가상의 인물 사진.
- 질환명과 주제 글씨를 생성 이미지 자체에 포함한다. 인물 이미지에 AI 연출 표시를 넣는다.
- `prompts.json`: 510개 이미지별 최종 프롬프트. `completed/`: 생성 도구가 저장한 원본 파일명과 프로젝트 출력 경로.
- `repair-jobs.json`은 재생성에 사용한 최종 요청, `qa-rework.json`은 검수 중 보완한 카드 기록이다. 모두 완료했으며 `prompts.json`에도 최종 요청을 반영했다. `prepare-photo-carousel.mjs`는 초안 생성용이므로 최종 프롬프트를 덮어쓰지 않도록 주의한다.
- 프로젝트 이미지: `public/images/disease-guides-v2/{분야}/{질환}/{주제}.webp`. 기존 v1 파일은 되돌릴 수 있도록 유지한다.
- 도구가 생성한 이미지는 1200×1200 WebP로 웹용 인코딩한다. 그림·사진·글씨를 별도로 합성하거나 기존 사진을 대체 재료로 사용하지 않는다.
- `qa/`의 축소 모음은 육안 검수용이며 서비스 이미지로 사용하지 않는다.
- 참고: NIDDK의 소화기 해부학 설명 https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works
- 기능성·정신건강 질환은 존재하지 않는 병변이나 진단 영상으로 오인되지 않게 관련 기관의 교육용 구조만 표현한다.
