const STUDENT_DATA = [
  { id: 1597632578549, name: "Jennifer Catarina Emanuelly da Mota" },
  { id: 1597632639984, name: "Vera Caroline Rebeca Jesus" },
  { id: 1597632663914, name: "Allana Alessandra Marina Rezende" },
  { id: 1597632860453, name: "Lorena Isabelle Sônia Baptista" },
  { id: 1597632894867, name: "Vicente Eduardo Cardoso" },
];

export const getStudents = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(STUDENT_DATA);
      } catch (error) {
        reject(`Cannot fetch data: ${error}`);
      }
    }, 200);
  });
};

export const getStudentById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const studentIndex = STUDENT_DATA.findIndex((m) => m.id === id);
        if (studentIndex !== -1) {
          const student = STUDENT_DATA[studentIndex];
          resolve(student);
        } else {
          reject(`Couldn't find student by id: ${id}`);
        }
      } catch (error) {
        reject(`Can not fetch data: ${error}`);
      }
    }, 200);
  });
};

export const saveStudent = (newStudent) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        STUDENT_DATA.push(newStudent);
        resolve(`Success! Student ${newStudent.name} created.`);
      } catch (error) {
        reject(`Cannot save data: ${error}`);
      }
    }, 200);
  });
};
