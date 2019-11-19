# Desafio

# h1 primeiro passo
faça download do projeto para uma pasta especifica do computador

#h1 segundo passo
baixe o arquivo dockerfile do repositorio e coloque na mesma pasta do projeto

#h1 terceiro passo
abra o terminal (caso esteja no ubuntu aperte ctrl + alt + T) ou cmd no Windows.

#h1 quarto passo
o dockerfile ja possui alguns parametros de configuração então basta começar os parametros com docker a seguir

#h1 quinto passo 
com terminal aberto  navegue até a pagina do projeto utilizando comandos cd .. ou cd<pasta>

#h1 sexto passo 
ao chegar na pasta indicada comece os comandos abaixos

docker build -t <nomeDaImagem> .

um download deve começar em seguida gerar a imagem

#h1 setimo passo
apos a compilação da imagem no mesmo local digite 
docker -run -v "$(pwd):/home/node/app" -p 80:3000 -it <nomeDaImagem> bash

#h1 oitavo passo 

agora o software deve esta funcionando
