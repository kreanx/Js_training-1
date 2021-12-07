const change = () => {
    const menu = document.querySelector('.portfolio-menu'),
          li = menu.querySelectorAll('li'),
          block = document.querySelector('.portfolio-wrapper'),
          allBlock = block.querySelectorAll('.all'),
          no = document.querySelector('.portfolio-no');

    function blockFilter (el) {
        allBlock.forEach(all => {
            all.style.display = 'none';
            all.classList.remove('animated', 'fadeIn');
        })

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (el && el.length > 0) {
            el.forEach(elem => {
                elem.style.display = 'block';
                elem.classList.add('animated', 'fadeIn');

            }) 
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }

    }

    menu.addEventListener('click', (e) => {
        let target = e.target,
            x = target.classList.item(0),
            y = block.querySelectorAll(`.${x}`);

        if (target && target.tagName == 'LI') {
            li.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }

        blockFilter(y);
    })
}

export default change;