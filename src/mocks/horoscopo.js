import logo from '../../assets/logo2.png';

import aries from '../../assets/signos/aries.png';
import touro from '../../assets/signos/touro.png';
import gemeos from '../../assets/signos/gemeos.png';
import cancer from '../../assets/signos/cancer.png';
import leao from '../../assets/signos/leao.png';
import virgem from '../../assets/signos/virgem.png';
import libra from '../../assets/signos/libra.png';
import escorpiao from '../../assets/signos/escorpiao.png';
import sagitario from '../../assets/signos/sagitario.png';
import capricornio from '../../assets/signos/capricornio.png';
import aquario from '../../assets/signos/aquario.png';
import peixes from '../../assets/signos/peixes.png';




const horoscopo = {
  topo: {
    titulo: "Horóscopo",
  },
  detalhes: {
    nome: "Signos",
    logoApp: logo,
    nomeApp: "Astro Signos!",
    descricao: "O QUE SÃO SIGNOS? O que se conhece como signo é na verdade o signo solar, que é a posição que o Sol ocupa em relação à Terra no momento do nascimento de cada pessoa. O signo solar sinaliza características da sua personalidade, mas você tem outros signos marcantes, como o ascendente ou a lua, por exemplo. Lendo a posição de todos os signos no seu Mapa Astral você pode mergulhar num caminho de autoconhecimento e entender quem de fato você é, como se relaciona e muito mais.",
    botao: "Descobrir o meu signo",
  },
  itens: {
    titulo: "Signos do Zodíaco",
    lista: [
      {
        nome: "Áries",
        imagem: aries,
      },
      {
        nome: "Touro",
        imagem: touro,
      },
      {
        nome: "Gêmeos",
        imagem: gemeos,
      },
      {
        nome: "Câncer",
        imagem: cancer,
      },
      {
        nome: "Leão",
        imagem: leao,
      },
      {
        nome: "Virgem",
        imagem: virgem,
      },
      {
        nome: "Libra",
        imagem: libra,
      },
      {
        nome: "Escorpião",
        imagem: escorpiao,
      },
      {
        nome: "Sagitário",
        imagem: sagitario,
      },
      {
        nome: "Capricórnio",
        imagem: capricornio,
      },
      {
        nome: "Aquário",
        imagem: aquario,
      },
      {
        nome: "Peixes",
        imagem: peixes,
      }
    ]
  }
}

export default horoscopo;