import './style.css'

const diskInput = document.getElementById("diskInput") as HTMLInputElement
const speedInput = document.getElementById("speedInput") as HTMLInputElement
const solveButton = document.getElementById("solveButton") as HTMLButtonElement
const resetButton = document.getElementById("resetButton") as HTMLButtonElement
const A = document.querySelector(".A") as HTMLDivElement
const B = document.querySelector(".B") as HTMLDivElement
const C = document.querySelector(".C") as HTMLDivElement

function randomColor() {
  return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
}

function clearRods() {
  A.innerHTML = "<div class='stand'>"
  B.innerHTML = "<div class='stand'>"
  C.innerHTML = "<div class='stand'>"
}

function loadDisks() {
  clearRods()
  const blocks: HTMLDivElement[] = []
  for (let i = 0; i < parseInt(diskInput.value); i++) {
    const block = document.createElement("div")
    block.classList.add("block")
    block.style.width = `${100 - i * 5}%`

    const [r, g, b] = randomColor()
    block.style.backgroundColor = `rgb(${r},${g},${b})`

    blocks.push(block)
  }

  for (let block of blocks.reverse()) A.appendChild(block)
}

let moves = 0;
function moveDisk(from: HTMLDivElement, to: HTMLDivElement) {
  moves++;
  setTimeout(() => {
    const disk = from.children.item(1)!
    from.removeChild(disk)
    to.insertBefore(disk, to.children.item(1))
    moves = 0
  }, parseInt(speedInput.value) * moves)
}

function solve(disks: number, start: HTMLDivElement, end: HTMLDivElement, aux: HTMLDivElement) {
  diskInput.disabled = true
  speedInput.disabled = true
  solveButton.disabled = true
  resetButton.disabled = true
  if (disks == 0) {
    diskInput.disabled = false
    speedInput.disabled = false
    solveButton.disabled = false
    resetButton.disabled = false
    return
  }
  solve(disks - 1, start, aux, end)
  moveDisk(start, end)
  solve(disks - 1, aux, end, start)

}
window.onload = loadDisks
diskInput.onchange = loadDisks
resetButton.onclick = loadDisks
solveButton.onclick = () => solve(parseInt(diskInput.value), A, C, B)