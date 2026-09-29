# 오비채한의원 엔오슬림환 문자 연결

`POST /api/obichae-diet`는 사용자가 승인한 오비채한의원 신청을 기존 SOLAPI 설정으로 담당자에게 전달한다. 기존 `/api/diet-program` 동작은 변경하지 않는다.

환경변수는 기존 `SOLAPI_API_KEY`, `SOLAPI_API_SECRET`, `SOLAPI_SENDER`, `DIET_PROGRAM_SMS_TO`를 그대로 쓴다. 오비채 앱으로 값을 내보내지 않는다. 문자 제목과 본문은 오비채한의원으로 구분하며, Sheets webhook은 호출하지 않는다.

Origin은 `https://orbitchae.com`만 허용한다. 브라우저는 오비채의 같은 출처 프록시를 사용한다. Origin 검사 자체는 인증 수단이 아니며, 공개 신청 API의 입력·빈도 검증을 함께 적용한다.

입력은 이름(2~40자), 국내 휴대폰 번호, 지정된 상담 항목 1개, 동의, UUID v4 요청 식별자다. 임의 수신처·발신번호·본문은 허용하지 않는다. 서버 로그에는 HTTP 상태와 숫자 오류 코드·수량만 남긴다.

HTTP 성공과 실제 메시지 접수를 구분하여 `registeredSuccess`를 확인한다. 통신사 도착까지 보장하는 값은 아니다. 중복 억제와 발송 제한은 인스턴스 메모리 기반이며 분산 환경 전체에서의 정확히 한 번 발송을 보장하지 않는다. 불확실한 전송은 자동 재시도하지 않는다.

검사: 저장소 루트에서 `node --test chogeunmokpi/scripts/check-obichae-diet.test.mjs`.

공식 API: https://solapi.com/developers/api/messages
