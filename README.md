<h1>Angular</h1>

<h2>Estudos em Angular</h2>

Instalando o CLI do angular
: npm install -g @angular/cli
<br>Criando projetos: ng new < name >
<br>Criando componentes: ng generate component <dir/name>

## Dados no template

- < h1 > {{name}} </ h1 >

## CSS no Angular

- Global: styles.css na pasta src
- Scoped: Nível de Componente

## <a href="./src/app/components/parent-data">Compartilhamento de dados</a>

- @Input -> Componente pai, para o componente filho
- @Output -> Componente filho, para o componente pai

## <a href="./src/app/components/directive-components">Diretivas</a>

- Diretivas de estilo: [ngStyle]="{'font-size':'12px'}"
- Diretivas de classes: [ngClasses]="classes" | classes: Array<>
- Diretivas condicionais
  <textarea>
  //Component.ts
  canShow:boolean = true;
  name:string = 'Jonathan'
  //Template.html
  <p *ngIf="canShow">Permito a ser exibido</p>
  <h3 *ngIf="name === 'Guilherme'"></h3>
  </textarea>

## Renderização de listas

  <textarea>
  \*ngFor="let item of items"  
  </textarea>

## <a href="./src/app/components/events-components/">Eventos no Angular</a>

## Evento de click

- <textarea>
  //Component.ts
  show:boolean = true;
  showMessage():void{
  this.show = !(this.show)
  }
  //Template.html
  <button (click)="showMessage()">
  </textarea>

## Property Binding

<textarea>
  //Template.html
  <button class="btn btn-primary" [disabled]="allowButton">Clique Aqui
  </button>

<p [innerText]="allowButton">Text</p>
//Component.ts
allowButton = false;
constructor(){
setTimeout(()=>{
this.allowButton = true;
}, 2000)
}
</textarea>

## Pipe Operators

{{dado|pipeOperator}}
<textarea>

<div>
<h2>{{texto | uppercase}}</h2>
</div>
</textarea>

## Services

- Geralmente ficam as requisições da APIs que utilizamos no projeto
- Criamos com : ng generate service < nome >
- Importar no componente e iniciar no construtor -> Acesso aos métodos

## Router

- Criar um arquivo para declarar nossas rotas
- Importamos os módulos RouterModule e Routes
- Após a definição, as rotas precisam ser importadas em app.module.ts
- No template principal, criamos as rotas e substituímos os componentes por:< router-outlet >
