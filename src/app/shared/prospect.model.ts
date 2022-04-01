
type TareaEstados = "Por hacer" | "En progreso" | "Hecha";
export var TareaEstadosSelect = [{value: "Por hacer"}, {value: "En progreso"}, {value: "Hecha"}];

type ProspectosEstados = "Por hacer" | "En progreso" | "Hecha";
export var ProspectosEstadosSelect  = [{value: "Por hacer"}, {value: "En progreso"}, {value: "Hecha"}];


export class TareaModel {
    constructor(
    	public _id: string,
      public titulo: string,
      public fecha: Date,
      public estado: TareaEstados
	) {}
}


export interface IProspect {
    id_prospecto: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    calle: string;
    numero_casa: string;
    colonia: string;
    codigo_postal: string;
    telefono: string;
    rfc: string;
    id_estado: string;
}

export class ProspectModel implements IProspect{
    id_prospecto: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    calle: string;
    numero_casa: string;
    colonia: string;
    codigo_postal: string;
    telefono: string;
    rfc: string;
    id_estado: string;
    constructor(prospectModel?: IProspect){
        this.id_prospecto = prospectModel?.id_prospecto || 0;
        this.nombre = prospectModel?.nombre || '';
        this.primer_apellido = prospectModel?.primer_apellido || '';
        this.segundo_apellido = prospectModel?.segundo_apellido || '';
        this.calle = prospectModel?.calle || '';
        this.numero_casa = prospectModel?.numero_casa || '';
        this.colonia = prospectModel?.colonia || '';
        this.codigo_postal = prospectModel?.codigo_postal || '';
        this.telefono = prospectModel?.telefono || '';
        this.rfc = prospectModel?.rfc || '';
        this.id_estado = prospectModel?.id_estado || '0'
    }
    /*
    constructor(
        public id_prospecto: number,
        public nombre: string,
        public primer_apellido: string,
        public segundo_apellido: string,
        public calle: string,
        public numero_casa: string,
        public colonia: string,
        public codigo_postal: string,
        public telefono: string,
        public rfc: string,
        public id_estado: string,
        public estado: ProspectosEstados

    ){}
    */
}


export class ProspectBuilder implements IProspect {
    id_prospecto: number;
    nombre: string;
    primer_apellido: string;
    segundo_apellido: string;
    calle: string;
    numero_casa: string;
    colonia: string;
    codigo_postal: string;
    telefono: string;
    rfc: string;
    id_estado: string;

    constructor(){
        this.id_prospecto = 0;
        this.nombre = '';
        this.primer_apellido = '';
        this.segundo_apellido = '';
        this.calle = '';
        this.numero_casa = '';
        this.colonia = '';
        this.codigo_postal = '';
        this.telefono = '';
        this.rfc = '';
        this.id_estado = '0';
    }

    setIdProspect(_prospectId: number): ProspectBuilder {
        this.id_prospecto = _prospectId;
        return this;
    }
    setNombre(_nombre: string): ProspectBuilder{
        this.nombre = _nombre
        return this;
    }

    setPrimerApellido(_primerApellido: string): ProspectBuilder {
        this.primer_apellido = _primerApellido;
        return this;
    }

    setSegundoApellido(_segundoApellido: string): ProspectBuilder {
        this.segundo_apellido = _segundoApellido;
        return this;
    }
    setCalle(_calle: string): ProspectBuilder {
        this.calle = _calle;
        return this;
    }
    setNumeroCasa(_numeroCasa: string): ProspectBuilder {
        this.numero_casa = _numeroCasa;
        return this;
    }
    setColonia(_colonia: string): ProspectBuilder {
        this.colonia = _colonia;
        return this;
    }
    setCodigoPostal(_codigoPostal: string): ProspectBuilder {
        this.codigo_postal = _codigoPostal;
        return this;
    }
    setTelefono(_telefono: string): ProspectBuilder {
        this.telefono = _telefono;
        return this;
    }
    setRfc(_rfc: string): ProspectBuilder {
        this.rfc = _rfc;
        return this;
    }
    setIdEstado(_idEstado: string): ProspectBuilder {
        this.id_estado = _idEstado;
        return this;
    }

    
    build(): ProspectModel {
        return new ProspectModel({
            id_prospecto: this.id_prospecto,
            nombre: this.nombre,
            primer_apellido: this.primer_apellido,
            segundo_apellido: this.segundo_apellido,
            calle: this.calle,
            numero_casa: this.numero_casa,
            colonia: this.colonia,
            codigo_postal: this.codigo_postal,
            telefono: this.telefono,
            rfc: this.rfc,
            id_estado: this.id_estado
        });
    }

}



export class DocumentModel {
    constructor(
        public id_documento: number,
        public id_prospecto: number,
        public tipo_documento: string,
        public numero_documento: string
    ){}
}

export class StateProspecto {
    constructor(
        public id_estado: number,
        public nombre: string
    ){}
}

export class CommentRefused{
    constructor(
        public id_observacion: number,
        public id_prospecto:number,
        public observaciones: string
    ){}
}

export class Usuario {
  
    constructor(
      public id_prospecto: number,
      public nombre: string,
      public pimer_apellido: string,
      public segundo_apellido: string,
      public telefono: string,
      public rfc: string,
      public status: string,
      public observaciones: string
  ) {}
  }
  




export interface IUdis {
    fecha: string;
    dato: number;
}


export class UdisModel implements IUdis{
    fecha: string;
    dato: number;
    constructor(UdisModel?: IUdis){
        this.fecha = UdisModel?.fecha || "";
        this.dato = UdisModel?.dato || 0;
    }
}

export class UdisBuilder implements IUdis {
    fecha: string;
    dato: number;


    constructor(){
        this.fecha = '';
        this.dato = 0;
    }

    setFecha(_fecha: string): UdisBuilder {
        this.fecha = _fecha
        return this;
    }
    setDato(_dato: number): UdisBuilder{
        this.dato = _dato
        return this;
    }

    build(): UdisModel {
        return new UdisModel({
            fecha: this.fecha,
            dato: this.dato
        });
    }

}
