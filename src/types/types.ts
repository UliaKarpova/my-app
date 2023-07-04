export interface MyItem { id: number, name: string };

export type ListProps = {
  items: MyItem[],
  selectedItems: MyItem[] | [],
  isEditing: boolean,
  toggle: (isChecked: boolean, id: number) => void,
  removeAll: () => void,
  onChangeValue: (id: number, newValue: string) => void,
  saveChanges: () => void
}

export type ItemProps = {
  item: MyItem,
  isEditing: boolean,
  isChecked: boolean,
  onChangeValue: (id: number, newValue: string) => void,
  toggle: (isChecked: boolean, id: number) => void,
}
