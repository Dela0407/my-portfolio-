const skills = [
  'Graphic Design',
  'Web Development',
  'Programming',
  'UI/UX Thinking',
  'Problem Solving',
  'Creative Tech',
]

export default function Skills(){
    return(
         <section id="skills" className="info-section">
          <div className="section-heading">
            <h3 className="eyebrow">My Skills</h3>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill} className="skill-pill">{skill}</span>
            ))}
          </div>
        </section>
    )
}