import './Item.css';

import { ItemProps } from '../../types/types';

function Item(props: ItemProps) {

  // добавляем / удаляем элемент из selectedItems
  function onChange(): void {
    props.toggle(props.isChecked, props.item.id)
  }

  // передаём изменения свойства элемента
  function handleChangeValue(e: any): void {
    props.onChangeValue(props.item.id, e.target.value);
  }

  return (
    <>
      {props.isEditing && props.isChecked ? (
        <div className="item">
          <input
            className='item__checkbox'
            type='checkbox'
            onChange={onChange}
            checked={props.isChecked} />

          <input className='item__line input'
            onChange={handleChangeValue}
            defaultValue={props.item.name} type='text' />
        </div>
      ) : (
        <div
          className="item"
          onClick={onChange}>

          <input
            className='item__checkbox'
            type='checkbox'
            onChange={onChange}
            checked={props.isChecked} />

          <p className='item__line text'>{props.item.name}</p>
        </div>
      )}
    </>
  );
}

export default Item;