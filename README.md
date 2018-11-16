# user-project #
Projeto simples de acesso a dados de usuários usando Spring


    Versão do Java: 1.8
    Versão do Angular : 6
    
### DEPENDÊNCIAS ###
* Instalar **[JAVA JDK 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)**
  - SDK base para os serviços criados
    
* Instalar **[Node.JS](https://nodejs.org/en/download/current/)** 
  - Para poder baixar os pacotes necessários do ANGULAR para o FRONT a partir do comando npm

_____________________________
# Rodar Projeto
* Após baixar o projeto do GIT, faça os seguintes passos:

### Serviço REST ###
  - Abra o Projeto localizado em .\user-project\web-services\users-service
  - Aqui uso o IntelliJ Comunity, e abro o pom.ml com ele, assim ele se encarrega de baixar todas as dependencias de bibliotecas com o Maven e deixar o projeto pronto para RODAR !
   - Simplesmente Executo o projeto apertando SHIFT+F10 (Run Comum do Projeto)
   - Usando somente Maven, abra o prompt de comandos e vá até a pasta .\user-project\web-services\users-service 
   - Execute os seguintes comandos
```     
     $ mvn clean install spring-boot:repackage
     $ mvn spring-boot:run
```  

   - Ao rodar o serviço, ele deve criar o ponto de acesso em http://localhost:8000/, essa é a porta padrão de acesso a API REST
   - Links interessantes
     * http://localhost:8000/profile/users -> Um resumo das funcões usadas na API
     * http://localhost:8000/users -> Retorna os usuarios 
     * http://localhost:8000/users/search -> Search que filtra os usuarios
   
### Front-END Angular ###
  - Abra o prompt de comando no caminho .\user-project\web-front
  - Comando para instalar todas as dependências:
```  
    $ npm install
```  
  - Terminado isso faça o comando de abrir o servidor local
```  
    $ ng serve -o
```  
  - Após carregar os modulos necessários, ele deve abrir no browser no endereço http://localhost:4200/

__________________________________________________________
### LOGIN ###
  - Coloquei alguns usuarios para demonstrar as funcionalidades
  - Entre com o :
```  
      login -> admin
      senha -> admin
```  
  - E verifique a lista de usuarios na aba USERS que aparecerá na tela de nevegação
