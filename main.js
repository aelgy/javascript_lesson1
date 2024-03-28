function order() {
  // 驗證寫在前面
  const str = document.getElementById('name').value;
  const typesValue = document.getElementById('types').value;
  const itemsValue = document.getElementById('items').value;
  const itemNumbers = document.getElementById('number').value;
  if (str.trim() === "") return alert("煩請填寫您的姓名");
  if (typesValue === "") return alert("煩請選擇款式");
  if (itemsValue === "") return alert("煩請選擇類型");
  if (itemNumbers === "" || itemNumbers <= 0) {
    return alert("煩請輸入訂購數量")
  }
  else if (itemNumbers < 100) {
    return alert("抱歉，我們工廠的最低出貨量是 100 件")
  } else if (itemNumbers > 5000) {
    return alert("抱歉，我們工廠的最高出貨量是 5000 件")
  }

  // 如果驗證沒問題就可以跑後面的
  alert(str + "，謝謝您對我們的衣服有興趣！請致電 0987-654-321，會有專人提供您報價！");
  promoteAlert()
  showOrder()
}

function recognize() {
  alert("我們工廠位於新北市，通過國際 ISO9001 認證，品質讓您放心！");
}

function promoteAlert() {
  const types = document.getElementById('types');
  const typesIndex = types.selectedIndex;
  const typesText = types.options[typesIndex].text;
  const itemNumbers = document.getElementById('number').value;
  if (typesText === "男裝") {
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您帥氣領帶！")
    const menPrice = 600;
    const totalNums = menPrice * itemNumbers;
    document.getElementById('totalNums').textContent = totalNums;
  } else {
    alert("最近剛好是工廠週年慶，只要您今天來電下單，我們將贈送您美麗圍巾！")
    const womenPrice = 500;
    const totalNums = womenPrice * itemNumbers;
    document.getElementById('totalNums').textContent = totalNums;
  }
}

function showOrder() {
  // 一開始不顯示，但點按鈕後會跑出來
  const order = document.getElementById('orderList').style.display = "";
  getName();
  getTypes();
  getItems();
  getNumbers();
}


function getName() {
  const str = document.getElementById('name').value;
  document.getElementById('nameCheck').textContent = str;
}

function getTypes() {
  const types = document.getElementById('types');
  const typesIndex = types.selectedIndex;
  const typesText = types.options[typesIndex].text;
  document.getElementById('userTypes').textContent = typesText;
}

function getItems() {
  const items = document.getElementById('items');
  const itemsIndex = items.selectedIndex;
  const itemsText = items.options[itemsIndex].text;
  document.getElementById('userItems').textContent = itemsText;
}

function getNumbers() {
  const itemNumbers = document.getElementById('number').value;
  document.getElementById('itemNums').textContent = parseInt(itemNumbers);
}
