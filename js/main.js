
const goods = [
  {
    "id": 1,
    "title": "Смартфон Xiaomi 11T 8/128GB",
    "price": 27000,
    "description": "Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.",
    "category": "mobile-phone",
    "discont": false,
    "count": 3,
    "units": "шт",
    "images": {
      "small": "img/smrtxiaomi11t-m.jpg",
      "big": "img/smrtxiaomi11t-b.jpg"
    }
  },
  {
    "id": 2,
    "title": "Радиоуправляемый автомобиль Cheetan",
    "price": 4000,
    "description": "Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет",
    "category": "toys",
    "discont": 5,
    "count": 1,
    "units": "шт",
    "images": {
      "small": "img/cheetancar-m.jpg",
      "big": "img/cheetancar-b.jpg"
    }
  },
  {
    "id": 3,
    "title": "ТВ приставка MECOOL KI",
    "price": 12400,
    "description": "Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D",
    "category": "tv-box",
    "discont": 15,
    "count": 4,
    "units": "шт",
    "images": {
      "small": "img/tvboxmecool-m.jpg",
      "big": "img/tvboxmecool-b.jpg"
    }
  },
  {
    "id": 4,
    "title": "Витая пара PROConnect 01-0043-3-25",
    "price": 22,
    "description": "Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.",
    "category": "cables",
    "discont": false,
    "count": 420,
    "units": "v",
    "images": {
      "small": "img/lan_proconnect43-3-25.jpg",
      "big": "img/lan_proconnect43-3-25-b.jpg"
    }
  }
]

const modalOverlay = document.querySelector('.overlay');
modalOverlay.classList.remove('active');

const tableBody = document.querySelector('.table__body');

const createRow = ({id, title, price, category, count, units}) => {
  const tr = document.createElement('tr');

  const tdNumber = document.createElement('td');
  tdNumber.classList.add('table__cell_num');

  const tdTitle = document.createElement('td');
  tdTitle.classList.add('table__cell', 'table__cell_left', 'table__cell_name');
  tdTitle.textContent = title;
  tdTitle.setAttribute('data-id',id);
  const tdSpan = document.createElement('span');
  tdSpan.classList.add('table__cell-id');
  tdSpan.textContent = 'ID: ' + id;
  tdTitle.prepend(tdSpan);

  const tdCategory = document.createElement('td');
  tdCategory.classList.add('table__cell', 'table__cell_left');
  tdCategory.textContent = category;

  const tdUnits = document.createElement('td');
  tdUnits.classList.add('table__cell');
  tdUnits.textContent = units;

  const tdCount = document.createElement('td');
  tdCount.classList.add('table__cell');
  tdCount.textContent = count;

  const tdPrice = document.createElement('td');
  tdPrice.classList.add('table__cell');
  tdPrice.textContent = `$${price}`;

  const tdStrTotal = document.createElement('td');
  tdStrTotal.classList.add('table__cell');
  tdStrTotal.textContent = `$${price * count}`;

  const tdButtun = document.createElement('td');
  tdButtun.classList.add('table__cell', 'table__cell_btn-wrapper');
  const btnPic = document.createElement('button');
  btnPic.classList.add('table__btn', 'table__btn_pic');
  const btnEdit = document.createElement('button');
  btnEdit.classList.add('table__btn', 'table__btn_edit');
  const btnDel = document.createElement('button');
  btnDel.classList.add('table__btn', 'table__btn_del');
  tdButtun.append(btnPic, btnEdit, btnDel);

  tr.append(tdNumber, tdTitle, tdCategory, tdUnits, tdCount, tdPrice, tdStrTotal, tdButtun);
  console.log('рендер таблицв');
  return tr;
}

const renderGoods = (arr) => {
  const allRow = arr.map(createRow);
  console.log('allRow: ', allRow);
  tableBody.append(...allRow);

  const numTd = tableBody.querySelectorAll('.table__cell_num');
  console.log('numTd: ', numTd);
  let n = 1;
  numTd.forEach((i) => {
    i.textContent = n++;
  });
};


renderGoods(goods);

