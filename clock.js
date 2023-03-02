const t = document.getElementById('time')
const d = document.getElementById('date')

function show_time() {
    let current_datetime = new Date();
    t.textContent =`${current_datetime.getHours()} : ${current_datetime.getMinutes()} : ${current_datetime.getSeconds()}`;
    d.textContent = `${current_datetime.getDate()}/${current_datetime.getMonth()}/${current_datetime.getFullYear()}`;
}

setInterval(show_time,1000);
show_time();