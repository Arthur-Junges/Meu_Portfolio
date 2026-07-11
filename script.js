const glow = document.getElementById('cursor')

let mouseX = 0, mouseY = 0
let glowX = 0, glowY = 0

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
})

function animate() {
    glowX += (mouseX - glowX) * 0.08
    glowY += (mouseY - glowY) * 0.08

    glow.style.left = glowX + 'px'
    glow.style.top = glowY + 'px'

    requestAnimationFrame(animate)
}

animate()