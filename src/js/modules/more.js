const more = (button, blocks) => {
    const btn = document.querySelector(button),
          cards = document.querySelectorAll(blocks);

    cards.forEach(card => {
        card.classList.add('animated', 'fadeInUp');
    })

    btn.addEventListener('click', () => {
        cards.forEach(card => {
            card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        })
        btn.style.display = 'none';
        btn.remove();
    })
}

export default more;