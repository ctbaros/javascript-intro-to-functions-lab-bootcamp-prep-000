function shout(string) {
  return string.toUpperCase()
}
shout("hello"); 

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

function sayHitograndma(string) {
  if (string.toLowerCase() === "I cant hear you!")
  return "I cant hear you!" }