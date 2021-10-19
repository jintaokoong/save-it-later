import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';
import Loader from 'react-loader-spinner';
import classNames from 'classnames';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  classname?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean | undefined;
  loading?: boolean | undefined;
}

const PrimaryButton = (props: PropsWithChildren<Props>) => {
  return (
    <button
      type={props.type}
      disabled={props.disabled}
      className={classNames(
        props.classname,
        'flex justify-center p-2 transition duration-500 ease-in-out bg-blue-300 disabled:bg-blue-50 disabled:cursor-not-allowed disabled:text-blue-500 text-blue-900 rounded hover:bg-blue-200 active:bg-blue-300'
      )}
    >
      {props.loading ? (
        <span>
          <Loader
            type={'TailSpin'}
            height={24}
            width={30}
            color={'rgb(30, 58, 138)'}
          />
        </span>
      ) : (
        props.children
      )}
    </button>
  );
};

export default PrimaryButton;
