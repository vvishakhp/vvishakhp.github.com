import './printable.css'
import data from './data/data.json'

const root = document.getElementById('print-root')

if (!root) {
  throw new Error('Missing #print-root container in printable.html')
}

const basics = data.basics

const summaryPoints = [
  `${basics.yearsOfExperience} of professional software engineering experience.`,
  ...data.about.paragraphs.slice(0, 3),
]

const contactItems = [
  { icon: '☎', value: basics.phone },
  { icon: '@', value: basics.email },
  { icon: '⌂', value: basics.location },
]

const technicalGroups = [
  [...data.technicalSkills.backend].join(' / '),
  [...data.technicalSkills.databases].join(' / '),
  [...data.technicalSkills.frontend].join(' / '),
  [...data.technicalSkills.devops].join(' / '),
]

const summaryHtml = summaryPoints.map((point) => `<li>${point}</li>`).join('')
const contactHtml = contactItems.map((item) => `<li><span class="font-bold text-lg">${item.icon}</span><span>${item.value}</span></li>`).join('')
const technicalHtml = technicalGroups.map((item) => `<li>${item}</li>`).join('')
const coreSkillsHtml = data.coreSkills.map((skill) => `<li>${skill}</li>`).join('')
const educationHtml = data.education
  .map(
    (item) => `
      <article class="education-item">
        <p class="education-degree">${item.degree}${item.notes ? ` <span>(${item.notes})</span>` : ''}</p>
        <p class="education-school">${item.institution}</p>
        <p class="education-years">${item.yearRange}</p>
      </article>
    `
  )
  .join('')

const experienceHtml = data.experience
  .map(
    (item) => `
      <article class="experience-item">
        <div class="experience-head">
          <p class="experience-title">${item.company}</p>
          <p class="experience-company">${item.duration}</p>
        </div>
        <p class="experience-role">${item.title}</p>
        <ul>${item.bullets.map((bullet) => `<li>${bullet}</li>`).join('')}</ul>
      </article>
    `
  )
  .join('')

const toolIconsHtml = data.skills
  .slice(0, 12)
  .map((skill) => `<img src="${skill.icon}" alt="${skill.name} icon" title="${skill.name}" />`)
  .join('')

root.innerHTML = `
  <section class="resume">
    <section class="top-layout">
      <aside class="left-sidebar">
        <div class="profile-block">
          <img class="profile-image" src="${basics.profileImage}" alt="Profile picture of ${basics.name}" />
          <h1 class="name">${basics.name.toUpperCase()}</h1>
          <p class="role">${basics.role.toUpperCase()}</p>
        </div>

        <section class="left-section">
          <h2>Contact</h2>
          <ul class="left-list left-list-contact">${contactHtml}</ul>
        </section>

        <section class="left-section">
          <h2>About Me</h2>
          <p class="left-paragraph">${data.about.paragraphs[0] ?? ''}</p>
        </section>

        <section class="left-section">
          <h2>Technical Skills</h2>
          <ul class="left-list">${technicalHtml}</ul>
        </section>

        <section class="left-section">
          <h2>Personal Info</h2>
          <ul class="left-list">
            <li>DOB - ${data.personalInfo.dob}</li>
            <li>Languages: ${data.personalInfo.languages.join(', ')}</li>
          </ul>
        </section>
      </aside>

      <section class="right-main">
        <section class="section">
          <h2>Profile Summary</h2>
          <ul>${summaryHtml}</ul>
        </section>

        <section class="section">
          <h2>Experience</h2>
          ${experienceHtml}
        </section>
      </section>
    </section>

    <section class="bottom-layout">
      <section class="bottom-section">
        <h2>Skills</h2>
        <ul>${coreSkillsHtml}</ul>
      </section>

      <section class="bottom-section">
        <h2>Education</h2>
        ${educationHtml}
      </section>

      <section class="bottom-section">
        <h2>Tools / Technologies</h2>
        <div class="tools-grid">${toolIconsHtml}</div>
      </section>
    </section>
  </section>
`
