const typeWriterElement = document.querySelector("#typewriter");
const offerForm = document.querySelector("#offer-form")

const codeText = `def hire_yulia():
    skills = ['Python', 'JavaScript', 'REST APIs', 'Management'
    motivaton = "High"
    return "Great addition to your team!"`;

let i = 0;
const speed = 20;

function typeWriter() {
    if (i < codeText.length) {
        typeWriterElement.textContent += codeText.charAt(i);
        i++;
        setTimeout(typeWriter, speed)
    }
}

typeWriter()

offerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.querySelector("#recruiter_name").value.trim() || 'Recruiter';
    const email = document.querySelector("#recruiter_email").value.trim();
    const salary = Number(document.querySelector("#salary").value);

    const bodyText = `Hi Yulia,\n\nWe are impressed by your CV and would like to offer you a position.\n
    Proposed Salary: ${salary} NIS.\n\nPlease contact us!\n\nBest regards,\n${name}\n${email}`;
    const body = encodeURIComponent(bodyText);

    const myEmail = "yulia.lopaev@gmail.com";
    const subject = encodeURIComponent(`Job Offer for Yulia from ${name}`)

    window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
})