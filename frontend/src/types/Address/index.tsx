export interface AddressRegionsProps {
  id: number;
  sigla: string;
  nome: string;
};

export interface AddressViaCepApiProps {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export interface AddressStatesProps {
  id: number;
  sigla: string;
  nome: string;
  regiao: AddressRegionsProps
};