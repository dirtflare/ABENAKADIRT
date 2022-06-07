// const { createClient } = require("microcms-js-sdk"); // CommonJS
// import { createClient } from 'microcms-js-sdk'; //ES6

// // Initialize Client SDK.
// const client = createClient({
//   serviceDomain: "abedirt", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
//     apiKey: "017f993ea23e43d89a5d5fbe35e9b0c05ca5",
// });

<script>
const { createClient } = microcms;

// Initialize Client SDK.
const client = createClient({
  serviceDomain: 'abedirt', // service-domain は XXXX.microcms.io の XXXX 部分
    apiKey: '017f993ea23e43d89a5d5fbe35e9b0c05ca5',
});
</script>

client
.get({
    endpoint: 'endpoint',
    queries: { limit: 20, filters: 'createdAt[greater_than]2021' },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

client
.get({
    endpoint: 'endpoint',
    contentId: 'contentId',
    queries: { fields: 'title,publishedAt' },
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));



/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};
