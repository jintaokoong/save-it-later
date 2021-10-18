import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from 'react';
import Loader from 'react-loader-spinner';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  loading?: boolean | undefined;
}

const PrimaryButton = (props: PropsWithChildren<Props>) => {
  return (
    <button {...props}>
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
