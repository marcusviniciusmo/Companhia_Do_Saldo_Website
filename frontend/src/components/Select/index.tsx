import { SelectProps } from "../../types/Select";

export function Select(props: SelectProps) {
  return (
    <>
      <h1>SELECT Component</h1>

      <select>
        {
          props.secondaryList &&
          props.secondaryList.map((r) => {
            return (
              <optgroup key={r.id} label={r.nome}>
                {
                  props.primaryList &&
                  props.primaryList.filter(s => s.regiao.id === r.id)
                    .map((state) => {
                      return (
                        <option key={state.id}>{state.nome}</option>
                      )
                    })
                }
              </optgroup>
            )
          })
        }
      </select>
    </>
  );
};