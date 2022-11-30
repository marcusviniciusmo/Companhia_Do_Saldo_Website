import { SelectProps } from "../../types/Select";

export function Select(props: SelectProps) {
  const { primaryList, secondaryList, ...rest } = props;

  return (
    <>
      <h1>SELECT Component</h1>

      <select {...rest} >
        {
          props.secondaryList
            ? <>
              {
                props.secondaryList.map((r) => {
                  return (
                    <optgroup key={r.id} label={r.nome}>
                      {
                        props.primaryList &&
                        props.primaryList.filter(s => s.regiao.id === r.id)
                          .map((state) => {
                            return (
                              <option key={state.id} value={state.sigla}>
                                {state.nome}
                              </option>
                            )
                          })
                      }
                    </optgroup>
                  )
                })
              }
            </>
            : <>
              {
                props.primaryList.map((c) => {
                  return (
                    <option key={c.id} value={c.nome}>{c.nome}</option>
                  )
                })
              }
            </>
        }
      </select>
    </>
  );
};