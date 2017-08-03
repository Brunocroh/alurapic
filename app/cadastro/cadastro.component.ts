import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{

    foto: FotoComponent = new FotoComponent();
    fotoService: FotoService;
    meuForm: FormGroup;
    route: ActivatedRoute;
    mensagem: string = '';

    constructor(fotoService: FotoService,fb: FormBuilder, route: ActivatedRoute){

        this.route = route;
        this.fotoService = fotoService ;
        this.meuForm = fb.group({
            titulo: ['',Validators.compose(
                [Validators.required,Validators.minLength(4)]
            )],
            url: ['',Validators.required],
            descricao:['']
        })

        this.route.params.subscribe(params => console.log(params['id']));
    }

    cadastrar(event){
        event.preventDefault();

        this.fotoService.cadastra(this.foto)
            .subscribe(() => {
                this.foto = new FotoComponent();
                console.log("Foto salva com sucesso");
            });
    }
}
