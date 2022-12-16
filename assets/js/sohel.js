function darken_screen(yesno) {
    if (yesno == true) {
        document.querySelector('.screen-darken').classList.add('active');
    } else if (yesno == false) {
        document.querySelector('.screen-darken').classList.remove('active');
    }
}

function close_offcanvas() {
    darken_screen(false);
    document.querySelector('.mobile-offcanvas.show').classList.remove('show');
    document.body.classList.remove('offcanvas-active');
}

function show_offcanvas(offcanvas_id) {
    darken_screen(true);
    document.getElementById(offcanvas_id).classList.add('show');
    document.body.classList.add('offcanvas-active');
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('[data-trigger]').forEach(function(everyelement) {

        let offcanvas_id = everyelement.getAttribute('data-trigger');

        everyelement.addEventListener('click', function(e) {
            e.preventDefault();
            show_offcanvas(offcanvas_id);

        });
    });

    document.querySelectorAll('.btn-close').forEach(function(everybutton) {

        everybutton.addEventListener('click', function(e) {
            e.preventDefault();
            close_offcanvas();
        });
    });

    document.querySelector('.screen-darken').addEventListener('click', function(event) {
        close_offcanvas();
    });

});
let header = document.getElementById("header");
let header_sec = document.getElementById("main_box");
let header_height = header.clientHeight;
let scrollY = window.scrollY;
let css_mt_height = `margin-top: -${header_height}px;`;
// header_sec.style.cssText = css_mt_height;

function addClass_on_scroll() {
    header.classList.add("header_scrolled");
    header_sec.style.cssText = `margin-top: ${header_height}px;`;
}

function removeClass_on_scroll() {
    header.classList.remove("header_scrolled");
    header_sec.style.cssText = `margin-top: 0;`;




}

window.addEventListener('scroll', function() {
    if (window.scrollY > `${header_height}` * 1.5) {
        let scrollY = window.scrollY;
        addClass_on_scroll();
    } else {
        removeClass_on_scroll();
    }
});


//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("DOMContentLoaded", () => {
    counterAnim("#count1", 0, 32, 2000);
    counterAnim("#count2", 0, 15, 2000);
    counterAnim("#count3", 0, 19, 2000);
});