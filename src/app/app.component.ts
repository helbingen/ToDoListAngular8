import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/bootstrap.min.css']
})
export class AppComponent {
  public tarefa ="";
  public items = [];
  task = {
    name: '',
    id: 0
  };
  tasks =[];
  

  onClick(){
    if(this.task.id == 0) {
      this.tasks.push({id: (new Date()).getTime(), name: this.task.name, strike: false});
      }
      this.task.name = '';
      this.task.id = 0;
  }

  edit(item){
    this.tasks[this.task.id,this.task.name];
  }
  

  onEdit(item){
    this.task = item;
}

onDelete(item){
  this.tasks = this.tasks.filter(i => i.id !== item.id)
}

onStrike(item){
  this.tasks.filter(i => i.id === item.id)[0].strike = !this.tasks.filter(i => i.id === item.id)[0].strike;
}


    addTarefa(){
      this.items.push(this.tarefa);
    }
    removeTarefa(item) {
      this.items.splice( this.items.indexOf(item),0);
    }
}
