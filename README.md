# Recuperação de Senha

**RF (Requisitos Funcionais)**

- O usuário deve poder recuperar sua senha informando seu e-mail;
- O usuário deve poder receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar a sua senha;

**RNF (Requisitos Não Funcionais)**

- Utilizar Mailtrap (https://mailtrap.io/) para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em produção;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN (Regras de Negócio)**

- O link enviado por email pararesetar a senha, deve expirar em 2h;
- O usuário precisa confirmar a nova senha ao resetar a sua senha;

# Atualização do Perfil

**RF (Requisitos Funcionais)**

- O usuário deve poder atualizar seu perfil (Nome, Email e Senha)

**RN (Regras de Negócio)**

- O usuário não pode alterar seu email para um outro email já utilizado por outro usuário;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha

# Painel do Prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**

- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**

- A notificação deve ter um status de lida ou não lida para que o prestador possa controlar;

# Agendamento de Serviços

**RF**

- O usuário deve poder listar todos os prestadores de serviço cadastrados;
- o usuário deve poder listar todos os dias de um mês com pelo menos um horário disponível de um prestador;
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;


**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último às 17);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que já passou;
- O usuário não pode agendar serviços com ele mesmo;
