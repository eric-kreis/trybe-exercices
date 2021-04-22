let angle1 = 90;
let angle2 = 45;
let angle3 = 30;

function verifyTriAngle(a1, a2, a3) {
  if (a1 + a2 + a3 == 180) {
    return console.log("They are angles of a triangle")
  } else {
    return console.log("They aren't angles of a triangle")
  }
}

verifyTriAngle(angle1, angle2, angle3)