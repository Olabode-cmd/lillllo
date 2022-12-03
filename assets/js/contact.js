// Contact Form
// document.querySelector('#contact-form').addEventListener('submit', (e) => {

//     e.preventDefault();

//     document.querySelector('.formdiv').style.display = "none";
//     document.querySelector('.subdiv').style.display = "inline-block";
// });

// Contact and Apply Form
document.querySelector('#apply-form, #contact-form').addEventListener('submit', (e) => {

    e.preventDefault();

    document.querySelector('.formdiv').style.display = "none";
    document.querySelector('.subdiv').style.display = "inline-block";
});

// Newsletter Form
document.querySelector('#newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();

    document.querySelector('p.hidden').style.display = "block"
})