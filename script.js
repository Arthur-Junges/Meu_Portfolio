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

const barras = document.querySelectorAll(".progresso")

window.addEventListener("load", () => {
    barras.forEach(barra => {
        const porcentagem = Number(barra.dataset.progresso)
        const nivel = barra.closest(".linguagens").querySelector(".nivel")
        barra.style.width = barra.dataset.progresso + "%"


        if (porcentagem >= 75) {
            barra.style.background = "#22d3ee";
            nivel.textContent = "Avançado";
            nivel.style.color = "#22d3ee";

        } else if (porcentagem >= 50) {
            barra.style.background = "#59d664";
            nivel.textContent = "Intermediário";
            nivel.style.color = "#59d664";

        } else {
            barra.style.background = "#dc70f4";
            nivel.textContent = "Iniciante";
            nivel.style.color = "#dc70f4";
        }
        
        const por = barra.closest(".linguagens").querySelector(".por")
        por.textContent = `${porcentagem}% / 100%`
        
    })    
})


   