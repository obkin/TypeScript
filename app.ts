function logId(id: string | number): void {
    console.log(id);
}

const a = logId(5);

console.log(a * 2);

// ----------------

function multiply(f: number, s?: number): number | void {
    if (!s) {
        return f * f;
    }
}

// ----------------

type voidFunc = () => void;

const f1: voidFunc = () => {
    return undefined;
};

const f2: voidFunc = () => {
    return undefined;
};

console.log(f2() + 2);

// ----------------

const skills = ['Dev', 'DevOps'];

const user = {
    s: ['PS']
}

skills.forEach(skill => user.s.push(skill));

