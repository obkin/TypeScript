const skills: string[] = ['Dev', 'DevOps', 'Testing'];

for (const skill of skills) {
    console.log(skill.toLowerCase());
}

skills
    .filter((skill: string) => skill !== 'DevOps')
    .map(skill => skill + '! ');
