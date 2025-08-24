export function checkHeading(str){
    return /^(\*)(\*)(.*)\*$/.test(str)
  }
export function replaceStarHeading(str){
    return str.replace(/^(\*)(\*)|(\*)$/g,'')
  }