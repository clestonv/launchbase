<h1 align="center">
  Desafio 2-3: Página de cursos e iframe
</h1>

<h3 align="center">
    <img src="assets/desafio-2-3.gif">
</h3>


<p align="center">
  <a href="#clipboard-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-tools">Tools</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>
</p>

## :clipboard: Sobre o Desafio

Essa página deve conter um grid onde devem ser mostrados os 3 principais cursos da Rocketseat: Starter, Launchbase e GoStack. Ao clicar em um dos cursos, deve ser aberta uma modal onde um iframe irá carregar as informações do curso selecionado.

### Informações da página

- Título da página
- Grid com 3 colunas e 1 linha onde serão apresentados os cards dos cursos

## Informações do card

- Logo do curso ([Starter](https://storage.googleapis.com/golden-wind/bootcamp-launchbase/assets/starter.svg), [Launchbase](https://storage.googleapis.com/golden-wind/bootcamp-launchbase/assets/launchbase.svg) e [GoStack](https://storage.googleapis.com/golden-wind/bootcamp-launchbase/assets/gostack.svg))
- Título do curso
- Quantidade de módulos dos cursos
- Informação se o curso é gratuito ou pago

## Modal

O modal deve conter um iframe que busca a página do curso (dica: basta adicionar `starter`, `launchbase` ou `gostack` ao final de `https://rocketseat.com.br/`). Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal (dica: utilize a mesma lógica implementada para fechar o `modalOverlay`, mas trabalhe com a classe `modal` e utilize o método `contains` do `classList` para verificar se o elemento está ou não com a classe `maximize`).

### Estilização

Você tem liberdade para escolher a estilização que preferir para esse desafio, mas alguns pontos são obrigatórios:

- Deve ser utilizado o grid para organizar os cursos
- O modal nunca deve abrir maximizado

## :rocket: Tecnologias

- [Html](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript)


## :hammer: Tools
- [Visual Studio Code](https://code.visualstudio.com)
- [Mozilla Developer Edition](https://www.mozilla.org/pt-BR/firefox/developer/)
- [Hyper Terminal](https://hyper.is/)
- [Git](https://git-scm.com/)



Feito por Cleberson Osorio 🌊

[Desafio Original](https://github.com/Rocketseat/bootcamp-launchbase-desafios-02/edit/master/desafios/02-3-pagina-cursos-e-iframe.md)