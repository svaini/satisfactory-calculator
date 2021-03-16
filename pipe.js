import { Rational } from "./rational.js"

class Pipe {
  constructor(key,name,rate) {
    this.key = key
    this.name = name
    this.rate = rate
  }
  iconPath() {
    return "images/" + this.name + ".png"
  }
}

export function getPipes(data) {
  let pipes = new Map()
  for (let pipe of data.pipes) {
    pipes.set(pipe.key_name,new Pipe(
      pipe.key_name,
      pipe.name,
      Rational.from_float(pipe.rate).div(Rational.from_float(60))
    ))
  }
  return pipes
}
