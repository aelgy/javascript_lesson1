function order() {
  const str = document.getElementById('name').value;
  if (str.trim() === "") return alert("請輸入姓名");
  alert(str + "，謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！");
  document.getElementById('nameCheck').textContent = str;
}

function recognize() {
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}