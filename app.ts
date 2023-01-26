function logId(id: string | number): void {
    console.log(id);
}

const a = logId(1);

// console.log(a * 2);

//   

function multiply(f: number, s?: number): number | void {
    if (!s) {
        return f * f;
    }
}

//

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return 1;
}

const b = f2();

// console.log(b + 1);

//

const skills = ['Dev', 'DevOps'];

const user = {
    skills: ['s']
}

skills.forEach((skill) => user.skills.push(skill));

