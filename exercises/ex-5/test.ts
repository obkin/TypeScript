// ts-05-41

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

// --------Function overload----------


function run(distance: number): number;
function run(distance: string): string;
function run(distance: number | string): number | string {
    if (typeof distance === 'number') {
        return 1;
    } else {
        return 'str';
    }
}

run(1);

