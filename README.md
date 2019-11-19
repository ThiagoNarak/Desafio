# Desafio

# h1 primeiro passo 
#### h4 faça download do projeto para uma pasta especifica do computador

# h1 segundo passo
#### h4 baixe o arquivo dockerfile do repositorio e coloque na mesma pasta do projeto

# h1 terceiro passo
#### h4 abra o terminal (caso esteja no ubuntu aperte ctrl + alt + T) ou cmd no Windows.

# h1 quarto passo
#### h4 o dockerfile ja possui alguns parametros de configuração então basta começar os parametros com docker a seguir

# h1 quinto passo 
#### h4 com terminal aberto  navegue até a pagina do projeto utilizando comandos cd .. ou cd<pasta>

# h1 sexto passo 
#### h4 ao chegar na pasta indicada comece os comandos abaixos

#### h4 docker build -t <nomeDaImagem> .

#### h4 um download deve começar em seguida gerar a imagem

# h1 setimo passo
#### h4 apos a compilação da imagem no mesmo local digite 
#### h4 docker -run -v "$(pwd):/home/node/app" -p 80:3000 -it <nomeDaImagem> bash

# h1 oitavo passo 

#### h4 agora o software deve esta funcionando
