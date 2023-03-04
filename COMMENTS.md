## Comentários sobre o funcionamento

 - Inicialmente o usuário não tem permissão para popular os campos `marcas`, `modelo` e `ano`.
 - Inicialmente o usuário tem permissão de de popular os campos `tipo do veiculo` e `Valor da venda`.
 - O campo `marcas` fica disponível assim que o campo `tipo do veiculo` é preenchido.
 - O campo `modelo` fica disponível assim que o campo `marcas` é preenchido.
 - O campo `ano` fica disponível assim que o campo `modelo` é preenchido.
 - A tabela é populada quando o campo `ano` é preenchido.
 - A tabela só é reiniciada quando uma nova consulta é efetuada, isto é, quando o usuário preencher o campo `ano`.
 - O campo `valor da venda` influência resultados relativos a ultima tabela consultada.
 - Não é preciso uma nova consulta para o `valor da venda` mudar o resultado na tela.

 ## Comentários sobre o codigo.

### Classe query

Classe responsável por armazenar as informações passadas pelo usuário e recebidas da API por meio de requisições GET.

Também executa a regra de negócio por meio do método 'currentState' retornando um objeto do tipo result com um estado (state) e o cálculo do percentual de variação do valor (result).

*state* - refere ao estado do percentual resultante
     - 0 - Valor do veículo abaixo da tabela FIPE
     - 1 - Valor do veículo na média da tabela FIPE
     - 2 - Valor do veículo acima da tabela FIPE
*result* - refere ao valor absoluto do percentual

### Classe request

É uma super classe que estende a query responsável por popular a variável fipe da classe query, popular as arrays AllBrands (marcas), AllModels (modelos), AllYears (ano) por meio de requisições GET que são apenas executadas quando permitidas.

As arrays obedecem às interfaces relativas às requisições testadas com antecedencia com o Postman e as informações passadas no scopo do desafio.

### Serviço controller

Serviço responsável com controlar as classes query e request.

## Comentários do projeto

 - Toda a parte relativa às regras de negócio, população das variáveis e processamentos de dados por meio de pipes estão no diretório `controller`.
 - Todos os componentes exceto o `AppComponent` está no diretório `view`.