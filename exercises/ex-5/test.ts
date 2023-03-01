// ts-05-41 - repeat

class User1 {
    skills: string[];

    addSkill(skill: string): void;
    addSkill(skills: string[]): void;
    addSkill(skillOrSkills: string | string[]): void {
        if (typeof skillOrSkills === 'string') {
            this.skills.push(skillOrSkills);
        } else {
            this.skills.concat(skillOrSkills);
        }
    }
}

const newUser1 = new User1();
newUser1.addSkill(['C++', 'TS']);

// ---------------------


function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): number | string {
    if (typeof distance === 'string') {
        return 'str';
    } else {
        return 1;
    }
}

run(2);

