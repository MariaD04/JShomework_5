const button = document.querySelector('.chat-widget__side');
const chat = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');

button.addEventListener('click', () => {
    chat.classList.add('chat-widget_active')
})

function robotMessage() {
    let today = new Date();
    const words = [
        'Добрый день и до свидания!',
        'Мы ничего не будем вам продавать',
        'Кто тут?',
        'Где ваша совесть?',
        'Вы ничего у нас не купи, чтобы так с нами здороваться',
    ]
    let randomIndex = Math.floor(Math.random() * words.length);
    let randomWord = words[randomIndex];
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${today.getHours()}:${today.getMinutes()}</div>
            <div class="message__text">
            ${randomWord}
            </div>
        </div>
    `;
}

document.addEventListener('keydown', (event) => {
    if (event.key == 'Enter') {

        let clientMessage = (document.getElementById('chat-widget__input')).value;
        let today = new Date();
        
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">${today.getHours()}:${today.getMinutes()}</div>
                <div class="message__text">
                ${clientMessage}
                </div>
            </div>
        `;

        robotMessage();
        document.getElementById('chat-widget__input').value = "";
    } 
    
})


