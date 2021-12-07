import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import more from './modules/more';
import calc from './modules/calc';
import change from './modules/changeTabs';
import hover from './modules/hoverChange';
import accordeon from './modules/accordeon';
import burger from './modules/burger';
import scrolling from './modules/scrolling';
import drag from './modules/drag';


window.addEventListener('DOMContentLoaded', () => {
    "use strict"
    console.log('тест');
    modals();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    more('.button-styles', '.styles-2');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    change();
    hover('.sizes-block');
    accordeon('.accordion-heading');
    burger('.burger', '.burger-menu');
    scrolling();
    drag();
});