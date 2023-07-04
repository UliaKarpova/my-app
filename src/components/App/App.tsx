import { useState } from 'react';
import './App.css';
import List from '../List/List';
import { MyItem } from '../../types/types';

// исходные данные
const items = [{ id: 1, name: 'Vasya' },
{ id: 2, name: 'Petya' },
{ id: 3, name: "Nikola" },
{ id: 4, name: "Afanas" },
{ id: 5, name: 'Stepan' },
{ id: 6, name: 'Ivan' }];

function App() {

  // массив выбранных элементов
  const [selectedItems, setSelectedItems] = useState<MyItem[] | []>([]);

  // массив элементов для отрисовки и изменения
  const [data, setData] = useState<MyItem[]>(items)

  // состояние для режима редактирования
  const [isEditing, setIsEditing] = useState<boolean>(false);

  function addSelectedItem(id: number): void {
    const addedItem: MyItem[] = items.filter(item => item.id === id);
    setSelectedItems([...selectedItems, ...addedItem]);
  }

  function removeSelectedItem(id: number): void {
    const newItems: MyItem[] = selectedItems.filter(item => item.id !== id);
    setSelectedItems(newItems);
  }

  // удаление всех выбранных элементов
  function removeAllSelectedItems(): void {
    const selectedIds: number[] = selectedItems.map(item => item.id);
    const newArr: MyItem[] = data.filter(item => !selectedIds.includes(item.id));
    setData(newArr);
    setSelectedItems([]);
    setIsEditing(!isEditing);
  }

  // добавить / убрать элемент из списка выбранных
  function toggleSelectedItem(isChecked: boolean, id: number): void {
    if (isChecked) {
      removeSelectedItem(id);
    } else {
      addSelectedItem(id)
    }
  }

  // сохранить изменения в выбранных элементах
  function saveChangesInSelectedItem(): void {
    const newArr: MyItem[] = data;
    selectedItems.forEach(item => {
      const itemIndex: number = newArr.findIndex(el => el.id === item.id);
      newArr[itemIndex] = item;
    })
    setData(newArr);
    setIsEditing(!isEditing);
  }

  // изменить значения в выбранных элементах
  function handleChangeValue(id: number, newValue: string): void {
    const newSelectedArr: MyItem[] = selectedItems.map(item => {
      if (item.id === id) {
        item.name = newValue;
      }
      return item;
    })
    setSelectedItems(newSelectedArr);
  }

  return (
    <div className="App">
      <List items={data}
        onChangeValue={handleChangeValue}
        isEditing={isEditing}
        selectedItems={selectedItems}
        toggle={toggleSelectedItem}
        removeAll={removeAllSelectedItems}
        saveChanges={saveChangesInSelectedItem}
      />
    </div>
  );
}

export default App;
