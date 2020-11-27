import { Medico } from '../../../models/medico';
import { MedicoService } from './../../../services/medico.service';
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: "app-list-medico",
  templateUrl: "./list-medico.component.html",
  styleUrls: ["./list-medico.component.css"],
})
export class ListMedicoComponent implements OnInit {
  
  medicosColumns: string[] = ["id", "nome", "crm", "especialidade", "criadoEm"];
  
  medicos: Medico[] = [];
  medicosTable: MatTableDataSource<Medico> = 
    new MatTableDataSource<Medico>(
    this.medicos
  );

  constructor(private router: Router, private medicoService: MedicoService) {}
  
  ngOnInit(): void {
    this.medicoService.list().subscribe((lista) => {
      this.medicos = lista;      
      this.medicosTable = new MatTableDataSource<Medico>(this.medicos);
    });
  }

  navigateToCreateCycle(): void {
    this.router.navigate(['medico/create']);
  }

}
