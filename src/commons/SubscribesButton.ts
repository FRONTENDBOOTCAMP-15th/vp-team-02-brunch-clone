const btn = document.querySelector('button');

let subscribed = false;

btn?.addEventListener('click', () => {
  subscribed = !subscribed; // subscribed = true
  // aria-pressed = true -> 버튼이 눌린 상태
  btn.setAttribute('aria-pressed', String(subscribed));

  // 스타일 변경
  btn.classList.toggle('bg-br-contentsBg', !subscribed);
  btn.classList.toggle('bg-br-primary', subscribed);
  btn.classList.toggle('text-br-primary', !subscribed);
  btn.classList.toggle('text-br-contentsBg', subscribed);
  btn.classList.toggle('w-[65px]', !subscribed);
  btn.classList.toggle('w-[78px]', subscribed);

  // 아이콘 변경
  const plus = btn.querySelector('.icon-plus');
  const check = btn.querySelector('.icon-check');

  plus?.classList.toggle('hidden', subscribed);
  check?.classList.toggle('hidden', !subscribed);

  // 텍스트 변경
  let label = btn.querySelector('span');

  if (subscribed) {
    label!.textContent = '구독중';
  } else {
    label!.textContent = '구독';
  }
});
