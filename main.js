function order() {
  const str = document.getElementById('name').value;
  alert(str + "，謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！");
  document.getElementById('nameCheck').textContent = str;
  const types = document.getElementById('types');
  const typesValue = document.getElementById('types').value;
  const typesIndex = types.selectedIndex;
  const typesText = types.options[typesIndex].text;
  document.getElementById('userTypes').textContent = typesText;
  const items = document.getElementById('items');
  const itemsValue = document.getElementById('items').value;
  const itemsIndex = items.selectedIndex;
  const itemsText = items.options[itemsIndex].text;
  document.getElementById('userItems').textContent = itemsText;
  if (str.trim() === "") return alert("請輸入姓名");
  if (typesValue === "") return alert("請選擇款式");
  if (itemsValue === "") return alert("請選擇款式");
}

function recognize() {
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}