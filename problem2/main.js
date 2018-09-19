
function checkString(curString) {
  let stack = []
  let stackIndex = -1

  for(let stringIndex = 0; stringIndex < curString.length; ++stringIndex) {
    let curChar = curString[stringIndex]

    if(curChar == ')') {
      if(stackIndex < 0 || stack[stackIndex] != '(') {
        return false
      } else {
        // Success matching closing bracket
        --stackIndex
      }
    } else if( curChar == ']') {
      if(stackIndex < 0 || stack[stackIndex] != '[') {
        return false
      } else {
        // Success matching closing bracket
        --stackIndex
      }
    } else if( curChar == '}') {
      if(stackIndex < 0 || stack[stackIndex] != '{') {
        return false
      } else {
        // Success matching closing bracket
        --stackIndex
      }
    } else {
      // All openning s are handled here
      stack[++stackIndex] = curChar
    }
  }

  // Iterated the whole world, nothing should be left in the stack
  if(stackIndex == -1) {
    return true
  }

  return false
}

function braces(valuesArg) {
  for(let index = 0; index < valuesArg.length; ++index) {
    let curString = valuesArg[index]

    let resultCurString = checkString(curString)

    if(resultCurString) {
      console.log("YES")
    } else {
      console.log("NO")
    }
  }
}


// Test

//braces(["{}[]()", "{[}]}", "{[()]}", "{([)]}"])
//braces(["([]"])
