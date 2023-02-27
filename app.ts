// ts-05-41

class User1 {
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

const user1 = new User();
user1.addSkill('C++');
user1.addSkill(['C++', 'Java', 'TS']);

// ------------------


function run1(distance: number): number;
function run1(distance: string): string;
function run1(distance: number | string): number | string {
    if (typeof distance === 'number') {
        return 1;
    } else {
        return 'str';
    }
}

run(1);
