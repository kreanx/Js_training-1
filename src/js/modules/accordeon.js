const accordeon = (btnSelector) => {
    const btns = document.querySelectorAll(btnSelector);

    btns.forEach(btn => {
        btn.nextElementSibling.style.overflow = 'hidden';

        btn.addEventListener('click', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.nextElementSibling.style.maxHeight = '0';
                this.nextElementSibling.style.overflow = 'hidden';
            }
            else {
                btns.forEach(b => {
                    b.classList.remove('active');
                    b.nextElementSibling.style.maxHeight = '0';
                    b.nextElementSibling.style.overflow = 'hidden';
                });
                this.classList.add('active');
                this.nextElementSibling.style.overflow = 'visible';
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
            }
        });
    });
}

export default accordeon;



