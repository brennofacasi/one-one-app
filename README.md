# One:One App 💬

A produtividade diária de trabalhadores no mundo corporativo depende muito de fatores como saúde física, mental e bem-estar.

Pensando nisso, o aplicativo **One:One** nasceu como uma plataforma de agendamentos de mentorias entre colaboradores e psicólogos, para que pudessem encaminhar metas em reuniões one-on-one.


Para esse projeto de MVP, foi desenvolvido a área do(a) gestor(a) do contrato de mentorias, possibilidando que ele(a) possa cadastrar mentores e suas disponibilidades, designar mentorandos e decidir o formato das reuniões.

## Primeiros passos 🚀

Primeiro certifique-se de que a [One:One API](https://github.com/brennofacasi/one-one-api) está rodando na sua máquina.

Renomeie o arquivo ```env.example``` para ```.env```. Edite (se necessário) as variáveis de desenvolvimento de acordo com a tabela, caso a API esteja rodando em uma porta diferente da ```3050```.

| Variável              | Tipo     | Descrição                                                                  |
| :-------------------- | :------- | :------------------------------------------------------------------------- |
| `API_PORT`            | `number` | Porta local da API. Necessária para permitir servidores remotos no Next.js |
| `NEXT_PUBLIC_API_URL` | `string` | Endereço da API.                                                           |
| `NEXTAUTH_URL`        | `string` | Endereço da aplicação. Necessária para o Next Auth.                        |
| `NEXTAUTH_SECRET`     | `string` | Token para o Next Auth.                                                    |

Instale as dependências e rode o servidor de desenvolvimento:

```bash
$ npm install
$ npm run dev
# ou
$ yarn install
$ yarn dev
```

## Com Docker 🐳

Certifique-se de ter o [Docker](https://docs.docker.com/engine/install/) instalado e em execução em sua máquina.

Navegue até o diretório que contém o Dockerfile e o requirements.txt no terminal.
Execute **como administrador** o seguinte comando para construir a imagem Docker:

```
$ docker build -t one-one-app .
```

Uma vez criada a imagem, para executar o container basta executar, **como administrador**, seguinte o comando:

```
$ docker run -p 3000:3000 one-one-app
```

Abra o endereço [http://localhost:3000](http://localhost:3000) e acesse a aplicação.

### Login

Apesar da aplicação ter suas páginas protegidas por autenticação, as credenciais de login são em memória. Para acessar, use:

**Usuário:** ```brenno```  
**Senha:** ```senhadificil```

