import { Component } from '@angular/core';
import { Http } from "@angular/http";
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from '../foto/foto.service';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{

    fotos: FotoComponent[] = [];
    service: FotoService;
    mensagem: string = "";
    constructor(service: FotoService){

        this.service = service;
        this.service.lista()
            .subscribe(
                fotos => this.fotos = fotos,
                erro => console.log(erro)
            );
    }

    remove(foto : FotoComponent): void {

        this.service
           .remove(foto)
           .subscribe(
               () => {

                   let fotos = this.fotos.slice(0);
                   let indice = fotos.indexOf(foto);
                   fotos.splice(indice,1);
                   this.fotos = fotos;
                   this.mensagem = "Foto Removida com sucesso";
               },
               (erro) => {

                   console.log(erro);
                   this.mensagem = "Falha ao remover a foto";
               }
           );

    }

}
