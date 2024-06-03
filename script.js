const idiom = {
    header: [
        {   id: "home",
            content_pt: "Inicio",
            content_eng: "Home"
        },{ id: "about",
            content_pt: "Sobre",
            content_eng: "About"
        },{ id: "my_projects",
            content_pt: "Meus Projetos",
            content_eng: "My Projects"
        },{ id: "emailme",
            content_pt: "Entre em contato",
            content_eng: "Contact Me"
        }
    ],
    body: [
        {
            query: ".banner .sec1 .hello",
            content_pt: "Olá, como vai?",
            content_eng: "Hello! What's up?"
        },{
            query: ".banner .sec1 .name_part1",
            content_pt: "Me chamo",
            content_eng: "It's"
        },{
            query: ".sec-presentation",
            content_pt: "Sou uma desenvolvedora de software",
            content_eng: "I'm a software development"
        },{
            query: ".text-presentation",
            content_pt: "Como estudante de graduação em Ciência da Computação, sou apaixonado pelo desenvolvimento de projetos. Encontro na programação um espaço para minha criatividade se expressar, buscando sempre soluções inovadoras e desafiando-me a superar obstáculos.",
            content_eng: "I'm a Computer Science Bachelor's student passionate about project development. I thrive in team environments and get lost in coding, where I can express creativity and find innovative solutions, constantly challenging myself with each new project."
        }
    ],
    buttons: [
        {
            query: ".hire_me",
            content_pt: "Me contrate",
            content_eng: "Hire me"

        }

    ]       
}

let language = document.querySelector("#language");

language.addEventListener("click", ()=>{
    if(language.innerText === "Portuguese"){
        language.innerText = "Inglês";
        idiom["header"].forEach(header => {
            document.getElementById(header.id).innerText = header.content_pt;
        });
        idiom["body"].forEach(body => {
            document.querySelector(body.query).innerText = body.content_pt;
        });
        idiom["buttons"].forEach(buttons => {
            document.querySelector(buttons.query).innerHTML = buttons.content_pt;
        });
        
      
    }else{
        language.innerText = "Portuguese";
        idiom["header"].forEach(header => {
            document.getElementById(header.id).innerText = header.content_eng;
        });
        idiom["body"].forEach(body => {
            document.querySelector(body.query).innerText = body.content_eng;
        });
        idiom["buttons"].forEach(buttons => {
            document.querySelector(buttons.query).innerHTML = buttons.content_eng;
        });
    }
});

