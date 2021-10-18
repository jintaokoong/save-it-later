import { DetailedHTMLProps, Fragment, InputHTMLAttributes } from 'react';
import { classnames } from 'tailwindcss-classnames';

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  overrides?: 'TAILWIND_STRING';
  error?: string | undefined;
}

const base = classnames(
  'bg-gray-100',
  'focus:outline-none',
  'rounded',
  'py-2.5',
  'px-3'
);

const Input = (props: Props) => {
  const evaluated = classnames(base, {
    'bg-red-50': props.error !== undefined,
  });
  const overridden = props.overrides
    ? classnames(evaluated, props.overrides)
    : evaluated;
  return (
    <Fragment>
      <input className={overridden} {...props} />
      {props.error && (
        <span className={'mt-1 text-xs text-red-700'}>{props.error}</span>
      )}
    </Fragment>
  );
};

export default Input;
