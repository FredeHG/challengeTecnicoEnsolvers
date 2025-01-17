import { compileNgModule } from '@angular/compiler';
import { HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotesService } from './notes.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NoteComponent implements OnInit {
 protected notesArray: any[] = [] //Solo accessible en el mismo package


  //params: HttpParams  = new HttpParams().set('username',environment.databaseUsername).set('password',environment.databasePassword);
  constructor(private noteService: NotesService,
    router: Router) {}
  ngOnInit(): void {
    this.showNotes(); //Le digo que se suscriba al observable al iniciar
  }

  showNotes() {
    this.noteService.observable.subscribe(() =>
    this.notesArray = this.noteService.getNotes(),
    console.log("Me llego la nota" + this.notesArray)
    )

  } //Deberia separarlo bien en distintos componentes

}
