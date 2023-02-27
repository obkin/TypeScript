class User {
    skills: string[];

    addSkill(skill: string);
    addSkill(skills: string[]);
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
    }
};



const user = new User();
user.addSkill('C++');
user.addSkill(['C++', 'Java', 'TS']);

