import { Component, OnInit } from "@angular/core";
import { Medico } from "src/app/models/medico";
import { MedicoService } from "src/app/services/medico.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-create-medico",
  templateUrl: "./create-medico.component.html",
  styleUrls: ["./create-medico.component.css"],
})
export class CreateMedicoComponent implements OnInit {

  Medico: Medico = new Medico();;

  nome: String;
  crm: String;
  especialidade: String;

  constructor(
    private service: MedicoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  create(): void {
    this.Medico.nome = this.nome;
    this.Medico.crm = this.crm;
    this.Medico.especialidade = this.especialidade;
    if (this.Medico._id == null) {
      this.service.create(this.Medico).subscribe((Medico) => {
      });
    } else {
        console.log("Registro não inserido");
    }
    this.router.navigate([""]);
  }
}
