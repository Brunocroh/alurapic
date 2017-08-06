import { Component, Input } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FotoService } from '../foto/foto.service';
import { ActivatedRoute, Router} from '@angular/router';

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
    router: Router;
    mensagem: string = '';

    constructor(fotoService: FotoService,fb: FormBuilder, route: ActivatedRoute, router: Router){

        this.route = route;
        this.router = router;
        this.fotoService = fotoService ;

        this.meuForm = fb.group({
            titulo: ['',Validators.compose(
                [Validators.required,Validators.minLength(4)]
            )],
            url: ['',Validators.required],
            descricao:['']
        })

        this.route.params.subscribe(params => {
            let id = params['id'];

            if(id){
                this.fotoService
                    .busca(id)
                    .subscribe(foto => this.foto = foto);
            }
        });
    }

    cadastrar(event){
        event.preventDefault();

        this.fotoService.cadastra(this.foto)
            .subscribe(res  => {
                this.foto = new FotoComponent();
                if(!res.inclusao) this.router.navigate(['']);
                this.mensagem = res.mensagem;
            }, erro => console.log(erro));
    }
}
