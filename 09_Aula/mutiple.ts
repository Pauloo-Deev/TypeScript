const variableName: string = "Paulo";
const variableSurname: string = "Roberto";
const variableCourse: string = "TypeScript";
const variableIsStudent: boolean = true;
const variableAge: number = 19;

function showStudentInfo(): string {
	return `Student Name: ${variableName} ${variableSurname}, Course: ${variableCourse}, Age: ${variableAge}, Is Student: ${variableIsStudent}`;
}

export {
	variableName,
	variableSurname,
	variableCourse,
	variableIsStudent,
	variableAge,
	showStudentInfo,
};
