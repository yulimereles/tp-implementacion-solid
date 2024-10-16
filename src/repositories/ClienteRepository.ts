import { Cliente } from '../models/Clientes';

export interface ClienteRepository{
    create(client: Cliente): Promise<void>
    findById(id: number): Promise<Cliente | null>
    findAll(): Promise<Cliente>
}