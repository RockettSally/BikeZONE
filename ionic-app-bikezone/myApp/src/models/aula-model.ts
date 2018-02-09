export class Aula{

	curso	: string;
	dataHoraInicio : string;
	dataHoraTermino : string;
	sala	: string;
	statusAula	: string;
	professor : string;
	diarioAula : string;
	statusAluno : string;
	conteudoProximaAula : string;
	turma: string;
	hasReagendamento: boolean;
	
	aulaOriginalId: string;
	dataAulaOriginal: string;
	
	reagendamentoId: string;
	dataReagendamentoInicio: string;
	
	status: string; 
	msg: string;

	constructor(curso: string, dataHoraInicio: string, dataHoraTermino: string, statusAula:string, professor : string, diarioAula: string, conteudoProximaAula: string, statusAluno: string, turma:string, sala:string, hasReagendamento: boolean, dataReagendamentoInicio: string, reagendamentoId: string, aulaOriginalId: string, dataAulaOriginal:string, status: string, msg: string){
		this.curso 	= curso;
		this.dataHoraInicio	= dataHoraInicio;
		this.dataHoraTermino	= dataHoraTermino;
		this.statusAula = statusAula;
		this.professor = professor;
		this.diarioAula = diarioAula;
		this.conteudoProximaAula = conteudoProximaAula;
		this.statusAluno = statusAluno;
		this.turma = turma;
		this.sala = sala;
		this.hasReagendamento = hasReagendamento;
		
		this.reagendamentoId = reagendamentoId;
		this.dataReagendamentoInicio = dataReagendamentoInicio;
		this.aulaOriginalId = aulaOriginalId;
		this.dataAulaOriginal = dataAulaOriginal;
		
		this.status = status;
		this.msg = msg;
	}

	getCurso(): string{
		return this.curso;
	}

	setCurso(curso: string): void{
		this.curso = curso;
	}

	getDataHoraInicio(): string{
		return this.dataHoraInicio;
	}

	setDataHoraInicio(dataHoraInicio: string): void{
		this.dataHoraInicio = dataHoraInicio;
	}

	getDataHoraTermino(): string{
		return this.dataHoraTermino;
	}

	setDataHoraTermino(dataHoraTermino: string): void{
		this.dataHoraTermino = dataHoraTermino;
	}

	getSala(): string{
		return this.sala;
	}

	setSala(sala: string): void{
		this.sala = sala;
	}

	getStatus(): string{
		return this.status;
	}

	setStatus(status: string): void{
		this.status = status;
	}

	getProfessor(): string{
		return this.professor;
	}

	setProfessor(professor: string): void{
		this.professor = professor;
	}

	getDiarioAula(): string{
		return this.diarioAula;
	}

	setDiarioAula(diarioAula: string): string{
		return this.diarioAula = diarioAula;
	}

	getStatusAluno(): string{
		return this.statusAluno;
	}

	setStatusAluno(statusAluno:string): void{
		this.statusAluno = statusAluno;
	}

	getConteudoProximaAula(): string{
		return this.conteudoProximaAula;
	}

	setConteudoProximaAula(conteudoProximaAula: string): void{
		this.conteudoProximaAula = conteudoProximaAula
	}

}
