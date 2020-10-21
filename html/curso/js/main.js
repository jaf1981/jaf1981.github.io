var clases = [
    {
        video : "https://www.youtube.com/embed/bJXkFF9MkIU",
        contenido : "Clase 1. En esta primera clase haremos una introduccíón y comentaremos de qué se trata ser un programador full stack, veremos el temario que vamos a recorrer a lo largo del curso.",
        material: "https://docs.google.com/presentation/d/1EOeAkufZOIaCh_b3YV2sMbmASvHpnIGZ-NCuYT97UZ8/edit?usp=sharing",
        apoyo: "https://drive.google.com/file/d/1oTjeLLrU_2ynd-deI8_k15vrc_0DpkUl/view?usp=sharing"
    },
    {
        video : "https://www.youtube.com/embed/DmYwmcz_oI4",
        contenido : "Clase 2. HTML - Introducción a HTML5, elementos y tag's básicos.",
        material: "https://docs.google.com/presentation/d/1-uMgB7YloOzgm_VJVYffNraYtW7BLYfdJWU7Y25tSec/edit?usp=sharing",
        apoyo: "https://drive.google.com/file/d/1JAG4DtRk_-zc0_mBDYX_wEbPUCyKUQVX/view?usp=sharing"
    },
    {
        video : "https://www.youtube.com/embed/dh73a2W0YzE",
        contenido : "Clase 3. HTML - Más elementos, listas, tablas, audio y video.",
        material: "https://docs.google.com/presentation/d/1oSTWhFsitx4Wv7LP40GC2V7Axg_KTE205XFHLZLJ1w4/edit?usp=sharing"
    },        
    {
        video : "https://www.youtube.com/embed/eWe5k8HKFJo",
        contenido : "Clase 4. HTML - Un elemento fundamental, los "+`<strong>formularios</strong>`+".",
        material: "https://docs.google.com/presentation/d/12IIvzpRx58EmYxmXXQ513zaKL-D5VQGQnq9PN8vInRc/edit?usp=sharing"
    },
    {
        video : "https://www.youtube.com/embed/OgagNk6-aAQ",
        contenido : "Clase 5. CSS - Introducción a CSS, hojas de estilo en cascada.",
        material: "https://docs.google.com/presentation/d/1hLju2rsj_4a4Qz5EVbmoDFjZeoqxDz6Q_4rD7VbMPuw/edit?usp=sharing",
        apoyo: "https://drive.google.com/file/d/1yFqib70TipqymWcX44CO-P-JJcRNOzkJ/view?usp=sharing"
    },
    {
        video : "https://www.youtube.com/embed/aS8OykFF0X8",
        contenido : "Clase 6. HTML - Etiquetas Semánticas en HTML5 y algunos atributos importantes.",
        material: "https://docs.google.com/presentation/d/1wx-Us8NJjg4485cZNc1VA7Oc0APFmpdS06p77KozZd8/edit?usp=sharing"
    },      
    {
        video : "https://www.youtube.com/embed/NBVT-rTlLzU",
        contenido : "Clase 7. CSS - Especificidad, selectores, modelo de caja, margin, padding, border.",
        material: "https://docs.google.com/presentation/d/1VOSf2WXlxKXk6J5WXOqIc-o0-fSvS83LwqjnTHqlpI0/edit?usp=sharing"
    },          
    {
        video : "https://www.youtube.com/embed/ssrcN9CULio",
        contenido : "Clase 8. CSS - Medidas absolutas, relativas, posicionamiento, display, introducción a flex-box.",
        material: "https://docs.google.com/presentation/d/1VrVz3hkISe3d0NBL6VvIKYZ6svGAerZ-g4NPMAaMyec/edit?usp=sharing",
        apoyo: "https://drive.google.com/file/d/1CXG1eGVJfgXagxUsDL8LZJs7ny2uwz4j/view?usp=sharing"
    },      
    {
        video : "https://www.youtube.com/embed/Y1PFVNWlOFE",
        contenido : "Clase 9. CSS - Selectores, pseudoclases, pseudoelementos, selectores avanzados y combinados. Animaciones, transformaciones.",
        material: "https://docs.google.com/presentation/d/1h4ttmZp18x2_K5A2BHkxC22xd_OicL--31_a2NpJA4U/edit?usp=sharing"
    },      
    {
        video : "https://www.youtube.com/embed/NAVw8fbRywM",
        contenido : "Clase 10. CSS - Diseño web Responsivo vs Adaptativo, objetos anidados. CSS Grid.",
        material: "https://docs.google.com/presentation/d/18A31j4-f1JEJY46tmb0TuqysHxjlsPDsdCDeC_K4reQ/edit?usp=sharing"
    },      
    {
        video : "https://www.youtube.com/embed/RxX25yNgnYo",
        contenido : "Clase 11. CSS - Introducción a Bootstrap - ¿qué es un framework?.",
        material: "https://docs.google.com/presentation/d/1pzpSvzv4Z45ifeTFr7qEUtU8F0sYsL8pQnGTcZ-4MBA/edit?usp=sharing",
        apoyo: "https://drive.google.com/file/d/1LKGnRZFgB6NFWjc1Cp4a2R-i1PS4bnJi/view?usp=sharing"
    },      
    {
        video : "https://www.youtube.com/embed/A_hTfxkqmG8",
        contenido : "Clase 12. CSS - Bootstrap - Elementos principales.",
        material: "https://docs.google.com/presentation/d/1Rzufi4-4T9dEQsgHSFumWZ7y2S2h_fLF07194pNXkA0/edit?usp=sharing"
    },      
    {
        video : "https://www.youtube.com/embed/tH7RC_hmMi4",
        contenido : "Clase 13. Javascript - Introducción a la programación en Javascript. Variables, Tipos de Datos.",
        material: "https://docs.google.com/presentation/d/1HCKAh_R_YNB0kH9V497tieovLLl9cY6nYuXOa_Yw5dI/edit?usp=sharing",
        apoyo: "https://drive.google.com/file/d/1Al9lt2u6e8OORmTqf1OyZgRYEyc4XcXT/view?usp=sharing"
    },      
    {
        video : "https://www.youtube.com/embed/-PSSue7BT8Y",
        contenido : "Clase 14. Javascript - Operadores y Estructuras de Control principales.",
        material: "https://docs.google.com/presentation/d/1MIflkZamU2rZ1trw5E5IRAtc9_F7JsqxTo_er9nsVpQ/edit?usp=sharing",
        apoyo: "https://drive.google.com/file/d/1UCBJuO0fmEZWD4ndPJDB_B5Yz24c5q7B/view?usp=sharing"
    },              
    {
        video : "https://www.youtube.com/embed/53YkQebUAAg",
        contenido : "Clase 15. Javascript - Funciones, Arrow Functions, Scope.",
        material: "https://docs.google.com/presentation/d/1-RnZ2Ss5QdsEj1BcIZIFuI7ZVT5DMymX4Ie1rwjDU7g/edit?usp=sharing",
    },
    {
        video : "https://www.youtube.com/embed/HEq21dLDmWU",
        contenido : "Clase 16. Javascript - Array, Strings.",
        material: "https://docs.google.com/presentation/d/1weqqujWt28oWcOUmP9JL7xe8TZA0YGp0_QiO2x0VvWQ/edit?usp=sharing",
    },
    {
        video : "https://www.youtube.com/embed/lTFowA0S3LY",
        contenido : "Clase 17. Javascript - Array, Strings, manipulación del DOM.",
        material: "https://docs.google.com/presentation/d/1Xf05h9CVGcjZKIivRk2csmuMBeaIdDwnE5bhbQoNx8w/edit?usp=sharing",
    },
    {
        video : "https://www.youtube.com/embed/tMuRd9SBKW0",
        contenido : "Clase 18. Javascript - Manipulación del DOM, Objetos, For in, For of.",
        material: "https://docs.google.com/presentation/d/1L3zMxBBnlzPO_BXGzDbw9EKXXOlZyf4hq5yWrk8tk7I/edit?usp=sharing",
    },
    {
        video : "https://www.youtube.com/embed/sAG4ljmMueA",
        contenido : "Clase 19 y 20. Javascript - Vue Js - Parte 1.",
        material: "https://docs.google.com/presentation/d/1815rTgkiAw2VWRHtGlWWunzFXaPkVEWNliK-DJ7y_-U/edit?usp=sharing",
    },                  
]; 

var masvideos = [
    {
        video: "https://www.youtube.com/embed/-H_Sra2oVr0",
        contenido: "Video 1. Algoritmos del curso CS50 - Harvard."
    },
    {
        video: "https://www.youtube.com/embed/zOjov-2OZ0E",
        contenido: "Video 2. Intro to Programming - freecodecamp.org."
    },
]; 


function elegir_clase2() {
    var data2 = parseInt(document.getElementById("dropdownMenuButton").value);
    document.getElementById("nroclase").src = clases[data2 - 1].video;
    document.getElementById("detalle_clase").innerHTML = clases[data2 - 1].contenido;
    document.getElementById("link_material").href = clases[data2 - 1].material;
    document.getElementById("link_material").innerText = "Link al material de lectura. #Clase "+ data2 + ".";
    if (clases[data2 - 1].hasOwnProperty('apoyo') == true) {
        document.getElementById('link_biblio').href = clases[data2 - 1].apoyo;
        document.getElementById('link_biblio').className = "d-block my-5";
    } else {
        document.getElementById('link_biblio').className = "d-none";
    }
}

function elegir_masvideo() {
    var data2 = parseInt(document.getElementById("dropdownmasvideos").value);
    document.getElementById("masvideo").src = masvideos[data2 - 1].video;
    document.getElementById("detalle_masvideo").innerHTML = masvideos[data2 - 1].contenido;
}
