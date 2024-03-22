import { Status } from "@prisma/client";

export function stringToStatus(status: string) {
    switch (status) {
        case 'NOVA_SOLICITACAO': return Status.NOVA_SOLICITACAO;
        case 'EM_ESPERA': return Status.EM_ESPERA;
        case 'EM_ANALISE': return Status.EM_ANALISE;
        case 'CONCLUIDO': return Status.CONCLUIDO;
        case 'CANCELADO': return Status.CANCELADO;
        default: return Status.NOVA_SOLICITACAO;
    }
}

export function statusToString(status: Status) {
    switch (status) {
        case Status.NOVA_SOLICITACAO: return 'Nova Solicitação';
        case Status.EM_ESPERA: return 'Em Espera';
        case Status.EM_ANALISE: return 'Em Análise';
        case Status.CONCLUIDO: return 'Concluído';
        case Status.CANCELADO: return 'Cancelado';
        default: return 'Nova Solicitação';
    }
}
