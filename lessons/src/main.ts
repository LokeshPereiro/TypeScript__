//Utility Types

//Partial

interface Assignament {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignament,
  propsToUpdate: Partial<Assignament>
): Assignament => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignament = {
  studentId: "compis123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignament = updateAssignment(assign1, { grade: 95 });

//Required and readonly

const recordAssignment = (assign: Required<Assignament>): Assignament => {
  //send to database, etc
  return assign;
};

const assignVerified: Readonly<Assignament> = {
  ...assignGraded,
  verified: true,
};

// assignVerified.grade = 80;
recordAssignment({ ...assignGraded, verified: true });

//Record
const hexColor: Record<string, string> = {
  red: "ff0000",
  green: "00fff00",
  blue: "0000ff",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 75, assign2: 83 },
};

//Pick and Omit
type AssignResult = Pick<Assignament, "studentId" | "grade">;
const score: AssignResult = {
  studentId: "k1234",
  grade: 85,
};

type AssignPreview = Omit<Assignament, "grade" | "verified">;

const preview: AssignPreview = {
  studentId: "k1234",
  title: "Final Project",
};

//Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Exclude<LetterGrades, "A" | "B">;

//NonNullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;

type readonly = NonNullable<AllPossibleGrades>;

// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};
type NewAssign = ReturnType<typeof createNewAssign>;

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

type AssignParams = Parameters<typeof createNewAssign>;

const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

//Awaited - helps us with the ReturnType of a Promise
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
fetchUsers().then((users) => console.log(users));
