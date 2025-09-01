
interface IFinanceCreate {
  user_id: number;
  valor: number;
  descricao: string;
  is_deleted: boolean;
  created: Date;
  updated: Date;
  deleted: Date;
}

interface IFinanceUpdate {
  id: number;
  user_id: number;
  valor: number;
  descricao: string;
  is_deleted: boolean;
  created: Date;
  updated: Date;
  deleted: Date;
}

export {
  IFinanceCreate,
  IFinanceUpdate
}