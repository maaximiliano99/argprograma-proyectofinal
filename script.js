const jobs = document.querySelectorAll('.job');
const studies = document.querySelectorAll('.study');

jobs.forEach(job => {
    job.addEventListener('mouseover', () => {
        const extraInfo = job.querySelector('.extra-info');
        extraInfo.style.display = 'block';
    });
    job.addEventListener('mouseout', () => {
        const extraInfo = job.querySelector('.extra-info');
        extraInfo.style.display = 'none';
    });
});

studies.forEach(study => {
    study.addEventListener('mouseover', () => {
        const extraInfo = study.querySelector('.extra-info');
        extraInfo.style.display = 'block';
    });
    study.addEventListener('mouseout', () => {
        const extraInfo = study.querySelector('.extra-info');
        extraInfo.style.display = 'none';
    });
});