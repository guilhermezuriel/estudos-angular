<h1>Angular</h1>

<h2>Estudos em Angular</h2>

Instalando o CLI do angular
: npm install -g @angular/cli
<br>Criando projetos: ng new < name >
<br>Criando componentes: ng generate component <dir/name>

<br>Dados no template<br>
< h1 > {{name}} </ h1 >

CSS no Angular

- Global: styles.css na pasta src
- Scoped: Nível de Componente

<a href="./src/app/components/parent-data">Compartilhamento de dados</a>

- @Input -> Componente pai, para o componente filho
- @Output -> Componente filho, para o componente pai

<a href="./src/app/components/directive-components">Diretivas</a>

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

<a href="./src/app/components/events-components/">Eventos no Angular</a>

- Evento de click
  <textarea>
  //Component.ts
  show:boolean = true;
  showMessage():void{
  this.show = !(this.show)
  }
  //Template.html
  <button (click)="showMessage()">
  </textarea>
