# PWA 
As Progressive Web Apps são aplicações web que oferecem uma experiência semelhante a aplicativos nativos em dispositivos móveis e computadores. 
- É basicamente uma página web, ou seja, um site com cara de aplicativo.
- Pode ser desenvolvido para comportar como um app nativo.
- O usuário tem a opção de usar pelo browser ou de instalar o aplicativo.
## Passos para se criar uma aplicação PWA.
- instalar o serviceworker
    - `npm install serviceworker`
- Depois vamos incluir o serviceWorker:
    ```jsx
    <script>
    	if ('serviceWorker' in navigation){
    	navigation.serviceWorker.register('generate-sw.js');
    	}
    </script>
    ```
- Criar arquivo manifest.json
    - Exemplo de gerador de arquivo Manifest:
        - https://www.simicart.com/manifest-generator.html/
  

1. Criar o arquivo manifest → O propósito do arquivo manifest é transformar uma aplicação web em algo instalável em seu smartphone. Ou seja, sua aplicação web agora pode abrir um splash screen exatamente igual aos *apps* nativos com pouquíssimo esforço. Deve ser importado no index.html.
2. ServiceWoker → *Um Service Worker é um script que seu navegador executa em segundo plano, separado da página da Web, possibilitando recursos que não precisam de uma página da Web ou de interação do usuário.*

O service Woker possui então as seguintes etapas:

- Install
- Activate
- Fetch
- message
- sync
- push

Para utilizar no celular:
- Utilizar a mesma rede em que você subiu a aplicação 

- Buscar pela aplicação com ip:número_da_porta

- Após isso vc deve buscar no ceu celular o botão de adicionar a tela inicial. 
