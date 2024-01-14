import { BaseComponent } from '@/types/BaseComponent';
import { createElement } from 'react';

export type WrapperProps = BaseComponent & {};

export default function Wrapper({ as = 'div', children }: WrapperProps) {
  return createElement(as, { className: 'min-h-screen flex p-6 pt-12 xl:px-16' }, children);
}
