const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
/* querySelector busca en la página el primer elemento que coincida con el selector */
/* nav-links es referencia a toda la lista*/
if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
/* if es condicional. Si (condición) ejecutar { }*/
/*Cuando en el menú toggle se hace click, se despliega la lista*/
/* Cuando le dás click al menpu, se abre y se vuelve verdadero, True. Por eso en el HTML aria expandeded es false*/
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Abrir menú" : "Cerrar menú"
        );
/*setAttribute cambia el valor de un atributo. String convierte a cadena de texto. !isOpen es lo contrario de isOpen, si es true pasa a false y viceversa*/
        navLinks.classList.toggle("is-open", !isOpen);
    });
}