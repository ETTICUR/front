import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../../../app/models/models/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { NonNullAssert } from '@angular/compiler';
import { NonNullableFormBuilder } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: '../../components/experiencia/edicionExperiencia.html',
  styleUrls: ['../../components/experiencia/edicionExperiencia.css']
})
export class EditExperienciaComponent implements OnInit {
   expLab: Experiencia = name!
  constructor(private sExperiencia: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      data =>{
        this.expLab = data;
      }, err =>{
        alert("No ha sido posible modificar la experiencia");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("No ha sido posible modificar la experiencia");
         this.router.navigate(['']);
      }
    )
  }

}
