function StudentCard() {
    const name = "Charlie Jack";
    const age = 24;
    const groupNumber = "FS-65-35";
    const technology = "React";
    const description = "A talented student";
    const skills = ["HTML", "CSS", "JavaScript", "TypeScript"];

    return (
        <div className="student-card">
            <h1 className="card-title">Student profile</h1>

            <h2 className="student-name">{name}</h2>

            <div className="info-block">
                <p><strong>Age:</strong> {age}</p>
                <p><strong>Group:</strong> {groupNumber}</p>
                <p><strong>Technology:</strong> {technology}</p>
            </div>

            <div className="about-block">
                <p className="subtitle">About me:</p>
                <p className="description-text">{description}</p>
            </div>

            <div className="skills-block">
                <p className="subtitle">Skills:</p>
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default StudentCard;