import { Component, Input, ViewEncapsulation} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FotoComponent{

    @Input() url: string = '';
    @Input() titulo: string= '';
    descricao: string = '';
    _id: string = '';

}
