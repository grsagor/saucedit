$(document).ready(function (){
    document.querySelector('#profileToggle').addEventListener('click', function (){
        const profile = document.querySelector('.chat__profile');
        const message = document.querySelector('.message__main');
        profile.classList.toggle('profile__toggle');
        message.classList.toggle('message__width');
    })

    if (document.querySelector('#messageAction')){
        document.querySelector('#messageAction').addEventListener('click', function (){
            const action = document.querySelector('.message__popup');
            action.classList.toggle('message__action--toggle');
        })
        window.addEventListener('click', function (e){
            const child = document.querySelector('.message__popup').childNodes;
            if (!document.querySelector('.message__popup').classList.contains('message__action--toggle')){
                const actionBtn = document.querySelector('.message__popup');
                const vh = document.querySelector('#messageAction');
                if (e.target != vh && e.target != child){
                    actionBtn.classList.add('message__action--toggle');
                }
            }
        })
    }
})