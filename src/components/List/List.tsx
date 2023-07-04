import React from 'react';
import Item from '../Item/Item'
import './List.css';
// импортируем типы
import { MyItem, ListProps } from '../../types/types';

function List(props: React.PropsWithChildren<ListProps>) {

  // проверяем для каждого элемента, есть ли он в selectedItems, чтобы задать checked для checkbox
  function isChecked(id: number): boolean {
    if (props.selectedItems && props.selectedItems.some(item => item.id === id)) {
      return true;
    }
    return false;
  }

  // для каждого элемента создаём разметку
  const myList: React.ReactNode = props.items.map((item: MyItem) => {
    return (
      <Item key={item.id}
        onChangeValue={props.onChangeValue}
        isEditing={props.isEditing}
        isChecked={isChecked(item.id)}
        item={item}
        toggle={props.toggle}
      />
    )
  })

  return (
    <>
      <h2 className='list__title'>List of users</h2>

      <ul className="list__ul">
        {myList}
      </ul>

      <button
        className='list__button'
        onClick={props.removeAll}
        disabled={props.selectedItems.length === 0}>
        Delete selected</button>

      <button
        className='list__button'
        onClick={props.saveChanges}
        disabled={props.selectedItems.length === 0}>
        {props.isEditing ? "Save changes" : "Edit selected"}</button>
    </>
  )
}

export default List;