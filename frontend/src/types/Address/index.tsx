export interface AddressCitiesProps {
  id: number;
  nome: string;
  microrregiao: {
      id: number;
      nome: string;
      mesorregiao: {
          id: number;
          nome: string;
          UF: AddressStatesProps;
      };
  };
  "regiao-imediata": {
      id: number;
      nome: string;
      "regiao-intermediaria": {
          id: number;
          nome: string;
          UF: AddressStatesProps;
      };
  };
};

export interface AddressRegionsProps {
  id: number;
  sigla: string;
  nome: string;
};

export interface AddressStatesProps {
  id: number;
  sigla: string;
  nome: string;
  regiao: AddressRegionsProps
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