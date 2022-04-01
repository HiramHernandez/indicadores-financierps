export interface Prospect {
	//id_prospecto: number;
	nombre: string;
	primer_apellido: string;
	segundo_apellido: string;
	calle: string;
	numero_casa: string;
	colonia: string;
	codigo_postal: string;
	telefono: string;
	rfc: string;
	id_estado: number;
	tipo_documento: string;
	numero_documento: string;
}

export class ProspectModel implements Prospect {
	//id_prospecto: number;
	nombre: string;
	primer_apellido: string;
	segundo_apellido: string;
	calle: string;
	numero_casa: string;
	colonia: string;
	codigo_postal: string;
	telefono: string;
	rfc: string;
	id_estado: number;
	tipo_documento: string;
	numero_documento: string;


	constructor(ProspectModel?: Prospect) {
		//this.id_prospecto = 0;
		this.nombre = '';
		this.primer_apellido = '';
		this.segundo_apellido = '';
		this.calle = '';
		this.numero_casa = '0';
		this.colonia = '';
		this.codigo_postal = '';
		this.telefono = '0';
		this.rfc = '';
		this.id_estado = 1;
		this.tipo_documento = '';
		this.numero_documento = '';
	}
}

export class ProspectModelBuilder implements Prospect {
	//id_prospecto: number;
	nombre: string;
	primer_apellido: string;
	segundo_apellido: string;
	calle: string;
	numero_casa: string;
	colonia: string;
	codigo_postal: string;
	telefono: string;
	rfc: string;
	id_estado: number;
	tipo_documento: string;
	numero_documento: string;

	constructor() {
		//this.id_prospecto = 0;
		this.nombre = '';
		this.primer_apellido = '';
		this.segundo_apellido = '';
		this.calle = '';
		this.numero_casa = '0';
		this.colonia = '';
		this.codigo_postal = '';
		this.telefono = '0';
		this.rfc = '';
		this.id_estado = 1;
		this.tipo_documento = '';
		this.numero_documento = '';
	}

    build(): ProspectModel {
		return new ProspectModel({
			//id_prospecto: this.id_prospecto,
			nombre: this.nombre,
			primer_apellido: this.primer_apellido,
			segundo_apellido: this.segundo_apellido,
			calle: this.calle,
			numero_casa: this.numero_casa,
			colonia: this.colonia,
			codigo_postal: this.codigo_postal,
			telefono: this.telefono,
			rfc: this.rfc,
			id_estado: this.id_estado,
			tipo_documento: this.tipo_documento,
			numero_documento: this.numero_documento
		});
	}
}

export interface Status{
	autorizar: number;
	observaciones: string;
}

export class StatusModel implements Status{
	autorizar: number;
	observaciones: string;

	constructor(StatusModel?: Status) {
		//this.id_prospecto = 0;
		this.autorizar = 0;
		this.observaciones = '';
	}

}


export class StatusModelBuilder implements Status {
	//id_prospecto: number;
	autorizar: number;
	observaciones: string;

	constructor() {
		//this.id_prospecto = 0;
		this.autorizar = 0;
		this.observaciones = '';
	}

    build(): StatusModel {
		return new StatusModel({
			//id_prospecto: this.id_prospecto,
			autorizar: this.autorizar,
			observaciones: this.observaciones
			
		});
	}
}

export class Grafica {
	fecha!:string;
	dato!:number;
}