const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] },
];

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  for(let tecnologia of usuario.tecnologias) {
    const encontreiTecnoloagiaCSS =  tecnologia === 'CSS'
    if (encontreiTecnoloagiaCSS) {
      return true;
    }
  }
  // SE encontrar, retorne true da função, caso contrário retorne false
  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  } else {
    console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`);
  }
}