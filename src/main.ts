import "./style.css"
import Canvas from "./canvas"
import { IMAGE_PATHS } from "./gallery"

class App {
  canvas: Canvas

  constructor() {
    this.canvas = new Canvas()

    this.render()
    this.mountImageDebug()
  }

  render() {
    this.canvas.render()
    requestAnimationFrame(this.render.bind(this))
  }

  mountImageDebug() {
    const toggle = document.createElement("button")
    toggle.id = "image-debug-toggle"
    toggle.textContent = "Images"
    document.body.appendChild(toggle)

    const overlay = document.createElement("div")
    overlay.id = "image-debug-overlay"
    const grid = document.createElement("div")
    grid.className = "image-debug-grid"
    overlay.appendChild(grid)
    document.body.appendChild(overlay)

    const bust = `?_=${Date.now()}`

    IMAGE_PATHS.forEach((src) => {
      const item = document.createElement("div")
      item.className = "image-debug-item"
      const img = document.createElement("img")
      img.src = `${src}${bust}`
      img.loading = "lazy"
      const label = document.createElement("div")
      label.className = "label"
      label.textContent = src.replace("/frames/", "")
      item.appendChild(img)
      item.appendChild(label)
      grid.appendChild(item)
    })

    let visible = false
    const setVisible = (v: boolean) => {
      visible = v
      overlay.style.display = visible ? "block" : "none"
    }
    toggle.addEventListener("click", () => setVisible(!visible))
  }
}

export default new App()
