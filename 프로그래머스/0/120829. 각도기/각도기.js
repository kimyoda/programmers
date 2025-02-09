function solution(angle) {
  switch(true) {
    case (0 < angle && angle < 90) :
      return 1; // 예각
    case (angle === 90) :
      return 2; // 직각
    case (90 < angle && angle < 180) :
      return 3; // 둔각
    case (angle === 180) :
      return 4; // 평각
  }

}