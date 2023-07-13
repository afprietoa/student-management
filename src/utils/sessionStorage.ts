// ----------------------------Student------------------------------------
export const addStudentToSessionStorage = (student:any) =>{
    sessionStorage.setItem('student',JSON.stringify(student));
};

export const removeStudentFromSessionStorage = () =>{
    sessionStorage.removeItem('student');
};

export const getStudentFromSessionStorage = () =>{
    const result = sessionStorage.getItem('student');
    const student = result ? JSON.parse(result) : null;
    return student;
}