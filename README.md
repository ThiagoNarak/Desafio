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
#### de o comando abaixo para instalar as dependencias que serão espelhadas futuramente na pasta do container

```
 $ npm install
```
#### em seguida monte a imagem com o comando abaixo
```
 $ docker build -t nomeDaImage .
```
##### no caso substitua o nomeDaImage por um nome de sua preferencia como mostra imagem abaixo
![Captura de tela de 2019-11-19 09-29-40](https://user-images.githubusercontent.com/26203688/69146690-22587b00-0aaf-11ea-928a-d528d695c1d8.png)
#### um download deve começar em seguida gerar a imagem

![Captura de tela de 2019-11-19 09-23-12](https://user-images.githubusercontent.com/26203688/69146294-436c9c00-0aae-11ea-8970-117c0a289e3d.png)


#### apos a instalação da imagem a mesma deve ser vista com o comando abaixo
 ```
 $ docker image list
```
![Captura de tela de 2019-11-19 09-32-04](https://user-images.githubusercontent.com/26203688/69146980-bd515500-0aaf-11ea-98fd-c0975b8bea1c.png)

#### no meu caso ela foi criada como desafio

# setimo passo
#### apos a compilação da imagem no mesmo local digite 
```
$ docker run -v "$(pwd):/home/node/app" -p 80:3000 -it <nomeDaImagem> 
```
![Captura de tela de 2019-11-19 09-38-42](https://user-images.githubusercontent.com/26203688/69147295-65671e00-0ab0-11ea-9583-d0f0ddfdfc52.png)

# oitavo passo 

#### agora o software deve esta funcionando


# passo opcional referente ao setimo passo
#### caso queira fazer uma inicialização manual utilize este comando
```
$ docker run -v "$(pwd):/home/node/app" -p 80:3000 -it <nomeDaImagem> bash
```
![Captura de tela de 2019-11-19 09-51-14](https://user-images.githubusercontent.com/26203688/69148047-2a65ea00-0ab2-11ea-8018-602c9671cf6d.png)

#### apos o passo acima o docker deve entrar no terminal do container

#### em seguida verifique se esta na pasta do projeto
#### caso não esteja digite

```
$ cd /home/node/app
```
#### agora digite comando abaixo para inicializar o serviço

```
$ node index.js
```
![Captura de tela de 2019-11-19 09-55-34](https://user-images.githubusercontent.com/26203688/69148458-225a7a00-0ab3-11ea-95fc-06358b30d845.png)



