"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "livros",
      [
        {
          titulo: "Nunca Houve um Castelo",
          ano_lancamento: 2018,
          num_paginas: 256,
          descricao:
            '{"desc": "Rio de Janeiro, 1968. Estela, recém-casada, mancha com choro e rímel a fronha bordada de seu travesseiro. Uma semana antes ela estava na festa de Réveillon que marcaria de modo irremediável seu casamento. Estela sabia decorar uma casa, receber convidados e preparar banquetes, mas não estava preparada para o que aconteceu.Setenta anos antes, Johan Edward Jansson conhece Brigitta também em uma festa de Réveillon, em Estocolmo. Eles se casam, mudam-se para o Rio de Janeiro e constroem um castelo num lugar ermo e distante do centro, chamado Ipanema. Nunca houve um castelo explora como essas duas festas de Ano-Novo definem a trajetória dos Jansson ao longo de 110 anos. É uma saga familiar embebida em história, construída com doses de humor, ironia e sensibilidade. A riqueza e a complexidade dos múltiplos personagens criados por Batalha permitem tratar de temas que se entrelaçam e definiram a sociedade brasileira nas últimas décadas, como o sonho da ascensão social, os ideais femininos e feministas, a revolução sexual, a reação ao golpe militar, a divisão de classes, a deterioração do país."}',
          autor: 9,
          editora: 6,
        },
        {
          titulo: "Quarenta Dias",
          ano_lancamento: 2014,
          num_paginas: 248,
          descricao:
            '{"desc":"Quarenta dias no deserto, quarenta anos. É o que escreve Alice, a narradora de Quarenta dias, ao anotar num caderno escolar pautado seu mergulho gradual em dias de desespero, perdida numa periferia empobrecida que ela não conhece, à procura de um rapaz que ela não sabe ao certo se existe. Alice é uma professora aposentada, que mantinha uma vida pacata em João Pessoa até ser obrigada pela filha a deixar tudo para trás e se mudar para Porto Alegre. Mas uma reviravolta familiar a deixa abandonada à própria sorte, numa cidade que lhe é estranha, e impossibilitada de voltar ao antigo lar. Ao saber que Cícero Araújo, filho de uma conhecida da Paraíba, desapareceu em algum lugar dali, ela se lança numa busca frenética, que a levará às raias da insanidade. Eu não contava mais horas nem dias, escreve Alice. Guiavam-me o amanhecer e o entardecer, a chuva, o frio, o sol, a fome que se resolvia com qualquer coisa, não mais de dez reais por dia."}',
          autor: 10,
          editora: 8,
        },
        {
          titulo: "O Drible",
          ano_lancamento: 2013,
          num_paginas: 224,
          descricao:
            '{"desc":"Desenganado pelos médicos, um cronista esportivo de oitenta anos, testemunha dos anos dourados do futebol brasileiro, tenta se reaproximar do filho com quem brigou há um quarto de século. Toda semana, em pescarias dominicais, Murilo Filho preenche com saborosas histórias dos craques do passado o abismo que o separa de Neto. Revisor de livros de autoajuda, Neto leva uma vida medíocre colecionando quinquilharias dos anos 1970 e conquistando moças que trabalham no comércio perto de sua casa, no bairro carioca da Gávea. Desde os cinco anos, quando a mãe se suicidou, sente-se desprezado pelo pai famoso. Como nos romances anteriores de Sérgio Rodrigues, há um contraponto de vozes narrativas. Entremeado com o relato principal, transcorre o livro que Murilo escreve sobre um extraordinário jogador dos anos 1960 chamado Peralvo, dotado de poderes sobrenaturais e que teria sido “maior que Pelé” se não tivesse encontrado um fim trágico. A alternância entre o realismo da história de Neto, seco e desencantado, e o realismo mágico da história de Peralvo sinaliza a perícia de Sérgio Rodrigues, um dos narradores mais habilidosos de sua geração. O personagem do velho cronista é o veículo de uma celebração da história do futebol raras vezes empreendida pela literatura brasileira. Murilo Filho, porém, é mais do que isso. Com atraso, como se tomasse um drible, Neto entrevê nas frestas da narrativa do pai - e o leitor, um pouco antes dele - um sombrio segredo de família e um episódio tenebroso dos porões da ditadura militar."}',
          autor: 11,
          editora: 6,
        },
        {
          titulo: "Barba Ensopada de Sangue",
          ano_lancamento: 2012,
          num_paginas: 424,
          descricao:
            '{"desc":"Neste quarto romance de Daniel Galera, um professor de educação física busca refúgio em Garopaba, um pequeno balneário de Santa Catarina, após a morte do pai. O protagonista (cujo nome não conhecemos) se afasta da relação conturbada com os outros membros da família e mergulha em um isolamento geográfico e psicológico. Ao mesmo tempo, ele empreende a busca pela verdade no caso da morte do avô, o misterioso Gaudério, que teria sido assassinado décadas antes na mesma Garopaba, na época apenas uma vila de pescadores."}',
          autor: 8,
          editora: 6,
        },
        {
          titulo: "O Filho Eterno",
          ano_lancamento: 2007,
          num_paginas: 160,
          descricao:
            '{"desc":"O Filho Eterno, O Duplo do Pai: O Filho e a Ficção de Cristovão Tezza é um notável estudo de Victoria Saramago, uma das vozes mais promissoras da crítica e da literatura atuais. A jovem autora apresentou um estudo completo do conjunto da obra de um dos nomes definitivos da literatura brasileira contemporânea, cuja consagração crescente representa o justo reconhecimento de uma literatura que se distingue pela força da linguagem e pela originalidade da visão de mundo de seu autor."}',
          autor: 7,
          editora: 7,
        },
        {
          titulo: "Memórias póstumas de Brás Cubas",
          ano_lancamento: 1881,
          num_paginas: 480,
          descricao:
            '{"desc":"Brás Cubas está morto. Mas isso não o impede de relatar em seu livro os acontecimentos de sua existência e de sua grande ideia fixa: lançar o Emplasto Brás Cubas. Deus te livre, leitor, de uma ideia fixa. O medicamento anti-hipocondríaco torna-se o estopim de uma série de lembranças, reminiscências e digressões da vida do defunto autor."}',
          autor: 5,
          editora: 4,
        },
        {
          titulo: "Grande sertão Veredas",
          ano_lancamento: 1956,
          num_paginas: 560,
          descricao:
            '{"desc":"Publicado originalmente em 1956, Grande sertão: veredas, de João Guimarães Rosa, revolucionou o cânone brasileiro e segue despertando o interesse de renovadas gerações de leitores. Ao atribuir ao sertão mineiro sua dimensão universal, a obra é um mergulho profundo na alma humana, capaz de retratar o amor, o sofrimento, a força, a violência e a alegria."}',
          autor: 6,
          editora: 6,
        },
        {
          titulo: "Dom Casmurro",
          ano_lancamento: 1899,
          num_paginas: 208,
          descricao:
            '{"desc":"Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor e das desventuras que viveu com Capitu, uma das personagens mais enigmáticas e intrigantes da literatura brasileira. Nas páginas deste romance, encontra-se a versão de um homem perturbado pelo ciúme, que revela aos poucos sua psicologia complexa e enreda o leitor em sua narrativa ambígua acerca do acontecimento ou não do adultério da mulher com olhos de ressaca, uma das maiores polêmicas da literatura brasileira."}',
          autor: 5,
          editora: 5,
        },
        {
          titulo: "Macunaíma",
          ano_lancamento: 1928,
          num_paginas: 352,
          descricao:
            '{"desc":"Publicado pela primeira vez em 1928, Macunaíma o pinta um Brasil antropofágico de si mesmo, baseado em mitos de povos indígenas da região amazônica e com um extenso vocabulário regional.Em comemoração ao centenário da Semana de Arte Moderna de 1922, a Antofágica revisita essa obra-prima da literatura brasileira. Com ilustrações de Camille Sproesser e apresentação de Antonio Fagundes, a edição também conta com posfácios do músico e compositor Tom Zé, do historiador e doutor em Literatura Frederico Coelho (PUC-RJ), das antropólogas Virgínia Amaral e Aparecida Vilaça (Museu Nacional – UFRJ) e do premiado músico, escritor e diretor indígena Cristino Wapichana."}',
          autor: 4,
          editora: 4,
        },
        {
          titulo: "A hora da estrela",
          ano_lancamento: 1977,
          num_paginas: 88,
          descricao:
            '{"desc":"Último livro escrito por Clarice Lispector, A hora da estrela é também uma despedida. Lançada pouco antes de sua morte, em 1977, a obra conta os momentos de criação do escritor Rodrigo S. M. (a própria Clarice) narrando a história de Macabéa, uma alagoana órfã, virgem e solitária, criada por uma tia tirana, que a leva para o Rio de Janeiro, onde trabalha como datilógrafa. Em A hora da estrela, Clarice escreve sabendo que a morte está próxima e põe um pouco de si nas personagens Rodrigo e Macabéa."}',
          autor: 3,
          editora: 3,
        },
        {
          titulo: "O pequeno príncipe",
          ano_lancamento: 1943,
          num_paginas: 96,
          descricao:
            '{"desc":"Nesta clássica história que marcou gerações de leitores em todo o mundo, um piloto cai com seu avião no deserto do Saara e encontra um pequeno príncipe, que o leva a uma jornada filosófica e poética através de planetas que encerram a solidão humana. A edição conta com a clássica tradução do poeta imortal dom Marcos Barbosa, e é a versão mais consagrada da obra, publicada no Brasil desde 1952."}',
          autor: 2,
          editora: 2,
        },
        {
          titulo: "A cabana",
          ano_lancamento: 2008,
          num_paginas: 240,
          descricao:
            '{"desc":"Durante uma viagem de fim de semana, a filha mais nova de Mack Allen Phillips é raptada e evidências de que ela foi brutalmente assassinada são encontradas numa velha cabana. Após quatro anos vivendo numa tristeza profunda causada pela culpa e pela saudade da menina, Mack recebe um estranho bilhete, aparentemente escrito por Deus, convidando-o a voltar à cabana onde acontecera a tragédia. Apesar de desconfiado, ele vai ao local numa tarde de inverno e adentra passo a passo o cenário de seu mais terrível pesadelo. Mas o que ele encontra lá muda o seu destino para sempre. Em um mundo cruel e injusto, A cabana levanta um questionamento atemporal: se Deus é tão poderoso, por que não faz nada para amenizar nosso sofrimento?"}',
          autor: 1,
          editora: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("livros", null, {});
  },
};
