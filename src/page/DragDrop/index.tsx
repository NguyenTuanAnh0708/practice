import React, {DragEvent} from 'react';

const DragDrop = () => {
  const handleDrag = (event: DragEvent<HTMLImageElement>) => {
    const target = event.target as HTMLImageElement;
    console.log(target.id);
    event.dataTransfer.setData('text', target.id);
  };
  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const drop = (event: DragEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    event.preventDefault();
    var data = event.dataTransfer.getData('text');
    if (data) {
      const node = document.getElementById(data);
      target.appendChild(node as HTMLElement);
    }
    console.log('doped', data);
  };
  return (
    <div className='drag-drop-wrapper'>
      <img
        id='div1'
        width={200}
        height={200}
        src='https://plus.unsplash.com/premium_photo-1669047669932-036ab99e9d46?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt=''
        draggable='true'
        onDragStart={handleDrag}
      />
      <div
        className='drop-space'
        style={{
          margin: '100px auto',
          width: '50vw',
          height: '40vh',
          border: '1px solid #000',
        }}
        onDragOver={allowDrop}
        onDrop={drop}
      ></div>
    </div>
  );
};

export default DragDrop;
