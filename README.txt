# Guia para editar o cardápio Edwiges

Este site usa apenas três arquivos principais. Você pode abrir a pasta inteira no Visual Studio Code e clicar duas vezes em `index.html` para vê-lo no navegador.

## Onde editar cada coisa

`index.html`
- É o conteúdo visível do site: títulos, categorias, pratos, preços, descrições, fotos e botões de contato.
- Cada grupo começa com um comentário, por exemplo `<!-- PIZZAS À LA CARTE -->`. Use esses comentários para encontrar a área desejada.
- Cada produto fica entre `<article class="drink-card">` e `</article>`. Para criar outro produto, copie um bloco inteiro e altere os textos e a foto.

`style.css`
- É a aparência: cores, tamanhos, margens, caixas, animações e versão para celular.
- No início estão as cores principais. Você pode mudar os valores depois de `--gold`, `--red` e `--text` para alterar o visual geral.
- Não é necessário editar este arquivo para trocar nome, preço ou foto de um produto.

`script.js`
- É o comportamento: animação de entrada dos cartões, ampliação das imagens e botão de tema claro/escuro.
- Em geral, não precisa ser alterado ao cadastrar itens no menu.

## Trocar o nome e o subtítulo da página

No arquivo `index.html`, procure esta área:

```html
<h1 class="brand-name">EDWIGES</h1>
<div class="brand-subtitle">PIZZA E BISTRÔ</div>
```

Troque somente o texto entre `>` e `<`. O tamanho do nome é controlado no `style.css`, na seção `.hero h1.brand-name`.

## Cadastrar um produto em uma categoria

1. Encontre a categoria desejada pelo comentário, por exemplo `<!-- PIZZAS À LA CARTE -->`.
2. Substitua a frase “Em breve...” por uma lista de produtos, ou copie um cartão existente.
3. Troque nome, preço, descrição, ingredientes e caminho da imagem.

Modelo para copiar:

```html
<article class="drink-card">
  <div class="drink-photo">
    <img src="images/nome-da-foto.jpg" alt="Nome do produto">
  </div>
  <div class="drink-info">
    <div class="drink-top">
      <h3>NOME DO PRODUTO</h3>
      <strong>R$ 00,00</strong>
    </div>
    <p class="description">Uma descrição curta.</p>
    <div class="ingredients">Ingredientes ou observações</div>
  </div>
</article>
```

## Colocar uma foto

1. Salve a imagem dentro da pasta `images`.
2. No produto, altere o trecho `src="images/nome-da-foto.jpg"` para o nome exato do arquivo.
3. Atualize também o `alt="..."` com o nome do produto. Esse texto ajuda leitores de tela e aparece se a imagem não carregar.

## Alterar os botões de contato

No final do `index.html`, há uma área marcada como `<!-- CONTATO -->`.

- WhatsApp: substitua `5500000000000` por código do país + DDD + número, sem espaços nem símbolos. Exemplo: `5511999999999`.
- Instagram: substitua `https://instagram.com/` pela URL do perfil.
- Facebook: substitua `https://facebook.com/` pela URL da página.

Os mesmos três links aparecem também no início da página, abaixo do botão “VER CARDÁPIO”. Ao atualizar um contato, altere os dois lugares para que fiquem iguais.

## Colocar o logo

No começo do `index.html`, procure o comentário `<!-- LOGO -->`. Por enquanto há um círculo escrito `LOGO` apenas para reservar o espaço. Quando tiver a imagem, troque:

```html
<span>LOGO</span>
```

por:

```html
<img src="images/logo.png" alt="Logo Edwiges">
```

Salve a imagem na pasta `images` e troque `logo.png` pelo nome exato do arquivo, se necessário. O tamanho do círculo do logo pode ser ajustado em `.brand-logo` no arquivo `style.css`.

## Colocar música de fundo

1. Crie a pasta `audio` na raiz do projeto.
2. Coloque nela um arquivo MP3 chamado `ambiente.mp3`.
3. Clique no botão “MÚSICA OFF” no canto superior esquerdo da página para começar a ouvir.

O navegador exige esse clique antes de permitir música com som. Para usar outro nome ou outra pasta, altere `src="audio/ambiente.mp3"` no começo do `index.html`.

## Menu suspenso

O menu de navegação fica no comentário `<!-- MENU DESPLEGABLE DE NAVEGAÇÃO -->`.
Cada link possui um destino, como `href="#pizzas"`, que deve ser igual ao `id="pizzas"` da categoria. Ao renomear ou adicionar uma categoria, mantenha esses dois valores iguais.

## Dicas de segurança ao editar

- Altere apenas o texto entre as tags, sem apagar os sinais `<` e `>`.
- Faça uma pequena mudança de cada vez e salve com `Ctrl + S`.
- Atualize o navegador com `F5` para conferir o resultado.
- Se algo ficar estranho, use `Ctrl + Z` para desfazer a última alteração.
