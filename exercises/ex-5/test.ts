class User1 {
    skills: string[];

    addSkill(skill: string);
    addSkill(skills: string[])
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
    }
};

const user1 = new User();
user1.addSkill('C++');

// ---------------------

function run(distance: string): string
function run(distance: number): number;
function run(distance: string | number): string | number {
    if (typeof distance === 'string') {
        return '';
    } else {
        return 1;
    }
}

