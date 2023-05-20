<p align="center"><a href="https://getteli.github.io/formtosheet/" target="_blank"><img src="https://getteli.github.io/apipagseguro/resource/images/sheet.png" width="100"></a></p>

<h2 align="center">
	Script <b>JS</b> and <b>Google Apps</b>.
</h2>
<p align="center">
	Script que envia um <b>formulário html</b> para uma <b>planilha no drive (Google Sheet)</b>
</p>
<p align="center">
	<a href="#"><img src="https://img.shields.io/badge/language-JS-%23f7df1e" alt="Language"></a>
	<a href="#"><img src="https://img.shields.io/badge/license-MIT-green" alt="License"></a>
</p>

# Passo a passo
1. Abre o Google Drive (na conta que ficará a planilha);
2. Crie a nova **planilha**;
3. Na primeira coluna será o timestamp (que guardará a data que o item foi adicionado), e se chamara assim mesmo **timestamp**;
4. Adicione as demais colunas que deseja e renomeie a planilha. **obs:** Campos e nomes de preferência com letras minisculas e sem espaço (adicione _ no lugar do espaço);
5. Agora novamente na página inícial do drive. Clique em Novo (do lado esquerdo superior), vai na opção **Mais** > **Script do google Apps**;
6. No script, adicione o conteudo do **JS** aqui do git;
7. Renomeie o que for necessário e no lugar do **ID** você colocará o id (hash) da planilha criada<br>
7.1. Para pegar esse **ID**, abra a planilha criada;<br>
7.2. Na **URL** pegue o hash, apenas o hash, esse é o id da planilha e adicione no script;<br>
8. Com o script criado, clique no botão azul (superior direito) **Implantar**;<br>
8.1. Tipo: App da web;<br>
8.2. Adicione uma breve descrição;<br>
8.3. Executar como: **EU**;<br>
8.4. Quem pode acessar: **qualquer pessoa**;<br>
8.5. Clique em implantar;<br>
8.6 Agora copie a URL gerada **App da Web** > **URL**;<br>
9. No HTML, crie o formulário e adicione o nome do formulário como no **HTML** aqui do git;
10. Os campos devem ter o mesmo nome que os campos na planilha no passo **3** (não é necessário o campo timestamp)
111. Adicione o script javascript (dentro do html);
12. Adicione a **url** que pegamos no passo **8.6** dentro do script que está no **HTML**;
13. Teste 🤓;

[Página de exemplo em HTML (baixe e adicione a URL de sua planilha para testar)](https://getteli.github.io/formtosheet/)

## Tecnologias usadas:
- **[Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)**;
- **[Google Apps](https://www.google.com/script/start/)**;