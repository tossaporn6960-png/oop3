export {};

enum Status {
    Retired = 1,
    Probation = 2
}

type ID = string | number;

type Student = {
    id: ID;
    name: string;
    status: Status;
    province: string;
};

const students: Student[] = [
    {
        id: "684245000",
        name: "ออม",
        status: Status.Retired,
        province: "กรุงเทพมหานคร"
    },
    {
        id: "684245007",
        name: "โอม",
        status: Status.Probation,
        province: "นครปฐม"
    }
];

function showStudent(student: Student): void {
console.log(`รหัสนักศึกษา: ${student.id}`);
console.log(`ชื่อ: ${student.name}`);
console.log(`สถานะ: ${student.status}`);
console.log(`จังหวัด: ${student.province}`);
}

for (const s of students) {
    showStudent(s);
}