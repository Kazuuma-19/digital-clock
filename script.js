//TODO: 表示までに1秒かかる
//!各情報を取得
const clock = () => {
  //インスタンス
  const today = new Date();
  //年
  let year = today.getFullYear();
  //月
  let month = today.getMonth() + 1;
  //日
  let date = today.getDate();
  //曜日
  let day = today.getDay();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  //時
  let hour = today.getHours();
  //分
  let minutes = today.getMinutes();
  //秒
  let second = today.getSeconds();

  //!DOMを取得
  const todayDate = document.getElementById('date');
  const todayTime = document.getElementById('time');

  //!中身のテキストを変更する
  //1桁の場合は0をつける
  if (month < 10) {
    month = `0${month}`
  }
  if (date < 10) {
    date = `0${date}`
  }
  if (hour < 10) {
    hour = `0${hour}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  if (second < 10) {
    second = `0${second}`
  }
  todayDate.innerText = `${year}.${month}.${date} ${weekday[day]}`;
  todayTime.innerText = `${hour}:${minutes}:${second}`;

}
setInterval(clock, 1000);