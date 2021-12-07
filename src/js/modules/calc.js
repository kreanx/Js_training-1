const calc = (size, material, optional, promo, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionalBlock = document.querySelector(optional),
        promoBlock = document.querySelector(promo),
        resultBlock = document.querySelector(result);

    let sum = 0;

    const calculation = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionalBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, задайте размер и материал!'
        }
        else if (promoBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        }
        else {
            resultBlock.textContent = sum;
        }
    }

    sizeBlock.addEventListener('change', calculation);
    materialBlock.addEventListener('change', calculation);
    optionalBlock.addEventListener('change', calculation);
    promoBlock.addEventListener('input', calculation);
}



export default calc;