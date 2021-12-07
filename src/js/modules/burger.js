const burger = (btnSelector, burgerSelector) => {
    const btn = document.querySelector(btnSelector),
        burger = document.querySelector(burgerSelector);

    burger.style.display = 'none';


    btn.addEventListener('click', () => {
        if (burger.style.display === 'none' && window.screen.availWidth < 993) {
            burger.style.display = 'block';
        }
        else {
            burger.style.display = 'none';
        }
    });


    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 993) {
            burger.style.display = 'none';
        }
    })
}

export default burger;