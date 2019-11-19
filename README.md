# Desafio

#  primeiro passo 
####  faça download do projeto para uma pasta especifica do computador

#  segundo passo
#### baixe o arquivo dockerfile do repositorio e coloque na mesma pasta do projeto

# terceiro passo
####  abra o terminal (caso esteja no ubuntu aperte ctrl + alt + T) ou cmd no Windows.

# quarto passo
#### o dockerfile ja possui alguns parametros de configuração então basta começar os parametros com docker a seguir

# quinto passo 
#### com terminal aberto  navegue até a pagina do projeto utilizando comandos cd .. ou cd<pasta>

# sexto passo 
#### ao chegar na pasta indicada comece os comandos abaixos

#### docker build -t <nomeDaImagem> .

#### um download deve começar em seguida gerar a imagem
#### apos a instalação da imagem a mesma deve ser vista com o comando abaixo
#### docker image list
# setimo passo
#### apos a compilação da imagem no mesmo local digite 
#### docker -run -v "$(pwd):/home/node/app" -p 80:3000 -it <nomeDaImagem> bash

# oitavo passo 

#### agora o software deve esta funcionando
