# Form To Sheet
Script JS and Google Apps.
To create a tool for send **Data Form** to **Google Sheet**

# Passo a passo
 1. Abre o Google Drive (na conta que ficará a planilha);
 2. Crie a nova **planilha**;
 3. Adicione os campos e renomeie a planilha. **obs:** Campos e nomes de preferência com letras minisculas e sem espaço (adicione _ no lugar do espaço);
 4. No primeiro campo será o timestamp (que guardará a data que o item foi adicionado), e se chamara assim mesmo **timestamp**;
 5. Agora novamente na página inícial do drive. Clique em Novo (do lado esquerdo superior), vai na opção **Mais** > **Script do google Apps**;
 6. No script, adicione o conteudo do **JS** aqui do git;
 7. Renomeie o que for necessário e no lugar do **ID** você colocará o id (hash) da planilha criada
 	 7.1. Para pegar esse **ID**, abra a planilha criada;
   7.2. Na **URL** pegue o hash, apenas o hash, esse é o id da planilha e adicione no script;
 8. Com o script criado, clique no botão azul (superior direito) **Implantar**;
  8.1. Tipo: App da web;
  8.2. Adicione uma breve descrição;
  8.3. Executar como: EU;
  8.4. Quem pode acessar: qualquer pessoa;
  8.5. Clique em implantar;
  8.6 Agora copie a URL gerada **App da Web** > **URL**;
 9. No HTML, crie o formulário e adicione o nome do formulário como no **HTML** aqui do git;
 10. Os campos devem ter o mesmo nome que os campos na planilha no passo **3** (não é necessário o campo timestamp)
 111. Adicione o script javascript (dentro do html);
 12. Adicione a **url** que pegamos no passo **8.6** dentro do script que está no **HTML**;
 13. Teste;
