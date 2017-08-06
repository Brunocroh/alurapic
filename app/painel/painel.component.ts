import { Component, Input, OnInit, ViewEncapsulation, ElementRef} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class PainelComponent implements OnInit{

    @Input() titulo: String;
    elemento: ElementRef;

    constructora(elemento: ElementRef){

        this.elemento = elemento;
    }

    ngOnInit(){
        this.titulo = this.titulo.length > 7 ?
            `${this.titulo.substr(0,7)}...`:
            this.titulo;
    }

}
