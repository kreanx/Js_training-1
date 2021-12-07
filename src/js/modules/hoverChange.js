const hover = (selector) => {
    const blocks = document.querySelectorAll(selector);

    function showImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -4) + '-1.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'none';
        })    
    }

    function backImg(block) {
        const img = block.querySelector('img');

        img.src = img.src.slice(0, -6) + '.png';
        block.querySelectorAll('p:not(.sizes-hit)').forEach(p => {
            p.style.display = 'block';
        })    
    }

    blocks.forEach(block => {
        block.addEventListener('mouseover', () => {
            showImg(block)
        });
        block.addEventListener('mouseout', () => {
            backImg(block)
        });
    })




}

export default hover;