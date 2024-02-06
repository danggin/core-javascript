let userName = prompt('아이디를 입력해 주세요.');

if (userName?.toLowerCase() === 'admin') {
  let userPassword = prompt('비밀번호를 입력해 주세요.');

  if (userPassword?.toLowerCase() === 'themaster') {
    alert('환영합니다!');
  } else if (userPassword?.replace(/\s*/g, '') === '' || userPassword == null) {
    alert('취소되었습니다.');
  } else {
    alert('인증에 실패하였습니다.');
  }
} else if (userName?.replace(/\s*/g, '') === '' || userName == null) {
  alert('취소되었습니다.');
} else {
  alert('올바른 사용자가 아닙니다.');
}
