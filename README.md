<p align="center">
 <img src="https://lh3.googleusercontent.com/drive-viewer/AITFw-wODOo4FL_047PVLNWhz4d8vQPhXv0jF1hpypPB11vCn3nsDbyzy7UhE9ySodY1tU37C35Qeme6VzNzpknPG5OJD-T5cQ=s2560" width="235" alt="Playbook Nouhau" />
</p>

# Playbook Nouhau

A [Nouhau](https://nouhau.pro/) é uma startup de transformação de culturas organizacionais por meio de metodologias inovadoras. Através de jogos empresariais, a empresa estimula o desenvolvimento de competências socioemocionais (soft skills) com estratégia.

Para esse projeto de MVP, foi desenvolvido o **Playbook Nouhau**, uma plataforma de consulta e categorização de jogos estratégicos. Na aplicação, facilitadoras e facilitadores poderão ler mais sobre os jogos, ver quais soft skills cada um potencializa, e também favoritar seus preferidos. 😎

## Figma 🖥️

Para acessar o protótipo digital no Figma, [clique aqui.](https://www.figma.com/file/xRPywDbWmicz81KJCqVSCN/Brenno-Cavalcante-%2F-MVP?type=design&node-id=0%3A1&mode=design&t=K4S8u09ZcgpURJaB-1)

## Primeiros passos 🚀

Primeiro certifique-se de que a [API Playbook Nouhau](https://github.com/brennofacasi/playbook-nouhau-api) está rodando na sua máquina.

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

Abra o endereço [http://localhost:3000](http://localhost:3000) e acesse a aplicação.

### Login

Apesar da aplicação ter suas páginas protegidas por autenticação, as credenciais de login são em memória. Para acessar, use:

**Usuário:** ```brenno```  
**Senha:** ```senhadificil```

