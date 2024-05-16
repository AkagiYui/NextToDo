// atoms.ts
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

// 定义状态原子
export const todoListAtom = atomWithStorage<string[]>('todolist', [])
export const doneListAtom = atomWithStorage<string[]>('donelist', [])