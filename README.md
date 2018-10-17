# SIGEO
Este é um sistema de informação georreferenciado, produzido inicialmente por [Diego](https://github.com/dieg0D/Si-Geo), [Lucas](https://github.com/ribas858), [Gabriel](https://github.com/gsmartins96) e [Douglas](https://github.com/Douglasbraga94), no primeiro semestre de 2018, para aprovação na matéria de Sistemas de Informação da Universidade de Brasília, e para uso do laborátorio [Centeias](https://fs.unb.br/centeias). Este projeto será aprimorado no semestre 2018/2, na matéria de Sistemas de Informação, por [Gabriel](https://github.com/gabrielevi10), [Léo](https://github.com/leooleo) e [Luan](https://github.com/LPignata).

## Instalação
Para uso do sistema, é necessário instalar o curl:
```
sudo apt-get update
sudo apt-get install curl
sudo apt-get install build-essential
```
Use os comandos do site [https://rvm.io/](https://rvm.io/) para iniciar a instação da RVM, e então, use os seguintes comandos (a versão do ruby deve ser a mesma encontrada na Gemfile):
```
source ~/.rvm/scripts/rvm
rvm install ruby-2.4.1
rvm --defaul use 2.4.1
```
Instale o NodeJS
```
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install nodejs
```
e o bundle
```
gem install bundler
```
e, finalmente, o rails:
```
gem install rails
```
Para finalizar, é necessário instalar o PostgreeSQL
```
sudo apt-get install postgresql postgresql-contrib
sudo apt-get install libpq-dev
```
setar um superusuario
```
sudo -i -u postgres
psql
CREATE USER ​ seu_nick​ WITH PASSWORD ‘​ sua senha​ ‘;
ALTER USER ​ seu_nick WITH SUPERUSER;
```
verifique se o nome de usuário que escolheu está na lista utilizando "\d".

## Execução
Com a versão do Ruby compatível com a versão da Gemfile, utilize
```
bundle install
```
Para criar o banco de dados, utilize
```
rails db:setup
```
Se um erro ocorrer, crie, no PSQL, um usuário com o nome que aparece no erro, geralmente é o nome do usuário do sistema.
Então, utilize
```
bin/rails db:migrate RAILS_ENV=development
rails db:seed
```
e por fim,
```
rails s
```
para execução em localhost:3000.