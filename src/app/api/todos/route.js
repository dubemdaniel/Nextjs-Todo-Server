import { NextResponse } from 'next/server';
import { getTodos, addTodo } from '@/lib/store';

export async function GET() {
  return NextResponse.json(getTodos());
}

export async function POST(request) {
  const data = await request.json();
  const newTodo = {
    id: Date.now(),
    text: data.text,
    completed: false,
  };
  addTodo(newTodo);
  return NextResponse.json(newTodo, { status: 201 });
}