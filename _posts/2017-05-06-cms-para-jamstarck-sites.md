---
layout: post
show-avatar: ''
social-share: true
title: CMS para JAMStack Sites
date: 2017-05-06 09:33
---
# Um CMS pronto para JAMstack 

## Projetos ricos em conteúdo construídos com JAMstack precisam de um CMS para que o conteúdo seja fácil de manter

[![Demo of colour picker addin](https://raw.githubusercontent.com/daattali/colourpicker/master/inst/img/plothelper-demo.png)](https://raw.githubusercontent.com/daattali/colourpicker/master/inst/img/plothelper-demo.png)

Mathias Biilmann introduziu recentemente o conceito de JAMstack: uma abordagem diferente e sem servidor para a construção de sites modernos e rápidos. JAM simplesmente representa JavaScript, APIs e marcação, ea idéia central é soltar os servidores completamente, hospedar o código em CDNs rápidos, confiáveis ​​e seguros e fazer navegadores interagir com as APIs que podem cuidar do componente "dinâmico". Por exemplo, não faz sentido colocar a lógica de faturamento complexa em seu backend quando você pode apenas usar a API da Stripe - o navegador é inteligente e poderoso o suficiente para fazer essas chamadas de API. Se você estiver disposto a aprender mais sobre o JAMstack, sugerimos que leia sua página inicial e veja esses slides. Enquanto isso, vamos dar uma olhada como lidar com o conteúdo em uma configuração JAMstack.
# Porque um CMS é necessário
 Quando você constrói um site que envolve um monte de conteúdo que é altamente variável em termos de estrutura e está sendo constantemente criado ou atualizado, é necessário dar aos criadores de conteúdo boas ferramentas para trabalhar com (edição de arquivos YAML não é Tão divertido como alguns podem pensar). Essas ferramentas são normalmente chamadas de sistemas de gerenciamento de conteúdo. 
# O que há de errado com os CMS existentes 
 A arquitetura de um CMS tradicional - digamos, Wordpress ou Drupal - é incompatível com a abordagem JAMstack. Esses CMS foram construídos com idéias muito diferentes sobre o gerenciamento de conteúdo, em primeiro lugar: baseados em servidor e banco de dados e altamente acoplados. Além disso, esses CMS tendem a produzir todo o seu código de front-end também, e isso não é algo que você quer ter. Em vez disso, você precisa de um instrumento simples para criar o conteúdo que pode ser posteriormente integrado ao JAMstack. 
# Conteúdo como um serviço (com uma API incluída) 
 Uma abordagem alternativa seria usar um CMS que forneça o conteúdo através de uma API. Os editores criar e editar o conteúdo de uma forma muito familiar, enquanto que como um desenvolvedor que você faria simplesmente uma API chamada cada vez que você precisa inserir conteúdo em suas páginas. Esta é uma win-win para todos, e esta abordagem permite construir totalmente web experiências personalizadas a partir do zero, não sendo limitado pelo CMS, como você escolhe sua pilha você mesmo. 
# Um JAMstack-ready CMS 
 Para citar o JAMstack autor, "o JAMstack usa linguagens de marcação como HTML, CSS e Markdown para formatar e estilo nosso conteúdo, cliente-lado Javascript para torná-lo interativo e atraente e APIs para adicionar persistência, Sincronização em tempo real, interações do mundo real, comentários, carrinhos de compras e assim por diante. " Esta filosofia funciona perfeitamente bem com o Contentful - uma plataforma de gerenciamento de conteúdo centrada na API e que oferece suporte a desenvolvedores. Ele vem com uma API para buscar o conteúdo e colocá-lo em seus sites e aplicativos. O conteúdo é, naturalmente, formatado em Markdown (olá, JAMstack), e há um aplicativo da web onde os editores criá-lo. Construímos uma infra-estrutura de entrega de conteúdo confiável por trás dele, e há muitos SDKs para todas as principais linguagens de programação, o que simplifica muito a construção de projetos com o Contentful. Dê uma olhada em nosso site para saber mais sobre o produto. E, como diz Mathias Biilmann: espalhe o JAM!
