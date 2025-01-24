function solution(array, height) {
  // height보다 큰 학생들의 필터링
  const tallerStudents = array.filter(el => el > height);
    
  // 필터링된 학생들의 수
  const studentCount = tallerStudents.length;
    
  return studentCount;
}

