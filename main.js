function List(){
	let books = document.getElementById("books-scroll");
	books.innerHTML += "<tr id = 'Фёдор Достоевский/1866'><th>Преступление и наказание</th><th>Фёдор Достоевский</th><th>1866</th></tr>";
	books.innerHTML += "<tr id = 'Фёдор Достоевский/1872'><th>Бесы</th><th>Фёдор Достоевский</th><th>1872</th></tr>";
	books.innerHTML += "<tr id = 'Ли Сан/1936'><th>Крылья</th><th>Ли Сан</th><th>1936</th></tr>";
	books.innerHTML += "<tr id = 'Иоганн Вольфганг фон Гёте/1808' ><th>Фауст</th><th>Иоганн Вольфганг фон Гёте</th><th>1808</th></tr>";
	books.innerHTML += "<tr id = 'Мигель де Сааведра Сервантес/1615'><th>Хитроумный идальго Дон Кихот Ламанчский</th><th> Мигель де Сааведра Сервантес</th><th>1615</th></tr>";
	books.innerHTML += "<tr id = 'Рюноскэ Акутагава/1918'><th>Муки ада</th><th>Рюноскэ Акутагава</th><th>1918</th></tr>";
	books.innerHTML += "<tr id = 'Альбер Камю/1942'><th>Посторонний</th><th>Альбер Камю</th><th>1942</th></tr>";
	books.innerHTML += "<tr id = 'Сюэцинь Цао/1800'><th>Сон в красном тереме</th><th>Сюэцинь Цао</th><th>1800</th></tr>";
	books.innerHTML += "<tr id = 'Эмилия Бронте/1847'><th>Грозовой перевал</th><th>Эмилия Бронте</th><th>1847</th></tr>";
	books.innerHTML += "<tr id = '1851'><th>Моби Дик, или Белый Кит</th><th>Герман Мелвилл</th><th>1851</th></tr>";
	books.innerHTML += "<tr id = 'Герман Гессе/1919'><th>Демиан</th><th>Герман Гессе</th><th>1919</th></tr>";
	books.innerHTML += "<tr id = 'Гомер/-850'><th>Илиада. Одиссея</th><th>Гомер</th><th>-850</th></tr>";
	books.innerHTML += "<tr id = 'Франц Кафка/1912'><th>Превращение</th><th>Франц Кафка</th><th>1912</th></tr>";
	books.innerHTML += "<tr id = 'Данте Алигьери/1472'><th>Божественная Комедия</th><th>Данте Алигьери</th><th>1472</th></tr>";
	books.style.color = "#00e6fa";
	books.style.fontSize = "32px";
}
function yearSort(){
	let input = document.getElementById("year").value;
    if(!input){
        let tr = document.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            tr[i].style.display = "";
        }
    }
    else{
        let tr = document.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
			block = tr[i].id.toLowerCase();
			input = input.toLowerCase();
			if(block.match(input)){
				tr[i].style.display = "";
			}
			else{
				tr[i].style.display = "none";
			}
        }
    }
}
function authtorSort(){
	let input = document.getElementById("authtor").value;
    if(!input){
        let tr = document.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
            tr[i].style.display = "";
        }
    }
    else{
        let tr = document.getElementsByTagName('tr');
        for (let i = 0; i < tr.length; i++) {
			block = tr[i].id.toLowerCase();
			input = input.toLowerCase();
			if(block.match(input)){
				tr[i].style.display = "";
			}
			else{
				tr[i].style.display = "none";
			}
        }
    }
}
function erase(){
	let tr = document.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        tr[i].style.display = "";
    }
}