---
title: Organização com Jekyll
date: 2017-04-05 17:56:00 -03:00
---

### Em todo projeto Jekyll, temos Pastas que mantém a organização das funcionalidades do sistema. Explicarei aqui um pouco do funcionamento de cada Pasta.


> _CONFIG.YML

Se você está iniciando um novo projeto ou clonando um existente, este é geralmente o primeiro arquivo em que você deve alterar. Este arquivo hospeda configurações globais para todo o seu site no formato YAML. Essas configurações são padrões usados pelo Jekyll.

> _LAYOUTS

Este diretório é onde você vai colocar seus modelos. Os modelos são o HTML que envolve posts(blog) e outros tipos de conteúdo, como páginas.

> _INCLUDES

Esta pasta é onde você vai colocar bits reutilizáveis de código para seus modelos.

> _POSTS

Esta pasta contém todas as suas postagens em um formato de sua escolha. Como **não há banco de dados**, cada post é um arquivo separado formatado da seguinte forma: **ANO-MÊS-DIA-este-e-meu-titulo.MARKUP** 

> _PLUGINS

Você pode adicionar isto caso queira adicionar plugins mais tarde.

> INDEX.HTML 

Esta é a página inicial do seu blog/site. Este arquivo tem uma seção YAML Front Matter, ele será transformado pelo Jekyll. O mesmo acontecerá com qualquer outro arquivo .html, .markdown, .md ou .textile no diretório raiz do seu site ou diretórios não listados acima. 

> _SITE

Este é o seu site estático gerado. **Toda vez** que seu site é criado ou gerado, esta pasta é "limpa" e **reconstruída **a partir do zero. Portanto, **nunca **toque nisso e apenas saiba que ele existe apenas para hospedar a saída do seu site estático. 

> _DATA 

Aqui você hospeda coisas como dados reutilizáveis, variáveis ou mais. Faremos uso extensivo desta pasta. Os dados podem estar em **YAML**, **JSON **ou um **CSV**. 

> _SASS

O tema padrão do Jekyll não usa o Bootstrap, mas você pode compará-lo ao tema Scotch sobre como integrar o Bootstrap 3 com ele. 

> QUAISQUER OUTROS ARQUIVOS / PASTAS

Todos os outros arquivos e pastas são copiados automaticamente para o **site gerado estático**. Portanto, se você criar uma pasta chamada *img*, ela será copiada para o site estático.