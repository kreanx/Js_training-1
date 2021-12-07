const modals = () => {
    let btnPressed = false;

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            scroll = calcScroll(),
            gift = document.querySelector('.fixed-gift');

        trigger.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault;
                }

                if (e.target === gift) {
                    gift.remove();
                }

                btnPressed = true;

                windows.forEach(item => {
                    item.style.display = 'none';
                    item.classList.add('animated', 'fadeIn');
                })

                modal.style.display = 'block';
                gift.style.marginRight += `${scroll}px`;
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`;

            })

        });

        close.addEventListener('click', () => {
            windows.forEach(item => {
                item.style.display = 'none';
            })
            modal.style.display = 'none';
            gift.style.marginRight = '';
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;


        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeClickOverlay) {
                windows.forEach(item => {
                    item.style.display = 'none';
                })
                modal.style.display = 'none';
                gift.style.marginRight = '';
                document.body.style.overflow = '';
                document.body.style.marginRight = `0px`;

            }
        })
    };

    function showModalByTime(selector, time) {

        setTimeout(() => {
            let display;


            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = "block";
                }
            })
            if (!display) {
                scroll = calcScroll();
                document.body.style.marginRight = `${scroll}px`;

                document.querySelector(selector).style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }, time);
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function openByScroll (selector) {
        window.addEventListener('scroll', () => {
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        })
    }


    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close');
    openByScroll('.fixed-gift');
    // showModalByTime('.popup-consultation', 60000);

};

export default modals;