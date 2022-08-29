function modal_show() {
    document.querySelector('.modal .content').innerHTML = `
    <h1>Оставьте заявку</h1>
    <p>Наш специалист свяжется с вами в ближайшее время</p>
    <form action="">
        <input type="text" name="order-name" id="order-name" placeholder="Ваше имя *">
        <input type="tel" name="order-phone" id="order-phone" placeholder="Ваш номер телефона *">
        <div class="checkbox">
            <input type="checkbox" name="order-checkbox" id="order-checkbox">
            <label for="order-checkbox">Я ознакомлен с <a href="#">политикой конфиденциальности</a> и согласен
                на обработку персональных данных</label>
        </div>
        <button onclick="send_modal()">Отправить заявку</button>
    </form>`;
    document.querySelector('.modal').classList.add('active');
    document.querySelector('.overlay').classList.add('active');
}

function modal_hide() {
    document.querySelector('.modal').classList.remove('active');
    document.querySelector('.overlay').classList.remove('active');
}

function send_modal() {
    document.querySelector('.modal .content').innerHTML = `
    <h1>Спасибо!</h1>
    <p>Ваша заявка принята, менеджер свяжется с вами в ближайшее время</p>`;
}