import { NextResponse } from 'next/server';
import { updateTodo, deleteTodo } from '@/lib/store';

export async function PUT(request, { params }) {
  const { id } = params;
  const data = await request.json();
  const updatedTodo = updateTodo(parseInt(id), data);

  if (!updatedTodo) {
    return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
  }

  return NextResponse.json(updatedTodo);
}

export async function DELETE(request, { params }) {
  const { id } = params;
  const deletedTodo = deleteTodo(parseInt(id));

  if (!deletedTodo) {
    return NextResponse.json({ message: 'Todo not found' }, { status: 404 });
  }

  return NextResponse.json(deletedTodo);
}